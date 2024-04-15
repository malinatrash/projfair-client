<template>
  <ProjectList
    v-if="userProjects.isFetching.value"
    loading
    :loading-cards-length="3"
  />
  <div v-else-if="userProjects.isError.value">
    {{ userProjects.error.value }}
  </div>
  <BaseStub
    v-else-if="userProjects.data.value?.length === 0"
    title="Проекты не найдены :("
    subtitle="У вас пока нет ни одного активного или архивного проекта"
  />
  <ProjectList v-else :project-list="filteredProjectList" />
</template>

<script setup lang="ts">
  import { computed, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import ProjectList from '@/components/project/ProjectList.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import { useGetInstituteProjectProposalsQuery } from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectProposalsQuery';
  import { useGetUserProjectsQuery } from '@/api/SharedApi/hooks/useGetUserProjectsQuery';
  import { usePaginatedList } from '@/hooks/usePaginatedList';
  import { RouteNames } from '@/router/types/route-names';
  import {
    FilterByToProjectStateId,
    FilterInstituteProjectsBy,
    toInstituteProjects,
  } from '@/router/utils/routes';
  import { ProjectStateID } from '@/models/ProjectState';

  const userProjects = useGetUserProjectsQuery();

  const router = useRouter();
  const route = useRoute();

  const filterBy = computed<ProjectStateID | undefined>(() => {
    const filterBy = String(route.params.filterBy) as FilterInstituteProjectsBy;
    return FilterByToProjectStateId[filterBy];
  });

  watch(
    () => filterBy.value,
    (currentFilterBy) => {
      if (route.name !== RouteNames.INST_DIRECTOR_PROJECTS) return;
      if (!currentFilterBy) router.replace(toInstituteProjects());
    },
    { immediate: true },
  );

  const {
    isFetching,
    isError,
    error,
    data: projectList,
  } = useGetUserProjectsQuery({
    select: (list) => list.sort((a, b) => b.state.id - a.state.id),
  });

  const filteredProjectList = computed(() => {
    return projectList.value?.filter((project) => {
      return (
        project.state.id === filterBy.value ||
        filterBy.value === ProjectStateID.All
      );
    });
  });

  const PAGE_SIZE = 5;
  const PAGES_VISIBLE = 7;

  const currentPage = computed(() => Number(route.params.page) || 1);
  const paginatedProposals = usePaginatedList(filteredProjectList, {
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
