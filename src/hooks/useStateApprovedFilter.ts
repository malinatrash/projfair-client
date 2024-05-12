import { getAcademicYear } from '@/helpers/date'
import {
  CreatedProjectProposal,
  ProjectProposalStateId,
} from '@/models/ProjectProposal'
import { FilterInstituteProjectProposalsBy } from '@/router/utils/routes'

export const useStateApprovedFilter = (proposal: CreatedProjectProposal) => {
  if (proposal.state.id !== ProjectProposalStateId.Approved) return '';

  const { date_start, date_end } = proposal;

  const start = Date.parse(date_start);
  const end = Date.parse(date_end);

  const isFullYear = new Date(end - start).getMonth() > 4;
  const isAutumn = getAcademicYear(new Date(start).getMonth()).isAutumn();
  const isSpring = getAcademicYear(new Date(start).getMonth()).isSpring();

  if (isSpring) {
    return FilterInstituteProjectProposalsBy.ApprovedSpring;
  } if (isFullYear && isSpring) {
    return FilterInstituteProjectProposalsBy.ApprovedSpring;
  } if (isAutumn) {
    return FilterInstituteProjectProposalsBy.ApprovedAutumn;
  } if (isFullYear && isAutumn) {
    return FilterInstituteProjectProposalsBy.ApprovedAutumn;
  } if (isFullYear) {
    return FilterInstituteProjectProposalsBy.ApprovedOnYear;
  }
};
