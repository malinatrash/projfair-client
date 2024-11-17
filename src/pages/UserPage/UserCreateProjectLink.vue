<template>
  <BaseButton
    is="router-link"
    v-if="authStore.isTeacher && isTime"
    :to="toProjectProposalCreateRoute()"
  >
    создать проектную заявку
  </BaseButton>
</template>

<script setup lang="ts">
  import BaseButton from '@/components/ui/BaseButton.vue';
  import { useDuration } from '@/hooks/useDuration';
  import { useUserTimer } from '@/hooks/useUserTimer';
  import { toProjectProposalCreateRoute } from '@/router/utils/routes';
  import { useAuthStore } from '@/stores/auth/useAuthStore';

  const authStore = useAuthStore();
  const time = useUserTimer();

  const { isTime } = useDuration(
    new Date(time.value?.[0] ?? new Date(-1000)),
    new Date(time.value?.[1] ?? new Date(-1000)),
  );
</script>
