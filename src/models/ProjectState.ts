import { State } from './State';

export const enum ProjectStateID {
  All = 0,
  RecruitingState = 1,
  ActiveState = 2,
  ExtraState = 3,
  ArchivedState = 4,
  ProcessingState = 5,
}

export type ProjectState = State<ProjectStateID>;

export const PROJECT_IDS = [
  ProjectStateID.ActiveState,
  ProjectStateID.ArchivedState,
  ProjectStateID.ExtraState,
  ProjectStateID.ProcessingState,
  ProjectStateID.RecruitingState,
];

export const StateClass: Record<ProjectStateID, string> = {
  [ProjectStateID.All]: 'all',
  [ProjectStateID.RecruitingState]: 'recruiting',
  [ProjectStateID.ActiveState]: 'active',
  [ProjectStateID.ExtraState]: 'extra',
  [ProjectStateID.ArchivedState]: 'archived',
  [ProjectStateID.ProcessingState]: 'processing',
};

export const StateAcronyms: Partial<Record<ProjectStateID, string>> = {
  [ProjectStateID.ProcessingState]: 'Обр-ка заявок',
};
