import { LocationAsRelativeRaw, RouteLocationRaw } from 'vue-router';
import { RouteNames } from '../types/route-names';
import { ProjectProposalStateId } from '@/models/ProjectProposal';
import { ProjectStateID } from '@/models/ProjectState';

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

export const enum FilterInstituteProjectsBy {
  All = 'all',
  Recruiting = 'recruiting',
  Active = 'active',
  Extra = 'extra',
  Archived = 'archived',
  Processing = 'processing',
}

export const FilterByToProjectStateId: Record<
  FilterInstituteProjectsBy,
  ProjectStateID
> = {
  [FilterInstituteProjectsBy.All]: ProjectStateID.All,
  [FilterInstituteProjectsBy.Recruiting]: ProjectStateID.RecruitingState,
  [FilterInstituteProjectsBy.Active]: ProjectStateID.ActiveState,
  [FilterInstituteProjectsBy.Extra]: ProjectStateID.ExtraState,
  [FilterInstituteProjectsBy.Archived]: ProjectStateID.ArchivedState,
  [FilterInstituteProjectsBy.Processing]: ProjectStateID.ProcessingState,
};

export function toInstituteProjects(
  filterBy = FilterInstituteProjectsBy.All,
  page = 1,
): LocationAsRelativeRaw {
  return {
    name: RouteNames.INST_DIRECTOR_PROJECTS,
    params: { filterBy, page },
  };
}

export const enum FilterInstituteProjectProposalsBy {
  New = 'new',
  Approved = 'approved',
  ApprovedOnYear = 'approved_on_year',
  ApprovedAutumn = 'approved_autumn',
  ApprovedSpring = 'approved_spring',
  Rejected = 'rejected',
}

export const FilterByToProjectProposalStateId: Record<
  FilterInstituteProjectProposalsBy,
  ProjectProposalStateId
> = {
  [FilterInstituteProjectProposalsBy.New]: ProjectProposalStateId.UnderReview,
  [FilterInstituteProjectProposalsBy.Approved]: ProjectProposalStateId.Approved,
  [FilterInstituteProjectProposalsBy.ApprovedOnYear]:
    ProjectProposalStateId.ApprovedOnYear,
  [FilterInstituteProjectProposalsBy.ApprovedAutumn]:
    ProjectProposalStateId.ApprovedAutumn,
  [FilterInstituteProjectProposalsBy.ApprovedSpring]:
    ProjectProposalStateId.ApprovedSpring,
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
