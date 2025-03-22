BaseLabel
<template>
  <BaseStub
    v-if="query.isLoading.value"
    title="Получем список студентов..."
    subtitle="Можете пока выпить чай :)"
  />
  <div
    v-else
    style="position: relative; display: flex; flex-direction: column; gap: 15px"
  >
    <div class="buttons">
      <BaseButton
        variant="outlined"
        class="previous-btn"
        :disabled="
          mutation.isLoading.value ||
          query.isLoading.value ||
          previousDistributionQuery.isLoading.value
        "
        @click="openConfirmGoBackToPreviousArmManualDistributionModal"
      >
        <Previous />
      </BaseButton>
      <BaseButton
        :disabled="
          mutation.isLoading.value ||
          query.isLoading.value ||
          previousDistributionQuery.isLoading.value
        "
        @click="openConfirmApplyManualDistributionModal"
        >Применить</BaseButton
      >
    </div>

    <Tumbler
      v-model="tumblerValue"
      :options="tumblerOptions"
      :animation="true"
      :disabled="
        mutation.isLoading.value ||
        query.isLoading.value ||
        previousDistributionQuery.isLoading.value
      "
    />

    <div class="distribution-wrapper" style="position: relative">
      <BasePanel
        v-for="institute in filteredTrainingGroups.keys()"
        :key="institute"
        class="institute-card"
      >
        <SimpleAccordion default-opened>
          <template #title>
            <div class="accordion-title">
              <p class="title" style="font-size: 22px">
                {{ institute }}
                <span class="title-description">
                  Кол-во студентов без проекта:
                  <span style="color: var(--accent-color-1)">{{
                    getStudentsCountForInstitute(institute)
                  }}</span>
                </span>
              </p>
            </div>
          </template>

          <template #content>
            <SimpleAccordion
              v-for="[group, students] in filteredTrainingGroups.get(institute)"
              :key="group"
            >
              <template #title>
                <div class="accordion-title">
                  <p class="title" style="font-size: 22px">
                    {{ group }}
                    <span style="font-size: 16px">
                      {{
                        (new Date().getMonth() >= 8
                          ? (new Date().getFullYear() % 100) + 1
                          : new Date().getFullYear() % 100) -
                        Number.parseInt(group.split('-')[1])
                      }}
                      курс
                    </span>
                    <span class="title-description">
                      Кол-во студентов без проекта:
                      <span style="color: var(--accent-color-1)">{{
                        students.length
                      }}</span>
                    </span>
                  </p>
                </div>
              </template>

              <template #content>
                <div
                  v-for="(student, index) in students"
                  :key="student.candidate_id"
                  :class="[
                    'student-card',
                    inputProject[student.candidate_id]
                      ? 'project-selected'
                      : '',
                  ]"
                  role="region"
                  :aria-label="`Студент ${student.fio}`"
                >
                  {{ index + 1 }}
                  <div class="icon-project">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4f5569"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-user"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>

                  <p class="title">
                    {{ student.fio }}
                    <span class="title-description">
                      id:
                      <span style="color: var(--accent-color-1)">
                        {{ student.candidate_id }}
                      </span>
                      | Группа:
                      <span style="color: var(--accent-color-1)">
                        {{ student.training_group }}
                      </span>
                    </span>
                  </p>

                  <div class="arrow-icon" v-html="arrowIcon"></div>

                  <VMultiselect
                    v-model="inputProject[student.candidate_id]"
                    data-test-id="prevProject"
                    :class="[
                      'multiselect',
                      inputProject[student.candidate_id] ? 'selected' : '',
                    ]"
                    placeholder="Выберите проект для распределения"
                    no-results-text="Проект не найден"
                    no-options-text="Проекты не найдены"
                    :searchable="true"
                    :options="
                      projects
                        .filter((project) =>
                          student.eligible_projects_ids.includes(
                            project.project_id,
                          ),
                        )
                        .map((project) =>
                          getEligibleProjectsForMultiselect(project),
                        )
                    "
                    :disabled="
                      mutation.isLoading.value ||
                      query.isLoading.value ||
                      query.isFetching.value
                    "
                    aria-label="Выбор проекта"
                  />
                </div>
              </template>
            </SimpleAccordion>
          </template>
        </SimpleAccordion>
      </BasePanel>
    </div>
  </div>
