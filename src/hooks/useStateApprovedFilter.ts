import { getAcademicYear } from '@/helpers/date';
import { FilterInstituteProjectProposalsBy } from '@/router/utils/routes';
import {
  CreatedProjectProposal,
  ProjectProposalStateId,
} from '@/models/ProjectProposal';

export const useStateApprovedFilter = (proposal: CreatedProjectProposal) => {
  if (proposal.state.id !== ProjectProposalStateId.Approved) return '';

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

  let filter: FilterInstituteProjectProposalsBy =
    FilterInstituteProjectProposalsBy.Approved;

  if (isFullYear) {
    filter = FilterInstituteProjectProposalsBy.ApprovedOnYear;
  } else if (isAutumn) {
    filter = FilterInstituteProjectProposalsBy.ApprovedAutumn;
  } else if (isSpring) {
    filter = FilterInstituteProjectProposalsBy.ApprovedSpring;
  }

  return filter;
};
