<template>
  <span :class="{ [$style['limit-exceeded']]: isProjectsLimitExceeded(state) }">
    <template v-if="isLoading">...</template>
    <template v-else-if="isLimit">
      ({{
        proposalsCount[state].count +
        proposalsCount[FilterByToProjectProposalStateId.approved_on_year].count
      }}/{{ proposalsCount[state].maxApproved }})
    </template>
    <template v-else> ({{ proposalsCount[state].count }}) </template>
  </span>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import {
    ProposalsCount,
    useInstituteProposalsMetaData,
  } from '@/hooks/useInstituteProposalsMetaData';
  import { FilterByToProjectProposalStateId } from '@/router/utils/routes';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { ProjectProposalStateId } from '@/models/ProjectProposal';

  const props = defineProps({
    stateId: {
      default: ProjectProposalStateId.ApprovedSpring,
      type: Number,
      require: true,
    },
    isLimit: {
      default: true,
      type: Boolean,
      require: false,
    },
  });

  const state = ref(props.stateId as keyof ProposalsCount);

  const authStore = useAuthStore();
  const { isInstDirector, instituteProjectsQuota } = storeToRefs(authStore);

  const { proposalsCount, isProjectsLimitExceeded, isLoading } =
    useInstituteProposalsMetaData({
      enabled: isInstDirector,
    });
</script>

<style lang="scss" module>
  .limit-exceeded {
    color: var(--red-color-1);
  }
</style>
