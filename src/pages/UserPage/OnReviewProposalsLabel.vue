<template>
  <span
    v-if="proposalsCount[ProjectProposalStateId.UnderReview].count"
    :class="$style.label"
  >
    {{ proposalsCount[ProjectProposalStateId.UnderReview].count }}
  </span>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useInstituteProposalsMetaData } from '@/hooks/useInstituteProposalsMetaData';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { ProjectProposalStateId } from '@/models/ProjectProposal';

  const authStore = useAuthStore();
  const { isInstDirector } = storeToRefs(authStore);

  const { proposalsCount } = useInstituteProposalsMetaData({
    enabled: isInstDirector,
  });
</script>

<style lang="scss" module>
  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.125rem;
    font-size: 0.875rem;
    color: var(--light-color);
    text-align: center;
    text-transform: uppercase;
    background: var(--accent-color-1);
    border-radius: 50%;
  }
</style>
