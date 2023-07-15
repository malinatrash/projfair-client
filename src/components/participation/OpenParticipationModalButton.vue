<template>
  <BaseButton
    v-if="canSeeButton"
    case="uppercase"
    :variant="props.variant"
    :disabled="
      abilitySendParticipationsMutation.isLoading.value ||
      participationListQuery.isFetching.value
    "
    @click="openParticipationModal"
  >
    Подать заявку
  </BaseButton>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';
  import { useToast } from 'vue-toastification';
  import { useGetAbilitySendParticipationsMutation } from '@/api/CandidateApi/hooks/useGetAbilitySendParticipationsMutation';
  import { useGetParticipationListQuery } from '@/api/CandidateApi/hooks/useGetParticipationListQuery';
  import { isExtraState, isRecruitingState } from '@/helpers/project';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import { useProjectsStore } from '@/stores/projects/useProjectsStore';
  import { Project } from '@/models/Project';
  import { AUTH_REQUIRED } from '@/values/error-messages';
  import BaseButton, { Variant } from '../ui/BaseButton.vue';

  type Props = { project: Project; variant?: Variant };

  const props = withDefaults(defineProps<Props>(), { variant: 'outlined' });
  const projectsStore = useProjectsStore();
  const modalsStore = useModalsStore();
  const authStore = useAuthStore();
  const { isStudent } = storeToRefs(authStore);
  const toast = useToast();
  const participationListQuery = useGetParticipationListQuery({
    enabled: isStudent,
  });

  const abilitySendParticipationsMutation =
    useGetAbilitySendParticipationsMutation({
      onSuccess: ({ project }) => {
        projectsStore.selectedProject = project;
        modalsStore.participationModal = true;
      },
      onError: (error) => {
        if (error === AUTH_REQUIRED) {
          modalsStore.authModalNewProject = true;
          return;
        }
        if (typeof error === 'string') {
          modalsStore.openAlertModal(error);
          return;
        }
        toast.error(String(error));
      },
    });

  const canSeeButton = computed(
    () =>
      (isRecruitingState(props.project.state.id) ||
        isExtraState(props.project.state.id)) &&
      !authStore.profileData?.is_teacher,
  );

  function openParticipationModal() {
    const participationList = participationListQuery.data.value;
    abilitySendParticipationsMutation.mutate({
      project: props.project,
      participations: participationList,
    });
  }
</script>
