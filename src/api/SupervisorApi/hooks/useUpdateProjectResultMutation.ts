import { UseMutationOptions, useMutation, useQueryClient } from 'vue-query';
import { USE_GET_INSTITUTE_PROJECT_PROPOSALS_QUERY_KEY } from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectProposalsQuery';
import { supervisorApi } from '@/api/SupervisorApi';
import SupervisorApiType from '@/api/SupervisorApi/SupervisorApiType';
import { USE_GET_PROJECT_PROPOSAL_LIST_QUERY_KEY } from './useGetProjectProposalListQuery';

type TData = Awaited<ReturnType<SupervisorApiType['updateProjectResult']>>;
type TVariables = Parameters<SupervisorApiType['updateProjectResult']>[0];

export type UseCreateProjectResultMutationOptions = UseMutationOptions<
  TData,
  unknown,
  TVariables,
  unknown
>;

export const USE_UPDATE_PROJECT_RESULT_MUTATION_KEY =
  'USE_UPDATE_PROJECT_RESULT_MUTATION_KEY';

export const useUpdateProjectResultMutation = (
  options?: UseCreateProjectResultMutationOptions,
) => {
  const client = useQueryClient();

  return useMutation(
    USE_UPDATE_PROJECT_RESULT_MUTATION_KEY,
    (data: TVariables) => supervisorApi.updateProjectResult(data),
    {
      onSuccess: () => {
        client.invalidateQueries(USE_GET_PROJECT_PROPOSAL_LIST_QUERY_KEY);
        client.invalidateQueries(USE_GET_INSTITUTE_PROJECT_PROPOSALS_QUERY_KEY);
      },
      ...options,
    },
  );
};
