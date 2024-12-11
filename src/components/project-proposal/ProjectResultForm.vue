<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <BasePanel>
    <FormSection
      :class="$style['project-result-section']"
      tag="1"
      title="Описание проделанной работы"
      divider
    >
      <!-- <Project result> -->
      <BaseLabel :required="!isProjectStateArchived" label="Результат проекта">
        <BaseTextarea
          v-if="!isProjectStateArchived || authStore.isStudent"
          v-model="projectResultForm.projectResultDescription"
          data-test-id="projectDescription"
          :disabled="!isEditable"
          :showMaxLength="isEditable"
          :class="$style['large-textarea']"
          :placeholder="
            !isProjectStateArchived || authStore.isStudent
              ? 'Опишите результат проделанной работы над проектом'
              : projectData?.project.project_review
          "
          :maxLength="1200"
          resize="vertical"
        />
        <span
          v-else
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{ projectResultForm.projectResultDescription }}
        </span>
      </BaseLabel>
      <!-- </Project result> -->
    </FormSection>

    <FormSection
      :class="$style['project-data-section']"
      tag="2"
      title="Достижение целей"
      :divider="
        !isProjectStateArchived ||
        projectData?.project.supervisors.some(
          (supervisor) =>
            supervisor.supervisor.id === authStore.profileData?.id,
        )
      "
    >
      <!-- <Project name> -->
      <BaseLabel
        is="fieldset"
        :class="$style['radio-buttons-label']"
        label="Достиг ли проект поставленных целей?"
        :required="!isProjectStateArchived"
      >
        <template v-if="!isProjectStateArchived || authStore.isStudent">
          <BaseRadioButton
            v-model="projectResultForm.projectResultGoal"
            data-test-id="projectResultGoalAllGoalsRadioButton"
            :disabled="!isEditable"
            :value="ProjectResultGoal.AllGoals"
          >
            Проект достиг всех поставленных целей
          </BaseRadioButton>
          <BaseRadioButton
            v-model="projectResultForm.projectResultGoal"
            data-test-id="projectResultGoalMoreGoalsRadioButton"
            :disabled="!isEditable"
            :value="ProjectResultGoal.MoreGoals"
          >
            Проект достиг большинство поставленных целей
          </BaseRadioButton>
          <BaseRadioButton
            v-model="projectResultForm.projectResultGoal"
            data-test-id="projectResultGoalLessGoalsRadioButton"
            :disabled="!isEditable"
            :value="ProjectResultGoal.LessGoals"
          >
            Проект достиг минимальное количество целей
          </BaseRadioButton>
          <BaseRadioButton
            v-model="projectResultForm.projectResultGoal"
            data-test-id="projectResultGoalNoGoalsRadioButton"
            :disabled="!isEditable"
            :value="ProjectResultGoal.NoGoals"
          >
            Проект не достиг поставленных целей
          </BaseRadioButton>
        </template>
        <span
          v-else
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{
            ProjectResultGoalName[
              projectData?.project.project_goal as ProjectResultGoal
            ] ?? 'Цели не найдены'
          }}
        </span>
      </BaseLabel>
      <!-- </Project name> -->
    </FormSection>

    <FormSection
      v-if="
        !isProjectStateArchived &&
        projectData?.project.supervisors.some(
          (supervisor) =>
            supervisor.supervisor.id === authStore.profileData?.id,
        )
      "
      :class="$style['project-result-section']"
      tag="3"
      title="Оценка участников проекта"
    >
      <!-- <Project team> -->
      <BaseResultTable
        v-if="
          projectData &&
          sortedParticipants.length > 0 &&
          !isFetching &&
          !isError
        "
        class="table"
        :headers="['№', 'ФИО', 'Группа', 'Оценка']"
        :rows="tableRows"
        :ids="tableIds"
      />

      <BasePanel v-else>
        <BaseStub
          v-if="isFetching"
          title="Обновляем список :О"
          subtitle="Подождите, пока обновится список."
        />
        <BaseStub
          v-else-if="projectData.project.participants"
          title="Нет участников :("
          subtitle="Пока на этом проекте нет участников."
        />
      </BasePanel>
      <!-- </Project team> -->
    </FormSection>

    <div v-show="!isProjectStateArchived" :class="$style.actions">
      <BaseButton
        v-if="isCurrentUserSupervisorOfDataProject && !isFetching"
        :disabled="isLoading"
        color="red"
        variant="outlined"
        @click="onCancel"
      >
        Отмена
      </BaseButton>

      <BaseButton
        v-if="isCurrentUserSupervisorOfDataProject"
        :disabled="isLoading"
        @click="onCreateUnderReview"
      >
        Сохранить
      </BaseButton>
    </div>
    <div v-show="isProjectStateArchived" :class="$style.actions">
      <BaseButton
        v-if="isCurrentUserSupervisorOfDataProject && !isFetching"
        :disabled="isLoading"
        color="red"
        variant="outlined"
        @click="navigateBack"
      >
        Назад
      </BaseButton>
    </div>
  </BasePanel>
