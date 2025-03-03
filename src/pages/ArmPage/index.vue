<template>
  <PageLayout>
    <ArmNavigation v-if="isSmallDevice" variant="mobile" />
    <header class="header">
      <h1 class="title page-title">Формирование проектных команд</h1>
    </header>
    <SidebarContainer class="sidebar-container">
      <template #sidebar>
        <ArmNavigation variant="desktop" />
        <BaseButton
          variant="outlined"
          :full-width="true"
          style="margin-top: 15px"
          :disabled="!isDistributionExist"
          @click="eraseDistribution"
        >
          Сбросить распределение</BaseButton
        >
      </template>
      <template #main>
        <RouterView />
      </template>
    </SidebarContainer>
  </PageLayout>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useQuery, useQueryClient } from 'vue-query';
  import { RouterView } from 'vue-router';
  import { useToast } from 'vue-toastification';
  import PageLayout from '@/components/layout/PageLayout.vue';
  import SidebarContainer from '@/components/layout/SidebarContainer.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import { armApi } from '@/api/ArmApi';
  import { useSmallDevice } from '@/hooks/useBreakpoints';
  import { useWatchAuthorization } from '@/hooks/useWatchAuthorization';
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import ArmNavigation from './ArmNavigation.vue';

  const isSmallDevice = useSmallDevice();

  const modalsStore = useModalsStore();

  function agree() {
    restoreDistributionQuery.refetch.value();
    modalsStore.closeConfirmModal();
  }

  function disagree() {
    modalsStore.closeConfirmModal();
  }

  const toast = useToast();

  useWatchAuthorization();

  const client = useQueryClient();

  const distributionExistQuery = useQuery({
    queryKey: 'GET_DISTRIBUTION_EXIST',
    queryFn: () => armApi.isArmManualDistributionExist(),
  });

  const restoreDistributionQuery = useQuery({
    enabled: false,
    queryKey: 'RESTORE_MANUAL_DISTRIBUTION',
    queryFn: () => armApi.eraseArmManualDistribution(),
    onSuccess: () => {
      toast.success('Распределение сброшено');
      client.invalidateQueries(
        'USE_GET_ARM_MANUAL_DISTRIBUTION_LIST_QUERY_KEY',
      );
      client.invalidateQueries('USE_GET_ARM_PROJECTS_LIST_QUERY_KEY');
      client.invalidateQueries('USE_GET_ARM_STUDENTS_LIST_QUERY_KEY');
      client.invalidateQueries('GET_DISTRIBUTION_EXIST');
    },
  });

  const isDistributionExist = computed(() =>
    Boolean(
      distributionExistQuery.data.value || !restoreDistributionQuery.isFetched,
    ),
  );

  const eraseDistribution = () => {
    modalsStore.openConfirmModal(
      'Вы хотите сбросить автоматическое и ручное распределение?',
      'Сброс',
      'Отмена',
      agree,
      disagree,
    );
  };
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
