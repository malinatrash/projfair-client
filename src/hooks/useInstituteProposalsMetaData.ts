import { storeToRefs } from 'pinia';
import { ComputedRef, computed } from 'vue';
import {
  UseGetInstituteProjectProposalsQueryOptions,
  useGetInstituteProjectProposalsQuery,
} from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectProposalsQuery';
import { getAcademicYear } from '@/helpers/date';
import { FilterByToProjectProposalStateId } from '@/router/utils/routes';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { ProjectProposalStateId } from '@/models/ProjectProposal';
import { useStateApprovedFilter } from './useStateApprovedFilter';

export type ProposalsCount = Record<
  ProjectProposalStateId,
  {
    count: number;
    maxApproved?: number;
  }
>;

export type UseInstituteProposalsInfoReturn = {
  proposalsCount: ComputedRef<ProposalsCount>;
  isProjectsLimitExceeded: (proposalStateId: ProjectProposalStateId) => boolean;
  isLoading: ComputedRef<boolean>;
};

export function useInstituteProposalsMetaData(
  options?: UseGetInstituteProjectProposalsQueryOptions,
): UseInstituteProposalsInfoReturn {
  const authStore = useAuthStore();
  const { instituteProjectsQuota } = storeToRefs(authStore);

  const projectProposalListQuery =
    useGetInstituteProjectProposalsQuery(options);

  const proposalsCount = computed(() => {
    const count: ProposalsCount = {
      [ProjectProposalStateId.Approved]: {
        count: 0,
        maxApproved: instituteProjectsQuota.value?.maxApprovedProjects,
      },
      [ProjectProposalStateId.ApprovedOnYear]: {
        count: 0,
        maxApproved: instituteProjectsQuota.value?.maxApprovedProjects,
      },
      [ProjectProposalStateId.ApprovedAutumn]: {
        count: 0,
        maxApproved: instituteProjectsQuota.value?.maxAutumnApprovedProjects,
      },
      [ProjectProposalStateId.ApprovedSpring]: {
        count: 0,
        maxApproved: instituteProjectsQuota.value?.maxSpringApprovedProjects,
      },
      [ProjectProposalStateId.Draft]: {
        count: 0,
        maxApproved: instituteProjectsQuota.value?.maxApprovedProjects,
      },
      [ProjectProposalStateId.Rejected]: {
        count: 0,
        maxApproved: instituteProjectsQuota.value?.maxApprovedProjects,
      },
      [ProjectProposalStateId.UnderReview]: {
        count: 0,
        maxApproved: instituteProjectsQuota.value?.maxApprovedProjects,
      },
    };
    if (!projectProposalListQuery.data.value) return count;

    for (const proposal of projectProposalListQuery.data.value) {
      const stateFilter = useStateApprovedFilter(proposal);
      const institute = proposal.department.institute;

      if (stateFilter) {
        count[FilterByToProjectProposalStateId[stateFilter]].count += 1;
        count[FilterByToProjectProposalStateId[stateFilter]].maxApproved =
          getAcademicYear(
            new Date(Date.parse(proposal.date_end)).getMonth(),
          ).isSpring()
            ? institute.maxSpringApprovedProjects
            : getAcademicYear(new Date().getMonth()).isAutumn()
            ? institute.maxAutumnApprovedProjects
            : institute.maxSpringApprovedProjects;
        continue;
      }

      const stateId = proposal.state.id as ProjectProposalStateId;
      count[stateId].count += 1;
    }

    return count;
  });

  const isProjectsLimitExceeded = (proposalStateId: ProjectProposalStateId) =>
    proposalsCount.value[proposalStateId].count >
    (proposalsCount.value[proposalStateId].maxApproved ?? 0);

  const isLoading = computed(() => projectProposalListQuery.isFetching.value);

  return { proposalsCount, isProjectsLimitExceeded, isLoading };
}
