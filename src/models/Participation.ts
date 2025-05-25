import { Candidate } from './Candidate';
import { Project } from './Project';
import { State } from './State';

export const enum ParticipationPriority {
  AutoWithoutApplication = 5,
  AutoWithApplication = 4,
  Low = 3,
  Medium = 2,
  High = 1,
}

export const enum ParticipationState {
  All = 0,
  Distribution = 1,
  Active = 2,
  Archived = 3,
  Rejected = 4,
}

export const ParticipationStateName: Record<ParticipationState, string> = {
  [ParticipationState.All]: 'Все',
  [ParticipationState.Distribution]: 'Активная',
  [ParticipationState.Active]: 'Активная',
  [ParticipationState.Archived]: 'В команде',
  [ParticipationState.Rejected]: 'Архивная',
};

export interface Participation {
  id: number;
  priority: ParticipationPriority;
  project_id: number;
  candidate: Candidate;
  state: State<ParticipationState>;
  created_at: string;
  updated_at: string;
  mark: number;
  review: string;
}

export type ParticipationWithProject = Participation & { project?: Project };

export const ParticipationPriorityText: Record<ParticipationPriority, string> =
  {
    [ParticipationPriority.High]: 'Высший',
    [ParticipationPriority.Medium]: 'Средний',
    [ParticipationPriority.Low]: 'Низкий',
    [ParticipationPriority.AutoWithApplication]: 'Автоматически',
    [ParticipationPriority.AutoWithoutApplication]: 'Автоматически',
  };

export const ALL_PRIORITIES = [
  ParticipationPriority.Low,
  ParticipationPriority.Medium,
  ParticipationPriority.High,
];
