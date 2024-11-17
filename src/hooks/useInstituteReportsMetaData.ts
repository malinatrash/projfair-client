import { ComputedRef, computed } from 'vue';
import {
  UseGetInstituteProjectReportsQueryOptions,
  useGetInstituteProjectReportsQuery,
} from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectReportsQuery';
import { getAcademicYear } from '@/helpers/date';
import { ProjectReportNameId } from '@/models/ProjectReport';

export type ReportsCount = Record<
  ProjectReportNameId,
  {
    count: number;
    maxApproved: number;
  }
>;

export type DeliveredCount = {
  delivered: number;
  notDelivered: number;
};

export type UseInstituteReportsInfoReturn = {
  reportsCount: ComputedRef<ReportsCount>;
  deliveredCount: ComputedRef<DeliveredCount>;
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
      const institute = report.department.institute;

      count[ProjectReportNameId.All].count += 1;

      if (report.project_goal && report.project_review) {
        count[institute.id as ProjectReportNameId].count += 1;
      }

      count[institute.id as ProjectReportNameId].maxApproved = getAcademicYear(
        new Date(Date.parse(report.date_end)).getMonth(),
      ).isSpring()
        ? institute.maxSpringApprovedProjects
        : getAcademicYear(new Date().getMonth()).isAutumn()
        ? institute.maxAutumnApprovedProjects
        : institute.maxApprovedProjects;
    }

    return count;
  });

  const deliveredCount = computed(() => {
    const count: DeliveredCount = {
      delivered: 0,
      notDelivered: 0,
    };

    if (!projectReportListQuery.data.value) return count;

    for (const report of projectReportListQuery.data.value) {
      if (report.project_goal && report.project_review) {
        count.delivered += 1;
      } else {
        count.notDelivered += 1;
      }
    }

    return count;
  });

  const isProjectsLimitExceeded = (reportNameId: ProjectReportNameId) =>
    reportsCount.value[reportNameId].count >
    reportsCount.value[reportNameId].maxApproved;

  const isLoading = computed(() => projectReportListQuery.isFetching.value);

  return { reportsCount, deliveredCount, isProjectsLimitExceeded, isLoading };
}
