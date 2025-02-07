<template>
  <BaseModal
    class="modal"
    :is-show="modalsStore.projectFilterModal"
    size="m"
    @close="modalsStore.projectFilterModal = false"
  >
    <ProjectListFilter />
  </BaseModal>
</template>

<script setup lang="ts">
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import BaseModal from '../ui/BaseModal.vue';
  import ProjectListFilter from './ProjectListFilter.vue';

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
