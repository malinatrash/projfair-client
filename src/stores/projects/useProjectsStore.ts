import ProjectApi from '@/api/ProjectApi';
import { projectFiltersToSearchParams } from '@/helpers/query';
import {
  Project,
  ProjectFilterOptions,
  ProjectFilters,
} from '@/models/Project';
import { RouteNames } from '@/router/types/route-names';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../auth/useAuthStore';
import { state } from './state';

export const useProjectsStore = () => {
  const router = useRouter();

  return defineStore('projects', {
    state,
    actions: {
      // MUTATIONS
      setProjectList(projectList?: Project[], projectCount = 0) {
        this.projectList = projectList;
        this.projectCount = projectCount;
      },
      setFilters(filters: ProjectFilters = {}) {
        if (this.loading) return;
        this.filters = { ...this.filters, ...filters };
      },
      updateFilters() {
        if (this.loading) return;
        router.push({
          name: router.currentRoute.value.name || RouteNames.HOME,
          query: projectFiltersToSearchParams(this.filters),
        });
      },
      clearFilters() {
        if (this.loading) return;
        this.filters = {
          difficulty: undefined,
          page: undefined,
          state: undefined,
          tags: undefined,
          title: undefined,
        };
      },
      setFilterOptions(options: ProjectFilterOptions) {
        this.filterOptions = options;
      },
      openRequestModal(project: Project) {
        const authStore = useAuthStore();
        if (authStore.isAuth) {
          this.openedProject = project;
          this.requestModalShow = true;
          return;
        }
        authStore.authModalShow = true;
      },
      // ASYNC ACTIONS
      async getProjectList() {
        this.setProjectList();
        this.loading = true;
        this.error = '';
        try {
          const { data, projectCount } = await ProjectApi.filterProjectList(
            this.filters,
          );
          this.setProjectList(data, projectCount);
        } catch (error) {
          this.error = String(error);
        } finally {
          this.loading = false;
        }
      },
      async getSingleProject(projectId: number) {
        this.openedProject = undefined;
        this.loading = true;
        this.error = '';
        try {
          const project = await ProjectApi.getSingleProject(projectId);
          this.openedProject = project;
        } catch (error) {
          this.error = String(error);
        } finally {
          this.loading = false;
        }
      },
    },
  })();
};