export interface ArmManualDistribution {
  candidates: ArmManualDistributionCandidate[];
  eligible_projects: ArmManualDistributionEligibleProjects[];
}

export interface ArmManualDistributionCandidate {
  candidate_id: number;
  fio: string;
  course: number;
  training_group: string;
  priority: number;
  institute_id: number;
  institute_name: string;
  department_id: number;
  department_name: string;
  speciality_id: number;
  speciality_name: string;
  eligible_projects_ids: number[];
  selected_project?: number | null;
}

export interface ArmManualDistributionEligibleProjects {
  project_id: number;
  project_title: string;
  places: number;
  candidates_count: number;
}
