<template>
  <BaseButton
    class="default"
    case="uppercase"
    variant="outlined"
    @click="click"
  >
    <div class="content">
      <span :class="rating && 'evaluate'"> Оценить </span>
      <StarRating
        v-if="rating >= 0"
        class="star-rating"
        :read-only="true"
        :rating="rating"
      />
    </div>
  </BaseButton>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import StarRating from 'vue-star-rating';
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
  import { useResultStore } from '@/stores/resultPage/useResultStore';
  import BaseButton from '../ui/BaseButton.vue';

  type Props = {
    projectID: number;
    id: number;
    name: string;
  };

  const click = () => {
    modalsStore.openEvaluateStudentModal(
      props.projectID,
      props.id,
      props.name,
      rating.value,
      review.value ?? '',
    );
  };

  const rating = computed(() => {
    if (
      !projectData.value?.project?.participations ||
      !projectData.value?.project?.participants
    ) {
      return 0;
    }
    for (const participation of projectData.value?.project?.participations) {
      for (const participant of projectData.value?.project?.participants) {
        if (
          participation.candidate.id == props.id &&
          participant.id == participation.candidate.id
        ) {
          return (
            resultStore.getResultById(props.id)?.mark ?? participation.mark
          );
        }
      }
    }
    return 0;
  });

  const review = computed(() => {
    if (
      !projectData.value?.project?.participations ||
      !projectData.value?.project?.participants
    ) {
      return '';
    }
    for (const participation of projectData.value?.project?.participations) {
      for (const participant of projectData.value?.project?.participants) {
        if (
          participation.candidate.id == props.id &&
          participant.id == participation.candidate.id
        ) {
          return (
            resultStore.getResultById(props.id)?.review ?? participation.review
          );
        }
      }
    }
    return '';
  });

  // const openModal

  const props = defineProps<Props>();
  const modalsStore = useEvaluationModal();
  const { data: projectData } = useGetSingleProjectQuery(props.projectID);
  const resultStore = useResultStore();
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