</template>

<script setup lang="ts">
  import VMultiselect from '@vueform/multiselect';
  import { computed, ref, watch, watchEffect } from 'vue';
  import { useQuery, useQueryClient } from 'vue-query';
  import { useToast } from 'vue-toastification';
  import Tumbler from './components/Tumbler.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import SimpleAccordion from '@/components/ui/accordion/SimpleAccordion.vue';
  import { USE_GET_ARM_PROJECTS_LIST_QUERY_KEY } from '../../api/ArmApi/hooks/useGetArmProjectsListQuery';
  import { armApi } from '@/api/ArmApi';
  import {
    USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY,
    useGetArmManualDistributionListQuery,
  } from '@/api/ArmApi/hooks/useGetArmManualDistributionListQuery';
  import { USE_GET_ARM_STUDENTS_LIST_QUERY_KEY } from '@/api/ArmApi/hooks/useGetArmStudentsListQuery';
  import { useUpdateArmManualDistributionMutation } from '@/api/ArmApi/hooks/useUpdateArmManualDistributionQuery';
  import { useModalsStore } from '../../stores/modals/useModalsStore';
  import {
    ArmManualDistributionCandidate,
    ArmManualDistributionEligibleProjects,
  } from '../../models/ArmManualDistribution';
  import { ArmManualDistribution } from '@/models/ArmManualDistribution';
  import Previous from '@/assets/icons/previous.svg';
  import arrowIcon from '@/assets/icons/user-role-select-arrow.svg?raw';

  const client = useQueryClient();
  const toast = useToast();
  const modalsStore = useModalsStore();

  enum TumblerType {
    WITH_PROJECTS = 'С проектами',
    WITHOUT_PROJECTS = 'Без проектов',
  }
  const tumblerOptions = [
    {
      label: TumblerType.WITH_PROJECTS,
      prefix: '',
    },
    {
      label: TumblerType.WITHOUT_PROJECTS,
      prefix: '',
    },
  ];
  const tumblerValue = ref(tumblerOptions[0].label);

  const query = useGetArmManualDistributionListQuery();
  const mutation = useUpdateArmManualDistributionMutation({
    onSuccess: () => {
      inputProject.value = {};
      client.invalidateQueries(USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY);
      client.invalidateQueries(USE_GET_ARM_PROJECTS_LIST_QUERY_KEY);
      client.invalidateQueries(USE_GET_ARM_STUDENTS_LIST_QUERY_KEY);
    },
  });

  const previousDistributionQuery = useQuery({
    enabled: false,
    queryKey: 'PREVIOUS_DISTRIBUTION_QUERY_KEY',
    queryFn: () => armApi.goBackToPreviousArmManualDistribution(),
    onSuccess: () => {
      toast.info('Было восстановлено предыдущее распределение');
      client.invalidateQueries(USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY);
    },
  });

  const goBackToPreviousArmManualDistribution = () => {
    previousDistributionQuery.refetch.value();
  };

  const inputProject = ref<{
    [x: number]: number | null;
  }>({});

  const projects = computed<ArmManualDistributionEligibleProjects[]>(() =>
    (query.data.value as ArmManualDistribution)?.eligible_projects
      .slice()
      .sort((a, b) => a.project_id - b.project_id),
  );

  const students = computed<ArmManualDistributionCandidate[]>(() =>
    (query.data.value as ArmManualDistribution)?.candidates
      .slice()
      .sort((a, b) => a.candidate_id - b.candidate_id),
  );
  const trainingGroups = computed(() => {
    const groupMap = new Map<string, ArmManualDistributionCandidate[]>();
    students.value?.forEach((student) => {
      if (!groupMap.has(student.training_group)) {
        groupMap.set(student.training_group, []);
      }
      groupMap.get(student.training_group)?.push(student);
    });
    return new Map(
      [...groupMap.entries()].sort((a, b) => a[0].localeCompare(b[0])),
    );
  });

  const filteredTrainingGroups = computed(() => {
    const hasProjects = tumblerValue.value === TumblerType.WITH_PROJECTS;
    const noProjects = tumblerValue.value === TumblerType.WITHOUT_PROJECTS;

    const studentHasProjects = (student: ArmManualDistributionCandidate) =>
      student.eligible_projects_ids.length > 0;
    const studentHasNoProjects = (student: ArmManualDistributionCandidate) =>
      student.eligible_projects_ids.length === 0;

    const filteredMap = new Map(
      [...trainingGroups.value.entries()].filter(([_, value]) => {
        if (!hasProjects && !noProjects) return false;

        tumblerOptions[0].prefix = `(${
          students.value.filter((student) => studentHasProjects(student)).length
        })`;
        tumblerOptions[1].prefix = `(${
          students.value.filter((student) => studentHasNoProjects(student))
            .length
        })`;

        return value.every((student) =>
          hasProjects
            ? studentHasProjects(student)
            : studentHasNoProjects(student),
        );
      }),
    );

    const groupedByInstitute = new Map<
      string,
      Map<string, ArmManualDistributionCandidate[]>
    >();
    for (const institute of filteredMap.entries()) {
      const group = institute[1];
      const groupName = institute[1]?.[0].training_group;
      const instituteName = institute[1]?.[0].institute_name;
      if (!groupedByInstitute.has(instituteName)) {
        groupedByInstitute.set(instituteName, new Map());
      }
      groupedByInstitute.get(instituteName)?.set(groupName, group);
    }
    return groupedByInstitute;
  });

  const getStudentsCountForInstitute = (instituteName: string) => {
    const group = filteredTrainingGroups.value.get(instituteName);
    let count = 0;
    group?.forEach((group) => {
      count += group.length;
    });
    return count;
  };

  const getEligibleProjectsForMultiselect = (
    project: ArmManualDistributionEligibleProjects,
  ) => ({
    label: `id: ${project.project_id} | Название: ${
      project.project_title
    } | Места: ${project.places} | Кол-во студентов: ${
      project.candidates_count
    } (+${
      students.value.filter(
        (stud) => inputProject.value[stud.candidate_id] === project.project_id,
      ).length
    })`,
    value: project.project_id,
  });

  const applyManualDistribution = () => {
    const updatedStudents = students.value.map((student) => ({
      ...student,
      selected_project: inputProject.value[student.candidate_id] ?? null,
    }));

    if (!updatedStudents.some((student) => student.selected_project)) {
      toast.info('Внесите какие нибудь изменения');

      return;
    }

    toast.success('Студенты успешно распределены по проектам');

    mutation.mutate(updatedStudents);
  };

  const openConfirmApplyManualDistributionModal = () => {
    modalsStore.openConfirmModal(
      'Вы хотите применить ручное распределение?',
      'Да',
      'Нет',
      () => {
        applyManualDistribution();
        modalsStore.closeConfirmModal();
      },
      modalsStore.closeConfirmModal,
    );
  };

  const openConfirmGoBackToPreviousArmManualDistributionModal = () => {
    modalsStore.openConfirmModal(
      'Вы хотите откатиться на предыдущее ручное распределение?',
      'Откат',
      'Отмена',
      () => {
        goBackToPreviousArmManualDistribution();
        modalsStore.closeConfirmModal();
      },
      modalsStore.closeConfirmModal,
    );
  };
