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
import { baseKyInstance } from '../baseKy';
import ProjectApiType from './ArmApiType';

export default class ArmApi implements ProjectApiType {
  async getArmProjectsList(): Promise<ArmProjects> {
    return baseKyInstance.get('api/arm/projects').json();
  }

  async getArmApproveDistributionProjectsList(): Promise<ArmDistributionApprove> {
    return baseKyInstance.get('api/arm/approveDistribution').json();
  }

  async getArmStudentsList(): Promise<ArmStudentsInstitute[]> {
    return baseKyInstance.get('api/arm/candidates').json();
  }

  async getArmManualDistributionList(): Promise<ArmManualDistribution> {
    return baseKyInstance.get('api/arm/manualDistribution').json();
  }

  async updateArmApproveDistributionProjectsList(
    data: UpdateArmDistributionApprove[],
  ): Promise<UpdateArmDistributionApprove[]> {
    return baseKyInstance
      .patch('api/arm/approveDistribution', {
        json: data,
      })
      .json();
  }

  async updateArmProjectsList(data: ArmInstitute[]): Promise<ArmProjects> {
    const updatedProjects = await baseKyInstance.patch(
      'api/arm/projects/distribution',
      {
        json: data,
      },
    );

    return {
      excess_participations: [],
      projects: [],
      without_participation: [],
    };
  }

  async updateArmManualDistribution(
    data: ArmManualDistributionCandidate[],
  ): Promise<ArmManualDistributionCandidate[]> {
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

  // TODO: Исправить название
  async exportCandidatesToDB(): Promise<void> {
    return baseKyInstance.post('api/arm/exportCandidates').json();
  }

  // TODO: Исправить название
  async cancelExportCandidatesToDB(): Promise<void> {
    return baseKyInstance.delete('api/arm/cancelExportCandidates').json();
  }
}
