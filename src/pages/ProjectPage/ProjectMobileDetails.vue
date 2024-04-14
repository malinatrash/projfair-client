<template>
  <!-- Panel -->
  <BasePanel>
    <div class="status-wrapper">
      <p>
        Мест в проекте
        <ProjectTeamCounter class="counter" :total="project.places" />
      </p>
      <p>
        Статус проекта
        <ProjectStatus class="status" :state="project.state" />
      </p>
    </div>
    <GridLayout>
      <AppList>
        <AppListItem>
          <template #title>Руководители проекта</template>
          <template #default>
            {{
              project.supervisorsNames ||
              project.supervisors
                .map((supervisor) => supervisor.supervisor.fio)
                .join(', ') ||
              '-'
            }}
          </template>
        </AppListItem>

        <AppListItem>
          <template #title>Старт проекта</template>
          <template #default>
            {{ project.date_start || '-' }}
          </template>
        </AppListItem>

        <AppListItem>
          <template #title>Заказчик</template>
          <template #default>
            {{ project.customer || '-' }}
          </template>
        </AppListItem>

        <AppListItem>
          <template #title>Сложность</template>
          <template #default>
            {{ DifficultyText[project.difficulty] || '-' }}
          </template>
        </AppListItem>

        <AppListItem>
          <template #title>История проекта</template>
          <template #default>
            <ProjectHistoryButton
              :history-length="history?.length"
              @click="emit('showHistory')"
            />
          </template>
        </AppListItem>
        <BaseButton
          is="router-link"
          v-if="project.state.id === 2 && isCurrentSupervisor"
          class="mt-2"
          variant="outlined"
          case="uppercase"
          :to="toProjectResultRoute(project.id)"
        >
          Сформировать результаты
        </BaseButton>
        <BaseButton
          is="router-link"
          v-if="project.state.id === 4"
          class="mt-2"
          variant="outlined"
          case="uppercase"
          :to="toProjectResultRoute(project.id)"
        >
          Результаты проекта
        </BaseButton>
      </AppList>

      <AppList
        :items="[
          {
            title: 'Цель проекта',
            content: project.goal,
            wide: true,
          },
          {
            title: 'Описание проекта',
            content: project.description,
            wide: true,
          },
        ]"
      />

      <AppList
        :items="[
          {
            title: 'Ожидаемый продуктовый результат',
            content: project.product_result,
            wide: true,
          },
          {
            title: 'Ожидаемый учебный результат',
            content: project.study_result,
            wide: true,
          },
        ]"
      />

      <AppList v-if="project?.skills.length > 0">
        <AppListItem :bold="false" :wide="true">
          <template #title>Требования к студентам</template>
          <template #default>
            <TagList :tag-list="project.skills" show-all />
          </template>
        </AppListItem>
      </AppList>
    </GridLayout>

    <div class="controls">
      <OpenParticipationModalButton :project="project" />
      <OpenFeedbackModalButton :project="project" />
    </div>
  </BasePanel>
</template>

<script setup lang="ts">
  import OpenFeedbackModalButton from '@/components/feedback/OpenFeedbackModalButton.vue';
  import OpenParticipationModalButton from '@/components/participation/OpenParticipationModalButton.vue';
  import ProjectStatus from '@/components/project/ProjectStatus.vue';
  import ProjectTeamCounter from '@/components/project/ProjectTeamCounter.vue';
  import AppList from '@/components/ui/AppList.vue';
  import AppListItem from '@/components/ui/AppListItem.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import GridLayout from '@/components/ui/GridLayout.vue';
  import TagList from '@/components/ui/TagList.vue';
  import { toProjectResultRoute } from '@/router/utils/routes';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { Project } from '@/models/Project';
  import { DifficultyText } from '@/models/ProjectDifficulty';
  import ProjectHistoryButton from './ProjectHistoryButton.vue';

  interface Props {
    project: Project;
    history?: Project[];
    showHistoryModal: boolean;
  }

  interface Emits {
    (e: 'showHistory'): void;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<Emits>();
  const isCurrentSupervisor = props.project.supervisors.some((supervisor) => {
    return supervisor.supervisor.id === useAuthStore().profileData?.id;
  });
</script>

<style lang="scss" scoped>
  .controls {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2.5rem;
  }

  .status-wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.25rem;
    margin-bottom: 1.25rem;
    border-bottom: 1px solid var(--gray-color-1);
  }

  .status {
    white-space: nowrap;
  }

  .status,
  .counter {
    margin-top: 0.625rem;
  }
</style>
