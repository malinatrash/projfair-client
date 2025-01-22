import { ArmManualDistribution } from '../ArmManualDistribution';
import { ArmProjects } from '../ArmProjects';
import { ArmInstitute } from '../ArmStudents';
import mockGroupedParticipations from './mockGroupedParticipations.json';
import mockGroupedProjectsWithInstitutes from './mockGroupedProjectsWithInstitutes.json';
import mockWithoutParticipationsWithProjects from './mockWithoutParticipationsWithProjects.json';

export const armProjectsList: ArmProjects =
  mockGroupedProjectsWithInstitutes as ArmProjects;

export const armStudentsList: ArmInstitute[] =
  mockGroupedParticipations as ArmInstitute[];

export const armManualDistribution: ArmManualDistribution =
  mockWithoutParticipationsWithProjects as ArmManualDistribution;
