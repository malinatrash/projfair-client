<template>
  <ProjectReportCard :project-report="projectReport">
    <template #team>
      <ul :class="$style['team-list']">
        <li v-for="memberRole in teamList" :key="memberRole.id">
          <b>{{ memberRole.fio }}: </b>
          {{ memberRole.position }}
        </li>
      </ul>
    </template>

    <template #actions>
      <BaseButton
        is="router-link"
        :to="toProjectRoute(props.projectReport.id)"
        variant="primary"
      >
        Подробнее
      </BaseButton>
    </template>
  </ProjectReportCard>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import { toProjectRoute } from '@/router/utils/routes';
  import { ProjectReport } from '@/models/ProjectReport';
  import ProjectReportCard from './ProjectReportCard.vue';

  interface Props {
    projectReport: ProjectReport;
  }

  const props = defineProps<Props>();

  const teamList = computed(() => props.projectReport.supervisors);
</script>

<style lang="scss" module>
  @import '@styles/breakpoints';

  .team-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;
  }
</style>
