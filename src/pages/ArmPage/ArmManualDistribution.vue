BaseLabel
<template>
  <div style="position: relative">
    <div class="buttons">
      <BaseButton
        variant="outlined"
        class="previous-btn"
        :disabled="
          mutation.isLoading.value ||
          query.isLoading.value ||
          previousDistributionQuery.isLoading.value
        "
        @click="goBackToPreviousArmManualDistribution"
      >
        <Previous />
      </BaseButton>
      <BaseButton
        :disabled="mutation.isLoading.value || query.isLoading.value"
        @click="apply"
        >Применить</BaseButton
      >
    </div>

    <div class="distribution-wrapper" style="position: relative">
      <BaseStub
        v-if="query.isLoading.value"
        title="Получем список студентов..."
        subtitle="Можете пока выпить чай :)"
      />

      <BasePanel
        v-for="student in students"
        :key="student.candidate_id"
        :class="[
          'student-card',
          inputProject[student.candidate_id] ? 'project-selected' : '',
        ]"
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
          no-results-text="Проект
          не найден"
          no-options-text="Проекты не найдены"
          :searchable="true"
          :options="
            student.eligible_projects.map((project) => ({
              label: `id: ${project.project_id} | Название: ${project.project_title} | Места: ${project.places} | Кол-во студентов: ${project.candidates_count}`,
              value: project.project_id,
            }))
          "
          :disabled="mutation.isLoading.value || query.isLoading.value"
        />
      </BasePanel>
    </div>
  </div>
</template>

<script setup lang="ts">
  import VMultiselect from '@vueform/multiselect';
  import { computed, ref } from 'vue';
  import { useQuery, useQueryClient } from 'vue-query';
  import { useToast } from 'vue-toastification';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import { armApi } from '@/api/ArmApi';
  import {
    USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY,
    useGetArmManualDistributionListQuery,
  } from '@/api/ArmApi/hooks/useGetArmManualDistributionListQuery';
  import { useUpdateArmManualDistributionMutation } from '@/api/ArmApi/hooks/useUpdateArmManualDistributionQuery';
  import { ArmManualDistribution } from '@/models/ArmManualDistribution';
  import Previous from '@/assets/icons/previous.svg';
  import arrowIcon from '@/assets/icons/user-role-select-arrow.svg?raw';

  const client = useQueryClient();
  const toast = useToast();

  const query = useGetArmManualDistributionListQuery();
  const mutation = useUpdateArmManualDistributionMutation({
    onSuccess: () => {
      inputProject.value = {};
      client.invalidateQueries(USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY);
    },
  });

  const previousDistributionQuery = useQuery({
    enabled: false,
    queryKey: 'PREVIOUS_DISTRIBUTION_QUERY_KEY',
    queryFn: () => armApi.goBackToPreviousArmManualDistribution(),
    onSuccess: () => {
      toast.info('Было восстановлено предыдущее распределение');
      client.invalidateQueries(
        'USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY',
      );
    },
  });

  const goBackToPreviousArmManualDistribution = () => {
    previousDistributionQuery.refetch.value();
  };

  const inputProject = ref<{
    [x: number]: number | null;
  }>({});

  const students = computed<ArmManualDistribution[]>(
    () =>
      query.data.value
        ?.slice()
        .sort(
          (a: ArmManualDistribution, b: ArmManualDistribution) =>
            a.candidate_id - b.candidate_id,
        ) as ArmManualDistribution[],
  );

  const apply = () => {
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
</script>

<style lang="scss" scoped>
  .distribution-wrapper {
    height: 100vh;
    padding: 5px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 6px;
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

  .panel {
    padding: 20px;
  }

  .student-card {
    display: flex;
    gap: 15px;
    align-items: center;
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

      & .multiselect-placeholder {
        padding-right: 2rem;
        font-size: 16px !important;
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
</style>
