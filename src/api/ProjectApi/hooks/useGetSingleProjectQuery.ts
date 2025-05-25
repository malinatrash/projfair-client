import { MaybeRef, get } from '@vueuse/core';
import { computed } from 'vue';
import { UseQueryOptions, useQuery } from 'vue-query';
import { projectApi } from '@/api/ProjectApi';
import { DEFAULT_QUERY_STALE_TIME } from '@/api/baseKy';
import { Project } from '@/models/Project';
import ProjectApiType from '../ProjectApiType';

type TQueryFnData = { project: Project; projectHistory: Project[] };

export type UseGetSingleProjectQueryOptions<T = TQueryFnData> = UseQueryOptions<
  TQueryFnData,
  unknown,
  T,
  UseGetSingleProjectQueryKey
>;

export type UseGetSingleProjectQueryKey = [
  typeof USE_GET_SINGLE_PROJECT_QUERY_KEY,
  MaybeRef<number>,
];

export const USE_GET_SINGLE_PROJECT_QUERY_KEY =
  'USE_GET_SINGLE_PROJECT_QUERY_KEY';

export const getSingleProjectQueryKey = (
  projectId: MaybeRef<number>,
): UseGetSingleProjectQueryKey => [USE_GET_SINGLE_PROJECT_QUERY_KEY, projectId];

export const useGetSingleProjectQuery = <T = TQueryFnData>(
  projectIdRef: MaybeRef<number>,
  options?: UseGetSingleProjectQueryOptions<T>,
) => {
  const enabled = computed(() => {
    const projectId = get(projectIdRef);
    return typeof projectId === 'number' && !isNaN(projectId);
  });

  return useQuery(
    getSingleProjectQueryKey(projectIdRef),
    async (data) => {
      let projectId = get(projectIdRef);

      if (isNaN(projectId)) {
        projectId = data.queryKey[1] as number;
      }

      const [project, projectHistory] = await Promise.all([
        projectApi.getSingleProject(projectId),
        projectApi.getProjectHistory(projectId),
      ]);

      return { project, projectHistory };
    },
    {
      staleTime: DEFAULT_QUERY_STALE_TIME,
      enabled,
      ...options,
    },
  );
};
