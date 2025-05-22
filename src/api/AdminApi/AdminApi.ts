import { formatProjectDate, isProject } from '@/helpers/project';
import { Candidate } from '@/models/Candidate';
import { Participation } from '@/models/Participation';
import { Project } from '@/models/Project';
import { CreatedProjectProposal } from '@/models/ProjectProposal';
import { baseKyInstance } from '../baseKy';
import AdminApiType from './AdminApiType';

export default class AdminApi implements AdminApiType {
  getCandidatesWithProjects(): Promise<{
    candidates: Candidate[];
    projects: Project[];
  }> {
    return baseKyInstance.get('api/transfer/students').json();
  }

  getCandidateParticipations(
    candidate_id: number,
  ): Promise<{ candidate_id: number; participations: Participation[] }> {
    return baseKyInstance
      .get(`api/transfer/students/participations?candidate_id=${candidate_id}`)
      .json();
  }

  updateCandidateParticipationToAnotherProject(
    candidate_id: number,
    project_id: number,
    reasonMessage: string,
  ): Promise<{
    message: string;
    new_participation: {
      id: number;
      candidate_id: number;
      project_id: number;
      state_id: number;
      priority: number;
    };
  }> {
    return baseKyInstance
      .post(`api/transfer/students/participations`, {
        json: {
          candidate_id: candidate_id,
          project_id: project_id,
          reason_message: reasonMessage,
        },
      })
      .json();
  }

  async getProjectList(mentor_id: number): Promise<Project[]> {
    const projectProposals = await baseKyInstance
      .get(`api/admin/projects${mentor_id ? `?mentor_id=${mentor_id}` : ''}`)
      .json<(Project | CreatedProjectProposal)[]>();

    return projectProposals.filter(isProject).map(formatProjectDate);
  }
}
