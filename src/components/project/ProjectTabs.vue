<template>
  <div class="wrapper">
    <RouterLink class="project-tab" :to="{ name: RouteNames.PROJECT_DETAILS }">
      О проекте
    </RouterLink>
    <RouterLink
      v-if="
        isArchivedState(projectState.id) ||
        (isActiveState(projectState.id) &&
          (isCurrentUserSupervisorOfDataProject ||
            isDirectorInstituteOfProject ||
            authStore.isHeadOfProjectEducationCenter))
      "
      class="project-tab"
      :to="{ name: RouteNames.PROJECT_RESULTS }"
    >
      Результаты проекта
    </RouterLink>
    <RouterLink
      v-if="canViewParticipations(projectState.id)"
      class="project-tab"
      :to="{ name: RouteNames.PROJECT_PARTICIPATIONS }"
    >
      Список заявок
    </RouterLink>
    <RouterLink
      v-if="canViewParticipants(projectState.id)"
      class="project-tab"
      :to="{ name: RouteNames.PROJECT_PARTICIPANTS }"
    >
      Список участников
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
  import { computed, toRefs } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import {
    canViewParticipants,
    canViewParticipations,
    isActiveState,
    isArchivedState,
  } from '@/helpers/project';
  import {
    checkCurrentSupervisor,
    checkDirectorInstitute,
  } from '@/helpers/projectCardUtils';
  import { RouteNames } from '@/router/types/route-names';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { ProjectState } from '@/models/ProjectState';

  interface Props {
    projectState: ProjectState;
  }
  const props = defineProps<Props>();
  const { projectState } = toRefs(props);

  const authStore = useAuthStore();

  const route = useRoute();

  const { data: projectData } = useGetSingleProjectQuery(
    Number(route.params.id),
  );

  const isDirectorInstituteOfProject = computed(() =>
    checkDirectorInstitute(projectData.value?.project, authStore),
  );

  const isCurrentUserSupervisorOfDataProject = computed(() =>
    checkCurrentSupervisor(projectData.value?.project, authStore),
  );
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  .wrapper {
    display: flex;
  }

  .project-tab {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 3rem;
    color: var(--text-color);
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;

    @media (max-width: $tablet) {
      flex: 1;
      padding: 1rem 0.5rem;
    }
  }

  .project-tab.router-link-exact-active {
    position: relative;
    background: #fff;
    border-radius: 0.625rem 0.625rem 0 0;
    box-shadow: 0 0 0.3125rem rgb(0 0 0 / 18%);

    &::before {
      position: absolute;
      bottom: -0.3125rem;
      left: 0;
      width: 100%;
      height: 0.4rem;
      content: '';
      background-color: #fff;
      border-radius: 0.625rem;
    }

    &:first-child::after,
    &:last-child::after {
      position: absolute;
      bottom: -0.5625rem;
      width: 0.3125rem;
      height: 0.5625rem;
      content: '';
      background-color: #fff;
    }

    &:first-child::after {
      left: 0;
    }

    &:last-child::after {
      right: 0;
    }
  }

  .project-tab:hover {
    color: var(--accent-color-1);
  }
</style>
