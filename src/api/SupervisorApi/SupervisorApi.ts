import { isValidDate } from '@/helpers/date';
import { formatProjectDate, isProject, isProposal } from '@/helpers/project';
import { Project } from '@/models/Project';
import {
  CreatedProjectProposal,
  CreatedProjectResult,
  NewProjectProposal,
} from '@/models/ProjectProposal';
import { ProjectReport } from '@/models/ProjectReport';
import { Specialty } from '@/models/Specialty';
import { Tag } from '@/models/Tag';
import { sharedApi } from '../SharedApi';
import { baseKyInstance } from '../baseKy';
import SupervisorApiType, {
  UpdateProjectProposalData,
  UpdateProjectResultData,
} from './SupervisorApiType';

export default class SupervisorApi implements SupervisorApiType {
  async getProposalsTime(): Promise<[string, string]> {
    try {
      const { startDateProjectHarvest, endDateProjectHarvest } =
        await sharedApi.getHarvestSettings();
      if (
        !isValidDate(startDateProjectHarvest) ||
        !isValidDate(endDateProjectHarvest)
      )
        throw new Error('неправильная дата из sharedApi.getHarvestSettings()');
      return [startDateProjectHarvest, endDateProjectHarvest];
    } catch (error) {
      console.error(error);
      const currentTime = new Date(Date.now()).toISOString();
      return [currentTime, currentTime];
    }
  }

  async createProjectProposal(
    projectProposal: NewProjectProposal,
  ): Promise<CreatedProjectProposal> {
    return baseKyInstance
      .post('api/supervisor/projects', { json: projectProposal })
      .json();
  }

  async updateProjectProposal({
    projectProposal,
    id,
  }: UpdateProjectProposalData): Promise<CreatedProjectProposal> {
    return baseKyInstance
      .patch(`api/supervisor/projects/${id}`, { json: projectProposal })
      .json();
  }

  async updateProjectResult({
    projectResult,
    id,
  }: UpdateProjectResultData): Promise<CreatedProjectResult> {
    return baseKyInstance
      .patch(`api/supervisor/projects/${id}`, {
        json: {
          project_review: projectResult.project_review,
          project_goal: projectResult.project_goal,
        },
      })
      .json();
  }

  async deleteProjectProposal(
    projectProposalId: number,
  ): Promise<CreatedProjectProposal> {
    return baseKyInstance
      .delete(`api/supervisor/projects/${projectProposalId}`)
      .json();
  }

  async getThemeSources(): Promise<Tag[]> {
    return baseKyInstance.get('api/themeSources').json();
  }

  async getSpecialties(): Promise<Specialty[]> {
    return baseKyInstance.get('api/specialities').json();
  }

  async getProjectProposalList(): Promise<CreatedProjectProposal[]> {
    const projectProposals = await baseKyInstance
      .get('api/supervisor/projects')
      .json<CreatedProjectProposal[]>();
    return projectProposals.filter(isProposal).map(formatProjectDate);
  }

  async getProjectReportList(): Promise<ProjectReport[]> {
    const projectReports = await baseKyInstance
      .get('api/supervisor/projects/report')
      .json<ProjectReport[]>();
    return projectReports;
  }

  async getProjectList(): Promise<Project[]> {
    const projectProposals = await baseKyInstance
      .get('api/supervisor/projects')
      .json<(Project | CreatedProjectProposal)[]>();

    return projectProposals.filter(isProject).map(formatProjectDate);
  }
}
