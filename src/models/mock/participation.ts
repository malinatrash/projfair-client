import { Participation } from '../Participation';
import { userCandidate } from './candidate';
import { activeParticipationState } from './project';

export const participationList: Participation[] = [
  {
    id: 1,
    priority: 1,
    project_id: 1,
    state: activeParticipationState,
    updated_at: '2021-01-29',
    created_at: '2021-01-29',
    candidate: userCandidate,
    mark: 2,
    review: 'Супер полезный мужик',
  },
  {
    id: 2,
    priority: 2,
    project_id: 2,
    state: activeParticipationState,
    updated_at: '2021-01-29',
    created_at: '2021-01-29',
    candidate: userCandidate,
    mark: 3,
    review: 'Супер полезный мужик',
  },
  {
    id: 3,
    priority: 4,
    project_id: 3,
    state: activeParticipationState,
    updated_at: '2021-01-29',
    created_at: '2021-01-29',
    candidate: userCandidate,
    mark: 3,
    review: 'Супер полезный мужик',
  },
];
