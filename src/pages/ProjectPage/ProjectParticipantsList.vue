<template>
  <BaseButton
    v-if="isCurrentSupervisor"
    variant="tag"
    class="export-btn"
    :disabled="!tableRows.length"
    @click="exportToExcel"
  >
    Выгрузить список в Excel
  </BaseButton>
  <BaseTable
    v-if="
      projectData && sortedParticipants.length > 0 && !isFetching && !isError
    "
    class="table"
    :headers="['№', 'ФИО', 'Группа']"
    :rows="tableRows"
  />

  <BasePanel v-else>
    <BaseStub
      title="Нет участников :("
      subtitle="Пока на этом проекте нет участников, возможно, мы ещё не успели обновить данные."
    />
  </BasePanel>

  <BaseButton
    v-if="isCurrentSupervisor"
    full-width
    variant="tag"
    class="export-btn-mobile"
    :disabled="!tableRows.length"
    @click="exportToExcel"
  >
    Выгрузить список в Excel
  </BaseButton>
</template>

<script setup lang="ts">
  import { computed, watchEffect } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import * as xlsx from 'xlsx';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import BaseTable, { RowData } from '@/components/ui/BaseTable.vue';
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import { canViewParticipants } from '@/helpers/project';
  import { checkCurrentSupervisor } from '@/helpers/projectCardUtils';
  import { compareString } from '@/helpers/string';
  import { toProjectRoute } from '@/router/utils/routes';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { Candidate } from '@/models/Candidate';

  const router = useRouter();
  const authStore = useAuthStore();

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

  const tableRows = computed<RowData[]>(() =>
    sortedParticipants.value.map(({ fio, training_group, id }, index) => ({
      key: String(id),
      data: [index + 1, fio, training_group],
    })),
  );

  const exportToExcel = () => {
    if (!sortedParticipants.value.length) return;

    const data = [
      ['№', 'ФИО', 'Группа'],
      ...sortedParticipants.value.map(({ fio, training_group }, index) => [
        index + 1,
        fio,
        training_group,
      ]),
    ];

    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.aoa_to_sheet(data);

    const widthCols = [
      { wch: Math.max(...data.map((row) => String(row[0]).length + 1)) },
      { wch: Math.max(...data.map((row) => String(row[1]).length)) },
      { wch: Math.max(...data.map((row) => String(row[2]).length)) },
    ];
    worksheet['!cols'] = widthCols;

    xlsx.utils.book_append_sheet(workbook, worksheet, 'Участники');
    xlsx.writeFile(workbook, `Участники_проекта_${projectId.value}.xlsx`);
  };

  const isCurrentSupervisor = computed(() =>
    checkCurrentSupervisor(projectData.value?.project, authStore),
  );
</script>

<style lang="scss" scoped>
  .table {
    &:deep(tr:not(:first-child)) {
      color: var(--text-color);
      background-color: #eef9f2;
    }

    &:deep(td:nth-child(1)) {
      width: 6%;
    }

    &:deep(td:nth-child(2)) {
      font-weight: 800;
    }
  }

  .export-btn {
    position: absolute;
    right: 15px;
    translate: 0 -125%;

    @media (width <= 885px) {
      display: none;
    }
  }

  .export-btn-mobile {
    display: none;
    @media (width <= 885px) {
      display: block;
    }
  }
</style>
