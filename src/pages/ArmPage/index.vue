<template>
  <PageLayout>
    <ArmNavigation v-if="isSmallDevice" variant="mobile" />
    <header class="header">
      <h1 class="title page-title">Формирование проектных команд</h1>
    </header>
    <SidebarContainer class="sidebar-container">
      <template #sidebar>
        <ArmNavigation variant="desktop" />
      </template>
      <template #main>
        <RouterView> </RouterView>
      </template>
    </SidebarContainer>
  </PageLayout>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import PageLayout from '@/components/layout/PageLayout.vue';
  import SidebarContainer from '@/components/layout/SidebarContainer.vue';
  import { useSmallDevice } from '@/hooks/useBreakpoints';
  import { useUserTimer } from '@/hooks/useUserTimer';
  import { useWatchAuthorization } from '@/hooks/useWatchAuthorization';
  import ArmNavigation from './ArmNavigation.vue';

  const isSmallDevice = useSmallDevice();
  const time = useUserTimer();

  useWatchAuthorization();
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  .sidebar-container {
    @media (max-width: $tablet) {
      margin-top: 1.875rem;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4.75rem;
    margin-bottom: 1.875rem;

    @media (max-width: $tablet) {
      display: none;
    }
  }
</style>
