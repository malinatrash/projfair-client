import { UseQueryOptions, useQuery } from 'vue-query';
import { DEFAULT_QUERY_STALE_TIME } from '@/api/baseKy';
import { adminApi } from '..';
import AdminApiType from '../AdminApiType';

type TQueryFnData = Awaited<
  ReturnType<AdminApiType['getCandidatesWithProjects']>
>;

export type useGetAdminCandidatesWithProjectsListQueryOptions<
  T = TQueryFnData,
> = UseQueryOptions<
  TQueryFnData,
  unknown,
  T,
  typeof USE_GET_ADMIN_CANDIDATES_WITH_PROJECTS_LIST_QUERY_KEY
>;

export const USE_GET_ADMIN_CANDIDATES_WITH_PROJECTS_LIST_QUERY_KEY =
  'USE_GET_ADMIN_CANDIDATES_WITH_PROJECTS_LIST_QUERY_KEY';

export const useGetAdminCandidatesWithProjectsListQuery = <T = TQueryFnData>(
  options?: useGetAdminCandidatesWithProjectsListQueryOptions<T>,
) =>
  useQuery(
    USE_GET_ADMIN_CANDIDATES_WITH_PROJECTS_LIST_QUERY_KEY,
    () => adminApi.getCandidatesWithProjects(),
    {
      staleTime: DEFAULT_QUERY_STALE_TIME,
      ...options,
    },
  );
