<template>
  <!-- auth modal -->
  <BaseModal
    :is-show="evaluation.evaluateStore.evaluateStudentModal"
    @close="evaluation.evaluateStore.closeEvaluateStudentModal()"
  >
    <!-- MAIN CONTENT -->
    <form
      class="success-modal"
      @submit="
        (e) => {
          e.preventDefault();
        }
      "
    >
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
        required
        class="evaluate-input"
        placeholder="Опишите работу, проделанную студентом..."
        resize="vertical"
        :max-length="300"
      />
      <div>
        <BaseButton :full-width="true" case="uppercase" @click="applyEvaluate">
          Отправить
        </BaseButton>
      </div>
    </form>
    <!-- MAIN CONTENT -->
  </BaseModal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import StarRating from 'vue-star-rating';
  import { useToast } from 'vue-toastification';
  import useEvaluation from '@/hooks/useEvaluation';
  import BaseButton from '../ui/BaseButton.vue';
  import BaseModal from '../ui/BaseModal.vue';
  import BaseTextarea from '../ui/BaseTextarea.vue';

  const toast = useToast();

  const evaluation = useEvaluation();

  const applyEvaluate = (value: string) => {
    if (!evaluation.evaluateStore.rating) {
      toast.info('Выберите оценку');
      return;
    }
    if (!evaluation.evaluateStore.review) {
      toast.info('Введите отзыв');
      return;
    }
    evaluation.evaluate();
  };
</script>

<style>
  .evaluate-input {
    height: 125px;
  }

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
