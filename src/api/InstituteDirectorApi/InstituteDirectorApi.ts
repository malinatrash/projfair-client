import { handleHttpError } from '@/helpers/error';
import { CreatedProjectProposal } from '@/models/ProjectProposal';
import { baseKyInstance } from '../baseKy';
import InstituteDirectorApiType, {
  ReviewProjectProposalData,
} from './InstituteDirectorApiType';

export default class InstituteDirectorApi implements InstituteDirectorApiType {
  async reviewProjectProposal(
    data: ReviewProjectProposalData,
  ): Promise<CreatedProjectProposal> {
    try {
      const { project_proposal_id: id, ...rest } = data;

      return await baseKyInstance
        .patch(`api/director/projects/${id}`, { json: rest })
        .json();
    } catch (error) {
      throw await handleHttpError(error);
    }
  }

  async getInstituteProjectProposals(): Promise<CreatedProjectProposal[]> {
    return baseKyInstance.get('api/director/projects').json();
  }
}
