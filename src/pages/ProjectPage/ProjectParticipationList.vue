<template>
  <BaseTable
    v-if="
      projectData && clearedParticipations.length > 0 && !isFetching && !isError
    "
    class="table"
    :headers="['№', 'ФИО', 'Группа', 'Приоритетность', 'Время подачи заявки']"
    :rows="tableRows"
  >
    <template #row="{ row, index, key }">
      <tr
        :key="key || index"
        :class="{ accepted: index + 1 <= projectData.project.places }"
      >
        <td v-for="(column, columnIndex) in row" :key="columnIndex">
          {{ column }}
        </td>
      </tr>
    </template>
  </BaseTable>

  <BasePanel v-else>
    <ProjectParticipationListStub :project="projectData?.project" />
  </BasePanel>
</template>

<script setup lang="ts">
  import { DateTime } from 'luxon';
  import { computed, watchEffect } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseTable, { RowData } from '@/components/ui/BaseTable.vue';
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import { canViewParticipations } from '@/helpers/project';
  import { toProjectRoute } from '@/router/utils/routes';
  import { Participation } from '@/models/Participation';
  import ProjectParticipationListStub from './ProjectParticipationListStub.vue';

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
    if (projectId && stateId && !canViewParticipations(stateId)) {
      router.replace(toProjectRoute(projectId));
    }
  });

  function formatParticipationApplicationTime(time: string) {
    const dt = DateTime.fromISO(time, { locale: 'ru-RU' });
    return dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }

  function sortParticipations(participations: Participation[]) {
    return [...participations]
      .sort(
        (a, b) =>
          new Date(a.updated_at).getTime() * a.priority -
          new Date(b.updated_at).getTime() * b.priority,
      )
      .filter((e) => e.state.id !== 3);
  }

  const clearedParticipations = computed<Participation[]>(() => {
    let participations = projectData.value?.project?.participations;
    if (!participations) return [];
    // сортировка по приоритету
    return sortParticipations(participations);
  });

  const tableRows = computed<RowData[]>(() =>
    clearedParticipations.value.map(
      ({ candidate, priority, updated_at, id }, index) => ({
        key: String(id),
        data: [
          index + 1,
          candidate.fio,
          candidate.training_group,
          priority,
          formatParticipationApplicationTime(updated_at),
        ],
      }),
    ),
  );
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  td:nth-child(1) {
    width: 6%;
  }

  .table:deep(th:nth-child(4)) {
    @media (max-width: $tablet) {
      min-width: 5.3em;
      word-break: break-word;
    }
  }

  .accepted {
    color: var(--text-color);
    background-color: #eef9f2;
  }

  .accepted > td:nth-child(2) {
    font-weight: 800;
  }
</style>
