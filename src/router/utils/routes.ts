import { LocationAsRelativeRaw, RouteLocationRaw } from 'vue-router';
import { RouteNames } from '../types/route-names';
import { ProjectProposalStateId } from '@/models/ProjectProposal';

export function toProjectResultRoute(projectId: number): RouteLocationRaw {
  return {
    name: RouteNames.SUPERVISOR_PROJECT_PROPOSAL_RESULT,
    params: { id: projectId },
  };
}

export function toProjectRoute(projectId: number): RouteLocationRaw {
  return { name: RouteNames.PROJECT_DETAILS, params: { id: projectId } };
}

export function toProjectProposalCreateRoute(
  proposalId?: number,
): RouteLocationRaw {
  return {
    name: RouteNames.SUPERVISOR_PROJECT_PROPOSAL_CREATE,
    params: { id: proposalId },
  };
}

export const enum FilterInstituteProjectProposalsBy {
  New = 'new',
  Approved = 'approved',
  Rejected = 'rejected',
}

export const FilterByToProjectProposalStateId: Record<
  FilterInstituteProjectProposalsBy,
  ProjectProposalStateId
> = {
  [FilterInstituteProjectProposalsBy.New]: ProjectProposalStateId.UnderReview,
  [FilterInstituteProjectProposalsBy.Approved]: ProjectProposalStateId.Approved,
  [FilterInstituteProjectProposalsBy.Rejected]: ProjectProposalStateId.Rejected,
};

export function toInstituteProjectProposals(
  filterBy = FilterInstituteProjectProposalsBy.New,
  page = 1,
): LocationAsRelativeRaw {
  return {
    name: RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS,
    params: { filterBy, page },
  };
}
