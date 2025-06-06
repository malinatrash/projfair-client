<template>
  <PageLayout>
    <button :class="$style['back-link']" @click="navigateBack">
      &lt;&nbsp;&nbsp;К списку заявок
    </button>
    <header :class="$style.header">
      <h1 class="page-title">
        <template v-if="isLoading">Загрузка...</template>
        <template v-else-if="!currentProjectProposalComputed">
          Создание проектной заявки
        </template>
        <template v-else-if="canUserEdit">
          Редактирование проектной заявки
        </template>
        <template v-else>Просмотр проектной заявки</template>
      </h1>
      <ProjectProposalStatus
        v-if="currentProjectProposalComputed"
        :state="currentProjectProposalComputed.state"
      />
    </header>
    <ProjectProposalForm
      v-model:project-proposal-form-value="projectProposalFormValue"
      :is-loading="isLoading"
      :can-user-edit="canUserEdit"
      :prev-project-list="prevProjectList"
      :specialty-list="specialtyListQuery.data.value"
      :supervisor-list="supervisorListQuery.data.value"
      :project-skill-list="projectSkillsQuery.data.value"
      :project-job-developer="projectJobDeveloperComputed"
      :theme-source-list="themeSourcesQuery.data.value"
    />
    <div :class="$style.actions">
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
        Сбросить и выйти
      </BaseButton>

      <BaseButton
        v-if="
          canUserEdit &&
          !userProjectProposalListQuery.isFetching.value &&
          !instituteProjectProposalsQuery.isFetching.value &&
          currentProjectProposalState === ProjectProposalStateId.Draft
        "
        :disabled="isLoading"
        color="red"
        variant="primary"
        @click="onDeleteDraft"
      >
        Удалить черновик
      </BaseButton>

      <BaseButton
        v-if="
          !canUserEdit ||
          userProjectProposalListQuery.isFetching.value ||
          instituteProjectProposalsQuery.isFetching.value
        "
        variant="outlined"
        @click="navigateBack"
      >
        Вернуться к заявкам
      </BaseButton>

      <BaseButton
        v-if="
          !userProjectProposalListQuery.isFetching.value &&
          !instituteProjectProposalsQuery.isFetching.value &&
          currentProjectProposalState === ProjectProposalStateId.Rejected &&
          isUserJobDeveloper
        "
        variant="primary"
        :disabled="isLoading"
        @click="onCreateDraft"
      >
        <template
          v-if="
            createProjectProposalMutation.isLoading.value ||
            updateProjectProposalMutation.isLoading.value
          "
        >
          Черновик сохраняется...
        </template>
        <template v-else>Сохранить как черновик</template>
      </BaseButton>

      <BaseButton
        v-if="
          !userProjectProposalListQuery.isFetching.value &&
          !instituteProjectProposalsQuery.isFetching.value &&
          canUserEdit
        "
        variant="outlined"
        :disabled="isLoading"
        @click="onCreateDraft"
      >
        <template
          v-if="
            createProjectProposalMutation.isLoading.value ||
            updateProjectProposalMutation.isLoading.value
          "
        >
          Черновик сохраняется...
        </template>
        <template v-else>Сохранить черновик</template>
      </BaseButton>

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
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { computed, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useToast } from 'vue-toastification';
  import PageLayout from '@/components/layout/PageLayout.vue';
  import ProjectProposalForm from '@/components/project-proposal/ProjectProposalForm.vue';
  import ProjectProposalStatus from '@/components/project/ProjectProposalStatus.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import {
    ProjectDuration,
    ProjectProposalFormValue,
  } from '@/models/components/ProjectProposalForm';
  import { useGetInstituteProjectProposalsQuery } from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectProposalsQuery';
  import { useGetProjectSkillsQuery } from '@/api/ProjectApi/hooks/useGetAllProjectTagsQuery';
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import { useGetAllSupervisorsQuery } from '@/api/SharedApi/hooks/useGetAllSupervisorsQuery';
  import { useGetUserProjectsQuery } from '@/api/SharedApi/hooks/useGetUserProjectsQuery';
  import { useCreateProjectProposalMutation } from '@/api/SupervisorApi/hooks/useCreateProjectProposalMutation';
  import { useDeleteProjectProposalMutation } from '@/api/SupervisorApi/hooks/useDeleteProjectProposalMutation';
  import { useGetProjectProposalListQuery } from '@/api/SupervisorApi/hooks/useGetProjectProposalListQuery';
  import { useGetSpecialtiesQuery } from '@/api/SupervisorApi/hooks/useGetSpecialtiesQuery';
  import { useGetThemeSourcesQuery } from '@/api/SupervisorApi/hooks/useGetThemeSourcesQuery';
  import { useUpdateProjectProposalMutation } from '@/api/SupervisorApi/hooks/useUpdateProjectProposalMutation';
  import { useProjectProposalMetaData } from '@/hooks/useProjectProposalMetaData';
  import { useNavigateBack } from '@/hooks/useRoutes';
  import { useWatchAuthorization } from '@/hooks/useWatchAuthorization';
  import { getAcademicYear } from '../helpers/date';
  import {
    collectProjectProposal,
    getCurrentProjectProposal,
    mapProjectProposalTeam,
    mapSpecialtyList,
    projectDurationFromDate,
  } from '@/helpers/project-proposal-form';
  import { isSupervisor } from '@/helpers/typeCheck';
  import { RouteNames } from '@/router/types/route-names';
  import { toProjectProposalCreateRoute } from '@/router/utils/routes';
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
  const navigateBack = useNavigateBack({
    name: RouteNames.SUPERVISOR_PROJECT_PROPOSALS,
  });

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
  const prevProjectId = computed(
    () => currentProjectProposalComputed.value?.prevProjectId || -1,
  );
  const prevUserProjectsQuery = useGetUserProjectsQuery({
    onError,
    select: (projects) =>
      projects.filter((project) =>
        [ProjectStateID.ActiveState, ProjectStateID.ArchivedState].includes(
          project.state.id,
        ),
      ),
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
      prevUserProjectsQuery.isFetching.value ||
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

    const { is_student, is_teacher, ...currentUser } = userData;
    return [
      {
        memberData: currentUser,
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
      updateProjectProposalMutation.mutate(
        { projectProposal, id },
        {
          onSuccess: isRejectedToDraft
            ? onSuccessUpdateRejectedToDraft
            : isDraft
            ? onSuccessUpdateDraft
            : onSuccessCreateForReview,
        },
      );
    } else {
      createProjectProposalMutation.mutate(projectProposal, {
        onSuccess: isDraft ? onSuccessCreateDraft : onSuccessCreateForReview,
      });
    }
  }

  function onCreateDraft() {
    function agree() {
      modalsStore.openConfirmModal();
      sendProjectProposal(ProjectProposalStateId.Draft);
    }

    function disagree() {
      modalsStore.openConfirmModal();
    }

    modalsStore.openConfirmModal(
      'Сохранить черновик заявки?',
      'сохранить черновик',
      'отмена',
      agree,
      disagree,
    );
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

  function onDeleteDraft() {
    if (!currentProjectProposalComputed.value) return;
    const { id, title } = currentProjectProposalComputed.value;
    function agree() {
      modalsStore.openConfirmModal();
      deleteProjectProposalMutation.mutate(id, {
        onSuccess: () => {
          router.replace({
            name: RouteNames.SUPERVISOR_PROJECT_PROPOSAL_CREATE,
          });
          clearAllFields();
        },
      });
    }

    function disagree() {
      modalsStore.openConfirmModal();
    }

    modalsStore.openConfirmModal(
      `Удалить черновик заявки «${title}»?`,
      'удалить',
      'отмена',
      agree,
      disagree,
    );
  }

  function onCancel() {
    function agree() {
      modalsStore.openConfirmModal();
      router.push({ name: RouteNames.SUPERVISOR_PROJECT_PROPOSALS });
    }

    function disagree() {
      modalsStore.openConfirmModal();
    }

    modalsStore.openConfirmModal(
      'Последние введенные данные не сохранятся, перейти в личный кабинет?',
      'сбросить и выйти',
      'остаться',
      agree,
      disagree,
    );
  }

  function onSuccessCreateDraft(
    createdProjectProposal: CreatedProjectProposal,
  ) {
    router.replace(toProjectProposalCreateRoute(createdProjectProposal.id));
    const title = 'Черновик успешно сохранён, вернуться в личный кабинет?';
    const agreeButtonTitle = 'вернуться в личный кабинет';
    const disagreeButtonTitle = 'продолжить редактирование';

    function agree() {
      modalsStore.openConfirmModal();
      router.push({ name: RouteNames.SUPERVISOR_PROJECT_PROPOSALS });
    }

    function disagree() {
      modalsStore.openConfirmModal();
    }

    modalsStore.openConfirmModal(
      title,
      agreeButtonTitle,
      disagreeButtonTitle,
      agree,
      disagree,
    );
  }

  function onSuccessCreateForReview(
    createdProjectProposal: CreatedProjectProposal,
  ) {
    router.replace(toProjectProposalCreateRoute(createdProjectProposal.id));
    const title = 'Заявка успешно отправлена, вернуться в личный кабинет?';
    const agreeButtonTitle = 'вернуться в личный кабинет';
    const disagreeButtonTitle = 'создать новую заявку';

    function agree() {
      modalsStore.openConfirmModal();
      router.push({ name: RouteNames.SUPERVISOR_PROJECT_PROPOSALS });
    }

    function disagree() {
      modalsStore.openConfirmModal();
      clearAllFields();
      router.push(toProjectProposalCreateRoute());
    }

    modalsStore.openConfirmModal(
      title,
      agreeButtonTitle,
      disagreeButtonTitle,
      agree,
      disagree,
    );
  }

  function onSuccessUpdateDraft() {
    const title = 'Черновик успешно сохранён, вернуться в личный кабинет?';
    const agreeButtonTitle = 'вернуться в личный кабинет';
    const disagreeButtonTitle = 'продолжить редактирование';

    function agree() {
      modalsStore.openConfirmModal();
      router.push({ name: RouteNames.SUPERVISOR_PROJECT_PROPOSALS });
    }

    function disagree() {
      modalsStore.openConfirmModal();
    }

    modalsStore.openConfirmModal(
      title,
      agreeButtonTitle,
      disagreeButtonTitle,
      agree,
      disagree,
    );
  }

  function onSuccessUpdateRejectedToDraft(
    createdProjectProposal: CreatedProjectProposal,
  ) {
    router.push(toProjectProposalCreateRoute(createdProjectProposal.id));
    modalsStore.openAlertModal(
      'Черновик создан',
      'Заявка сохранена как черновик, вы можете отредактировать заявку и отправить её ещё раз',
    );
  }

  function onError(error: unknown) {
    toast.error('Ошибка: ' + String(error));
  }
</script>

<style lang="scss" module>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.5rem;
    margin-bottom: 1.875rem;
  }

  .back-link {
    display: inline-block;
    margin-top: 3.5rem;
    color: var(--text-color-2);
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    background: transparent;
    border: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .actions {
    display: flex;
    gap: 0.9375rem;
    justify-content: flex-end;
    margin-top: 1.5rem;
  }
</style>
