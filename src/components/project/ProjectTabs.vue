<template>
  <div class="wrapper">
    <RouterLink class="project-tab" :to="{ name: RouteNames.PROJECT_DETAILS }">
      о проекте
    </RouterLink>

    <RouterLink
      v-if="canViewParticipants(projectState.id)"
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
      список заявок
    </RouterLink>
    <RouterLink
      v-if="canViewParticipants(projectState.id)"
      class="project-tab"
      :to="{ name: RouteNames.PROJECT_PARTICIPANTS }"
    >
      список участников
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue';
  import { RouterLink } from 'vue-router';
  import {
    canViewParticipants,
    canViewParticipations,
  } from '@/helpers/project';
  import { RouteNames } from '@/router/types/route-names';
  import { toProjectResultRoute } from '@/router/utils/routes';
  import { ProjectState } from '@/models/ProjectState';

  interface Props {
    projectState: ProjectState;
  }
  const props = defineProps<Props>();
  const { projectState } = toRefs(props);
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
