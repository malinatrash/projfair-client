import { UseQueryOptions, useQuery } from 'vue-query';
import { DEFAULT_QUERY_STALE_TIME } from '@/api/baseKy';
import { armApi } from '../';
import ArmApiType from '../ArmApiType';

type TQueryFnData = Awaited<ReturnType<ArmApiType['getArmManualDistribution']>>;

export type useGetArmManualDistributionListQueryOptions<T = TQueryFnData> =
  UseQueryOptions<
    TQueryFnData,
    unknown,
    T,
    typeof USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY
  >;

export const USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY =
  'USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY';

export const useGetArmManualDistributionListQuery = <T = TQueryFnData>(
  options?: useGetArmManualDistributionListQueryOptions<T>,
) =>
  useQuery(
    USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY,
    () => armApi.getArmManualDistribution(),
    {
      staleTime: DEFAULT_QUERY_STALE_TIME,
      ...options,
    },
  );
