<template>
  <ActiveProjectListFilterModal v-if="isSmallDevice" />
  <PageLayout>
    <header class="header">
      <h1 class="title page-title">Активные проекты</h1>
      <p class="page-subtitle">
        На этой странице размещены проекты преподавателей и руководителей ИРНИТУ
      </p>
    </header>
    <aside class="header-controls">
      <ProjectSearch />
      <OpenProjectFilterModalButton v-if="isSmallDevice" />
    </aside>
    <SidebarContainer>
      <template #sidebar>
        <ActiveProjectListFilter />
      </template>
      <template #main>
        <div v-if="projectListQuery.isError.value">
          {{ projectListQuery.error.value }}
        </div>
        <ProjectList
          v-else-if="projectListQuery.isFetching.value"
          loading
          :loading-cards-length="PROJECTS_PER_PAGE"
        />
        <ProjectSearchBadStub
          v-else-if="projectListQuery.data.value?.data.length === 0"
        />
        <template v-else>
          <ProjectList :project-list="projectListQuery.data.value?.data" />
          <BasePagination
            :page-size="PROJECTS_PER_PAGE"
            :pages-visible="
              isSmallDevice ? PAGES_VISIBLE_MOBILE : PAGES_VISIBLE_DESKTOP
            "
            :total-items="projectListQuery.data.value?.projectCount || 0"
            :page="projectStore.filters.page"
            @update:page="onPageChange"
          />
        </template>
      </template>
    </SidebarContainer>
  </PageLayout>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import PageLayout from '@/components/layout/PageLayout.vue';
  import SidebarContainer from '@/components/layout/SidebarContainer.vue';
  import ActiveProjectListFilter from '@/components/project/ActiveProjectListFilter.vue';
  import ActiveProjectListFilterModal from '@/components/project/ActiveProjectListFilterModal.vue';
  import OpenProjectFilterModalButton from '@/components/project/OpenProjectFilterModalButton.vue';
  import ProjectList from '@/components/project/ProjectList.vue';
  import ProjectListFilter from '@/components/project/ProjectListFilter.vue';
  import ProjectListFilterModal from '@/components/project/ProjectListFilterModal.vue';
  import ProjectSearch from '@/components/project/ProjectSearch.vue';
  import ProjectSearchBadStub from '@/components/project/ProjectSearchBadStub.vue';
  import { useGetProjectListWithFiltersQuery } from '@/api/ProjectApi/hooks/useGetProjectListWithFiltersQuery';
  import { useGetActiveProjectsQuery } from '@/api/SupervisorApi/hooks/useGetActiveProjectsQuery';
  import { useActiveProjectFilters } from '@/hooks/useActiveProjectFilters';
  import { useSmallDevice } from '@/hooks/useBreakpoints';
  import { useWatchProjectQueries } from '@/hooks/useProjectFilters';
  import { RouteNames } from '@/router/types/route-names';
  import { useProjectsStore } from '@/stores/projects/useProjectsStore';
  import { Project } from '@/models/Project';

  useWatchProjectQueries(RouteNames.ACTIVE_PROJECTS);
  const isSmallDevice = useSmallDevice();

  // Подключение фильтров
  const { filters } = useActiveProjectFilters();
  const projectStore = useProjectsStore();
  const projectListQuery = useGetProjectListWithFiltersQuery();
  // Получение активных проектов
  const activeProjectsQuery = useGetActiveProjectsQuery();

  const errorMessage = computed(() => {
    const error = activeProjectsQuery.error.value;
    if (!error) return 'Неизвестная ошибка';
    return error instanceof Error ? error.message : String(error);
  });

  // Фильтрация и преобразование проектов
  // const filteredProjects = computed<Project[]>(() => {
  //   const raw = activeProjectsQuery.data.value || [];

  //   return raw
  //     .filter((project: any) => {
  //       const search = filters.value.search?.toLowerCase() ?? '';
  //       if (search && !project.title?.toLowerCase().includes(search)) {
  //         return false;
  //       }

  //       if (filters.value.department && project.department?.id !== filters.value.department) {
  //         return false;
  //       }

  //       if (filters.value.difficulty && project.difficulty !== filters.value.difficulty) {
  //         return false;
  //       }

  //       // Добавь другие фильтры по мере необходимости

  //       return true;
  //     })
  //     .map((project: any) => ({
  //       id: project.id,
  //       title: project.title ?? '',
  //       description: project.description ?? '',
  //       state: project.state ?? { id: 0, name: 'Неизвестно' },
  //       supervisors: project.supervisors ?? [],
  //       supervisorsNames: project.supervisorsNames ?? '',
  //       skills: project.skills ?? [],
  //       goal: project.goal ?? '',
  //       date_start: project.date_start ?? '',
  //       date_end: project.date_end ?? '',
  //       difficulty: project.difficulty ?? 0,
  //       places: project.places ?? 0,
  //       project_specialities: project.project_specialities ?? [],
  //       specialities: project.specialities ?? [],
  //       prevProjectId: project.prevProjectId ?? null,
  //       requirements: project.requirements ?? '',
  //       product_result: project.product_result ?? '',
  //       study_result: project.study_result ?? '',
  //       additional_inf: project.additional_inf ?? '',
  //       rejection_reason: project.rejection_reason ?? '',
  //       rejection_date: project.rejection_date ?? '',
  //       customer: project.customer ?? '',
  //       project_review: project.project_review ?? '',
  //       project_goal: project.project_goal ?? '',
  //       department: project.department ?? null,
  //       type: project.type ?? null,
  //       theme_source: project.theme_source ?? null,
  //       participations: project.participations ?? [],
  //       created_at: project.created_at ?? '',
  //       updated_at: project.updated_at ?? '',
  //     }));
  // });

  function onPageChange(page: number) {
    projectStore.setFilters({ page });
    projectStore.updateFilters();
  }

  console.log('filters:', filters.value);

  const PROJECTS_PER_PAGE = 7;
  const PAGES_VISIBLE_DESKTOP = 7;
  const PAGES_VISIBLE_MOBILE = 4;
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  .header {
    margin-top: 4.75rem;
    margin-bottom: 2.8125rem;

    @media (max-width: $tablet) {
      margin-top: 1.875rem;
    }
  }

  .title {
    margin-bottom: 0.6875rem;
  }

  .header-controls {
    display: flex;
    gap: 2.1875rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.125rem;
  }
</style>
