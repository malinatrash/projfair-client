<template>
  <div style="position: relative">
    <div class="buttons">
      <BaseButton
        variant="outlined"
        class="previous-btn"
        :disabled="query.isLoading.value"
        @click="openCancelExportConfirmModal"
      >
        Отмена переноса в БД
      </BaseButton>
      <BaseButton
        :disabled="query.isLoading.value"
        @click="openExportConfirmModal"
        >Внести в Базу данных</BaseButton
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
                    </p>
                  </div>
                </template>

                <template #content class="institute-content">
                  <div class="inner-accordion-content">
                    <div
                      v-for="participation in project.candidates
                        .slice()
                        .sort((a, b) => a.candidate_id - b.candidate_id)"
                      :key="participation.candidate_id"
                    >
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
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>

                      <p class="title" style="font-size: 20px">
                        {{ participation.fio }}
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
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import SimpleAccordion from '@/components/ui/accordion/SimpleAccordion.vue';
  import { useGetArmApproveDistributionProjectsListQuery } from '../../api/ArmApi/hooks/useGetArmApproveDistributionProjectsListQuery';
  import { armApi } from '@/api/ArmApi';
  import { useModalsStore } from '../../stores/modals/useModalsStore';
  import { ArmInstitute } from '@/models/ArmProjects';

  const modalsStore = useModalsStore();

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

  const query = useGetArmApproveDistributionProjectsListQuery();

  const institutes = computed<ArmInstitute[]>(
    () =>
      query.data.value?.projects
        .slice()
        .sort(
          (a: ArmInstitute, b: ArmInstitute) => a.institute_id - b.institute_id,
        ) as ArmInstitute[],
  );
</script>

<style lang="scss" scoped>
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
      flex-direction: column;
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
    }
  }

  .accordion {
    &-title {
      display: flex;
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
</style>
