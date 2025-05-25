<template>
  <PageLayout>
    <AdminNavigation v-if="isSmallDevice" variant="mobile" />
    <header class="header">
      <h1 class="title page-title">Панель администратора</h1>
    </header>
    <SidebarContainer class="sidebar-container">
      <template #sidebar>
        <AdminNavigation variant="desktop" />
      </template>
      <template #main>
        <RouterView />
      </template>
    </SidebarContainer>
  </PageLayout>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import PageLayout from '@/components/layout/PageLayout.vue';
  import SidebarContainer from '@/components/layout/SidebarContainer.vue';
  import { useSmallDevice } from '@/hooks/useBreakpoints';
  import { useWatchAuthorization } from '@/hooks/useWatchAuthorization';
  import AdminNavigation from './AdminNavigation.vue';

  const isSmallDevice = useSmallDevice();

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
