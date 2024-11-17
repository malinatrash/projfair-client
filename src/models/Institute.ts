import { Tag } from './Tag';

export type Institute = Tag & {
  maxApprovedProjects: number;
  maxSpringApprovedProjects: number;
  maxAutumnApprovedProjects: number;
};
