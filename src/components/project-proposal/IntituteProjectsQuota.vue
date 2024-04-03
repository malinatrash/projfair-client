<template>
  <span :class="{ [$style['limit-exceeded']]: approvedProjectsLimitExceeded }">
    <template v-if="isLoading">...</template>
    <template v-else-if="isLimit">
      ({{ proposalsCount[state] }}/{{ intituteProjectsQuota }})
    </template>
    <template v-else> ({{ proposalsCount[state] }}) </template>
  </span>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import {
    ProposalsCount,
    useInstituteProposalsMetaData,
  } from '@/hooks/useInstituteProposalsMetaData';
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
  const { isInstDirector, intituteProjectsQuota } = storeToRefs(authStore);

  const { proposalsCount, approvedProjectsLimitExceeded, isLoading } =
    useInstituteProposalsMetaData({
      enabled: isInstDirector,
    });
</script>

<style lang="scss" module>
  .limit-exceeded {
    color: var(--red-color-1);
  }
</style>
