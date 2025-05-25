import { delayRes } from '@/helpers/promise';
import { Candidate } from '@/models/Candidate';
import { Participation } from '@/models/Participation';
import { Project } from '@/models/Project';
import AdminApiType from './AdminApiType';

export default class AdminApiMock implements AdminApiType {
  getCandidatesWithProjects(): Promise<{
    candidates: Candidate[];
    projects: Project[];
  }> {
    return delayRes(
      {
        candidates: [],
        projects: [],
      },
      300,
    );
  }

  getCandidateParticipations(
    candidate_id: number,
  ): Promise<{ candidate_id: number; participations: Participation[] }> {
    return delayRes(
      {
        candidate_id: 0,
        participations: [],
      },
      300,
    );
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
    return delayRes(
      {
        message: '',
        new_participation: {
          id: 0,
          candidate_id: 0,
          priority: 1,
          project_id: 1,
          state_id: 0,
        },
      },
      300,
    );
  }

  async getProjectList(mentor_id: number): Promise<Project[]> {
    return delayRes([], 300);
  }
}
