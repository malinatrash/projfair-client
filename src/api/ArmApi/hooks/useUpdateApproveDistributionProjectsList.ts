import { UseMutationOptions, useMutation, useQueryClient } from 'vue-query';
import { armApi } from '../';
import ArmApiType from '../ArmApiType';
import { USE_GET_ARM_APPROVE_DISTRIBUTION_PROJECTS_LIST_QUERY_KEY } from './useGetArmApproveDistributionProjectsListQuery';

type TData = Awaited<
  ReturnType<ArmApiType['updateArmApproveDistributionProjectsList']>
>;
type TVariables = Parameters<
  ArmApiType['updateArmApproveDistributionProjectsList']
>[0];

export type UseUpdateArmApproveDistributionProjectsListOptions =
  UseMutationOptions<TData, unknown, TVariables, unknown>;

export const USE_UPDATE_ARM_APPROVE_DISTRIBUTION_PROJECTS_LIST_MUTATION_KEY =
  'USE_UPDATE_ARM_APPROVE_DISTRIBUTION_PROJECTS_LIST_MUTATION_KEY';

export const useUpdateArmApproveDistributionProjectsListMutation = (
  options?: UseUpdateArmApproveDistributionProjectsListOptions,
) => {
  const client = useQueryClient();

  return useMutation(
    USE_UPDATE_ARM_APPROVE_DISTRIBUTION_PROJECTS_LIST_MUTATION_KEY,
    (data: TVariables) => armApi.updateArmApproveDistributionProjectsList(data),
    {
      onSuccess: () => {
        client.invalidateQueries(
          USE_GET_ARM_APPROVE_DISTRIBUTION_PROJECTS_LIST_QUERY_KEY,
        );
      },
      ...options,
    },
  );
};
