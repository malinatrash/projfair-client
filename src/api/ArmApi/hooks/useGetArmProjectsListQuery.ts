import { UseQueryOptions, useQuery } from 'vue-query';
import { DEFAULT_QUERY_STALE_TIME } from '@/api/baseKy';
import { armApi } from '../';
import ArmApiType from '../ArmApiType';

type TQueryFnData = Awaited<ReturnType<ArmApiType['getArmProjectsList']>>;

export type UseGetArmProjectsListQueryOptions<T = TQueryFnData> =
  UseQueryOptions<
    TQueryFnData,
    unknown,
    T,
    typeof USE_GET_ARM_PROJECTS_LIST_QUERY_KEY
  >;

export const USE_GET_ARM_PROJECTS_LIST_QUERY_KEY =
  'USE_GET_ARM_PROJECTS_LIST_QUERY_KEY';

export const useGetArmProjectsListQuery = <T = TQueryFnData>(
  options?: UseGetArmProjectsListQueryOptions<T>,
) =>
  useQuery(
    USE_GET_ARM_PROJECTS_LIST_QUERY_KEY,
    () => armApi.getArmProjectsList(),
    {
      staleTime: DEFAULT_QUERY_STALE_TIME,
      ...options,
    },
  );
