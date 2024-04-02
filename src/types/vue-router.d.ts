import 'vue-router';
import { RouteNames } from '@/router/types/route-names';
import { UserRoleKey } from '@/models/User';

type NavType = 'main-nav' | 'user-nav' | 'mobile-nav';

declare module 'vue-router' {
  interface RouteMeta {
    type?: NavType[];
    role?: UserRoleKey[];
    order?: number;
    title: string;
    requiresAuth?: boolean;
    svg?: string;
    links?: {
      name: RouteNames;
      title: string;
      location: LocationAsRelativeRaw;
    }[];
  }
}
