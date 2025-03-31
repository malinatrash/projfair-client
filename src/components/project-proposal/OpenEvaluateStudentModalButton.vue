<template>
  <BaseButton
    class="default"
    case="uppercase"
    variant="outlined"
    @click="click"
  >
    <div class="content">
      <span :class="participation.mark && 'evaluate'"> Оценить </span>
      <StarRating
        v-if="participation.mark >= 0"
        class="star-rating"
        :read-only="true"
        :rating="participation.mark"
      />
    </div>
  </BaseButton>
</template>

<script lang="ts" setup>
  import StarRating from 'vue-star-rating';
  import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
  import { Participation } from '@/models/Participation';
  import BaseButton from '../ui/BaseButton.vue';

  interface Props {
    participation: Participation;
    projectId: number;
  }

  const props = defineProps<Props>();
  const modalsStore = useEvaluationModal();

  const click = () => {
    modalsStore.openEvaluateStudentModal(
      props.projectId,
      props.participation.candidate.id,
      props.participation.candidate.fio,
      props.participation.mark,
      props.participation.review === '   ' || !props.participation.review
        ? ''
        : props.participation.review, // В БД пустое значение - это строка из 3 пробелов, поэтому если оно пустое, то мы его заменяем на пустую строку
    );
  };
</script>

<style scoped>
  .default {
    position: relative;
    top: 0;
    width: 7rem;
    height: 3rem;
    padding: 1rem;
  }

  .content {
    gap: 0;
    padding: 0;
    margin: 0;
  }

  .star-rating {
    position: relative;
    top: 0.1rem;
  }

  button.button.outlined {
    position: relative;
    right: 0.8rem;
    bottom: 0.8rem;
    width: 7rem;
    height: 3rem;
    padding: 1rem;
  }
</style>
