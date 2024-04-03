import { storeToRefs } from 'pinia';
import { ComputedRef, computed } from 'vue';
import {
  UseGetInstituteProjectProposalsQueryOptions,
  useGetInstituteProjectProposalsQuery,
} from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectProposalsQuery';
import { FilterByToProjectProposalStateId } from '@/router/utils/routes';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { ProjectProposalStateId } from '@/models/ProjectProposal';
import { useStateApprovedFilter } from './useStateApprovedFilter';

export type ProposalsCount = Record<ProjectProposalStateId, number>;

export type UseInstituteProposalsInfoReturn = {
  proposalsCount: ComputedRef<ProposalsCount>;
  approvedProjectsLimitExceeded: ComputedRef<boolean>;
  isLoading: ComputedRef<boolean>;
};

export function useInstituteProposalsMetaData(
  options?: UseGetInstituteProjectProposalsQueryOptions,
): UseInstituteProposalsInfoReturn {
  const authStore = useAuthStore();
  const { intituteProjectsQuota } = storeToRefs(authStore);
  const projectProposalListQuery =
    useGetInstituteProjectProposalsQuery(options);

  const proposalsCount = computed(() => {
    const count: ProposalsCount = {
      [ProjectProposalStateId.Approved]: 0,
      [ProjectProposalStateId.ApprovedOnYear]: 0,
      [ProjectProposalStateId.ApprovedAutumn]: 0,
      [ProjectProposalStateId.ApprovedSpring]: 0,
      [ProjectProposalStateId.Draft]: 0,
      [ProjectProposalStateId.Rejected]: 0,
      [ProjectProposalStateId.UnderReview]: 0,
    };
    if (!projectProposalListQuery.data.value) return count;

    for (const proposal of projectProposalListQuery.data.value) {
      const stateFilter = useStateApprovedFilter(proposal);

      if (stateFilter) {
        count[FilterByToProjectProposalStateId[stateFilter]] += 1;
        continue;
      }

      const stateId = proposal.state.id as ProjectProposalStateId;
      count[stateId] += 1;
    }

    return count;
  });

  const approvedProjectsLimitExceeded = computed(
    () =>
      proposalsCount.value[ProjectProposalStateId.Approved] >
      intituteProjectsQuota.value,
  );

  const isLoading = computed(() => projectProposalListQuery.isFetching.value);

  return { proposalsCount, approvedProjectsLimitExceeded, isLoading };
}
