import { Candidate } from './Candidate';
import { Supervisor } from './Supervisor';

export interface SharedUserData {
  id: number;
  fio: string;
  email: string;
  about: string;
  created_at?: string;
  updated_at?: string;
}

export interface UserRole {
  is_student: boolean;
  is_teacher: boolean;
  is_institute_director: boolean;
  is_head_project_education_center: boolean;
}

export type UserRoleKey = keyof UserRole;

export interface UserMetadata extends UserRole {
  canSendParticipations: boolean;
  canReviewProjects: boolean;
}

export interface UserCandidate extends Candidate, Partial<UserMetadata> {}
export interface UserSupervisor extends Supervisor, Partial<UserMetadata> {}
