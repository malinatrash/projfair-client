import { UseMutationOptions, useMutation, useQueryClient } from 'vue-query';
import { armApi } from '../';
import ArmApiType from '../ArmApiType';
import { USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY } from './useGetArmManualDistributionListQuery';

type TData = Awaited<ReturnType<ArmApiType['updateArmManualDistribution']>>;
type TVariables = Parameters<ArmApiType['updateArmManualDistribution']>[0];

export type UseUpdateArmManualDistributionOptions = UseMutationOptions<
  TData,
  unknown,
  TVariables,
  unknown
>;

export const USE_UPDATE_ARM_MANUAL_DISTRIBUTION_MUTATION_KEY =
  'USE_UPDATE_ARM_MANUAL_DISTRIBUTION_MUTATION_KEY';

export const useUpdateArmManualDistributionMutation = (
  options?: UseUpdateArmManualDistributionOptions,
) => {
  const client = useQueryClient();

  return useMutation(
    USE_UPDATE_ARM_MANUAL_DISTRIBUTION_MUTATION_KEY,
    (data: TVariables) => armApi.updateArmManualDistribution(data),
    {
      onSuccess: () => {
        client.invalidateQueries({
          queryKey: [USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY],
        });
      },
      ...options,
    },
  );
};
