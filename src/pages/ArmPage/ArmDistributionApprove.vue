<template>
  <div style="position: relative">
    <div class="buttons">
      <BaseButton
        color="red"
        variant="outlined"
        class="previous-btn"
        style="padding: 12px 16px"
        :disabled="query.isLoading.value || mutation.isLoading.value"
        aria-label="Отмена переноса в БД"
        @click="openCancelExportConfirmModal"
      >
        <RestoreDb />
      </BaseButton>
      <BaseButton
        color="green"
        style="padding: 12px 16px"
        :disabled="query.isLoading.value || mutation.isLoading.value"
        aria-label="Внести в Базу данных"
        @click="openExportConfirmModal"
      >
        <ImportToDb />
      </BaseButton>
      <BaseButton
        :disabled="query.isLoading.value || mutation.isLoading.value"
        @click="openApplyManualDistributionConfirmModal"
        >Переместить студентов</BaseButton
      >
    </div>

    <BaseStub
      v-if="query.isLoading.value"
      title="Получем список проектов..."
      subtitle="Можете пока выпить чай :)"
    />

    <BasePanel
      v-for="institute in institutes"
      :key="institute.institute_id"
      class="institute-card"
    >
      <SimpleAccordion>
        <template #title>
          <div class="accordion-title">
            <p class="title">
              {{ institute.institute_name }}
              <span class="title-description">
                id:
                <span style="color: var(--accent-color-1)">{{
                  institute.institute_id
                }}</span>
                | Кол-во студентов на проектах:
                <span style="color: var(--accent-color-1)">{{
                  institute.departments
                    .flatMap((department) =>
                      department.projects.flatMap(
                        (project) => project.candidates.length,
                      ),
                    )
                    .reduce((pv, cur) => pv + cur, 0)
                }}</span>
                | Мин. кол-во мест на проект:
                <span style="color: var(--accent-color-1)">{{
                  institute.departments.map(
                    (department) =>
                      department.projects
                        .map((project) => project.places)
                        .sort((a, b) => a - b)[0],
                  )[0]
                }}</span>
              </span>
            </p>
          </div>
        </template>

        <template #content class="institute-content">
          <SimpleAccordion
            v-for="department in institute.departments
              .slice()
              .sort((a, b) => a.department_id - b.department_id)"
            :key="department.department_id"
          >
            <template #title>
              <div class="accordion-title">
                <p class="title" style="font-size: 22px">
                  Кафедра «{{ department.department_name }}»
                  <span class="title-description">
                    id:
                    <span style="color: var(--accent-color-1)">{{
                      department.department_id
                    }}</span>
                    | Кол-во студентов на проектах:
                    <span style="color: var(--accent-color-1)">{{
                      department.projects
                        .flatMap((project) => project.candidates.length)
                        .reduce((pv, cur) => pv + cur, 0)
                    }}</span>
                    | Мин. кол-во мест на проект:
                    <span style="color: var(--accent-color-1)">{{
                      department.projects
                        .map((project) => project.places)
                        .sort((a, b) => a - b)[0]
                    }}</span>
                  </span>
                </p>
              </div>
            </template>

            <template #content class="institute-content">
              <SimpleAccordion
                v-for="project in department.projects
                  .slice()
                  .sort((a, b) => a.project_id - b.project_id)"
                :key="project.project_id"
              >
                <template #title>
                  <div class="accordion-title">
                    <p class="title" style="font-size: 20px">
                      Проект «{{ project.title }}»
                      <span class="title-description">
                        id:
                        <span style="color: var(--accent-color-1)">{{
                          project.project_id
                        }}</span>
                        | Кол-во студентов в проекте:
                        <span style="color: var(--accent-color-1)">{{
                          project.candidates_count
                        }}</span>
                        | Размер проектной команды:
                        <span style="color: var(--accent-color-1)">{{
                          project.places
                        }}</span>
                      </span>
                      <span class="title-description">
                        Специальности:
                        <span style="color: var(--accent-color-1)">{{
                          [
                            ...new Set(
                              project.specialities.map((spec) => spec.name),
                            ),
                          ].join(', ')
                        }}</span>
                      </span>
                    </p>
                    <BaseButton
                      is="a"
                      variant="tag-outlined"
                      style="padding: 2.5px 10px"
                      @click="goToProject(project.project_id)"
                      >Перейти на проект ↗</BaseButton
                    >
                  </div>
                </template>

                <template #content class="institute-content">
                  <div class="inner-accordion-content">
                    <div
                      v-for="(participation, index) in project.candidates
                        .slice()
                        .sort((a, b) => a.candidate_id - b.candidate_id)"
                      :key="participation.candidate_id"
                      :class="[
                        'student-card',
                        inputProject[participation.candidate_id]
                          ? 'project-selected'
                          : '',
                      ]"
                      role="region"
                      :aria-label="`Студент ${participation.fio}`"
                    >
                      <div
                        class="icon-project"
                        style="display: flex; gap: 15px; align-items: center"
                      >
                        {{ index + 1 }}
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
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>

                      <p class="title" style="font-size: 20px">
                        <span style="font-weight: bold">
                          {{ participation.fio }}
                        </span>
                        <span class="title-description">
                          id:
                          <span style="color: var(--accent-color-1)">{{
                            participation.candidate_id
                          }}</span>
                          <br />
                          Группа:
                          <span style="color: var(--accent-color-1)">{{
                            participation.training_group
                          }}</span>
                          <br />
                          Приоритет:
                          <span style="color: var(--accent-color-1)">{{
                            participation.priority
                          }}</span>
                        </span>
                      </p>

                      <div class="arrow-icon" v-html="ArrowIcon"></div>

                      <VMultiselect
                        v-model="inputProject[participation.candidate_id]"
                        :class="[
                          'multiselect',
                          inputProject[participation.candidate_id]
                            ? 'selected'
                            : '',
                        ]"
                        placeholder="Выберите проект для распределения"
                        no-results-text="Проект не найден"
                        no-options-text="Проекты не найдены"
                        :searchable="true"
                        :options="
                          eligibleProjects
                            .filter(
                              (projectInner) =>
                                participation.eligible_projects_ids.includes(
                                  projectInner.project_id,
                                ) &&
                                projectInner.project_id != project.project_id,
                            )
                            .map((projectInner) =>
                              getEligibleProjectsForMultiselect(
                                projectInner,
                                project.candidates,
                              ),
                            )
                        "
                        :disabled="
                          mutation.isLoading.value ||
                          query.isLoading.value ||
                          query.isFetching.value
                        "
                        aria-label="Выбор проекта"
                        @change="
                          handleMultiselectChange(
                            $event,
                            participation,
                            project.project_id,
                            department.department_id,
                            institute.institute_id,
                          )
                        "
                      />
                    </div>
                  </div>
                </template>
              </SimpleAccordion>
            </template>
          </SimpleAccordion>
        </template>
      </SimpleAccordion>
    </BasePanel>
  </div>
