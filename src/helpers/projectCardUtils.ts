import { useAuthStore } from '@/stores/auth/useAuthStore';
import { Project } from '@/models/Project';
import { UserSupervisor } from '@/models/User';

export const getCourses = (project: Project) =>
  new Set(project.project_specialities.map((spec) => spec.course));

const getSpecialtiesByCourse = (
  project: Project | undefined,
  course: unknown,
) => {
  return (
    project?.project_specialities
      .filter((spec) => spec.course === course)
      .map((spec) => ({
        name: spec.speciality.name,
        priority: spec.priority,
      })) ?? []
  );
};

export const filterSpecialtiesByPriority = (
  project: Project | undefined,
  course: unknown,
  first = true,
) =>
  getSpecialtiesByCourse(project, course)?.filter((spec) => {
    if (first) return spec.priority === 1;
    else return spec.priority !== 1;
  }) ?? [];

export const checkCurrentSupervisor = (
  project: Project | undefined,
  authStore: ReturnType<typeof useAuthStore>,
) =>
  project?.supervisors.some(
    (supervisor) => supervisor.supervisor.id === authStore.profileData?.id,
  ) ?? false;

export const checkDirectorInstitute = (
  project: Project | undefined,
  authStore: ReturnType<typeof useAuthStore>,
) =>
  authStore.isInstDirector &&
  (project?.supervisors.some(
    (supervisor) =>
      supervisor.supervisor.department?.institute.id ===
      (authStore.profileData as UserSupervisor)?.department.institute.id,
  ) ??
    false);

export const checkUserSupervisor = (
  project: Project | undefined,
  authStore: ReturnType<typeof useAuthStore>,
) =>
  project?.supervisors.some(
    (supervisor) => supervisor.supervisor.id === authStore.profileData?.id,
  ) ?? false;