</template>

<script setup lang="ts">
  import { computed, reactive, watchEffect } from '@vue/runtime-core';
  import { onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useToast } from 'vue-toastification';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseRadioButton from '@/components/ui/BaseRadioButton.vue';
  import BaseResultTable, {
    RowData,
    idData,
  } from '@/components/ui/BaseResultTable.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import BaseTextarea from '@/components/ui/BaseTextarea.vue';
  import FormSection from '@/components/ui/FormSection.vue';
  import BaseLabel from '@/components/ui/label/BaseLabel.vue';
  import {
    ProjectResultFormValue,
    ProjectResultGoal,
    ProjectResultGoalName,
  } from '@/models/components/ProjectResultForm';
  import { useUpdateProjectResultMutation } from '../../api/SupervisorApi/hooks/useUpdateProjectResultMutation';
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import { useNavigateBack } from '../../hooks/useRoutes';
  import { isMobile } from '@/helpers/mobile';
  import { canViewParticipants } from '@/helpers/project';
  import { collectProjectResult } from '@/helpers/project-result-form';
  import { compareString } from '@/helpers/string';
  import { RouteNames } from '@/router/types/route-names';
  import { toProjectRoute } from '@/router/utils/routes';
  import { useAuthStore } from '../../stores/auth/useAuthStore';
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import { Candidate } from '@/models/Candidate';
  import { ProjectSupervisor } from '@/models/Project';
  import BaseButton from '../ui/BaseButton.vue';

  const authStore = useAuthStore();
  const modalsStore = useModalsStore();
  const toast = useToast();

  const projectResultForm = reactive<ProjectResultFormValue>({
    projectResultDescription: '',
    projectResultGoal: ProjectResultGoal['AllGoals'],
  });

  const navigateBack = useNavigateBack({
    name: RouteNames.SUPERVISOR_PROJECT_PROPOSALS,
  });

  const router = useRouter();
  const route = useRoute();

  const projectId = computed(() => Number(route.params.id));
  const {
    refetch,
    isFetching,
    isError,
    data: projectData,
  } = useGetSingleProjectQuery(projectId);

  const isCurrentUserSupervisorOfDataProject = computed(() =>
    projectData.value?.project.supervisors.some(
      (supervisor: ProjectSupervisor) =>
        supervisor.supervisor.id === authStore.profileData?.id,
    ),
  );

  const isProjectStateActive = computed(() => {
    if (projectData.value?.project.state.id == 2) return true;
    return false;
  });

  const isProjectStateArchived = computed(() => {
    if (projectData.value?.project.state.id == 4) return true;
    return false;
  });

  const isEditable = computed(
    () =>
      !isLoading.value &&
      isCurrentUserSupervisorOfDataProject.value &&
      !isProjectStateArchived.value,
  );

  watchEffect(() => {
    const stateId = projectData.value?.project?.state.id;
    const projectId = projectData.value?.project?.id;
    if (projectId && stateId && !canViewParticipants(stateId)) {
      router.replace(toProjectRoute(projectId));
    }
    if (isProjectStateActive.value) {
      projectResultForm.projectResultDescription =
        projectData.value?.project?.project_review ?? '';
      projectResultForm.projectResultGoal =
        (projectData.value?.project?.project_goal as ProjectResultGoal) ?? 1;
    }
    if (isProjectStateArchived.value) {
      projectResultForm.projectResultDescription =
        projectData.value?.project?.project_review ?? 'Результаты не найдены';
      projectResultForm.projectResultGoal =
        (projectData.value?.project?.project_goal as ProjectResultGoal) ?? null;
    }
  });

  const sortedParticipants = computed<Candidate[]>(() => {
    if (!projectData.value) return [];
    const participants = projectData.value.project.participants || [];
    return [...participants].sort((a, b) =>
      compareString(a.fio.toLowerCase(), b.fio.toLowerCase()),
    );
  });

  const tableIds = computed<idData[]>(() =>
    sortedParticipants.value.map(({ id, fio }) => ({
      key: String(id),
      id: [id],
      name: [fio],
    })),
  );

  const tableRows = computed<RowData[]>(() =>
    sortedParticipants.value.map(({ fio, training_group, id }, index) => ({
      key: String(id),
      data: [index + 1, fio, training_group],
    })),
  );

  onMounted(() => {
    if (isMobile()) {
      modalsStore.openAlertModal(
        'Внимание',
        'Пожалуйста, используйте настольную версию сайта, чтобы использовать эту функцию!',
      );
    }
  });

  watchEffect(() => {
    if (
      !isCurrentUserSupervisorOfDataProject.value &&
      isProjectStateActive.value
    ) {
      router.push({
        name: RouteNames.HOME,
      });
      modalsStore.alertModalTitle = 'Вы не можете просматривать эту страницу';
      modalsStore.alertModalSubtitle =
        'Чтобы сформировать результаты данного проекта, Вам необходимо быть руководителем этого проекта';
    }
  });

  const updateProjectResultMutation = useUpdateProjectResultMutation({
    onError,
  });

  const isLoading = computed(
    () => updateProjectResultMutation.isLoading.value || isFetching.value,
  );

  function validateProjectProposal(): string | undefined {
    if (!projectResultForm.projectResultDescription) {
      return 'Введите результат проекта';
    }

    return undefined;
  }

  function sendProjectResult() {
    const errorMessage = validateProjectProposal();
    if (errorMessage) {
      toast(errorMessage);
      return;
    }

    const project = projectData.value?.project;
    if (project) {
      const projectResult = collectProjectResult(
        project ?? {},
        projectResultForm,
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
</script>

<style lang="scss" module>
  .radio-buttons-label {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    justify-self: flex-start;
  }

  .small-textarea {
    min-height: 8.375rem;
  }

  .large-textarea {
    min-height: 21.25rem;
  }

  .project-result-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.875rem;
  }

  .institute-input {
    margin-bottom: 1.5rem;
  }

  .project-team-section {
    display: grid;
    grid-template-columns: 4fr 1fr 3fr;
    column-gap: 1.5rem;

    & > *:nth-child(1) {
      grid-column: 1;
    }

    & > *:nth-child(2) {
      grid-column: 1;
    }

    & > *:nth-child(3) {
      grid-column: 1 / -1;
    }
  }

  .project-data-section {
    display: grid;
    grid-template-columns: 4fr 1fr 3fr;
    gap: 1.5rem;

    & > *:nth-child(1) {
      grid-column: 1;
    }

    & > *:nth-child(2) {
      grid-column: 1;
    }

    & > *:nth-child(3) {
      grid-column: 1;
    }

    & > *:nth-child(4) {
      grid-column: 1;
    }

    & > *:nth-child(5) {
      grid-row: 1;
      grid-column: 3;
    }

    & > *:nth-child(6) {
      grid-row: 2;
      grid-column: 3;
    }
  }

  .project-results-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem;

    & > *:nth-child(1) {
      grid-column: 1;
    }

    & > *:nth-child(2) {
      grid-column: 2;
    }

    & > *:nth-child(3) {
      grid-row: 2;
      grid-column: 1 / -1;
    }
  }

  .actions {
    display: flex;
    gap: 0.9375rem;
    justify-content: flex-end;
    margin-top: 1.5rem;
  }
</style>
