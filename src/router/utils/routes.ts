import { LocationAsRelativeRaw, RouteLocationRaw } from 'vue-router';
import { RouteNames } from '../types/route-names';
import { ProjectProposalStateId } from '@/models/ProjectProposal';
import { ProjectReportNameId } from '@/models/ProjectReport';
import { ProjectStateID } from '@/models/ProjectState';

export function toProjectResultRoute(projectId: number): RouteLocationRaw {
  return {
    name: RouteNames.PROJECT_RESULTS,
    params: {
      id: projectId,
    },
  };
}

export function toProjectRoute(projectId: number): RouteLocationRaw {
  return { name: RouteNames.PROJECT_DETAILS, params: { id: projectId } };
}

export function toProjectProposalCreateRoute(
  proposalId?: number,
): RouteLocationRaw {
  return {
    name: RouteNames.SUPERVISOR_PROJECT_PROPOSAL_CREATE,
    params: { id: proposalId },
  };
}

export const enum FilterInstituteProjectsBy {
  All = 'all',
  Recruiting = 'recruiting',
  Active = 'active',
  Extra = 'extra',
  Archived = 'archived',
  Processing = 'processing',
}

export const FilterByToProjectStateId: Record<
  FilterInstituteProjectsBy,
  ProjectStateID
> = {
  [FilterInstituteProjectsBy.All]: ProjectStateID.All,
  [FilterInstituteProjectsBy.Recruiting]: ProjectStateID.RecruitingState,
  [FilterInstituteProjectsBy.Active]: ProjectStateID.ActiveState,
  [FilterInstituteProjectsBy.Extra]: ProjectStateID.ExtraState,
  [FilterInstituteProjectsBy.Archived]: ProjectStateID.ArchivedState,
  [FilterInstituteProjectsBy.Processing]: ProjectStateID.ProcessingState,
};

export function toInstituteProjects(
  filterBy = FilterInstituteProjectsBy.All,
  page = 1,
): LocationAsRelativeRaw {
  return {
    name: RouteNames.INST_DIRECTOR_PROJECTS,
    params: { filterBy, page },
  };
}

// ? ////////////////////////////////////////////////////////////////////////////////////////////

export const enum FilterInstituteProjectProposalsBy {
  New = 'new',
  Approved = 'approved',
  ApprovedOnYear = 'approved_on_year',
  ApprovedAutumn = 'approved_autumn',
  ApprovedSpring = 'approved_spring',
  Rejected = 'rejected',
}

export const FilterByToProjectProposalStateId: Record<
  FilterInstituteProjectProposalsBy,
  ProjectProposalStateId
> = {
  [FilterInstituteProjectProposalsBy.New]: ProjectProposalStateId.UnderReview,
  [FilterInstituteProjectProposalsBy.Approved]: ProjectProposalStateId.Approved,
  [FilterInstituteProjectProposalsBy.ApprovedOnYear]:
    ProjectProposalStateId.ApprovedOnYear,
  [FilterInstituteProjectProposalsBy.ApprovedAutumn]:
    ProjectProposalStateId.ApprovedAutumn,
  [FilterInstituteProjectProposalsBy.ApprovedSpring]:
    ProjectProposalStateId.ApprovedSpring,
  [FilterInstituteProjectProposalsBy.Rejected]: ProjectProposalStateId.Rejected,
};

export function toInstituteProjectProposals(
  filterBy = FilterInstituteProjectProposalsBy.New,
  page = 1,
): LocationAsRelativeRaw {
  return {
    name: RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS,
    params: { filterBy, page },
  };
}

// ? ////////////////////////////////////////////////////////////////////////////////////////////

export const enum FilterInstituteProjectReportsBy {
  All = 'all',
  InstituteOfAircraftEngineeringAndTransportation = 'institute_of_aircraft_engineering_and_transportation',
  InstituteOfDistanceAndEveningEducation = 'institute_of_distance_and_evening_education',
  InstituteOfHighTechnology = 'institute_of_high_technology',
  InstituteOfInformationTechnologyAndDataAnalysis = 'institute_of_information_technology_and_data_analysis',
  InstituteOfArchitectureConstructionAndDesign = 'institute_of_architecture_construction_and_design',
  SubsoilUseInstitute = 'subsoil_use_institute',
  InstituteOfEconomicsManagementAndLaw = 'institute_of_economics_management_and_law',
  BRICSBaikalInstitute = 'brics_baikal_institute',
  InstituteOfLinguisticsAndInterculturalCommunication = 'institute_of_linguistics_and_intercultural_communication',
  EnergyInstitute = 'energy_institute',
  IRNITUBranchInUsolyeSibirskiy = 'irnitu_branch_in_usolye_sibirskiy',
  CollegeOfMechanicalEngineering = 'college_of_mechanical_engineering',
  GeologicalExplorationTechnicalSchool = 'geological_exploration_technical_school',
  InstituteOfQuantumPhysics = 'institute_of_quantum_physics',
  MRCPC = 'mrcpc',
  InstituteSiberianSchoolOfGeosciences = 'institute_siberian_school_of_geosciences',
}

export const FilterByToProjectReportNameId: Record<
  FilterInstituteProjectReportsBy,
  ProjectReportNameId
