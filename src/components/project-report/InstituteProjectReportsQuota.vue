<template>
  <span
    :class="{
      [$style['limit-exceeded']]: isProjectsLimitExceeded(reportNameId),
    }"
  >
    <template v-if="isLoading">...</template>
    <template v-else-if="isLimit">
      ({{ reportsCount[reportNameId].count }}/{{
        reportsCount[reportNameId].maxApproved
      }})
    </template>
    <template v-else-if="isCompare">
      ({{ deliveredCount.delivered }}/{{
        reportsCount[ProjectReportNameId.All].count
      }})
    </template>
    <template v-else> ({{ reportsCount[reportNameId].count }}) </template>
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
    isCompare: {
      default: false,
      type: Boolean,
      require: false,
    },
    isLimit: {
      default: true,
      type: Boolean,
      require: false,
    },
  });

  const reportNameId = ref(props.stateId as keyof ReportsCount);

  const authStore = useAuthStore();
  const { isInstDirector, instituteProjectsQuota } = storeToRefs(authStore);

  const { reportsCount, deliveredCount, isProjectsLimitExceeded, isLoading } =
    useInstituteReportsMetaData({
      enabled: isInstDirector,
    });
</script>

<style lang="scss" module>
  .limit-exceeded {
    color: var(--red-color-1);
  }
</style>
