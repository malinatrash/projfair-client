export type CandidateParticipation = {
  id: number;
  candidate_id: number;
  project_id: number;
  priority: number;
  state_id: number;
};

export type ParticipationWithStateId = CandidateParticipation & {
  state_id: number;
};

export type CandidateWithParticipations = {
  id: number;
  fio: string;
  numz: string;
  training_group: string;
  participations: ParticipationWithStateId[];
};

export type ProjectForMultiselect = {
  label: string;
  value: number;
};
