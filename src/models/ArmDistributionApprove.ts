export interface ArmDistributionApprove {
  all_projects: ArmDistributionApproveInstitute[];
  eligible_projects: ArmDistributionApproveEligibleProject[];
}

export interface ArmDistributionApproveInstitute {
  institute_id: number;
  institute_name: string;
  departments: ArmDistributionApproveDepartment[];
}

export interface ArmDistributionApproveDepartment {
  department_id: number;
  department_name: string;
  projects: ArmDistributionApproveProject[];
}

export interface ArmDistributionApproveProject {
  project_id: number;
  title: string;
  places: number;
  candidates_count: number;
  candidates: ArmDistributionApproveCandidate[];
  specialities: ArmDistributionApproveSpeciality[];
}

export interface ArmDistributionApproveCandidate {
  candidate_id: number;
  training_group: string;
  course?: number;
  fio: string;
  created_at: string;
  updated_at?: string;
  institute_id: number;
  priority: number;
  department_id: number;
  speciality_id: number;
  stranger?: number;
  eligible_projects_ids: number[];
  state_id?: number;
}

export interface ArmDistributionApproveSpeciality {
  id: number;
  name: string;
  priority?: number;
  course: number;
}

export interface ArmDistributionApproveEligibleProject {
  project_id: number;
  project_title: string;
  places: number;
  candidates_count: number;
  specialities: ArmDistributionApproveSpeciality[];
}
