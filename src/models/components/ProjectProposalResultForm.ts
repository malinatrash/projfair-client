import { TeamMember } from '@/components/project/ProjectTeamCollect.vue';
import { ParticipantsId } from '@/components/ui/BaseResultTable.vue';
import { Candidate } from '../Candidate';
import { Participation } from '../Participation';

export const enum ProjectResultGoal {
  AllGoals = 1,
  MoreGoals = 2,
  LessGoals = 3,
  NoGoals = 4,
}

export type ProjectProposalResultFormValue = {
  projectResultDescription: string;
  projectResultGoal: ProjectResultGoal;
  candidateTeam: Participation[] | undefined;
};
