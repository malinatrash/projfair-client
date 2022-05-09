import { Participation } from '../Participation';
import { candidate } from './candidate';
import { projectListResponse } from './project';

export const participationsList: Participation[] = [
  {
    id: 1,
    priority: 1,
    candidate_id: candidate.id,
    project_id: 11,
    review:
      'Все самое интересное находится в основной части, здесь можно дать волю своей фантазии. В этой части указывают, какие актеры снимаются в главных ролях и каких персонажей они играют, причем хорошо бы совместить это с событиями фильма. Однако не стоит увлекаться и пересказывать весь сюжет: не забывайте, что ваше ревью может читать человек, который не видел фильм или не читал книгу. В противном случае вы рискуете получить обидное прозвище «спойлер» – от английского to spoil – портить. Это такая неприятная личность, которая портит все удовольствие от фильма или книги путем пересказывания сюжета.',
    state_id: 0,
    updated_at: '2021-01-29',
    created_at: '2021-01-29',
  },
  {
    id: 2,
    priority: 2,
    candidate_id: candidate.id,
    project_id: 12,
    review:
      'Все самое интересное находится в основной части, здесь можно дать волю своей фантазии. В этой части указывают, какие актеры снимаются в главных ролях и каких персонажей они играют, причем хорошо бы совместить это с событиями фильма. Однако не стоит увлекаться и пересказывать весь сюжет: не забывайте, что ваше ревью может читать человек, который не видел фильм или не читал книгу. В противном случае вы рискуете получить обидное прозвище «спойлер» – от английского to spoil – портить. Это такая неприятная личность, которая портит все удовольствие от фильма или книги путем пересказывания сюжета.',
    state_id: 0,
    updated_at: '2021-01-29',
    created_at: '2021-01-29',
  },
];
