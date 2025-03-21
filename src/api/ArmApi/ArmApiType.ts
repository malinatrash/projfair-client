import {
  ArmDistributionApprove,
  UpdateArmDistributionApprove,
} from '@/models/ArmDistributionApprove';
import {
  ArmManualDistribution,
  ArmManualDistributionCandidate,
} from '@/models/ArmManualDistribution';
import { ArmInstitute, ArmProjects } from '@/models/ArmProjects';
import { ArmInstitute as ArmStudentsInstitute } from '@/models/ArmStudents';

export default interface ArmApiType {
  getArmProjectsList(): Promise<ArmProjects>;
  getArmApproveDistributionProjectsList(): Promise<ArmDistributionApprove>;
  getArmStudentsList(): Promise<ArmStudentsInstitute[]>;
  getArmManualDistributionList(): Promise<ArmManualDistribution>;
  updateArmApproveDistributionProjectsList(
    data: UpdateArmDistributionApprove[],
  ): Promise<UpdateArmDistributionApprove[]>;
  updateArmProjectsList(data: ArmInstitute[]): Promise<ArmProjects>;
  updateArmManualDistribution(
    data: ArmManualDistributionCandidate[],
  ): Promise<ArmManualDistributionCandidate[]>;
  goBackToPreviousArmManualDistribution(): Promise<void>;
  eraseArmManualDistribution(): Promise<void>;
  isArmManualDistributionExist(): Promise<boolean>;
  exportCandidatesToDB(): Promise<void>;
  cancelExportCandidatesToDB(): Promise<void>;
}
