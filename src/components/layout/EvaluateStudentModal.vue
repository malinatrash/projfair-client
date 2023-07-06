<template>
  <!-- auth modal -->
  <BaseModal
    :is-show="modalsStore.evaluateStudentModal"
    @close="modalsStore.evaluateStudentModal = false"
  >
    <!-- MAIN CONTENT -->
    <div class="success-modal">
      <h1>Оценить студента</h1>

      <BaseTextarea
        class="description"
        placeholder="Опишите проделанную работу студента"
      />
      <div>
        <BaseButton :full-width="true" case="uppercase"> Оценить </BaseButton>
      </div>
    </div>
    <!-- MAIN CONTENT -->
  </BaseModal>
</template>

<script setup lang="ts">
  import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
  import BaseButton from '../ui/BaseButton.vue';
  import BaseModal from '../ui/BaseModal.vue';
  import BaseTextarea from '../ui/BaseTextarea.vue';

  const modalsStore = useEvaluationModal();
</script>

<style scoped>
  .success-modal {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
</style>
