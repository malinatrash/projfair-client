import { StudentsResult } from '@/models/StudentsResult';

export interface State {
  results?: StudentsResult[];
}

export const state = (): State => ({
  results: undefined,
});
