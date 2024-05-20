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
          v-model="projectResultForm.projectResultDescription"
          data-test-id="projectDescription"
          :disabled="!isEditable"
          :showMaxLength="isEditable"
          :class="$style['large-textarea']"
          :placeholder="
            !isProjectStateArchived || authStore.isStudent
              ? 'Опишите результат проделанной работы над проектом'
              : computedProject?.project_review
          "
          :maxLength="1200"
          resize="vertical"
        />
      </BaseLabel>
      <!-- </Project result> -->
    </FormSection>

    <FormSection
      :class="$style['project-data-section']"
      tag="2"
      title="Достижение целей"
      :divider="!isProjectStateArchived"
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
        <BaseTextarea
          v-else
          data-test-id="projectDescription"
          :disabled="!isEditable"
          :showMaxLength="isEditable"
          style="width: 28rem"
          :placeholder="
            ProjectResultGoalName[computedProject?.project_goal as ProjectResultGoal ?? 1]
          "
        />
      </BaseLabel>
      <!-- </Project name> -->
    </FormSection>

    <FormSection
      v-if="!isProjectStateArchived || authStore.isStudent"
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
          title="Нет участников :("
          subtitle="Пока на этом проекте нет участников, возможно, мы ещё не успели обновить данные."
        />
      </BasePanel>
      <!-- </Project team> -->
    </FormSection>
  </BasePanel>
</template>

<script setup lang="ts">
  import { computed, reactive, watch, watchEffect } from '@vue/runtime-core';
  import { onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
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
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import { isMobile } from '@/helpers/mobile';
  import { canViewParticipants } from '@/helpers/project';
  import { compareString } from '@/helpers/string';
  import { toProjectRoute } from '@/router/utils/routes';
  import { useAuthStore } from '../../stores/auth/useAuthStore';
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import { Candidate } from '@/models/Candidate';

  const authStore = useAuthStore();
  const modalsStore = useModalsStore();

  onMounted(() => {
    if (isMobile()) {
      modalsStore.openAlertModal(
        'Внимание',
        'Пожалуйста, используйте настольную версию сайта, чтобы использовать эту функцию!',
      );
    }
  });

  type Props = {
    projectResultFormValue: ProjectResultFormValue;
    canUserEdit?: boolean;
    isLoading?: boolean;
  };
  type Emits = {
    (
      event: 'update:projectResultFormValue',
      projectResultFormValue: ProjectResultFormValue,
    ): void;
  };

  const props = withDefaults(defineProps<Props>(), {
    canUserEdit: true,
    isLoading: false,
  });
  const emit = defineEmits<Emits>();

  const projectResultForm = reactive<ProjectResultFormValue>(
    props.projectResultFormValue,
  );

  watch(
    () => props.projectResultFormValue,
    (projectResultFormValue) =>
      Object.assign<ProjectResultFormValue, ProjectResultFormValue>(
        projectResultForm,
        projectResultFormValue,
      ),
    { deep: true },
  );
  watch(
    () => projectResultForm,
    (projectResultForm) =>
      emit('update:projectResultFormValue', projectResultForm),
    { deep: true },
  );

  const router = useRouter();

  const route = useRoute();
  const projectId = computed(() => Number(route.params.id));
  const {
    isFetching,
    isError,
    data: projectData,
  } = useGetSingleProjectQuery(projectId);

  const computedProject = computed((isFetching) => {
    return projectData.value?.project;
  });

  const isProjectStateArchived = computed(() => {
    if (projectData.value?.project.state.id == 4) return true;
    return false;
  });

  const isEditable = computed(
    () =>
      !props.isLoading && props.canUserEdit && !isProjectStateArchived.value,
  );

  watchEffect(() => {
    const stateId = projectData.value?.project?.state.id;
    const projectId = projectData.value?.project?.id;
    if (projectId && stateId && !canViewParticipants(stateId)) {
      router.replace(toProjectRoute(projectId));
    }
    projectResultForm.projectResultDescription =
      projectData.value?.project?.project_review ?? '';
    projectResultForm.projectResultGoal =
      (projectData.value?.project?.project_goal as ProjectResultGoal) ??
      ProjectResultGoalName[1];
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
</style>
