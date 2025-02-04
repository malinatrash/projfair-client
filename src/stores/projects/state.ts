import { Project, ProjectFilters } from '@/models/Project';

interface State {
  loadingProgress: number;
  filters: ProjectFilters;
  selectedProject?: Project;
}

export const DEFAULT_FILTERS: ProjectFilters = {
  difficulty: [],
  state: [],
  skills: [],
  supervisors: [],
  specialties: [],
  title: '',
  page: 1,
  order: 'asc',
  sortBy: 'state',
};

export const state = (): State => ({
  selectedProject: undefined,
  filters: { ...DEFAULT_FILTERS },
  loadingProgress: 0,
});
