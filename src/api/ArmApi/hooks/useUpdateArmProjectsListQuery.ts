import { UseMutationOptions, useMutation, useQueryClient } from 'vue-query';
import { armApi } from '../';
import ArmApiType from '../ArmApiType';
import { USE_GET_ARM_PROJECTS_LIST_QUERY_KEY } from './useGetArmProjectsListQuery';

type TData = Awaited<ReturnType<ArmApiType['updateArmProjectsList']>>;
type TVariables = Parameters<ArmApiType['updateArmProjectsList']>[0];

export type UseUpdateArmProjectsListOptions = UseMutationOptions<
  TData,
  unknown,
  TVariables,
  unknown
>;

export const USE_UPDATE_ARM_PROJECTS_LIST_MUTATION_KEY =
  'USE_UPDATE_ARM_PROJECTS_LIST_MUTATION_KEY';

export const useUpdateArmProjectsListMutation = (
  options?: UseUpdateArmProjectsListOptions,
) => {
  const client = useQueryClient();

  return useMutation(
    USE_UPDATE_ARM_PROJECTS_LIST_MUTATION_KEY,
    (data: TVariables) => armApi.updateArmProjectsList(data),
    {
      onSuccess: () => {
        client.invalidateQueries({
          queryKey: USE_GET_ARM_PROJECTS_LIST_QUERY_KEY,
        });
      },
      ...options,
    },
  );
};
