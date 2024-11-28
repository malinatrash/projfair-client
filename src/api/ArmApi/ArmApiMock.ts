import { delayRes } from '@/helpers/promise';
import { ArmManualDistribution } from '@/models/ArmManualDistribution';
import { ArmInstitute, ArmProjects } from '@/models/ArmProjects';
import { ArmInstitute as ArmStudentsInstitute } from '@/models/ArmStudents';
import {
  armManualDistribution,
  armProjectsList,
  armStudentsList,
} from '@/models/mock/arm';
import ArmApiType from './ArmApiType';

export default class ArmApiMock implements ArmApiType {
  async getArmProjectsList(): Promise<ArmProjects> {
    return delayRes(armProjectsList, 300);
  }

  async getArmStudentsList(): Promise<ArmStudentsInstitute[]> {
    return delayRes(armStudentsList, 300);
  }

  async getArmManualDistribution(): Promise<ArmManualDistribution[]> {
    return delayRes(armManualDistribution, 300);
  }

  async updateArmProjectsList(data: ArmInstitute[]): Promise<ArmProjects> {
    return delayRes(armProjectsList, 300);
  }

  async updateArmManualDistribution(
    data: ArmManualDistribution[],
  ): Promise<ArmManualDistribution[]> {
    return delayRes(armManualDistribution, 300);
  }

  async goBackToPreviousArmManualDistribution() {
    await delayRes(Promise.resolve(), 300);
  }

  async eraseArmManualDistribution() {
    await delayRes(Promise.resolve(), 300);
  }

  async isArmManualDistributionExist(): Promise<boolean> {
    return delayRes(true, 300);
  }
}
