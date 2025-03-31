import { UseMutationOptions, useMutation, useQueryClient } from 'vue-query';
import { useToast } from 'vue-toastification';
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
        const participation = data as unknown as Participation;
        client.invalidateQueries(
          getSingleProjectQueryKey(participation.project_id ?? 0),
        );
        toast.success(`Студент ${participation.candidate.fio} успешно оценен`);
      },
    },
  );
};
