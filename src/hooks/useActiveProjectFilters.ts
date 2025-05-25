import { isEqual } from 'lodash';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { locationQueryToProjectFilters } from '@/helpers/location-query';
import { isEmptyObject } from '@/helpers/object';
import { RouteNames } from '@/router/types/route-names';
import { useProjectsStore } from '@/stores/projects/useProjectsStore';
import { ProjectFilters } from '@/models/Project';
import { ProjectStateID } from '@/models/ProjectState';

export const ACTIVE_PROJECT_STATES = [
  ProjectStateID.ActiveState,
  ProjectStateID.RecruitingState,
  ProjectStateID.ProcessingState,
];

export const useWatchProjectQueries = (routeName: RouteNames) => {
  const router = useRouter();
  const route = useRoute();
  const projectStore = useProjectsStore();

  watch(
    () => route.query,
    (query) => {
      if (route.name !== routeName) return;
      const storedFilters = projectStore.filters;
      const queryFilters = locationQueryToProjectFilters(query);

      // если в строке поиска нет фильтров, то редиректим на эту же страницу, но с фильтрами из локального хранилища
      if (isEmptyObject(queryFilters as unknown as Record<string, unknown>)) {
        router.replace({ ...route, query: storedFilters });
        return;
      }

      // если в строке поиска есть фильтры, но они не совпадают с теми, что в хранилище, то обновляем фильтры
      const isEqualFilters = isEqual(storedFilters, queryFilters);
      if (!isEqualFilters) {
        projectStore.setFilters(queryFilters);
      }
    },
    { immediate: true },
  );
};

export const useActiveProjectFilters = () => {
  const projectsStore = useProjectsStore();
  const filters = ref<ProjectFilters>({ ...projectsStore.filters });

  // наблюдаем за состоянием хранилища
  // обновляем локальное состояние если что-то поменялось
  watch(
    () => projectsStore.filters,
    (storeFilters) => {
      filters.value = { ...storeFilters };
    },
    { immediate: true },
  );

  function filter() {
    projectsStore.setFilters({
      ...filters.value,
      page: 1,
    });
    projectsStore.updateFilters();
  }

  function clearFilter() {
    projectsStore.clearFilters();
    projectsStore.updateFilters();
  }

  return {
    filter,
    clearFilter,
    filters,
  };
};
