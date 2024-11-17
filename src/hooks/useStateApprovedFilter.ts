import { getAcademicYear } from '@/helpers/date';
import { FilterInstituteProjectProposalsBy } from '@/router/utils/routes';
import {
  CreatedProjectProposal,
  ProjectProposalStateId,
} from '@/models/ProjectProposal';

export const useStateApprovedFilter = (proposal: CreatedProjectProposal) => {
  if (proposal.state.id !== ProjectProposalStateId.Approved) return '';

  const { date_start, date_end } = proposal;

  const start = Date.parse(date_start);
  const end = Date.parse(date_end);

  const isFullYear = new Date(end - start).getMonth() > 4;
  const isAutumn = getAcademicYear(new Date(start).getMonth()).isAutumn();
  const isSpring = getAcademicYear(new Date(start).getMonth()).isSpring();

  if (isFullYear) {
    return FilterInstituteProjectProposalsBy.ApprovedOnYear;
  } else if (isSpring) {
    return FilterInstituteProjectProposalsBy.ApprovedSpring;
  } else if (isAutumn) {
    return FilterInstituteProjectProposalsBy.ApprovedAutumn;
  }

  return FilterInstituteProjectProposalsBy.Approved;
};
