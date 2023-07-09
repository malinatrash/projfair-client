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
      <BaseTextarea placeholder="Опишите проделанную работу студента" />
      <div>
        <BaseButton :full-width="true" case="uppercase"> Оценить </BaseButton>
      </div>
    </div>
    <!-- MAIN CONTENT -->
  </BaseModal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  // import StarRating from 'vue-star-rating';
  import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
  import BaseButton from '../ui/BaseButton.vue';
  import BaseModal from '../ui/BaseModal.vue';
  import BaseTextarea from '../ui/BaseTextarea.vue';

  const rating = ref(0);
  const modalsStore = useEvaluationModal();

  type Props = {
    id?: number;
    name?: string;
  };
  const props = defineProps<Props>();
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