> = {
  [FilterInstituteProjectReportsBy.All]: ProjectReportNameId.All,
  [FilterInstituteProjectReportsBy.InstituteOfAircraftEngineeringAndTransportation]:
    ProjectReportNameId.InstituteOfAircraftEngineeringAndTransportation,
  [FilterInstituteProjectReportsBy.InstituteOfDistanceAndEveningEducation]:
    ProjectReportNameId.InstituteOfDistanceAndEveningEducation,
  [FilterInstituteProjectReportsBy.InstituteOfHighTechnology]:
    ProjectReportNameId.InstituteOfHighTechnology,
  [FilterInstituteProjectReportsBy.InstituteOfInformationTechnologyAndDataAnalysis]:
    ProjectReportNameId.InstituteOfInformationTechnologyAndDataAnalysis,
  [FilterInstituteProjectReportsBy.InstituteOfArchitectureConstructionAndDesign]:
    ProjectReportNameId.InstituteOfArchitectureConstructionAndDesign,
  [FilterInstituteProjectReportsBy.SubsoilUseInstitute]:
    ProjectReportNameId.SubsoilUseInstitute,
  [FilterInstituteProjectReportsBy.InstituteOfEconomicsManagementAndLaw]:
    ProjectReportNameId.InstituteOfEconomicsManagementAndLaw,
  [FilterInstituteProjectReportsBy.BRICSBaikalInstitute]:
    ProjectReportNameId.BRICSBaikalInstitute,
  [FilterInstituteProjectReportsBy.InstituteOfLinguisticsAndInterculturalCommunication]:
    ProjectReportNameId.InstituteOfLinguisticsAndInterculturalCommunication,
  [FilterInstituteProjectReportsBy.EnergyInstitute]:
    ProjectReportNameId.EnergyInstitute,
  [FilterInstituteProjectReportsBy.IRNITUBranchInUsolyeSibirskiy]:
    ProjectReportNameId.IRNITUBranchInUsolyeSibirskiy,
  [FilterInstituteProjectReportsBy.CollegeOfMechanicalEngineering]:
    ProjectReportNameId.CollegeOfMechanicalEngineering,
  [FilterInstituteProjectReportsBy.GeologicalExplorationTechnicalSchool]:
    ProjectReportNameId.GeologicalExplorationTechnicalSchool,
  [FilterInstituteProjectReportsBy.InstituteOfQuantumPhysics]:
    ProjectReportNameId.InstituteOfQuantumPhysics,
  [FilterInstituteProjectReportsBy.MRCPC]: ProjectReportNameId.MRCPC,
  [FilterInstituteProjectReportsBy.InstituteSiberianSchoolOfGeosciences]:
    ProjectReportNameId.InstituteSiberianSchoolOfGeosciences,
};

export const FilterByToProjectReportIdName: Record<
  ProjectReportNameId,
  FilterInstituteProjectReportsBy
> = {
  [ProjectReportNameId.All]: FilterInstituteProjectReportsBy.All,
  [ProjectReportNameId.InstituteOfAircraftEngineeringAndTransportation]:
    FilterInstituteProjectReportsBy.InstituteOfAircraftEngineeringAndTransportation,
  [ProjectReportNameId.InstituteOfDistanceAndEveningEducation]:
    FilterInstituteProjectReportsBy.InstituteOfDistanceAndEveningEducation,
  [ProjectReportNameId.InstituteOfHighTechnology]:
    FilterInstituteProjectReportsBy.InstituteOfHighTechnology,
  [ProjectReportNameId.InstituteOfInformationTechnologyAndDataAnalysis]:
    FilterInstituteProjectReportsBy.InstituteOfInformationTechnologyAndDataAnalysis,
  [ProjectReportNameId.InstituteOfArchitectureConstructionAndDesign]:
    FilterInstituteProjectReportsBy.InstituteOfArchitectureConstructionAndDesign,
  [ProjectReportNameId.SubsoilUseInstitute]:
    FilterInstituteProjectReportsBy.SubsoilUseInstitute,
  [ProjectReportNameId.InstituteOfEconomicsManagementAndLaw]:
    FilterInstituteProjectReportsBy.InstituteOfEconomicsManagementAndLaw,
  [ProjectReportNameId.BRICSBaikalInstitute]:
    FilterInstituteProjectReportsBy.BRICSBaikalInstitute,
  [ProjectReportNameId.InstituteOfLinguisticsAndInterculturalCommunication]:
    FilterInstituteProjectReportsBy.InstituteOfLinguisticsAndInterculturalCommunication,
  [ProjectReportNameId.EnergyInstitute]:
    FilterInstituteProjectReportsBy.EnergyInstitute,
  [ProjectReportNameId.IRNITUBranchInUsolyeSibirskiy]:
    FilterInstituteProjectReportsBy.IRNITUBranchInUsolyeSibirskiy,
  [ProjectReportNameId.CollegeOfMechanicalEngineering]:
    FilterInstituteProjectReportsBy.CollegeOfMechanicalEngineering,
  [ProjectReportNameId.GeologicalExplorationTechnicalSchool]:
    FilterInstituteProjectReportsBy.GeologicalExplorationTechnicalSchool,
  [ProjectReportNameId.InstituteOfQuantumPhysics]:
    FilterInstituteProjectReportsBy.InstituteOfQuantumPhysics,
  [ProjectReportNameId.MRCPC]: FilterInstituteProjectReportsBy.MRCPC,
  [ProjectReportNameId.InstituteSiberianSchoolOfGeosciences]:
    FilterInstituteProjectReportsBy.InstituteSiberianSchoolOfGeosciences,
};

export function toInstituteProjectReports(
  filterBy = FilterInstituteProjectReportsBy.All,
  page = 1,
): LocationAsRelativeRaw {
  return {
    name: RouteNames.INST_DIRECTOR_PROJECTS_REPORTS,
    params: { filterBy, page },
  };
}
