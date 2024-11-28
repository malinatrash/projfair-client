import { delayRes } from '@/helpers/promise';
import { ArmManualDistribution } from '@/models/ArmManualDistribution';
import { ArmInstitute, ArmProjects } from '@/models/ArmProjects';
import { ArmInstitute as ArmStudentsInstitute } from '@/models/ArmStudents';
import { baseKyInstance } from '../baseKy';
import ProjectApiType from './ArmApiType';

export default class ArmApi implements ProjectApiType {
  async getArmProjectsList(): Promise<ArmProjects> {
    return baseKyInstance.get('api/arm/projects').json();
  }

  async getArmStudentsList(): Promise<ArmStudentsInstitute[]> {
    return baseKyInstance.get('api/arm/candidates').json();
  }

  async getArmManualDistribution(): Promise<ArmManualDistribution[]> {
    return baseKyInstance.get('api/arm/manualDistribution').json();
  }

  async updateArmProjectsList(data: ArmInstitute[]): Promise<ArmProjects> {
    return baseKyInstance
      .patch('api/arm/projects/distribution', {
        json: data,
      })
      .json();
  }

  async updateArmManualDistribution(
    data: ArmManualDistribution[],
  ): Promise<ArmManualDistribution[]> {
    return baseKyInstance
      .patch('api/arm/manualDistribution', {
        json: data,
      })
      .json();
  }

  async goBackToPreviousArmManualDistribution() {
    await baseKyInstance.get('api/arm/manualDistribution/back');
  }

  async eraseArmManualDistribution() {
    await baseKyInstance.post('api/arm/eraseDistribution');
  }

  async isArmManualDistributionExist(): Promise<boolean> {
    return baseKyInstance.get('api/arm/eraseDistribution').json();
  }
}
