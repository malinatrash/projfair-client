<template>
  <!-- auth modal -->
  <BaseModal
    :is-show="evaluation.evaluateStore.evaluateStudentModal"
    @close="evaluation.evaluateStore.closeEvaluateStudentModal()"
  >
    <!-- MAIN CONTENT -->
    <div class="success-modal">
      <h1>Оценить студента</h1>
      <h3>
        {{ evaluation.evaluateStore.evaluateStudentModalName }}
      </h3>
      <div class="center">
        <StarRating
          v-model:rating="evaluation.evaluateStore.rating"
        ></StarRating>
      </div>
      <BaseTextarea
        v-model="evaluation.evaluateStore.review"
        placeholder="Опишите работу, проделанную студентом..."
        :max-length="300"
      />
      <div>
        <BaseButton
          :full-width="true"
          case="uppercase"
          @click="evaluation.evaluate()"
        >
          Запомнить
        </BaseButton>
      </div>
    </div>
    <!-- MAIN CONTENT -->
  </BaseModal>
</template>

<script setup lang="ts">
  import StarRating from 'vue-star-rating';
  import useEvaluation from '@/hooks/useEvaluation';
  import BaseButton from '../ui/BaseButton.vue';
  import BaseModal from '../ui/BaseModal.vue';
  import BaseTextarea from '../ui/BaseTextarea.vue';

  const evaluation = useEvaluation();

  console.log(evaluation.evaluateStore.projectID);
</script>

<style>
  .success-modal {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .center {
    display: flex;
    justify-content: center;
  }

  .vue-star-rating-rating-text {
    display: none !important;
  }
</style>
