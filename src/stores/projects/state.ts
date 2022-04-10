import {
  Project,
  ProjectFilterOptions,
  ProjectFilters,
} from '@/models/Project';

interface State {
  projectList?: Project[];
  projectCount: number;
  loading: boolean;
  error: string;
  filters: ProjectFilters;
  filterOptions: ProjectFilterOptions;
  openedProject?: Project;
  requestModalShow: boolean;
}

export const state = (): State => ({
  requestModalShow: false,
  openedProject: undefined,
  projectList: undefined,
  projectCount: 0,
  loading: false,
  error: '',
  filters: {
    difficulty: [],
    state: [],
    tags: [],
    title: '',
    page: 1,
  },
  filterOptions: {
    allStates: undefined,
    allTags: undefined,
  },
});
