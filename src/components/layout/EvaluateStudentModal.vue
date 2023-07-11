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
        {{ modalsStore.evaluateStudentModalName }} под id
        {{ modalsStore.evaluateStudentModalId }}
      </h3>
      <div class="wrapper">
        <StarRating v-model:rating="rating"></StarRating>
      </div>
      <BaseTextarea
        v-model="review"
        placeholder="Опишите работу, проделанную студентом..."
        :max-length="255"
      />
      <div>
        <BaseButton @click="evaluate" :full-width="true" case="uppercase">
          Оценить
        </BaseButton>
      </div>
    </div>
    <!-- MAIN CONTENT -->
  </BaseModal>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import StarRating from 'vue-star-rating';
  import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
  import { participationList } from '@/models/mock/participation';
  import BaseButton from '../ui/BaseButton.vue';
  import BaseModal from '../ui/BaseModal.vue';
  import BaseTextarea from '../ui/BaseTextarea.vue';

  const modalsStore = useEvaluationModal();

  type Props = {
    id?: number;
    name?: string;
    review?: string;
    rating?: number;
    projectID?: number;
  };
  const props = defineProps<Props>();

  const rating = ref(props.rating ?? 0);
  const review = ref(props.review ?? '');
  const projectID = props.projectID ?? 1;
  const id = computed((id) => modalsStore.evaluateStudentModalId ?? 2);

  const evaluate = () => {
    console.log(projectID);
    console.log(id);
    console.log(participationList);
    for (const participation of participationList) {
      if (
        participation.project_id == projectID &&
        participation.candidate.id == id.value
      ) {
        console.log(participation);
        participation.rating = rating.value;
        participation.review = review.value;
        rating.value = 0;
        review.value = '';
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
