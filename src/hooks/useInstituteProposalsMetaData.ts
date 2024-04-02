import { storeToRefs } from 'pinia';
import { ComputedRef, computed } from 'vue';
import {
  UseGetInstituteProjectProposalsQueryOptions,
  useGetInstituteProjectProposalsQuery,
} from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectProposalsQuery';
import { getAcademicYear } from '@/helpers/date';
import {
  FilterByToProjectProposalStateId,
  FilterInstituteProjectProposalsBy,
} from '@/router/utils/routes';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { ProjectProposalStateId } from '@/models/ProjectProposal';
import { mockProjectProposalList } from '@/models/mock/project-proposal';

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
  // const projectProposalListQuery =
  //   useGetInstituteProjectProposalsQuery(options);
  const projectProposalListQuery = mockProjectProposalList;

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
    // if (!projectProposalListQuery.data.value) return count;
    if (!projectProposalListQuery) return count;

    // for (const proposal of projectProposalListQuery.data.value) {
    //   count[FilterByToProjectProposalStateId[proposal.filter]] += 1;
    // }

    projectProposalListQuery?.forEach((proposal) => {
      if (proposal.state.id !== ProjectProposalStateId.Approved) return;

      const isFullYear =
        new Date(
          Date.parse(proposal.date_end) - Date.parse(proposal.date_start),
        ).getMonth() > 4;
      const isAutumn = getAcademicYear(
        new Date(Date.parse(proposal.date_start)).getMonth(),
      ).isAutumn();
      const isSpring = getAcademicYear(
        new Date(Date.parse(proposal.date_start)).getMonth(),
      ).isSpring();

      if (isFullYear) {
        proposal.filter = FilterInstituteProjectProposalsBy.ApprovedOnYear;
      } else if (isAutumn) {
        proposal.filter = FilterInstituteProjectProposalsBy.ApprovedAutumn;
      } else if (isSpring) {
        proposal.filter = FilterInstituteProjectProposalsBy.ApprovedSpring;
      }
    });

    for (const proposal of projectProposalListQuery) {
      if (proposal.filter) {
        const filter = proposal.filter as FilterInstituteProjectProposalsBy;
        count[FilterByToProjectProposalStateId[filter]] += 1;
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

  // const isLoading = computed(() => projectProposalListQuery.isFetching.value);

  const isLoading = computed(() => !projectProposalListQuery);

  // return { proposalsCount, approvedProjectsLimitExceeded, isLoading };

  return { proposalsCount, approvedProjectsLimitExceeded, isLoading };
}
