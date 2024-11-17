import { ArmManualDistribution } from '@/models/ArmManualDistribution';
import { ArmInstitute, ArmProjects } from '@/models/ArmProjects';
import { ArmInstitute as ArmStudentsInstitute } from '@/models/ArmStudents';

export default interface ArmApiType {
  getArmProjectsList(): Promise<ArmProjects>;
  getArmStudentsList(): Promise<ArmStudentsInstitute[]>;
  getArmManualDistribution(): Promise<ArmManualDistribution[]>;

  updateArmProjectsList(data: ArmInstitute[]): Promise<ArmProjects>;
  updateArmManualDistribution(
    data: ArmManualDistribution[],
  ): Promise<ArmManualDistribution[]>;
}
