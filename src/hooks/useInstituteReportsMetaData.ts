import { storeToRefs } from 'pinia';
import { ComputedRef, computed } from 'vue';
import {
  UseGetInstituteProjectReportsQueryOptions,
  useGetInstituteProjectReportsQuery,
} from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectReportsQuery';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { ProjectReportNameId } from '@/models/ProjectReport';

export type ReportsCount = Record<ProjectReportNameId, number>;

export type UseInstituteReportsInfoReturn = {
  reportsCount: ComputedRef<ReportsCount>;
  allProjectsLimitExceeded: ComputedRef<boolean>;
  isLoading: ComputedRef<boolean>;
};

export function useInstituteReportsMetaData(
  options?: UseGetInstituteProjectReportsQueryOptions,
): UseInstituteReportsInfoReturn {
  const authStore = useAuthStore();
  const { instituteProjectsQuota } = storeToRefs(authStore);
  const projectReportListQuery = useGetInstituteProjectReportsQuery(options);

  const reportsCount = computed(() => {
    const count: ReportsCount = {
      [ProjectReportNameId.All]: 0,
      [ProjectReportNameId.InstituteOfAircraftEngineeringAndTransportation]: 0,
      [ProjectReportNameId.InstituteOfDistanceAndEveningEducation]: 0,
      [ProjectReportNameId.InstituteOfHighTechnology]: 0,
      [ProjectReportNameId.InstituteOfInformationTechnologyAndDataAnalysis]: 0,
      [ProjectReportNameId.InstituteOfArchitectureConstructionAndDesign]: 0,
      [ProjectReportNameId.SubsoilUseInstitute]: 0,
      [ProjectReportNameId.InstituteOfEconomicsManagementAndLaw]: 0,
      [ProjectReportNameId.BRICSBaikalInstitute]: 0,
      [ProjectReportNameId.InstituteOfLinguisticsAndInterculturalCommunication]: 0,
      [ProjectReportNameId.EnergyInstitute]: 0,
      [ProjectReportNameId.IRNITUBranchInUsolyeSibirskiy]: 0,
      [ProjectReportNameId.CollegeOfMechanicalEngineering]: 0,
      [ProjectReportNameId.GeologicalExplorationTechnicalSchool]: 0,
      [ProjectReportNameId.InstituteOfQuantumPhysics]: 0,
      [ProjectReportNameId.MRCPC]: 0,
      [ProjectReportNameId.InstituteSiberianSchoolOfGeosciences]: 0,
    };

    if (!projectReportListQuery.data.value) return count;

    for (const report of projectReportListQuery.data.value) {
      count[0] += 1;
      count[report.department.institute.id as ProjectReportNameId] += 1;
    }

    return count;
  });

  const allProjectsLimitExceeded = computed(
    () =>
      reportsCount.value[ProjectReportNameId.All] >
      instituteProjectsQuota.value,
  );

  const isLoading = computed(() => projectReportListQuery.isFetching.value);

  return { reportsCount, allProjectsLimitExceeded, isLoading };
}
