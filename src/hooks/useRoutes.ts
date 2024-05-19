import { RouteLocationRaw, useRouter } from 'vue-router';
import { hasHistory } from '@/helpers/history';
import { useCheckRole } from './useCheckRole';

export const useUserNavigationRoutes = () => {
  const router = useRouter();

  return router
    .getRoutes()
    .filter((route) => route.meta.type?.includes('user-nav'))
    .sort((a, b) => (a.meta.order || 0) - (b.meta.order || 0));
};

export const useRoledUserNavigationRoutes = () => {
  const routes = useUserNavigationRoutes();

  return routes.filter((route) => {
    return !route.meta.role || useCheckRole(route.meta.role);
  });
};

export const useMainNavigationRoutes = () => {
  const router = useRouter();

  return router
    .getRoutes()
    .filter((route) => route.meta.type?.includes('main-nav'))
    .sort((a, b) => (a.meta.order || 0) - (b.meta.order || 0));
};

export const useMobileNavigationRoutes = () => {
  const router = useRouter();

  // Тут была проблема с порядком ссылок, я просто поместил все ссылки главной навигации в начало списка

  const mobileRoutes = router
    .getRoutes()
    .filter((route) => route.meta.type?.includes('mobile-nav'))
    .sort((a, b) => (a.meta.order || 0) - (b.meta.order || 0));

  const mainRoutes = mobileRoutes.filter((route) =>
    route.meta.type?.includes('main-nav'),
  );

  return [
    ...mainRoutes,
    ...mobileRoutes.filter((route) => !route.meta.type?.includes('main-nav')),
  ];
};

export const useNavigateBack = (to: RouteLocationRaw): (() => void) => {
  const router = useRouter();

  return () => {
    if (hasHistory()) {
      router.back();
      return;
    }
    router.push(to);
  };
};
