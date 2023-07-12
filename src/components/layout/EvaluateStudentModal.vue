<template>
  <!-- auth modal -->
  <BaseModal
    :is-show="modalsStore.evaluateStudentModal"
    @close="modalsStore.closeEvaluateStudentModal()"
  >
    <!-- MAIN CONTENT -->
    <div class="success-modal">
      <h1>Оценить студента</h1>
      <h3>
        {{ modalsStore.evaluateStudentModalName }}
      </h3>
      <div class="wrapper">
        <StarRating v-model:rating="modalsStore.rating"></StarRating>
      </div>
      <BaseTextarea
        v-model="modalsStore.review"
        placeholder="Опишите работу, проделанную студентом..."
        :max-length="300"
      />
      <div>
        <BaseButton :full-width="true" case="uppercase" @click="evaluate()">
          Оценить
        </BaseButton>
      </div>
    </div>
    <!-- MAIN CONTENT -->
  </BaseModal>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  //import StarRating from 'vue-star-rating';
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
  import BaseButton from '../ui/BaseButton.vue';
  import BaseModal from '../ui/BaseModal.vue';
  import BaseTextarea from '../ui/BaseTextarea.vue';

  const modalsStore = useEvaluationModal();
  const projectData = useGetSingleProjectQuery(modalsStore.projectID ?? 0);

  const evaluate = () => {
    if (!projectData.data.value?.project?.participations)
      throw new Error('participations в проекте отсутсвуют');
    for (const participation of projectData.data.value?.project
      ?.participations) {
      if (participation.id == modalsStore.evaluateStudentModalId) {
        participation.rating = modalsStore.rating ?? participation.rating;
        participation.review = modalsStore.review ?? participation.review;
      }
    }
    modalsStore.closeEvaluateStudentModal();
  };
</script>

<style scoped>
  .success-modal {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    color: #fff;
    user-select: none;
  }
</style>
