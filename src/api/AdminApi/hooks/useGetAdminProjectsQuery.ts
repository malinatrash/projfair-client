import { Ref } from 'vue';
import { UseQueryOptions, useQuery } from 'vue-query';
import { DEFAULT_QUERY_STALE_TIME } from '@/api/baseKy';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { Project } from '@/models/Project';
import { adminApi } from '..';

type TQueryFnData = Project[];

export type UseGetAdminProjectsQueryOptions<T = TQueryFnData> = UseQueryOptions<
  TQueryFnData,
  unknown,
  T,
  typeof USE_GET_ADMIN_PROJECTS_QUERY_KEY
>;

export const USE_GET_ADMIN_PROJECTS_QUERY_KEY =
  'USE_GET_ADMIN_PROJECTS_QUERY_KEY';

export const useGetAdminProjectsQuery = <T = TQueryFnData>(
  mentor_id: Ref<number>,
  options?: UseGetAdminProjectsQueryOptions<T>,
) =>
  useQuery(
    USE_GET_ADMIN_PROJECTS_QUERY_KEY,
    async () => adminApi.getProjectList(mentor_id.value),
    { staleTime: DEFAULT_QUERY_STALE_TIME, ...options },
  );
