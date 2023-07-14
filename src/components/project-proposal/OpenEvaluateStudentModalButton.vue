<template>
  <BaseButton
    case="uppercase"
    variant="outlined"
    @click="
      modalsStore.openEvaluateStudentModal(
        props.projectID,
        props.id,
        props.name,
        rating,
        review,
      )
    "
  >
    <div class="content">
      <span :class="rating && 'evaluate'"> Оценить </span>
      <StarRating
        v-if="rating > 0"
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
  import BaseButton from '../ui/BaseButton.vue';

  type Props = {
    projectID: number;
    id: number;
    name: string;
  };

  const rating = computed(() => {
    if (
      !projectData.value?.project?.participations ||
      !projectData.value?.project?.participants
    )
      throw new Error();
    for (const participation of projectData.value?.project?.participations) {
      for (const participant of projectData.value?.project?.participants) {
        if (
          participation.candidate.id == props.id &&
          participant.id == participation.candidate.id
        ) {
          return participation.rating;
        }
      }
    }
    return 0;
  });

  const review = computed(() => {
    if (
      !projectData.value?.project?.participations ||
      !projectData.value?.project?.participants
    )
      throw new Error();
    for (const participation of projectData.value?.project?.participations) {
      for (const participant of projectData.value?.project?.participants) {
        if (
          participation.candidate.id == props.id &&
          participant.id == participation.candidate.id
        ) {
          return participation.review;
        }
      }
    }
    return '';
  });

  const props = defineProps<Props>();
  const modalsStore = useEvaluationModal();
  const { data: projectData } = useGetSingleProjectQuery(props.projectID);
</script>

<style scoped>
  .evaluate {
    position: relative;
    bottom: -1.2rem;
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
    width: 7rem;
    height: 3rem;
    padding: 1rem;
  }
</style>
