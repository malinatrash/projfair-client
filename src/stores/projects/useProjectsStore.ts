import { projectApi } from '@/api/ProjectApi';
import { Project, ProjectFilters } from '@/models/Project';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { DEFAULT_FILTERS, state } from './state';

export const useProjectsStore = () => {
  const router = useRouter();

  return defineStore('projects', {
    state,
    actions: {
      setProjectList(projectList?: Project[], projectCount = 0) {
        this.projectList = projectList;
        this.projectCount = projectCount;
      },
      setFilters(filters: Partial<ProjectFilters>) {
        if (this.loading) return;
        this.filters = { ...this.filters, ...filters };
      },
      updateFilters() {
        if (this.loading) return;
        router.push({ ...router.currentRoute, query: this.filters });
      },
      clearFilters() {
        if (this.loading) return;
        this.filters = { ...DEFAULT_FILTERS };
      },
      // GET PROJECT LIST
      async getProjectList() {
        this.setProjectList();
        this.loading = true;
        try {
          const projectListResponse = await projectApi.filterProjectList(
            this.filters,
            (progress) => {
              const { percent } = progress;
              this.projectProgress = percent > 1 ? 1 : percent;
            },
          );
          const projectCount = projectListResponse.projectCount;
          const projectList = projectListResponse.data;
          this.setProjectList(projectList, projectCount);
        } catch (error) {
          this.error = String(error);
        } finally {
          this.loading = false;
          this.projectProgress = 0;
        }
      },
      // GET PROJECT LIST

      // GET SINGLE PROJECT
      async getSingleProject(projectId: number) {
        this.openedProject = undefined;
        this.openedProjectHistory = undefined;
        return this._onAsync(async () => {
          const [openedProject, openedProjectHistory] = await Promise.all([
            projectApi.getSingleProject(projectId),
            projectApi.getProjectHistory(projectId),
          ]);
          this.openedProject = openedProject;
          this.openedProjectHistory = openedProjectHistory;
        });
      },
      // GET SINGLE PROJECT

      // GET SINGLE PROJECT
      async getAddProjectData() {
        this.additionalProjectData = {
          states: undefined,
          tags: undefined,
        };
        this.error = '';
        try {
          this.additionalProjectData.tags =
            await projectApi.getAllProjectTags();
          this.additionalProjectData.states =
            await projectApi.getAllProjectStates();
        } catch (error) {
          this.error = String(error);
        }
      },
      // GET SINGLE PROJECT

      // ON ASYNC
      async _onAsync<T>(callback: () => Promise<T>) {
        this.error = '';
        this.loading = true;
        try {
          return await callback();
        } catch (error) {
          this.error = String(error);
        } finally {
          this.loading = false;
        }
      },
      // ON ASYNC
    },
    getters: {
      tagsLoading(): boolean {
        return !this.additionalProjectData.tags && !this.error;
      },
      statesLoading(): boolean {
        return !this.additionalProjectData.states && !this.error;
      },
    },
  })();
};
