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
    Оценить
  </BaseButton>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
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
