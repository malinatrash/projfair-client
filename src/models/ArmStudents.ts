export interface ArmInstitute {
  institute_id?: number;
  institute_name?: string;
  departments: ArmDepartment[];
}

export interface ArmDepartment {
  department_id?: number;
  department_name?: string;
  courses: ArmCourse[];
}

export interface ArmCourse {
  course: number;
  specialities: ArmSpeciality[];
}

export interface ArmSpeciality {
  speciality_id?: number;
  speciality_name?: string;
  candidates: ArmCandidate[];
}

export interface ArmCandidate {
  candidate_id: number;
  fio: string;
  training_group: string;
  priority: number;
  created_at: string;
}
