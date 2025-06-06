import { UseMutationOptions, useMutation, useQueryClient } from 'vue-query';
import { useToast } from 'vue-toastification';
import { projectApi } from '@/api/ProjectApi';
import ProjectApiType from '@/api/ProjectApi/ProjectApiType';
import { getSingleProjectQueryKey } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';

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
  const toast = useToast();

  return useMutation(
    USE_UPDATE_PROJECT_CANDIDATE_MARK_MUTATION_KEY,
    ([projectId, candidateId, mark, review]: TVariables) => {
      return projectApi.updateProjectCandidateMark(
        projectId,
        candidateId,
        mark,
        review,
      );
    },
    {
      ...options,
      onSuccess: (data, variables, context) => {
        options?.onSuccess?.(data, variables, context);
        client.invalidateQueries(getSingleProjectQueryKey(data.project_id));
        toast.success(`Студент ${data.candidate.fio} успешно оценен`);
      },
    },
  );
};
