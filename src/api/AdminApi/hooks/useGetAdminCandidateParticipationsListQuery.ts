import { Ref } from 'vue';
import { UseQueryOptions, useQuery } from 'vue-query';
import { DEFAULT_QUERY_STALE_TIME } from '@/api/baseKy';
import { adminApi } from '..';
import AdminApiType from '../AdminApiType';

type TQueryFnData = Awaited<
  ReturnType<AdminApiType['getCandidateParticipations']>
>;

export type useGetAdminCandidateParticipationsListQueryOptions<
  T = TQueryFnData,
> = UseQueryOptions<
  TQueryFnData,
  unknown,
  T,
  typeof USE_GET_ADMIN_CANDIDATE_PARTICIPATIONS_LIST_QUERY_KEY
>;

export const USE_GET_ADMIN_CANDIDATE_PARTICIPATIONS_LIST_QUERY_KEY =
  'USE_GET_ADMIN_CANDIDATE_PARTICIPATIONS_LIST_QUERY_KEY';

export const useGetAdminCandidateParticipationsListQuery = <T = TQueryFnData>(
  candidate_id: Ref<number>,
  options?: useGetAdminCandidateParticipationsListQueryOptions<T>,
) =>
  useQuery(
    USE_GET_ADMIN_CANDIDATE_PARTICIPATIONS_LIST_QUERY_KEY,
    () => adminApi.getCandidateParticipations(candidate_id.value),
    {
      staleTime: DEFAULT_QUERY_STALE_TIME,
      ...options,
    },
  );
