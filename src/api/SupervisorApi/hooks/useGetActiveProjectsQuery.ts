import { useQuery } from 'vue-query';
import { supervisorApi } from '@/api/SupervisorApi';
import { Project } from '@/models/Project';

export const USE_GET_ACTIVE_PROJECTS_QUERY_KEY =
  'USE_GET_ACTIVE_PROJECTS_QUERY_KEY';

export const useGetActiveProjectsQuery = () => {
  return useQuery<Project[]>({
    queryKey: USE_GET_ACTIVE_PROJECTS_QUERY_KEY,
    queryFn: () => supervisorApi.getActiveProjects(),
  });
};
