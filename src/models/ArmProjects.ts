export interface ArmProjects {
  projects: ArmInstitute[];
  excess_participations: ArmExcessParticipation[];
  without_participation: ArmWithoutParticipation[];
}

export interface ArmInstitute {
  institute_id: number;
  institute_name: string;
  departments: ArmDepartment[];
  minPlacesProject?: ArmProject;
}

export interface ArmDepartment {
  department_id: number;
  department_name: string;
  projects: ArmProject[];
  minPlacesProject?: ArmProject;
}

export interface ArmProject {
  project_id: number;
  title: string;
  places: number;
  candidates_count: number;
  candidates: ArmCandidate[];
  specialities: ArmSpecialty[];
}

export interface ArmSpecialty {
  id: number;
  name: string;
  priority: number | null;
}

export interface ArmCandidate {
  candidate_id: number;
  fio?: string;
  priority: number;
  state_id?: number;
  created_at: string;
}

export interface ArmExcessParticipation {
  candidate_id: number;
  priority: number;
  department_id: number;
  institute_id: number;
  speciality_id: number;
  created_at: string;
}

export interface ArmWithoutParticipation {
  candidate_id: number;
  priority: number;
  department_id?: number;
  institute_id?: number;
  speciality_id?: number;
  created_at: string;
}
