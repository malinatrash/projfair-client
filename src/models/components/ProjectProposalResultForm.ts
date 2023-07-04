import { TeamMember } from '@/components/project/ProjectTeamCollect.vue';
import { EditedSkill } from '@/components/skill/SkillsEditModal.vue';
import { ProjectDifficulty } from '../ProjectDifficulty';
import { MemberRole } from '../ProjectProposal';
import { SelectedSpecialty } from '../Specialty';

export const enum ProjectResultGoal {
  AllGoals = 1,
  MoreGoals = 2,
  LessGoals = 3,
  NoGoals = 4,
}

export type ProjectProposalResultFormValue = {
  isNewProject: boolean;
  prevProjectId: number | null;
  projectName: string;
  projectGoal: string;
  projectResultGoal: ProjectResultGoal;
  projectCustomer: string;
  projectThemeSourceId: number | null;
  projectDifficulty: ProjectDifficulty;
  skillsToBeFormed: string;
  projectExpectedResult: string;
  projectDescription: string;
  specialtyList: SelectedSpecialty<number | string>[];
  additionalSpecialtyList: SelectedSpecialty<number | string>[];
  skillList: EditedSkill[];
  team: TeamMember[];
  sharedRoleList: MemberRole[];
  currentUserRoleList: MemberRole[];
};
