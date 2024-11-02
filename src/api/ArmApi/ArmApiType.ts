import { ArmInstitute, ArmProjects } from '@/models/ArmProjects';
import { ArmInstitute as ArmStudentsInstitute } from '@/models/ArmStudents';

export default interface ArmApiType {
  getArmProjectsList(): Promise<ArmProjects>;
  getArmStudentsList(): Promise<ArmStudentsInstitute[]>;
  updateArmProjectsList(data: ArmInstitute[]): Promise<ArmProjects>;
}
