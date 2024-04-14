import { ProjectResultGoal } from './components/ProjectResultForm';
import { Department } from './Department';
import { Participation } from './Participation';
import {
  ProjectSupervisor,
  ProjectType,
  ProjectTypeName,
  Skill,
} from './Project';
import { ProjectDifficulty } from './ProjectDifficulty';
import {
  Specialty,
  SpecialtyCourse,
  SpecialtyGroup,
  SpecialtyPriority,
} from './Specialty';
import { State } from './State';
import { Tag } from './Tag';

export const enum MemberRole {
  Mentor = 2,
  JobDeveloper = 1,
  CoMentor = 3,
  Expert = 4,
}

export const MemberRoleText: Record<MemberRole, string> = {
  [MemberRole.Mentor]: 'Наставник',
  [MemberRole.JobDeveloper]: 'Разработчик задания',
  [MemberRole.CoMentor]: 'Сонаставник',
  [MemberRole.Expert]: 'Эксперт',
};

export interface ProjectProposalTeamMember {
  supervisor_id: number;
  role_ids: MemberRole[];
}

export const enum ProjectProposalStateId {
  UnderReview = 6,
  Draft = 7,
  Rejected = 8,
  Approved = 9,
}

export type ProjectProposalState = State<ProjectProposalStateId>;

export const PROJECT_PROPOSAL_IDS = [
  ProjectProposalStateId.UnderReview,
  ProjectProposalStateId.Draft,
  ProjectProposalStateId.Rejected,
  ProjectProposalStateId.Approved,
];

export const StateClass: Record<ProjectProposalStateId, string> = {
  [ProjectProposalStateId.UnderReview]: 'review',
  [ProjectProposalStateId.Draft]: 'draft',
  [ProjectProposalStateId.Rejected]: 'rejected',
  [ProjectProposalStateId.Approved]: 'approved',
};

export interface ProjectProposalSpecialty {
  specialitiy_id: number;
  course: SpecialtyCourse;
  priority: SpecialtyPriority;
}

export interface ProjectProposal {
  title: string;
  places: number;
  goal: string;
  description: string;
  difficulty: ProjectDifficulty;
  date_start: string;
  date_end: string;
  requirements: string;
  customer: string;
  product_result: string;
  study_result: string;
  additional_inf: string;
}

export interface NewProjectProposal extends ProjectProposal {
  type_id: ProjectTypeName;
  theme_source_id?: number | null;
  department_id: number;
  prev_project_id: number | null;
  state_id: ProjectProposalStateId;
  supervisors: ProjectProposalTeamMember[];
  skill_ids: number[];
  new_skills: string[];
  specialities: ProjectProposalSpecialty[];
}

export interface CreatedProjectProposal extends ProjectProposal {
  id: number;
  type: ProjectType;
  theme_source?: Tag;
  department: Department;
  prevProjectId: number | null;
  state: ProjectProposalState;
  supervisors: ProjectSupervisor[];
  skills: Skill[];
  specialities: Specialty[];
  project_specialities: SpecialtyGroup[];
  rejection_reason?: string;
}

export interface CreatedProjectResult extends ProjectProposal {
  project_review?: string;
  project_goal?: ProjectResultGoal;
}
