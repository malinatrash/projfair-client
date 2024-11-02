import { UseQueryOptions, useQuery } from 'vue-query';
import { DEFAULT_QUERY_STALE_TIME } from '@/api/baseKy';
import { armApi } from '../';
import ArmApiType from '../ArmApiType';

type TQueryFnData = Awaited<ReturnType<ArmApiType['getArmStudentsList']>>;

export type UseGetArmStudentsListQueryOptions<T = TQueryFnData> =
  UseQueryOptions<
    TQueryFnData,
    unknown,
    T,
    typeof USE_GET_ARM_STUDENTS_LIST_QUERY_KEY
  >;

export const USE_GET_ARM_STUDENTS_LIST_QUERY_KEY =
  'USE_GET_ARM_STUDENTS_LIST_QUERY_KEY';

export const useGetArmStudentsListQuery = <T = TQueryFnData>(
  options?: UseGetArmStudentsListQueryOptions<T>,
) =>
  useQuery(
    USE_GET_ARM_STUDENTS_LIST_QUERY_KEY,
    () => armApi.getArmStudentsList(),
    {
      staleTime: DEFAULT_QUERY_STALE_TIME,
      ...options,
    },
  );
