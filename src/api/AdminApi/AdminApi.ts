import { Candidate } from '@/models/Candidate';
import { Participation } from '@/models/Participation';
import { Project } from '@/models/Project';
import { baseKyInstance } from '../baseKy';
import AdminApiType from './AdminApiType';

export default class AdminApi implements AdminApiType {
  getCandidatesWithProjects(): Promise<{
    candidates: Candidate[];
    projects: Project[];
  }> {
    return baseKyInstance.get('api/test').json();
  }

  getCandidateParticipations(
    candidate_id: number,
  ): Promise<{ candidate_id: number; participations: Participation[] }> {
    return baseKyInstance.get(`api/testF?candidate_id=${candidate_id}`).json();
  }

  updateCandidateParticipationToAnotherProject(
    candidate_id: number,
    project_id: number,
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
      .get(`api/testT?candidate_id=${candidate_id}&project_id=${project_id}`)
      .json();
  }
}
