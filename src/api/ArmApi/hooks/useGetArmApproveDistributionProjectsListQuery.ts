import { UseQueryOptions, useQuery } from 'vue-query';
import { DEFAULT_QUERY_STALE_TIME } from '@/api/baseKy';
import { armApi } from '../';
import ArmApiType from '../ArmApiType';

type TQueryFnData = Awaited<
  ReturnType<ArmApiType['getArmApproveDistributionProjectsList']>
>;

export type UseGetArmApproveDistributionProjectsListQueryOptions<
  T = TQueryFnData,
> = UseQueryOptions<
  TQueryFnData,
  unknown,
  T,
  typeof USE_GET_ARM_APPROVE_DISTRIBUTION_PROJECTS_LIST_QUERY_KEY
>;

export const USE_GET_ARM_APPROVE_DISTRIBUTION_PROJECTS_LIST_QUERY_KEY =
  'USE_GET_ARM_APPROVE_DISTRIBUTION_PROJECTS_LIST_QUERY_KEY';

export const useGetArmApproveDistributionProjectsListQuery = <T = TQueryFnData>(
  options?: UseGetArmApproveDistributionProjectsListQueryOptions<T>,
) =>
  useQuery(
    USE_GET_ARM_APPROVE_DISTRIBUTION_PROJECTS_LIST_QUERY_KEY,
    () => armApi.getArmApproveDistributionProjectsList(),
    {
      staleTime: DEFAULT_QUERY_STALE_TIME,
      ...options,
    },
  );
