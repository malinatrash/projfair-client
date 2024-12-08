<template>
  <PageLayout>
    <button :class="$style['back-link']" @click="navigateBack">
      &lt;&nbsp;&nbsp;Вернуться
    </button>
    <header :class="$style.header">
      <h1 class="page-title">
        <template v-if="isLoading">Загрузка...</template>
        <template v-else-if="!dataProjectQuery.isFetched">
          Результаты проекта
          <h6 style="font-weight: 500; line-height: normal">
            {{ dataProjectQuery.data.value?.project.title }}
          </h6>
        </template>
        <template v-else-if="canUserEdit">
          Редактирование результатов проекта
        </template>
        <template v-else>
          Просмотр результатов проекта
          <h6 style="font-weight: 500; line-height: normal">
            {{ dataProjectQuery.data.value?.project.title }}
          </h6></template
        >
      </h1>
    </header>
    <ProjectResultForm
      v-model:project-result-form-value="projectResultFormValue"
      :is-loading="isLoading"
      :can-user-edit="canUserEdit"
      :check-load-data-project="!isCurrentUserSupervisorOfDataProject"
      :project-state-id="dataProjectQuery.data.value?.project.state.id"
    />
    <div v-show="!isProjectStateArchived" :class="$style.actions">
      <BaseButton
        v-if="canUserEdit && !dataProjectQuery.isFetching.value"
        :disabled="isLoading"
        color="red"
        variant="outlined"
        @click="onCancel"
      >
        Отмена
      </BaseButton>

      <BaseButton
        v-if="canUserEdit"
        :disabled="isLoading"
        @click="onCreateUnderReview"
      >
        Сохранить
      </BaseButton>
    </div>
    <div v-show="isProjectStateArchived" :class="$style.actions">
      <BaseButton
        v-if="canUserEdit && !dataProjectQuery.isFetching.value"
        :disabled="isLoading"
        color="red"
        variant="outlined"
        @click="navigateBack"
      >
        Назад
      </BaseButton>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
  import { computed, ref } from '@vue/runtime-core';
  import { useRoute, useRouter } from 'vue-router';
  import { useToast } from 'vue-toastification';
  import PageLayout from '@/components/layout/PageLayout.vue';
  import ProjectResultForm from '@/components/project-proposal/ProjectResultForm.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import { ProjectResultFormValue } from '@/models/components/ProjectResultForm';
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import { useUpdateProjectResultMutation } from '@/api/SupervisorApi/hooks/useUpdateProjectResultMutation';
  import { useNavigateBack } from '@/hooks/useRoutes';
  import { useWatchAuthorization } from '@/hooks/useWatchAuthorization';
  import { collectProjectResult } from '@/helpers/project-result-form';
  import { RouteNames } from '@/router/types/route-names';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import { ProjectProposalStateId } from '@/models/ProjectProposal';

  useWatchAuthorization();
  const toast = useToast();
  const router = useRouter();
  const route = useRoute();
  const authStore = useAuthStore();
  const modalsStore = useModalsStore();
  const projectId = computed(() => Number(route.params.id));
  const navigateBack = useNavigateBack({
    name: RouteNames.SUPERVISOR_PROJECT_PROPOSALS,
  });

  const defaultProjectResultFormValue: ProjectResultFormValue = {
    projectResultDescription: '',
    projectResultGoal: null,
  };

  const projectResultFormValue = ref<ProjectResultFormValue>({
    ...defaultProjectResultFormValue,
  });

  const updateProjectResultMutation = useUpdateProjectResultMutation({
    onError,
  });

  const dataProjectQuery = useGetSingleProjectQuery(projectId);
  const isProjectStateArchived = computed(
    () => dataProjectQuery.data.value?.project.state.id == 4,
  );

  const isCurrentUserSupervisorOfDataProject = computed(() => {
    return dataProjectQuery.data.value?.project.supervisors.some(
      (supervisor) => {
        return supervisor.supervisor.id === authStore.profileData?.id;
      },
    );
  });

  const currentProjectProposalState = computed<
    ProjectProposalStateId | undefined
  >(
    () =>
      (dataProjectQuery.data.value?.project.state.id ||
        0) as ProjectProposalStateId,
  );

  const canUserEdit = computed(() => !currentProjectProposalState.value);

  const isLoading = computed(
    () =>
      updateProjectResultMutation.isLoading.value ||
      dataProjectQuery.isFetching.value,
  );

  function validateProjectProposal(): string | undefined {
    const { projectResultDescription } = projectResultFormValue.value;

    if (!projectResultDescription) {
      return 'Введите результат проекта';
    }

    return undefined;
  }

  function clearAllFields() {
    projectResultFormValue.value = {
      ...defaultProjectResultFormValue,
    };
  }

  function sendProjectResult() {
    const errorMessage = validateProjectProposal();
    if (errorMessage) {
      toast(errorMessage);
      return;
    }

    const project = dataProjectQuery.data.value?.project;
    if (project) {
      const projectResult = collectProjectResult(
        project ?? {},
        projectResultFormValue.value,
      );
      const id = project.id;

      if (id) {
        updateProjectResultMutation.mutate({ projectResult, id });
        onSuccessCreateForReview();
      } else {
        onError('проблема с обновлением данных проекта');
      }
    }
  }

  function onCreateUnderReview() {
    function agree() {
      modalsStore.openConfirmModal();
      sendProjectResult();
    }

    function disagree() {
      modalsStore.openConfirmModal();
    }

    modalsStore.openConfirmModal(
      'Сохранить результаты проекта?',
      'Сохранить',
      'Отмена',
      agree,
      disagree,
    );
  }

  function onSuccessCreateForReview() {
    const title = 'Результаты успешно созданы, вернуться в личный кабинет?';
    const agreeButtonTitle = 'вернуться в личный кабинет';
    const disagreeButtonTitle = 'редактировать результаты';

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

  function onCancel() {
    function agree() {
      modalsStore.openConfirmModal();
      router.push({ name: RouteNames.USER_PROJECTS });
    }

    function disagree() {
      modalsStore.openConfirmModal();
    }

    modalsStore.openConfirmModal(
      'Последние введенные данные не сохранятся, перейти в личный кабинет?',
      'отменить и выйти',
      'остаться',
      agree,
      disagree,
    );
  }

  function onError(error: unknown) {
    toast.error('Ошибка: ' + String(error));
  }

  function notCorrectSupervisor() {
    if (isCurrentUserSupervisorOfDataProject) return;

    router.push({ name: RouteNames.HOME });
    modalsStore.alertModalTitle = 'Вы не можете просматривать эту страницу';
    modalsStore.alertModalSubtitle =
      'Чтобы сформировать результаты данного проекта, Вам необходимо быть руководителем этого проекта';
  }

  notCorrectSupervisor();
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
