<template>
  <!-- auth modal -->
  <BaseModal
    :is-show="modalsStore.evaluateStudentModal"
    @close="modalsStore.evaluateStudentModal = false"
  >
    <!-- MAIN CONTENT -->
    <div class="success-modal">
      <h1>Оценить студента</h1>
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
  import StarRating from 'vue-star-rating';
  import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
  import BaseButton from '../ui/BaseButton.vue';
  import BaseModal from '../ui/BaseModal.vue';
  import BaseTextarea from '../ui/BaseTextarea.vue';

  const rating = ref(0);
  const modalsStore = useEvaluationModal();
</script>

<style scoped>
  .success-modal {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .wrapper {
    user-select: none;
    color: #fff;
    display: flex;
    justify-content: center;
  }
</style>
