import {
  CreatedProjectProposal,
  CreatedProjectProposalWithFilter,
  ProjectProposalStateId,
} from '@/models/ProjectProposal';

export interface ReviewProjectProposalData {
  rejection_reason?: string;
  state_id: ProjectProposalStateId.Approved | ProjectProposalStateId.Rejected;
  project_proposal_id: number;
}

export default interface InstituteDirectorApiType {
  reviewProjectProposal(
    data: ReviewProjectProposalData,
  ): Promise<CreatedProjectProposalWithFilter>;
  getInstituteProjectProposals(): Promise<CreatedProjectProposalWithFilter[]>;
}
