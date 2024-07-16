<template>
  <section>
    <LoadingParticipationsList v-if="isFetching" />
    <BaseStub
      v-else-if="isError"
      title="Ошибка загрузки списка отчётов"
      :subtitle="String(error)"
    />
    <BaseStub
      v-else-if="filteredProjectReportList?.length === 0"
      title="Отчёты на проекты не найдены :("
      subtitle="На данный момент Вам не отправили ни одного отчёта на проект"
    />
    <template v-else>
      <InstituteDirectorProjectReportCard
        v-for="projectReport in paginatedReports"
        :key="projectReport.id"
        :project-report="projectReport"
      />
      <BasePagination
        :page="currentPage"
        :total-items="filteredProjectReportList?.length || 0"
        :page-size="PAGE_SIZE"
        :pages-visible="PAGES_VISIBLE"
        @update:page="onPageChange"
      />
    </template>
  </section>
</template>

<script setup lang="ts">
  import { computed, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useRouter } from 'vue-router';
  import InstituteDirectorProjectReportCard from '@/components/project-report/InstituteDirectorProjectReportCard.vue';
  import BasePagination from '@/components/ui/BasePagination.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import { useGetInstituteProjectReportsQuery } from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectReportsQuery';
  import { usePaginatedList } from '@/hooks/usePaginatedList';
  import { RouteNames } from '@/router/types/route-names';
  import {
    FilterByToProjectReportNameId,
    FilterInstituteProjectReportsBy,
    toInstituteProjectReports,
  } from '@/router/utils/routes';
  import { ProjectReportNameId } from '@/models/ProjectReport';
  import LoadingParticipationsList from './LoadingParticipationsList.vue';

  const router = useRouter();
  const route = useRoute();

  const filterBy = computed<ProjectReportNameId | undefined>(() => {
    const filterBy = String(
      route.params.filterBy,
    ) as FilterInstituteProjectReportsBy;
    return FilterByToProjectReportNameId[filterBy] as ProjectReportNameId;
  });

  watch(
    () => filterBy.value,
    (currentFilterBy) => {
      if (route.name !== RouteNames.INST_DIRECTOR_PROJECTS_REPORTS) return;
      if (!currentFilterBy) router.replace(toInstituteProjectReports());
    },
    { immediate: true },
  );

  const {
    isFetching,
    isError,
    error,
    data: projectReportList,
  } = useGetInstituteProjectReportsQuery({
    select: (list) => list.sort((a, b) => a.id - b.id),
  });

  const filteredProjectReportList = computed(() => {
    return projectReportList.value?.filter(
      (report) =>
        report.department.institute.id === filterBy.value ||
        filterBy.value === ProjectReportNameId.All,
    );
  });

  const PAGE_SIZE = 6;
  const PAGES_VISIBLE = 7;

  const currentPage = computed(() => Number(route.params.page) || 1);
  const paginatedReports = usePaginatedList(filteredProjectReportList, {
    pageSize: PAGE_SIZE,
    currentPage: currentPage,
  });

  function onPageChange(page: number) {
    router.push({
      ...route,
      params: { ...route.params, page },
    });
  }
</script>
