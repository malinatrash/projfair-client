import { DownloadProgress } from 'ky';
import { Candidate } from '@/models/Candidate';
import type {
  Project,
  ProjectFilters,
  ProjectTags,
  ProjectType,
} from '@/models/Project';
import { ProjectState } from '@/models/ProjectState';

export interface ProjectListResponse {
  data: Project[];
  projectCount: number;
}

export interface ProjectCandidateMark {
  projectId: number;
  candidateId: number;
  mark: number;
  review: string;
}

export type OnDownloadProgress = (
  progress: DownloadProgress,
  chunk: Uint8Array,
) => void;

export default interface ProjectApiType {
  filterProjectList(
    filters: ProjectFilters,
    onDownloadProgress?: OnDownloadProgress,
  ): Promise<ProjectListResponse>;
  getAllProjectTags(): Promise<ProjectTags>;
  getAllProjectTypes(): Promise<ProjectType[]>;
  getAllProjectStates(): Promise<ProjectState[]>;
  getSingleProject(projectId: number): Promise<Project>;
  updateProjectCandidateMark(
    projectId: number,
    candidateId: number,
    mark: number,
    review: string,
  ): Promise<Project>;
  updateSingleProject(projectId: number): Promise<Project>;
  getProjectParticipants(projectId: number): Promise<Candidate[]>;
  getProjectHistory(projectId: number): Promise<Project[]>;
}
