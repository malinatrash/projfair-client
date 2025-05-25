<template>
  <BaseModal
    class="modal"
    :is-show="modalsStore.projectFilterModal"
    size="m"
    @close="modalsStore.projectFilterModal = false"
  >
    <ActiveProjectListFilter />
  </BaseModal>
</template>

<script setup lang="ts">
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import BaseModal from '../ui/BaseModal.vue';
  import ActiveProjectListFilter from './ActiveProjectListFilter.vue';

  const modalsStore = useModalsStore();
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  .modal {
    @media (max-width: $tablet) {
      &:deep(.modal-content) {
        padding: 0;
      }

      &:deep(.filters) {
        padding: 0;
        border: none;
      }
    }
  }
</style>
