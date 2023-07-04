import { Department } from './Department';
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

export interface ProjectProposalResultTeamMember {
  supervisor_id: number;
  role_ids: MemberRole[];
}

export const enum ProjectProposalResultStateId {
  UnderReview = 6,
  Draft = 7,
  Rejected = 8,
  Approved = 9,
}

export type ProjectProposalResultState = State<ProjectProposalResultStateId>;

export const PROJECT_ProposalResult_IDS = [
  ProjectProposalResultStateId.UnderReview,
  ProjectProposalResultStateId.Draft,
  ProjectProposalResultStateId.Rejected,
  ProjectProposalResultStateId.Approved,
];

export const StateClass: Record<ProjectProposalResultStateId, string> = {
  [ProjectProposalResultStateId.UnderReview]: 'review',
  [ProjectProposalResultStateId.Draft]: 'draft',
  [ProjectProposalResultStateId.Rejected]: 'rejected',
  [ProjectProposalResultStateId.Approved]: 'approved',
};

export interface ProjectProposalResultSpecialty {
  specialitiy_id: number;
  course: SpecialtyCourse;
  priority: SpecialtyPriority;
}

export interface ProjectProposalResult {
  title: string;
  places: number;
  goal: string;
  description: string;
  difficulty: ProjectDifficulty;
  requirements: string;
  customer: string;
  product_result: string;
  study_result: string;
  additional_inf: string;
}

export interface NewProjectProposalResult extends ProjectProposalResult {
  type_id: ProjectTypeName;
  theme_source_id?: number | null;
  department_id: number;
  prev_project_id: number | null;
  state_id: ProjectProposalResultStateId;
  // supervisors: ProjectProposalResultTeamMember[];
  skill_ids: number[];
  new_skills: string[];
  specialities: ProjectProposalResultSpecialty[];
}

export interface CreatedProjectProposalResult extends ProjectProposalResult {
  id: number;
  type: ProjectType;
  theme_source?: Tag;
  department: Department;
  prevProjectId: number | null;
  state: ProjectProposalResultState;
  // supervisors: ProjectSupervisor[];
  skills: Skill[];
  specialities: Specialty[];
  project_specialities: SpecialtyGroup[];
  rejection_reason?: string;
}
