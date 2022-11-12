import { Candidate } from '@/models/Candidate';

export interface State {
  loading: boolean;
  error: string;
  profileData?: Candidate;
}

export const state = (): State => ({
  loading: false,
  error: '',
  profileData: undefined,
});
