import { NavigationGuard } from 'vue-router';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { useModalsStore } from '@/stores/modals/useModalsStore';
import { RouteNames } from '../types/route-names';

export const requiresAuth: NavigationGuard = (to, from, next) => {
  const authStore = useAuthStore();
  const modalsStore = useModalsStore();

  if (to.meta.requiresAuth && !authStore.profileData) {
    if (to.name === RouteNames.USER_INFO) modalsStore.authModalProfile = true;
    else modalsStore.authModalNewProject = true;

    return next(
      from || {
        name: RouteNames.HOME,
      },
    );
  }
  return next();
};
