import { Ref } from 'vue';
import { UseQueryOptions, useQuery } from 'vue-query';
import { DEFAULT_QUERY_STALE_TIME } from '@/api/baseKy';
import { adminApi } from '..';
import AdminApiType from '../AdminApiType';

type TQueryFnData = Awaited<
  ReturnType<AdminApiType['updateCandidateParticipationToAnotherProject']>
>;

export type useUpdateAdminCandidateParticipationToAnotherProjectQueryOptions<
  T = TQueryFnData,
> = UseQueryOptions<
  TQueryFnData,
  unknown,
  T,
  typeof USE_UPDATE_ADMIN_CANDIDATE_PARTICIPATION_TO_ANOTHER_PROJECT_QUERY_KEY
>;

export const USE_UPDATE_ADMIN_CANDIDATE_PARTICIPATION_TO_ANOTHER_PROJECT_QUERY_KEY =
  'USE_UPDATE_ADMIN_CANDIDATE_PARTICIPATION_TO_ANOTHER_PROJECT_QUERY_KEY';

export const useUpdateAdminCandidateParticipationToAnotherProjectQuery = <
  T = TQueryFnData,
>(
  candidate_id: Ref<number>,
  project_id: Ref<{ [candidate_id: number]: number }>,
  options?: useUpdateAdminCandidateParticipationToAnotherProjectQueryOptions<T>,
) =>
  useQuery(
    USE_UPDATE_ADMIN_CANDIDATE_PARTICIPATION_TO_ANOTHER_PROJECT_QUERY_KEY,
    () =>
      adminApi.updateCandidateParticipationToAnotherProject(
        candidate_id.value,
        project_id.value[candidate_id.value],
      ),
    {
      staleTime: DEFAULT_QUERY_STALE_TIME,
      ...options,
    },
  );
