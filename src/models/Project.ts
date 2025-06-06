import { ProjectResultGoal } from './components/ProjectResultForm';
import { Candidate } from './Candidate';
import { Participation } from './Participation';
import { ProjectDifficulty } from './ProjectDifficulty';
import { MemberRole } from './ProjectProposal';
import { ProjectState, ProjectStateID } from './ProjectState';
import { Specialty, SpecialtyGroup } from './Specialty';
import { Tag } from './Tag';
import { UserSupervisor } from './User';

export interface SupervisorFio {
  fio?: 'fio';
}

export interface Skill extends Tag, SupervisorFio {
  skillCategory?: Tag;
}

export const SkillKeys: Record<keyof Skill, keyof Skill> = {
  id: 'id',
  name: 'name',
  fio: 'fio',
  skillCategory: 'skillCategory',
};

export const enum ProjectTypeName {
  Applied = 1,
  Scientific = 2,
  Service = 3,
}

export interface ProjectType {
  id: ProjectTypeName;
  type: string;
}

export interface ProjectSupervisor {
  id: number;
  roles: Tag<MemberRole>[];
  supervisor: UserSupervisor;
}

export interface Project {
  id: number;
  prevProjectId: number | null;
  title: string;
  places: number;
  goal: string;
  description: string;
  difficulty: ProjectDifficulty;
  date_start: string;
  date_end: string;
  requirements: string;
  customer?: string;
  additional_inf?: string;
  product_result: string;
  study_result: string;
  supervisors: ProjectSupervisor[];
  supervisorsNames: string;
  state: ProjectState;
  type: ProjectType;
  skills: Skill[];
  specialities: Specialty[];
  project_specialities: SpecialtyGroup[];
  participations?: Participation[];
  participants?: Candidate[];
  participant_feedback?: string;

  project_review?: string;
  project_goal?: ProjectResultGoal;
}

export interface ProjectFilters {
  state: ProjectStateID[];
  skills: number[];
  supervisors: number[];
  specialties: number[];
  difficulty: ProjectDifficulty[];
  title: string;
  page: number;
  sortBy: keyof Project;
  order: 'asc' | 'desc';
}

export interface ProjectTags {
  skills: Skill[];
  specialties: Specialty[];
}
