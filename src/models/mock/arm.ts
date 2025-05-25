import { ArmDistributionApprove } from '../ArmDistributionApprove';
import { ArmManualDistribution } from '../ArmManualDistribution';
import { ArmProjects } from '../ArmProjects';
import { ArmInstitute } from '../ArmStudents';
import mockArmDistributionApprove from './mockArmDistributionApprove.json';
import mockGroupedParticipations from './mockGroupedParticipations.json';
import mockGroupedProjectsWithInstitutes from './mockGroupedProjectsWithInstitutes.json';
import mockWithoutParticipationsWithProjects from './mockWithoutParticipationsWithProjects.json';

export const armProjectsList: ArmProjects =
  mockGroupedProjectsWithInstitutes as ArmProjects;

export const armStudentsList: ArmInstitute[] =
  mockGroupedParticipations as ArmInstitute[];

export const armManualDistribution: ArmManualDistribution =
  mockWithoutParticipationsWithProjects as ArmManualDistribution;

export const armDistributionApprove: ArmDistributionApprove =
  mockArmDistributionApprove as ArmDistributionApprove;
