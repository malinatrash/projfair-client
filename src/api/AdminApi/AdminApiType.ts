import { Candidate } from '@/models/Candidate';
import { Participation } from '@/models/Participation';
import { Project } from '@/models/Project';

export default interface AdminApiType {
  getCandidatesWithProjects(): Promise<{
    candidates: Candidate[];
    projects: Project[];
  }>;

  getCandidateParticipations(candidate_id: number): Promise<{
    candidate_id: number;
    participations: Participation[];
  }>;

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
  }>;

  getProjectList(mentor_id: number): Promise<Project[]>;
}
