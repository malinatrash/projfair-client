import { DownloadProgress } from 'ky';
import { formatProjectDate } from '@/helpers/project';
import { delayRes, sleep } from '@/helpers/promise';
import { Candidate } from '@/models/Candidate';
import type {
  Project,
  ProjectFilters,
  ProjectTags,
  ProjectType,
} from '@/models/Project';
import { ProjectState } from '@/models/ProjectState';
import { projectListResponse, states, types } from '@/models/mock/project';
import { skills } from '@/models/mock/project-skills';
import { specialties } from '@/models/mock/specialties';
import ProjectApiType, {
  OnDownloadProgress,
  ProjectListResponse,
} from './ProjectApiType';

const createDownloadProgress =
  (totalBytes: number) =>
  (percent: number): DownloadProgress => ({
    percent: percent,
    totalBytes: totalBytes,
    transferredBytes: totalBytes * percent,
  });

export default class ProjectApiMock implements ProjectApiType {
  async filterProjectList(
    filters: ProjectFilters,
    onDownloadProgress?: OnDownloadProgress,
  ): Promise<ProjectListResponse> {
    let filteredList = projectListResponse.data;
    // DIFFICULTY
    if (filters.difficulty && filters.difficulty.length > 0) {
      filteredList = filteredList.filter((project) =>
        filters.difficulty?.includes(project.difficulty),
      );
    }
    // STATE
    if (filters.state && filters.state.length > 0) {
      filteredList = filteredList.filter((project) =>
        filters.state?.includes(project.state.id),
      );
    }
    // TITLE
    if (filters.title) {
      filteredList = filteredList.filter(
        (project) =>
          filters.title &&
          project.title.toLowerCase().includes(filters.title.toLowerCase()),
      );
    }
    // TAGS
    if (filters.skills && filters.skills.length > 0) {
      filteredList = filteredList.filter((project) =>
        filters.skills?.some((tag) =>
          project.skills.some((skill) => tag === skill.id),
        ),
      );
    }

    filteredList = filteredList.map(formatProjectDate);

    // постраничная пагинация
    const projectCount = filteredList.length;
    const perPage = 7;
    const page = filters.page || 1;
    const paginatedList = filteredList.slice(
      (page - 1) * perPage,
      page * perPage,
    );

    // имитация загрузки
    const getDownloadProgress = createDownloadProgress(1000);

    await sleep(100);
    onDownloadProgress?.(getDownloadProgress(0.25), new Uint8Array());

    await sleep(200);
    onDownloadProgress?.(getDownloadProgress(0.7), new Uint8Array());

    await sleep(100);
    onDownloadProgress?.(getDownloadProgress(1), new Uint8Array());

    return { projectCount, data: paginatedList };
  }

  async getSingleProject(projectId: number): Promise<Project> {
    const project = projectListResponse.data.find(
      (singleProject) => singleProject.id === projectId,
    );
    if (!project) throw new Error('проект не найден');
    return delayRes(formatProjectDate(project), 400);
  }

  async updateSingleProject(projectId: number): Promise<Project> {
    const project = projectListResponse.data.find(
      (singleProject) => singleProject.id === projectId,
    );
    if (!project) throw new Error('проект не найден');
    return delayRes(formatProjectDate(project), 400);
  }

  async getAllProjectTags(): Promise<ProjectTags> {
    return delayRes({ skills, specialties }, 300);
  }

  async getAllProjectTypes(): Promise<ProjectType[]> {
    return delayRes(types, 300);
  }

  async getAllProjectStates(): Promise<ProjectState[]> {
    return delayRes(states, 300);
  }

  async getProjectParticipants(projectId: number): Promise<Candidate[]> {
    const project = projectListResponse.data.find(
      (project) => project.id === projectId,
    );
    return delayRes(project?.participants || [], 300);
  }

  async getProjectHistory(projectId: number): Promise<Project[]> {
    const projects = projectListResponse.data;

    function findPrevProject(projectId: number): Project | undefined {
      return projects.find((project) => project.id === projectId);
    }
    function findNextProject(projectId: number): Project | undefined {
      return projects.find((project) => project.prevProjectId === projectId);
    }

    const currentProject = findPrevProject(projectId);
    if (!currentProject) return [];
    const history: Project[] = [formatProjectDate(currentProject)];

    // [...prev, current, ...next]
    // поиск prev проектов
    let prevProjectId: number | null = currentProject.prevProjectId;
    while (prevProjectId) {
      const project = findPrevProject(prevProjectId);
      if (project) history.unshift(formatProjectDate(project));
      prevProjectId = project?.prevProjectId || null;
    }

    // поиск next проектов
    prevProjectId = projectId;
    while (prevProjectId) {
      const project = findNextProject(prevProjectId);
      if (project) history.push(formatProjectDate(project));
      prevProjectId = project?.id || null;
    }

    return history.map(formatProjectDate);
  }
}
