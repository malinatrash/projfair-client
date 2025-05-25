import { projectFiltersToSearchParams } from '@/helpers/location-query';
import { formatProjectDate } from '@/helpers/project';
import { delayRes } from '@/helpers/promise';
import { compareString } from '@/helpers/string';
import { Candidate } from '@/models/Candidate';
import { Participation } from '@/models/Participation';
import {
  Project,
  ProjectFilters,
  ProjectTags,
  ProjectType,
} from '@/models/Project';
import { ProjectState } from '@/models/ProjectState';
import { Tag } from '@/models/Tag';
import { baseKyInstance } from '../baseKy';
import ProjectApiType, {
  OnDownloadProgress,
  ProjectListResponse,
} from './ProjectApiType';

export default class ProjectApi implements ProjectApiType {
  async getSingleProject(projectId: number): Promise<Project> {
    const [project, participants] = await Promise.all([
      baseKyInstance.get(`api/projects/${projectId}`).json<Project>(),
      this.getProjectParticipants(projectId),
    ]);
    project.participants = participants;
    return formatProjectDate(project);
  }

  async updateSingleProject(projectId: number): Promise<Project> {
    const [project] = await Promise.all([
      baseKyInstance.put(`api/projects/${projectId}`).json<Project>(),
    ]);
    return formatProjectDate(project);
  }

  async filterProjectList(
    filters: ProjectFilters,
    onDownloadProgress?: OnDownloadProgress,
  ): Promise<ProjectListResponse> {
    const searchParams = projectFiltersToSearchParams(filters);
    const projectListRes: ProjectListResponse = await baseKyInstance
      .get('api/projects/filter', {
        searchParams,
        onDownloadProgress,
      })
      .json();
    projectListRes.data = projectListRes.data.map(formatProjectDate);
    return projectListRes;
  }

  async getAllProjectTags(): Promise<ProjectTags> {
    const tags: Record<string, Tag[]> = await baseKyInstance
      .get('api/skills')
      .json();

    // сортировка по алфавиту
    for (const key in tags) {
      tags[key].sort((a, b) =>
        compareString(a.name.toLowerCase(), b.name.toLowerCase()),
      );
    }

    // костыль, т.к. TS не даёт итерироваться по ProjectTags, пришлось привести его к Record<string, Tag>
    return tags as unknown as ProjectTags;
  }

  async getAllProjectTypes(): Promise<ProjectType[]> {
    return baseKyInstance.get('api/types').json();
  }

  async getAllProjectStates(): Promise<ProjectState[]> {
    return baseKyInstance.get('api/states').json();
  }

  async getProjectParticipants(projectId: number): Promise<Candidate[]> {
    try {
      return await baseKyInstance
        .get(`api/projects/${projectId}/participants`)
        .json();
    } catch (error) {
      return [];
    }
  }

  async updateProjectCandidateMark(
    projectId: number,
    candidateId: number,
    mark: number,
    review: string,
  ): Promise<Participation> {
    const participation: Participation = await baseKyInstance
      .patch(`api/supervisor/projects/${projectId}/candidates/${candidateId}`, {
        json: {
          mark,
          review,
        },
      })
      .json();

    return delayRes(participation, 200);
  }

  async getProjectHistory(projectId: number): Promise<Project[]> {
    try {
      const projectList: Project[] = await baseKyInstance
        .get(`api/projects/${projectId}/history`)
        .json();
      return projectList.map(formatProjectDate);
    } catch (error) {
      return [];
    }
  }
}
