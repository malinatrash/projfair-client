<template>
  <ul class="project-list">
    <template v-if="loading">
      <li v-for="index of loadingCardsLength" :key="index">
        <BaseEmptyCard />
      </li>
    </template>
    <template v-else>
      <li v-for="project of filteredProjects" :key="project.id">
        <ProjectCard :project="project" />
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { Project } from '@/models/Project';
  import BaseEmptyCard from '../ui/BaseEmptyCard.vue';
  import ProjectCard from './ProjectCard.vue';

  interface Props {
    projectList?: Project[];
    loading?: boolean;
    loadingCardsLength?: number;
  }

  const props = withDefaults(defineProps<Props>(), {
    loading: false,
    loadingCardsLength: 1,
    projectList: () => [],
  });

  const filteredProjects = computed(() =>
    props.projectList.slice().sort((a, b) => a.state.id - b.state.id),
  );
</script>

<style scoped>
  .project-list {
    display: flex;
    flex-direction: column;
    gap: 0.9375rem;
    padding-left: 0;
    list-style: none;
  }
</style>
