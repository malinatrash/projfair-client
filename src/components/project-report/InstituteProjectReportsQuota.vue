<template>
  <span :class="{ [$style['limit-exceeded']]: isProjectsLimitExceeded(state) }">
    <template v-if="isLoading">...</template>
    <template v-else-if="isLimit">
      ({{ reportsCount[state].count }}/{{ reportsCount[state].maxApproved }})
    </template>
    <template v-else> ({{ reportsCount[state].count }}) </template>
  </span>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import {
    ReportsCount,
    useInstituteReportsMetaData,
  } from '@/hooks/useInstituteReportsMetaData';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { ProjectReportNameId } from '@/models/ProjectReport';

  const props = defineProps({
    stateId: {
      default: ProjectReportNameId.All,
      type: Number,
      require: true,
    },
    isLimit: {
      default: true,
      type: Boolean,
      require: false,
    },
  });

  const state = ref(props.stateId as keyof ReportsCount);

  const authStore = useAuthStore();
  const { isInstDirector, instituteProjectsQuota } = storeToRefs(authStore);

  const { reportsCount, isProjectsLimitExceeded, isLoading } =
    useInstituteReportsMetaData({
      enabled: isInstDirector,
    });
</script>

<style lang="scss" module>
  .limit-exceeded {
    color: var(--red-color-1);
  }
</style>
