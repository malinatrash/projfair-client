<template>
  <ProjectProposalForm
    v-model:project-proposal-form-value="projectProposalFormValue"
    :is-loading="isLoading"
    :is-projects-fetching="prevUserProjectsQuery.isFetching.value"
    :can-user-edit="canUserEdit"
    :prev-project-list="prevProjectList"
    :specialty-list="specialtyListQuery.data.value"
    :supervisor-list="supervisorListQuery.data.value"
    :project-skill-list="projectSkillsQuery.data.value"
    :theme-source-list="themeSourcesQuery.data.value"
    :project-job-developer="projectJobDeveloperComputed"
    is-admin
  />

  <div style="display: flex; flex-direction: row-reverse; gap: 15px">
    <BaseButton
      v-if="canUserEdit"
      :disabled="isLoading"
      @click="onCreateUnderReview"
    >
      <template
        v-if="
          createProjectProposalMutation.isLoading.value ||
          updateProjectProposalMutation.isLoading.value
        "
      >
        Заявка отправляется...
      </template>
      <template v-else>Подать заявку</template>
    </BaseButton>

    <BaseButton
      v-if="
        canUserEdit &&
        !userProjectProposalListQuery.isFetching.value &&
        !instituteProjectProposalsQuery.isFetching.value
      "
      :disabled="isLoading"
      color="red"
      variant="outlined"
      @click="onCancel"
    >
      Сбросить
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { computed, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useToast } from 'vue-toastification';
  import ProjectProposalForm from '@/components/project-proposal/ProjectProposalForm.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import {
    ProjectDuration,
    ProjectProposalFormValue,
  } from '@/models/components/ProjectProposalForm';
  import { useGetAdminProjectsQuery } from '@/api/AdminApi/hooks/useGetAdminProjectsQuery';
  import { useGetInstituteProjectProposalsQuery } from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectProposalsQuery';
  import { useGetProjectSkillsQuery } from '@/api/ProjectApi/hooks/useGetAllProjectTagsQuery';
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import { useGetAllSupervisorsQuery } from '@/api/SharedApi/hooks/useGetAllSupervisorsQuery';
  import { useCreateProjectProposalMutation } from '@/api/SupervisorApi/hooks/useCreateProjectProposalMutation';
  import { useDeleteProjectProposalMutation } from '@/api/SupervisorApi/hooks/useDeleteProjectProposalMutation';
  import { useGetProjectProposalListQuery } from '@/api/SupervisorApi/hooks/useGetProjectProposalListQuery';
  import { useGetSpecialtiesQuery } from '@/api/SupervisorApi/hooks/useGetSpecialtiesQuery';
  import { useGetThemeSourcesQuery } from '@/api/SupervisorApi/hooks/useGetThemeSourcesQuery';
  import { useUpdateProjectProposalMutation } from '@/api/SupervisorApi/hooks/useUpdateProjectProposalMutation';
  import { useProjectProposalMetaData } from '@/hooks/useProjectProposalMetaData';
  import { useWatchAuthorization } from '@/hooks/useWatchAuthorization';
  import { getAcademicYear } from '@/helpers/date';
  import {
    collectProjectProposal,
    getCurrentProjectProposal,
    mapProjectProposalTeam,
    mapSpecialtyList,
    projectDurationFromDate,
  } from '@/helpers/project-proposal-form';
  import { isSupervisor } from '@/helpers/typeCheck';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import { ProjectDifficulty } from '@/models/ProjectDifficulty';
  import {
    CreatedProjectProposal,
    MemberRole,
    ProjectProposalStateId,
  } from '@/models/ProjectProposal';
  import { ProjectStateID } from '@/models/ProjectState';
  import { SpecialtyPriority } from '@/models/Specialty';

  useWatchAuthorization();

  const toast = useToast();
  const router = useRouter();
  const route = useRoute();
  const authStore = useAuthStore();
  const modalsStore = useModalsStore();
  const { profileData, isInstDirector } = storeToRefs(authStore);
  const projectId = computed(() => route.params.id);

  const defaultProjectProposalFormValue: ProjectProposalFormValue = {
    isNewProject: true,
    prevProjectId: null,
    projectName: '',
    projectGoal: '',
    projectCustomer: '',
    projectThemeSourceId: null,
    projectDuration: getAcademicYear(new Date().getMonth()).isSpring()
      ? ProjectDuration.SpringSemester
      : ProjectDuration.FallSemester,
    projectDifficulty: ProjectDifficulty.Low,
    skillsToBeFormed: '',
    projectExpectedResult: '',
    projectDescription: '',
    specialtyList: [],
    additionalSpecialtyList: [],
    skillList: [],
    team: initTeam(),
    sharedRoleList: [MemberRole.CoMentor],
    currentUserRoleList: [MemberRole.Mentor],
  };

  const projectProposalFormValue = ref<ProjectProposalFormValue>({
    ...defaultProjectProposalFormValue,
  });

  const instituteProjectProposalsQuery = useGetInstituteProjectProposalsQuery({
    enabled: isInstDirector,
    onError,
  });
  const userProjectProposalListQuery = useGetProjectProposalListQuery({
    onError,
  });
  const supervisorListQuery = useGetAllSupervisorsQuery({ onError });
  const projectSkillsQuery = useGetProjectSkillsQuery({ onError });
  const specialtyListQuery = useGetSpecialtiesQuery({ onError });
  const themeSourcesQuery = useGetThemeSourcesQuery({ onError });
  const createProjectProposalMutation = useCreateProjectProposalMutation({
    onError,
  });
  const updateProjectProposalMutation = useUpdateProjectProposalMutation({
    onError,
  });
  const deleteProjectProposalMutation = useDeleteProjectProposalMutation({
    onError,
  });
  const { mentorSpecialties, projectDepartment } = useProjectProposalMetaData(
    projectProposalFormValue,
    specialtyListQuery.data,
  );
  const currentProjectProposalComputed = computed(() =>
    getCurrentProjectProposal(Number(projectId.value), [
      ...(userProjectProposalListQuery.data.value || []),
      ...(instituteProjectProposalsQuery.data.value || []),
    ]),
  );
  const currentSelectedMentor = ref<number>(-1);
  const prevProjectId = computed(
    () => currentProjectProposalComputed.value?.prevProjectId || -1,
  );
  const prevUserProjectsQuery = useGetAdminProjectsQuery(
    currentSelectedMentor,
    {
      onError,
      select: (projects) =>
        projects.filter((project) =>
          [ProjectStateID.ActiveState, ProjectStateID.ArchivedState].includes(
            project.state.id,
          ),
        ),
    },
  );
  watch([projectProposalFormValue.value], () => {
    const currentMentor = projectProposalFormValue.value.team[0].memberData;

    if (currentSelectedMentor.value != currentMentor?.id) {
      if (currentMentor) {
        currentSelectedMentor.value = currentMentor.id;
      } else {
        currentSelectedMentor.value = -1;
      }
      prevUserProjectsQuery.refetch.value();
    }
  });
  const enableSingleProjectQuery = computed(
    () => typeof prevProjectId.value === 'number' && prevProjectId.value !== -1,
  );
  const singleProjectQuery = useGetSingleProjectQuery(prevProjectId, {
    enabled: enableSingleProjectQuery,
  });
  const prevProjectList = computed(() => {
    const projects = prevUserProjectsQuery.data.value;
    const prevProjectId = currentProjectProposalComputed.value?.prevProjectId;

    if (!projects) return [];
    if (projects.find((project) => project.id === prevProjectId)) {
      return projects;
    }
    const singleProject = singleProjectQuery.data.value?.project;
    if (!singleProject) return projects;
    return [...projects, singleProject];
  });

  const currentProjectProposalState = computed<
    ProjectProposalStateId | undefined
  >(() => currentProjectProposalComputed.value?.state.id);

  const isUserJobDeveloper = computed(() =>
    Boolean(
      currentProjectProposalComputed?.value?.supervisors
        .find(
          (supervisor) => supervisor.supervisor.id === profileData?.value?.id,
        )
        ?.roles.find((role) => role.id === MemberRole.JobDeveloper),
    ),
  );

  const canUserEdit = computed(
    () =>
      !currentProjectProposalState.value ||
      (isUserJobDeveloper.value &&
        [ProjectProposalStateId.Draft].includes(
          currentProjectProposalState.value,
        )),
  );

  const isLoading = computed(
    () =>
      createProjectProposalMutation.isLoading.value ||
      updateProjectProposalMutation.isLoading.value ||
      deleteProjectProposalMutation.isLoading.value ||
      userProjectProposalListQuery.isFetching.value ||
      instituteProjectProposalsQuery.isFetching.value ||
      supervisorListQuery.isFetching.value ||
      projectSkillsQuery.isFetching.value ||
      specialtyListQuery.isFetching.value ||
      themeSourcesQuery.isFetching.value ||
      prevUserProjectsQuery.isLoading.value ||
      singleProjectQuery.isFetching.value,
  );

  const projectJobDeveloperComputed = computed(
    () =>
      currentProjectProposalComputed.value?.supervisors.find((member) =>
        member.roles.find((role) => role.id === MemberRole.JobDeveloper),
      )?.supervisor.fio || profileData?.value?.fio,
  );

  watch(
    () => currentProjectProposalComputed.value,
    (currentProjectProposal, prevCurrentProjectProposal) => {
      if (currentProjectProposal?.id === prevCurrentProjectProposal?.id) return;
      if (!currentProjectProposal) return;
      fillFromProjectProposal(currentProjectProposal);
    },
    { deep: true, immediate: true },
  );

  function validateProjectProposal(): string | undefined {
    const {
      projectName,
      projectGoal,
      projectExpectedResult,
      skillsToBeFormed,
      projectDescription,
      specialtyList,
      additionalSpecialtyList,
    } = projectProposalFormValue.value;

    if (!projectName) {
      return 'Введите название проекта';
    }
    if (!projectGoal) {
      return 'Введите цель проекта';
    }
    if (!projectDepartment.value) {
      return 'Подразделение наставника проекта не найдено, выберите другого наставника, или обратитесь в службу поддержки';
    }
    if (!projectExpectedResult) {
      return 'Введите ожидаемый результат проекта';
    }
    if (!skillsToBeFormed) {
      return 'Введите формируемые в результате проекта навыки студентов';
    }
    if (!projectDescription) {
      return 'Введите описание проекта';
    }
    if (mentorSpecialties.value.length > 0 && specialtyList.length === 0) {
      return 'Выберите основные специальности участников проекта';
    }
    if (
      mentorSpecialties.value.length === 0 &&
      additionalSpecialtyList.length === 0
    ) {
      return 'Выберите приглашённые специальности участников проекта';
    }

    return undefined;
  }

  function setProjectProposalFormValue(
    formValue: Partial<ProjectProposalFormValue>,
  ): void {
    projectProposalFormValue.value = {
      ...projectProposalFormValue.value,
      ...formValue,
    };
  }

  function fillFromProjectProposal(projectProposal: CreatedProjectProposal) {
    setProjectProposalFormValue({
      prevProjectId: projectProposal.prevProjectId,
      isNewProject: !projectProposal.prevProjectId,
      projectName: projectProposal.title,
      projectGoal: projectProposal.goal,
      projectCustomer: projectProposal.customer,
      projectThemeSourceId: projectProposal.theme_source?.id || null,
      projectDifficulty: projectProposal.difficulty,
      projectExpectedResult: projectProposal.product_result,
      skillsToBeFormed: projectProposal.study_result,
      projectDescription: projectProposal.description,
      skillList: projectProposal.skills,
      projectDuration: projectDurationFromDate({
        start: projectProposal.date_start,
        end: projectProposal.date_end,
      }),
      specialtyList: mapSpecialtyList(
        projectProposal.project_specialities,
        SpecialtyPriority.High,
      ),
      additionalSpecialtyList: mapSpecialtyList(
        projectProposal.project_specialities,
        SpecialtyPriority.Low,
      ),
      team: mapProjectProposalTeam(
        projectProposal.supervisors,
        projectProposalFormValue.value.sharedRoleList,
        projectProposalFormValue.value.currentUserRoleList,
      ),
    });
  }

  function initTeam() {
    const userData = profileData?.value;

    if (!userData || !isSupervisor(userData)) return [];

    return [
      {
        memberData: undefined,
        isCurrentUser: true,
        role: MemberRole.Mentor,
      },
    ];
  }

  function clearAllFields() {
    projectProposalFormValue.value = { ...defaultProjectProposalFormValue };
  }

  function sendProjectProposal(projectProposalState: ProjectProposalStateId) {
    const isDraft = projectProposalState === ProjectProposalStateId.Draft;
    const isRejectedToDraft =
      isDraft &&
      currentProjectProposalState.value === ProjectProposalStateId.Rejected;
    const errorMessage = validateProjectProposal();
    if (errorMessage) {
      toast(errorMessage);
      return;
    }

    const projectProposal = collectProjectProposal(
      projectProposalFormValue.value,
      projectProposalState,
      projectDepartment.value!.id,
    );
    const id = currentProjectProposalComputed.value?.id;

    if (id) {
      updateProjectProposalMutation.mutate({ projectProposal, id });
    } else {
      createProjectProposalMutation.mutate(projectProposal);
    }
  }

  function onCreateUnderReview() {
    function agree() {
      modalsStore.openConfirmModal();
      sendProjectProposal(ProjectProposalStateId.UnderReview);
    }

    function disagree() {
      modalsStore.openConfirmModal();
    }

    modalsStore.openConfirmModal(
      'Подать заявку на проект?',
      'подать заявку',
      'отмена',
      agree,
      disagree,
    );
  }

  function onCancel() {
    function agree() {
      modalsStore.openConfirmModal();
      clearAllFields();
    }

    function disagree() {
      modalsStore.openConfirmModal();
    }

    modalsStore.openConfirmModal(
      'Вы хотите сбросить всё выше введённое?',
      'сбросить',
      'отмена',
      agree,
      disagree,
    );
  }

  function onError(error: unknown) {
    toast.error('Ошибка: ' + String(error));
  }
</script>

<style lang="scss" scoped>
  $padding: 20px;
</style>
