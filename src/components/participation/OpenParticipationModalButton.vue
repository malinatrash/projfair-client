<template>
  <BaseButton
    v-if="canSeeButton"
    case="uppercase"
    :variant="props.variant"
    :disabled="
      abilitySendParticipationsMutation.isLoading.value ||
      participationListQuery.isFetching.value ||
      new Date() > new Date(time?.[1] ?? new Date(-1000))
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
  import { useUserTimer } from '@/hooks/useUserTimer';
  import { isExtraState, isRecruitingState } from '@/helpers/project';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import { useProjectsStore } from '@/stores/projects/useProjectsStore';
  import { Candidate } from '../../models/Candidate';
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

  const studentStore = authStore.profileData as Candidate;

  const time = useUserTimer();

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

  function requirementsAreMet(): boolean {
    const projectSpecialities = props.project.project_specialities.map(
      (e) => e.speciality.name,
    );
    const authSpeciality = studentStore.training_group.split('-')[0];
    const projectCourses = props.project.project_specialities.map(
      (e) => e.course,
    );
    const authCourse = studentStore.course;

    if (!projectSpecialities.includes(authSpeciality)) {
      const message =
        'Ваша специальность не входит в список специальностей проекта';
      toast.error(message);
      return false;
    }

    if (!projectCourses.includes(authCourse)) {
      const message = 'Ваш курс не входит в список курсов проекта';
      toast.error(message);
      return false;
    }

    // Проверка соотношения курса к специальности
    const validCourseForSpec = props.project.project_specialities.some(
      (specialty) =>
        specialty.course === authCourse &&
        specialty.speciality.name === authSpeciality,
    );

    if (!validCourseForSpec) {
      const message =
        'Ваш курс не соответствует ожидаемому для этой специальности';
      toast.error(message);
      return false;
    }

    return true;
  }

  function openParticipationModal() {
    if (!requirementsAreMet()) {
      return;
    }
    const participationList = participationListQuery.data.value;
    abilitySendParticipationsMutation.mutate({
      project: props.project,
      participations: participationList,
    });
  }
</script>
