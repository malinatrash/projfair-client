import { Ref } from 'vue';
import { useQuery } from 'vue-query';
import { DEFAULT_QUERY_STALE_TIME } from '@/api/baseKy';
import { adminApi } from '..';

export type useUpdateAdminCandidateParticipationToAnotherProjectQueryOptions = {
  enabled?: boolean;
  onSuccess?: (data: {
    message: string;
    new_participation: {
      candidate_id: number;
      project_id: number;
      priority: number;
      state_id: number;
    };
  }) => void;
  onError?: (error: any) => void;
};

export const USE_UPDATE_ADMIN_CANDIDATE_PARTICIPATION_TO_ANOTHER_PROJECT_QUERY_KEY =
  'USE_UPDATE_ADMIN_CANDIDATE_PARTICIPATION_TO_ANOTHER_PROJECT_QUERY_KEY';

export const useUpdateAdminCandidateParticipationToAnotherProjectQuery = (
  candidateId: Ref<number>,
  projectId: Ref<number>,
  options?: useUpdateAdminCandidateParticipationToAnotherProjectQueryOptions,
) =>
  useQuery(
    USE_UPDATE_ADMIN_CANDIDATE_PARTICIPATION_TO_ANOTHER_PROJECT_QUERY_KEY,
    () =>
      adminApi.updateCandidateParticipationToAnotherProject(
        candidateId.value,
        projectId.value,
      ),
    {
      staleTime: DEFAULT_QUERY_STALE_TIME,
      enabled: options?.enabled ?? false,
      onSuccess: options?.onSuccess,
      onError: options?.onError,
    },
  );
