import { Project } from '@/models/Project';
import {
  CreatedProjectProposal,
  CreatedProjectResult,
  NewProjectProposal,
} from '@/models/ProjectProposal';
import { ProjectReport } from '@/models/ProjectReport';
import { Specialty } from '@/models/Specialty';
import { Tag } from '@/models/Tag';

export interface UpdateProjectProposalData {
  projectProposal: Partial<NewProjectProposal>;
  id: number;
}

export interface UpdateProjectResultData {
  projectResult: Partial<CreatedProjectResult>;
  id: number;
}

export default interface SupervisorApiType {
  createProjectProposal(
    projectProposal: NewProjectProposal,
  ): Promise<CreatedProjectProposal>;

  updateProjectProposal(
    data: UpdateProjectProposalData,
  ): Promise<CreatedProjectProposal>;
  updateProjectResult(
    data: UpdateProjectResultData,
  ): Promise<CreatedProjectResult>;

  deleteProjectProposal(
    projectProposalId: number,
  ): Promise<CreatedProjectProposal>;

  getThemeSources(): Promise<Tag[]>;
  getSpecialties(): Promise<Specialty[]>;
  getProjectProposalList(): Promise<CreatedProjectProposal[]>;
  getProjectReportList(): Promise<ProjectReport[]>;
  getProjectList(): Promise<Project[]>;
  getProposalsTime(): Promise<[string, string]>;
}
