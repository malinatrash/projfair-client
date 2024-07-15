import { Department } from './Department';
import { State } from './State';

export const enum ProjectReportNameId {
  All = 0,
  InstituteOfAircraftEngineeringAndTransportation = 1,
  InstituteOfDistanceAndEveningEducation = 2,
  InstituteOfHighTechnology = 3,
  InstituteOfInformationTechnologyAndDataAnalysis = 4,
  InstituteOfArchitectureConstructionAndDesign = 5,
  SubsoilUseInstitute = 6,
  InstituteOfEconomicsManagementAndLaw = 7,
  BRICSBaikalInstitute = 8,
  InstituteOfLinguisticsAndInterculturalCommunication = 9,
  EnergyInstitute = 10,
  IRNITUBranchInUsolyeSibirskiy = 11,
  CollegeOfMechanicalEngineering = 12,
  GeologicalExplorationTechnicalSchool = 13,
  InstituteOfQuantumPhysics = 14,
  MRCPC = 15,
  InstituteSiberianSchoolOfGeosciences = 16,
}

export const enum ProjectReportStateId {
  Delivered = 1,
  NotDelivered = 2,
}

export type ProjectReportState = State<ProjectReportStateId>;

export const PROJECT_REPORT_IDS = [
  ProjectReportStateId.Delivered,
  ProjectReportStateId.NotDelivered,
];

export const StateClass: Record<ProjectReportStateId, string> = {
  [ProjectReportStateId.Delivered]: 'delivered',
  [ProjectReportStateId.NotDelivered]: 'not-delivered',
};

export const StateName: Record<ProjectReportStateId, string> = {
  [ProjectReportStateId.Delivered]: 'Сдан',
  [ProjectReportStateId.NotDelivered]: 'Не сдан',
};

export interface ProjectSupervisorExpert {
  id: number;
  fio: string;
  position: string;
}

export interface ProjectReport {
  id: number;
  title: string;
  description: string;
  goal: string;
  date_start: string;
  date_end: string;
  project_review: string | null;
  project_goal: string | null;
  department: Department;
  supervisors: ProjectSupervisorExpert[];
}
