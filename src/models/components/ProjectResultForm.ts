import { Participation } from '../Participation';

export const enum ProjectResultGoal {
  AllGoals = 1,
  MoreGoals = 2,
  LessGoals = 3,
  NoGoals = 4,
}

export const ProjectResultGoalName: Record<ProjectResultGoal, string> = {
  [ProjectResultGoal.AllGoals]: 'Проект достиг всех поставленных целей',
  [ProjectResultGoal.MoreGoals]: 'Проект достиг большинство поставленных целей',
  [ProjectResultGoal.LessGoals]: 'Проект достиг минимальное количество целей',
  [ProjectResultGoal.NoGoals]: 'Проект не достиг поставленных целей',
};

export type ProjectResultFormValue = {
  projectResultDescription: string;
  projectResultGoal: ProjectResultGoal;
  projectParticipations: Participation[] | undefined;
};