</script>

<style lang="scss" scoped>
  .distribution-wrapper {
    height: calc(100vh - 50px);
    padding: 5px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--gray-color-1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--accent-color-2);
      border-radius: 100px;
    }
  }

  .buttons {
    position: absolute;
    top: -82.5px;
    right: 0;
    display: flex;
    gap: 15px;

    & > .previous-btn {
      padding: 0 12.5px;

      &:disabled:deep(path) {
        stroke: var(--gray-color-2);
      }

      &:hover:deep(path) {
        stroke: #fff;
      }
    }

    @media (width <= 900px) {
      position: relative;
      top: 0;
      justify-content: end;
      margin-bottom: 15px;
    }

    @media (width <= 430px) {
      & > button {
        width: 100%;
      }
    }
  }

  // .panel {
  //   padding: 20px;
  // }

  .title {
    font-size: 24px;
    line-height: normal;
    color: #4f5569;
  }

  .student-card {
    display: flex;
    gap: 15px;
    align-items: center;
    padding: 20px 15px;
    border-bottom: 1px solid var(--gray-color-1);
    transition: 0.15s ease-in-out;

    &.project-selected {
      border-left: 4px solid var(--accent-color-2);

      & .arrow-icon:deep(svg > path) {
        stroke: var(--accent-color-2);
      }
    }

    & .title {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
      font-size: 24px;
      line-height: normal;
      color: #4f5569;

      &-description {
        font-size: 16px;
        font-weight: 600;
        color: var(--gray-color-2);
      }
    }

    &:deep(.multiselect) {
      flex: 1;
      max-width: 400px;
      transition: 0.15s ease-in-out;

      & .multiselect-single-label {
        display: flex;
      }

      & .multiselect-placeholder {
        padding-right: 2rem;
        font-size: 16px !important;
        text-wrap: nowrap;
      }

      &.selected {
        box-shadow: 0 0 0 2px var(--accent-color-2);
      }

      & .multiselect-option:not(:last-child) {
        border-bottom: 1px solid var(--gray-color-1);
      }
    }

    &:deep(.multiselect-dropdown) {
      max-height: 375px;
      overscroll-behavior: none;

      & li > span {
        font-size: 16px !important;
      }
    }
  }

  // ////////////////////////////////////////////////////

  $padding: 20px;

  .panel {
    padding: 0 $padding;

    &:has(.accordion.opened) {
      padding-bottom: $padding;
    }
  }

  .input {
    $input-width: 85px;

    min-width: $input-width;
    max-width: $input-width;
    text-align: center;
  }

  .inner-accordion-content {
    & .title {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
      font-weight: 700;

      &-description {
        font-size: 16px;
        font-weight: 600;
        color: var(--gray-color-2);
      }
    }

    & > *:not(.accordion) {
      display: flex;
      flex-direction: row;
      gap: $padding;
      align-items: center;
      justify-content: space-between;
      padding: $padding 0;
      padding-right: 45px;
      border-bottom: 1px solid var(--gray-color-1);

      @media (width <= 500px) {
        flex-wrap: wrap;
      }
    }
  }

  .accordion {
    &-title {
      display: flex;
      gap: 15px;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: $padding 0;
      padding-right: 26.5px;

      & .title {
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;

        &-description {
          font-size: 16px;
          color: var(--gray-color-2);
        }
      }

      &:hover .title {
        color: var(--accent-color-1);
      }

      @media (width <= 500px) {
        flex-wrap: wrap;

        & .title {
          font-size: 20px;

          &-description {
            font-size: 14px;
          }
        }
      }
    }

    &.opened > header > button > div > p.title {
      color: var(--accent-color-1);
    }

    &.opened:deep(.header > button.title) {
      border-bottom: 1px solid var(--gray-color-1);
    }

    &.opened:deep(.content) {
      border-left: 2px dashed var(--gray-color-1);
      transition: 0.05s ease-in-out;

      // &:hover {
      //   border-left: 2px solid var(--accent-color-1);
      // }

      &:has(> .inner-accordion-content) {
        background-color: white;
        border-left: 4px solid var(--accent-color-2);
      }
    }

    &:deep(button.title) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }

    &:deep(.content) {
      padding-left: $padding;
    }
  }
</style>
