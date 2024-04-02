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
  ApprovedOnYear = 9.1,
  ApprovedAutumn = 9.2,
  ApprovedSpring = 9.3,
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
  [ProjectProposalStateId.ApprovedOnYear]: 'approved_on_year',
  [ProjectProposalStateId.ApprovedAutumn]: 'approved_autumn',
  [ProjectProposalStateId.ApprovedSpring]: 'approved_spring',
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
  created_at?: string;
  updated_at?: string;
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
  theme_source?: Tag | null;
  department: Department;
  prevProjectId: number | null;
  state: ProjectProposalState;
  supervisors: ProjectSupervisor[];
  supervisorsNames: string;
  participations?: Participation[];
  skills: Skill[];
  specialities: Specialty[];
  project_specialities: SpecialtyGroup[];
  rejection_reason?: string;
  rejection_date?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreatedProjectProposalWithFilter
  extends CreatedProjectProposal {
  filter?: string | string[];
}

export interface CreatedProjectResult extends ProjectProposal {
  result_description?: string;
  result_goal?: ProjectResultGoal;
  participations?: Participation[];
}
