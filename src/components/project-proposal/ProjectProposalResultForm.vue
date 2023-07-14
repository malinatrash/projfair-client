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
          v-model="projectProposalResultForm.projectResultDescription"
          data-test-id="projectDescription"
          :disabled="!isEditable"
          :class="$style['large-textarea']"
          placeholder="Опишите результат проделанной работы над проектом"
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
        <template v-if="!isProjectStateArchived">
          <BaseRadioButton
            v-model="projectProposalResultForm.projectResultGoal"
            data-test-id="projectResultGoalAllGoalsRadioButton"
            :disabled="!isEditable"
            :value="ProjectResultGoal.AllGoals"
          >
            Проект достиг всех поставленных целей
          </BaseRadioButton>
          <BaseRadioButton
            v-model="projectProposalResultForm.projectResultGoal"
            data-test-id="projectResultGoalMoreGoalsRadioButton"
            :disabled="!isEditable"
            :value="ProjectResultGoal.MoreGoals"
          >
            Проект достиг большинство поставленных целей
          </BaseRadioButton>
          <BaseRadioButton
            v-model="projectProposalResultForm.projectResultGoal"
            data-test-id="projectResultGoalLessGoalsRadioButton"
            :disabled="!isEditable"
            :value="ProjectResultGoal.LessGoals"
          >
            Проект достиг минимальное количество целей
          </BaseRadioButton>
          <BaseRadioButton
            v-model="projectProposalResultForm.projectResultGoal"
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
          style="width: 28rem"
          :placeholder="
            ProjectResultGoalName[projectProposalResultForm.projectResultGoal]
          "
        />
      </BaseLabel>
      <!-- </Project name> -->
    </FormSection>

    <FormSection
      v-show="!isProjectStateArchived"
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
  import { toRefs } from '@vueuse/core';
  import { computed, reactive, ref, watch } from 'vue';
  import { watchEffect } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import BaseInput from '@/components/ui/BaseInput.vue';
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
    ProjectProposalResultFormValue,
    ProjectResultGoal,
  } from '@/models/components/ProjectProposalResultForm';
  import { ProjectResultGoalName } from '@/models/components/ProjectProposalResultForm';
  import { MultiselectObjectItem } from '@/models/components/VMultiselect';
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import { useSmallDevice } from '@/hooks/useBreakpoints';
  import { canViewParticipants } from '@/helpers/project';
  import { compareString } from '@/helpers/string';
  import { toProjectRoute } from '@/router/utils/routes';
  import { Candidate } from '@/models/Candidate';
  import { Project, Skill } from '@/models/Project';
  import { Specialty } from '@/models/Specialty';
  import { Supervisor } from '@/models/Supervisor';
  import { Tag } from '@/models/Tag';

  type Props = {
    projectProposalResultFormValue: ProjectProposalResultFormValue;
    canUserEdit?: boolean;
    isLoading?: boolean;
    prevProjectList?: Project[];
    supervisorList: Supervisor[];
    projectSkillList?: Skill[];
    specialtyList?: Specialty<number>[];
    themeSourceList?: Tag<number>[];
    projectJobDeveloper?: string;
  };
  type Emits = {
    (
      event: 'update:projectProposalResultFormValue',
      projectProposalResultFormValue: ProjectProposalResultFormValue,
    ): void;
  };

  const props = withDefaults(defineProps<Props>(), {
    canUserEdit: true,
    isLoading: false,
    prevProjectList: undefined,
    projectSkillList: undefined,
    specialtyList: undefined,
    supervisorList: undefined,
    themeSourceList: undefined,
    projectJobDeveloper: undefined,
    projectStateId: undefined,
  });
  const emit = defineEmits<Emits>();

  const { projectProposalResultFormValue, specialtyList } = toRefs(props);

  const isSmallDevice = useSmallDevice();
  const showSkillsEditModal = ref<boolean>(false);
  const showSpecialtyEditModal = ref<boolean>(false);
  const showAdditionalSpecialtyEditModal = ref<boolean>(false);

  const currentYear = new Date(Date.now()).getFullYear();
  const projectProposalResultForm = reactive<ProjectProposalResultFormValue>(
    props.projectProposalResultFormValue,
  );

  const isProjectStateArchived = computed(() => {
    if (props.projectStateId == 4) return true;
    return false;
  });

  const isEditable = computed(
    () =>
      !props.isLoading && props.canUserEdit && !isProjectStateArchived.value,
  );

  watch(
    () => props.projectProposalResultFormValue,
    (projectProposalResultFormValue) =>
      Object.assign<
        ProjectProposalResultFormValue,
        ProjectProposalResultFormValue
      >(projectProposalResultForm, projectProposalResultFormValue),
    { deep: true },
  );
  watch(
    () => projectProposalResultForm,
    (projectProposalResultForm) =>
      emit('update:projectProposalResultFormValue', projectProposalResultForm),
    { deep: true },
  );
  // watch(
  //   () => [projectDepartment.value?.id, isEditable.value],
  //   ([departmentId, isEditable], [prevDepartmentId]) => {
  //     if (!isEditable) return;
  //     if (!prevDepartmentId) return;
  //     if (departmentId === prevDepartmentId) return;
  //     projectProposalResultForm.specialtyList = [];
  //   },
  // );
  // watch(
  //   () => projectProposalResultForm.isNewProject,
  //   (isNewProject) => {
  //     if (isNewProject) projectProposalResultForm.prevProjectId = null;
  //   },
  // );

  //////////////////////////////////////////////////////////////////////////
  const router = useRouter();

  const route = useRoute();
  const projectId = computed(() => Number(route.params.id));
  const {
    isFetching,
    isError,
    data: projectData,
  } = useGetSingleProjectQuery(projectId);

  watchEffect(() => {
    const stateId = projectData.value?.project?.state.id;
    const projectId = projectData.value?.project?.id;
    if (projectId && stateId && !canViewParticipants(stateId)) {
      router.replace(toProjectRoute(projectId));
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
  //////////////////////////////////////////////////////////////////////////
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
