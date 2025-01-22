import { UseMutationOptions, useMutation, useQueryClient } from 'vue-query';
import { projectApi } from '@/api/ProjectApi';
import ProjectApiType from '@/api/ProjectApi/ProjectApiType';
import { getSingleProjectQueryKey } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
import { Participation } from '@/models/Participation';

type TData = Awaited<ReturnType<ProjectApiType['updateProjectCandidateMark']>>;
type TVariables = Parameters<ProjectApiType['updateProjectCandidateMark']>;

export type useUpdateProjectCandidateMarkMutationOptions = UseMutationOptions<
  TData,
  unknown,
  TVariables,
  unknown
>;

export const USE_UPDATE_PROJECT_CANDIDATE_MARK_MUTATION_KEY =
  'USE_UPDATE_PROJECT_CANDIDATE_MARK_MUTATION_KEY';

export const useUpdateProjectCandidateMarkMutation = (
  options?: useUpdateProjectCandidateMarkMutationOptions,
) => {
  const client = useQueryClient();

  return useMutation(
    USE_UPDATE_PROJECT_CANDIDATE_MARK_MUTATION_KEY,
    (data: TVariables) => {
      return projectApi.updateProjectCandidateMark(
        data[0],
        data[1],
        data[2],
        data[3],
      );
    },
    {
      ...options,
      onSuccess: (data, variables, context) => {
        options?.onSuccess?.(data, variables, context);
        client.invalidateQueries(
          getSingleProjectQueryKey(
            (data as unknown as Participation).project_id ?? 0,
          ),
        );
      },
    },
  );
};
