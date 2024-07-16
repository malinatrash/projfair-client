<template>
  <BaseBadge :class="['status', stateClass]">
    {{ StateName[props.state] }}
  </BaseBadge>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import {
    ProjectReportStateId,
    StateClass,
    StateName,
  } from '@/models/ProjectReport';
  import BaseBadge from '../ui/BaseBadge.vue';

  type Props = { state: ProjectReportStateId };
  const props = defineProps<Props>();

  // TODO: стоит добавить в props BaseBadge массив с состояниями и привязкой к цветам, тогда не надо будет создавать несколько компонентов с одниковой логикой
  const stateClass = computed(() => StateClass[props.state]);
</script>

<style scoped>
  .status {
    --text-color: var(--accent-color-1);
    --border-color: var(--accent-color-1);
  }

  .status.delivered {
    --text-color: var(--green-color-1);
    --border-color: var(--green-color-1);
  }

  .status.not-delivered {
    --text-color: var(--red-color-1);
    --border-color: var(--red-color-1);
  }
</style>
