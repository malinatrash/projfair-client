import { ComputedRef, computed } from 'vue';
import {
  UseGetInstituteProjectReportsQueryOptions,
  useGetInstituteProjectReportsQuery,
} from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectReportsQuery';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { ProjectReportNameId } from '@/models/ProjectReport';

export type ReportsCount = Record<
  ProjectReportNameId,
  {
    count: number;
    maxApproved: number;
  }
>;

export type UseInstituteReportsInfoReturn = {
  reportsCount: ComputedRef<ReportsCount>;
  isProjectsLimitExceeded: (reportNameId: ProjectReportNameId) => boolean;
  isLoading: ComputedRef<boolean>;
};

export function useInstituteReportsMetaData(
  options?: UseGetInstituteProjectReportsQueryOptions,
): UseInstituteReportsInfoReturn {
  const projectReportListQuery = useGetInstituteProjectReportsQuery(options);

  const reportsCount = computed(() => {
    const count: ReportsCount = {
      [ProjectReportNameId.All]: {
        count: 0,
        maxApproved: Infinity,
      },
      [ProjectReportNameId.InstituteOfAircraftEngineeringAndTransportation]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.InstituteOfDistanceAndEveningEducation]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.InstituteOfHighTechnology]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.InstituteOfInformationTechnologyAndDataAnalysis]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.InstituteOfArchitectureConstructionAndDesign]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.SubsoilUseInstitute]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.InstituteOfEconomicsManagementAndLaw]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.BRICSBaikalInstitute]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.InstituteOfLinguisticsAndInterculturalCommunication]:
        {
          count: 0,
          maxApproved: 100,
        },
      [ProjectReportNameId.EnergyInstitute]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.IRNITUBranchInUsolyeSibirskiy]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.CollegeOfMechanicalEngineering]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.GeologicalExplorationTechnicalSchool]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.InstituteOfQuantumPhysics]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.MRCPC]: {
        count: 0,
        maxApproved: 100,
      },
      [ProjectReportNameId.InstituteSiberianSchoolOfGeosciences]: {
        count: 0,
        maxApproved: 100,
      },
    };

    if (!projectReportListQuery.data.value) return count;

    for (const report of projectReportListQuery.data.value) {
      count[ProjectReportNameId.All].count += 1;
      count[report.department.institute.id as ProjectReportNameId].count += 1;
      count[report.department.institute.id as ProjectReportNameId].maxApproved =
        report.department.institute.maxApprovedProjects;
    }

    return count;
  });

  const isProjectsLimitExceeded = (reportNameId: ProjectReportNameId) =>
    reportsCount.value[reportNameId].count >
    reportsCount.value[reportNameId].maxApproved;

  const isLoading = computed(() => projectReportListQuery.isFetching.value);

  return { reportsCount, isProjectsLimitExceeded, isLoading };
}
