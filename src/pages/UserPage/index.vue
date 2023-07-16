<template>
  <PageLayout>
    <UserNavigation v-if="isSmallDevice" variant="mobile" />
    <header class="header">
      <h1 class="title page-title">Профиль пользователя</h1>
      <UserCreateProjectLink />
    </header>
    <SidebarContainer class="sidebar-container">
      <template #sidebar>
        <UserNavigation variant="desktop" />
        <DeadlineTimer
          v-if="!time"
          :start="new Date(Date.now())"
          :deadline="new Date(Date.now())"
          timer-text=""
          after-timer-text="Загрузка даты приёма заявок на проектное обучение..."
        />
        <DeadlineTimer
          v-else
          :start="new Date(time[0])"
          :deadline="new Date(time[1])"
          timer-text="до конца приема заявок на проектное обучение"
          after-timer-text="Прием заявок на проектное обучение закончен"
        />
      </template>
      <template #main>
        <RouterView></RouterView>
      </template>
    </SidebarContainer>
  </PageLayout>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import DeadlineTimer from '@/components/layout/DeadlineTimer.vue';
  import PageLayout from '@/components/layout/PageLayout.vue';
  import SidebarContainer from '@/components/layout/SidebarContainer.vue';
  import { useSmallDevice } from '@/hooks/useBreakpoints';
  import { useUserTimer } from '@/hooks/useUserTimer';
  import { useWatchAuthorization } from '@/hooks/useWatchAuthorization';
  import UserCreateProjectLink from './UserCreateProjectLink.vue';
  import UserNavigation from './UserNavigation.vue';

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
