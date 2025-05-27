<template>
  <DropdownList
    :handle-node="props.handleNode"
    :is-open="props.isOpen"
    :item-list="items"
    @update:is-open="(value) => emit('update:isOpen', value)"
  />
</template>

<script setup lang="ts">
  import { watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { DropdownItem } from '@/models/components/DropdownItem';
  import { useLogoutWithModalMutation } from '@/api/AuthApi/hooks/useLogoutWithModalMutation';
  import { useRoledUserNavigationRoutes } from '@/hooks/useRoutes';
  import { RouteNames } from '@/router/types/route-names';
  import { FilterByToProjectReportIdName } from '@/router/utils/routes';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { ProjectReportNameId } from '@/models/ProjectReport';
  import { UserSupervisor } from '@/models/User';
  import DropdownList from '../ui/DropdownList.vue';

  const authStore = useAuthStore();
  const isInstituteDirector =
    authStore.profileData?.is_institute_director ?? false;
  const isTeacher = authStore.profileData?.is_teacher ?? false;

  type Props = {
    isOpen: boolean;
    handleNode?: HTMLElement;
  };
  type Emits = {
    (e: 'update:isOpen', isOpen: boolean): void;
  };

  const props = defineProps<Props>();
  const emit = defineEmits<Emits>();

  const route = useRoute();
  const routes = useRoledUserNavigationRoutes();
  const { logout } = useLogoutWithModalMutation();

  watch(
    () => route.path,
    () => emit('update:isOpen', false),
  );

  const items = routes
    .map<DropdownItem>((route) => ({
      content: route.meta.title,
      location: { name: route.name },
      type: 'link',
    }))
    .map((route) => {
      if (route.type === 'link' && route.content === 'Отчёты') {
        const reportsLocation =
          FilterByToProjectReportIdName[
            (authStore.profileData as UserSupervisor)?.department.institute
              .id as ProjectReportNameId
          ].toLocaleLowerCase();

        route.location = `/profile/inst-project-reports/${reportsLocation}/1`;
      }
      return route;
    });

  if (isInstituteDirector) {
    items.push({
      content: 'Активные проекты',
      location: { name: RouteNames.ACTIVE_PROJECTS },
      type: 'link',
    });
  }

  items.push({
    content: 'Выйти',
    type: 'button',
    action: logout,
  });
</script>