</template>

<script setup lang="ts">
  import { computed } from '@vue/runtime-core';
  import VMultiselect from '@vueform/multiselect';
  import { ref } from 'vue';
  import { useToast } from 'vue-toastification';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import SimpleAccordion from '@/components/ui/accordion/SimpleAccordion.vue';
  import { useGetArmApproveDistributionProjectsListQuery } from '../../api/ArmApi/hooks/useGetArmApproveDistributionProjectsListQuery';
  import { useUpdateArmApproveDistributionProjectsListMutation } from '../../api/ArmApi/hooks/useUpdateApproveDistributionProjectsList';
  import { armApi } from '@/api/ArmApi';
  import { useModalsStore } from '../../stores/modals/useModalsStore';
  import {
    ArmDistributionApproveCandidate,
    ArmDistributionApproveEligibleProject,
    ArmDistributionApproveInstitute,
    UpdateArmDistributionApprove,
  } from '../../models/ArmDistributionApprove';
  import ImportToDb from '@/assets/icons/import-to-db.svg';
  import RestoreDb from '@/assets/icons/restore-db.svg';
  import ArrowIcon from '@/assets/icons/user-role-select-arrow.svg?raw';

  const toast = useToast();
  const modalsStore = useModalsStore();

  const goToProject = (projectId: number) => {
    window.open(`/project/${projectId}`, '_blank');
  };

  const openExportConfirmModal = () => {
    const agree = () => {
      armApi.exportCandidatesToDB();
      modalsStore.closeConfirmModal();
    };
    const disagree = () => {
      modalsStore.closeConfirmModal();
    };
    modalsStore.openConfirmModal(
      'Вы хотите внести результат распределения в БД?',
      'Да',
      'Нет',
      agree,
      disagree,
    );
  };

  const openCancelExportConfirmModal = () => {
    const agree = () => {
      armApi.cancelExportCandidatesToDB();
      modalsStore.closeConfirmModal();
    };
    const disagree = () => {
      modalsStore.closeConfirmModal();
    };
    modalsStore.openConfirmModal(
      'Вы хотите откатить перенос результата в БД?',
      'Да',
      'Нет',
      agree,
      disagree,
    );
  };

  const inputProject = ref<{
    [studentId: number]: number | null;
  }>({});

  const updatedProjects: {
    [studentId: number]: UpdateArmDistributionApprove;
  } = {};

  const query = useGetArmApproveDistributionProjectsListQuery();
  const mutation = useUpdateArmApproveDistributionProjectsListMutation({
    onSuccess: () => {
      toast.success('Студенты успешно перемещены по проектам');
      inputProject.value = {};
      for (const key of Object.keys(updatedProjects)) {
        delete updatedProjects[Number.parseInt(key)];
      }
    },
  });

  const institutes = computed<ArmDistributionApproveInstitute[]>(
    () =>
      query.data.value?.projects
        .slice()
        .sort(
          (
            a: ArmDistributionApproveInstitute,
            b: ArmDistributionApproveInstitute,
          ) => a.institute_id - b.institute_id,
        ) as ArmDistributionApproveInstitute[],
  );

  const eligibleProjects = computed<ArmDistributionApproveEligibleProject[]>(
    () =>
      query.data.value?.eligible_projects
        .slice()
        .sort(
          (
            a: ArmDistributionApproveEligibleProject,
            b: ArmDistributionApproveEligibleProject,
          ) => a.project_id - b.project_id,
        ) as ArmDistributionApproveEligibleProject[],
  );

  const getEligibleProjectsForMultiselect = (
    project: ArmDistributionApproveEligibleProject,
    candidates: ArmDistributionApproveCandidate[],
  ) => ({
    label: `id: ${project.project_id} | Название: ${
      project.project_title
    } | Места: ${project.places} | Кол-во студентов: ${
      project.candidates_count
    } (+${
      candidates.filter(
        (stud) => inputProject.value[stud.candidate_id] === project.project_id,
      ).length
    })`,
    value: project.project_id,
  });

  const handleMultiselectChange = (
    selectedProjectId: any,
    participation: ArmDistributionApproveCandidate,
    currentProjectId: number,
    currentDepartmentId: number,
    currentInstituteId: number,
  ) => {
    if (selectedProjectId) {
      const selectedProject = eligibleProjects.value.find(
        (project) => project.project_id === selectedProjectId,
      )!;

      updatedProjects[participation.candidate_id] = {
        candidate_id: participation.candidate_id,
        project_id: currentProjectId,
        department_id: currentDepartmentId,
        institute_id: currentInstituteId,
        selected_project_id: selectedProjectId,
        selected_department_id: selectedProject.department_id,
        selected_institute_id: selectedProject.institute_id,
      };
    } else {
      delete updatedProjects[participation.candidate_id];
    }
  };

  const moveStudentsToDifferentProjects = () => {
    const result: UpdateArmDistributionApprove[] = [];

    for (const key of Object.keys(updatedProjects)) {
      result.push(updatedProjects[Number.parseInt(key)]);
    }

    if (result.length === 0) {
      toast.info('Внесите какие нибудь изменения');
      return;
    }

    mutation.mutate(result);
  };

  const openApplyManualDistributionConfirmModal = () => {
    const agree = () => {
      moveStudentsToDifferentProjects();
      modalsStore.closeConfirmModal();
    };
    const disagree = () => {
      modalsStore.closeConfirmModal();
    };
    modalsStore.openConfirmModal(
      'Вы хотите переместить студентов по другим проектам?',
      'Да',
      'Нет',
      agree,
      disagree,
    );
  };
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  $padding: 20px;

  .buttons {
    position: absolute;
    top: -82.5px;
    right: 0;
    display: flex;
    gap: 15px;

    & > .previous-btn {
      &:disabled:deep(path) {
        stroke: var(--gray-color-2);
      }

      &:hover:deep(path) {
        stroke: #fff;
      }
    }

    @media (width <= 1175px) {
      position: relative;
      top: 0;
      justify-content: end;
      margin-bottom: 15px;
    }

    @media (width <= 505px) {
      flex-direction: column-reverse;
    }
  }

  .panel {
    padding: 0 $padding;

    &:has(.accordion.opened) {
      padding-bottom: $padding;
    }
  }

  .title {
    font-size: 24px;
    line-height: normal;
    color: #4f5569;

    @media (width <= $tablet) {
      font-size: 22px;
    }
  }

  .input {
    $input-width: 85px;

    min-width: $input-width;
    max-width: $input-width;
    text-align: center;
  }

  .accordion {
    &-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: $padding 0;
      padding-right: 26.5px;

      @media (width <= 700px) {
        flex-direction: column;
        gap: 15px;
        align-items: start !important;
      }

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

  .inner-accordion-content {
    & > *:not(.accordion) {
      display: flex;
      flex-direction: row;
      gap: $padding;
      align-items: center;
      justify-content: space-between;
      padding: $padding 0;
      padding-right: 45px;
      border-bottom: 1px solid var(--gray-color-1);
    }

    & > .student-card {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      align-items: center;
      padding: 20px 15px;
      border-bottom: 1px solid var(--gray-color-1);
      transition: 0.15s ease-in-out;

      @media (width <= 700px) {
        flex-direction: column;

        & .title {
          width: 100%;
          text-align: center;
        }

        & .icon-project {
          flex-direction: column;
        }

        & .arrow-icon {
          rotate: 90deg;
        }
      }

      &.project-selected {
        // border-left: 4px solid var(--accent-color-2);

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
        min-width: 300px;
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
  }
</style>
