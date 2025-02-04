<template>
  <form
    class="filters"
    @submit.prevent="
      filter();
      modalsStore.projectFilterModal = false;
    "
  >
    <ProjectFilterAccordion>
      <template #title>
        <span
          v-if="allProjectStates.isFetching.value"
          class="multiselect-spinner"
        >
        </span>
        <span>Статус проекта</span>
      </template>
      <template #content>
        <BaseCheckbox
          v-for="state in acceptedProjectStates"
          :key="state.id"
          v-model="filters.state"
          :value="state.id"
          class="label"
        >
          {{ capitalizeFirstLetter(state.state) }}
        </BaseCheckbox>
        <div v-if="allProjectStates.isError.value" class="mt-2">
          {{ allProjectStates.error.value }}
        </div>
      </template>
    </ProjectFilterAccordion>

    <div class="divider"></div>

    <ProjectFilterAccordion>
      <template #title>Наставник</template>
      <template #content>
        <VMultiselect
          v-model="filters.supervisors"
          mode="tags"
          placeholder="Введите наставника"
          no-results-text="Наставник не найден"
          no-options-text="Наставники не найдены"
          class="miltiselect"
          :close-on-select="false"
          :searchable="true"
          :options="allProjectSupervisors.data.value"
          :disabled="allProjectSupervisors.isFetching.value"
          :loading="allProjectSupervisors.isFetching.value"
          :label="SkillKeys.fio"
          :track-by="SkillKeys.fio"
          :value-prop="SkillKeys.id"
        />
        <div v-if="allProjectSupervisors.isError.value" class="mt-2">
          {{ allProjectSupervisors.error.value }}
        </div>
      </template>
    </ProjectFilterAccordion>

    <div class="divider"></div>

    <ProjectFilterAccordion class="loading">
      <template #title>Теги проекта</template>
      <template #content>
        <VMultiselect
          v-model="filters.specialties"
          mode="tags"
          placeholder="Введите специальности"
          no-results-text="Специальность не найдена"
          no-options-text="Специальности не найдены"
          class="miltiselect"
          :close-on-select="false"
          :searchable="true"
          :options="allProjectTags.data.value?.specialties"
          :disabled="allProjectTags.isFetching.value"
          :loading="allProjectTags.isFetching.value"
          :label="SkillKeys.name"
          :track-by="SkillKeys.name"
          :value-prop="SkillKeys.id"
        />
        <VMultiselect
          v-model="filters.skills"
          mode="tags"
          placeholder="Введите навыки"
          no-results-text="Навык не найден"
          no-options-text="Навыки не найдены"
          class="miltiselect"
          :close-on-select="false"
          :searchable="true"
          :options="allProjectTags.data.value?.skills"
          :disabled="allProjectTags.isFetching.value"
          :loading="allProjectTags.isFetching.value"
          :label="SkillKeys.name"
          :track-by="SkillKeys.name"
          :value-prop="SkillKeys.id"
        />
        <div v-if="allProjectTags.isError.value" class="mt-2">
          {{ allProjectTags.error.value }}
        </div>
      </template>
    </ProjectFilterAccordion>

    <div class="divider"></div>

    <ProjectFilterAccordion>
      <template #title>Уровни сложности</template>
      <template #content>
        <BaseCheckbox
          v-model="filters.difficulty"
          class="label"
          :value="ProjectDifficulty.Low"
        >
          {{ DifficultyText[ProjectDifficulty.Low] }}
        </BaseCheckbox>
        <BaseCheckbox
          v-model="filters.difficulty"
          class="label"
          :value="ProjectDifficulty.Medium"
        >
          {{ DifficultyText[ProjectDifficulty.Medium] }}
        </BaseCheckbox>
        <BaseCheckbox
          v-model="filters.difficulty"
          class="label"
          :value="ProjectDifficulty.High"
        >
          {{ DifficultyText[ProjectDifficulty.High] }}
        </BaseCheckbox>
      </template>
    </ProjectFilterAccordion>

    <footer class="footer">
      <BaseButton case="uppercase" full-width :disabled="projectsLoading">
        найти
      </BaseButton>
      <BaseButton
        case="uppercase"
        type="button"
        full-width
        variant="link"
        :disabled="projectsLoading"
        @click="
          clearFilter();
          modalsStore.projectFilterModal = false;
        "
      >
        сбросить фильтр
      </BaseButton>
    </footer>
  </form>
</template>

<script setup lang="ts">
  import VMultiselect from '@vueform/multiselect';
  import { computed } from 'vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BaseCheckbox from '@/components/ui/BaseCheckbox.vue';
  import { useGetAllSupervisorsQuery } from '../../api/SharedApi/hooks/useGetAllSupervisorsQuery';
  import { useGetAllProjectStatesQuery } from '@/api/ProjectApi/hooks/useGetAllProjectStatesQuery';
  import { useGetAllProjectTagsQuery } from '@/api/ProjectApi/hooks/useGetAllProjectTagsQuery';
  import { useGetProjectListWithFiltersQuery } from '@/api/ProjectApi/hooks/useGetProjectListWithFiltersQuery';
  import {
    ACCEPTED_PROJECT_STATES,
    useProjectFilters,
  } from '@/hooks/useProjectFilters';
  import { capitalizeFirstLetter } from '@/helpers/string';
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import { SkillKeys } from '@/models/Project';
  import {
    DifficultyText,
    ProjectDifficulty,
  } from '@/models/ProjectDifficulty';
  import ProjectFilterAccordion from '../ui/accordion/ProjectFilterAccordion.vue';

  const modalsStore = useModalsStore();

  const { isFetching: projectsLoading } = useGetProjectListWithFiltersQuery();

  const allProjectStates = useGetAllProjectStatesQuery();
  const allProjectTags = useGetAllProjectTagsQuery();
  const allProjectSupervisors = useGetAllSupervisorsQuery();

  const acceptedProjectStates = computed(() =>
    allProjectStates.data.value?.filter((state) =>
      ACCEPTED_PROJECT_STATES.includes(state.id),
    ),
  );
  const { clearFilter, filter, filters } = useProjectFilters();
</script>

<style scoped>
  .miltiselect:first-child {
    margin-bottom: 1.25rem;
  }

  .miltiselect:deep(.multiselect-clear) {
    display: none;
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: var(--gray-color-1);
  }

  .filters {
    padding-top: 0.625rem;
    padding-bottom: 0.6875rem;
    background: #fff;
    border: 1px solid var(--gray-color-1);
    border-radius: 0.625rem;
  }

  .label:not(:last-child) {
    margin-bottom: 0.8125rem;
  }

  .footer {
    display: flex;
    flex-direction: column;
    gap: 0.6875rem;
    padding-right: 1.375rem;
    padding-left: 1.375rem;
    margin-top: 1.25rem;
  }
</style>
