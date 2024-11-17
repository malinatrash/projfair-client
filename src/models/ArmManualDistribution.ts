export interface ArmManualDistribution {
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
  eligible_projects: ArmEligibleProject[];
  selected_project?: number | null;
}

export interface ArmEligibleProject {
  project_id: number;
  project_title: string;
  places: number;
  candidates_count: number;
}
