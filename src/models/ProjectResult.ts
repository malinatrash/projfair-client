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

export interface ProjectResultTeamMember {
  supervisor_id: number;
  role_ids: MemberRole[];
}

export const enum ProjectResultStateId {
  UnderReview = 6,
  Draft = 7,
  Rejected = 8,
  Approved = 9,
}

export type ProjectResultState = State<ProjectResultStateId>;

export const PROJECT_Result_IDS = [
  ProjectResultStateId.UnderReview,
  ProjectResultStateId.Draft,
  ProjectResultStateId.Rejected,
  ProjectResultStateId.Approved,
];

export const StateClass: Record<ProjectResultStateId, string> = {
  [ProjectResultStateId.UnderReview]: 'review',
  [ProjectResultStateId.Draft]: 'draft',
  [ProjectResultStateId.Rejected]: 'rejected',
  [ProjectResultStateId.Approved]: 'approved',
};

export interface ProjectResultSpecialty {
  specialitiy_id: number;
  course: SpecialtyCourse;
  priority: SpecialtyPriority;
}

export interface ProjectResult {
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

export interface NewProjectResult extends ProjectResult {
  type_id: ProjectTypeName;
  theme_source_id?: number | null;
  department_id: number;
  prev_project_id: number | null;
  state_id: ProjectResultStateId;
  // supervisors: ProjectResultTeamMember[];
  skill_ids: number[];
  new_skills: string[];
  specialities: ProjectResultSpecialty[];
}

export interface CreatedProjectResult extends ProjectResult {
  id: number;
  type: ProjectType;
  theme_source?: Tag;
  department: Department;
  prevProjectId: number | null;
  state: ProjectResultState;
  // supervisors: ProjectSupervisor[];
  skills: Skill[];
  specialities: Specialty[];
  project_specialities: SpecialtyGroup[];
  rejection_reason?: string;
}
