import { delayRes } from '@/helpers/promise';
import { CreatedProjectProposal } from '@/models/ProjectProposal';
import { mockProjectProposalList } from '@/models/mock/project-proposal';
import InstituteDirectorApiType, {
  ReviewProjectProposalData,
} from './InstituteDirectorApiType';

export default class InstituteDirectorApiMock
  implements InstituteDirectorApiType
{
  async reviewProjectProposal(
    data: ReviewProjectProposalData,
  ): Promise<CreatedProjectProposal> {
    const { project_proposal_id: id, ...rest } = data;

    return delayRes(
      mockProjectProposalList.find(
        (proposal) => proposal.id === id,
      ) as CreatedProjectProposal,
      500,
    );
  }

  async getInstituteProjectProposals(): Promise<CreatedProjectProposal[]> {
    return delayRes(mockProjectProposalList, 500);
  }
}
