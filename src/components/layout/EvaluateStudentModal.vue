<template>
  <!-- auth modal -->
  <BaseModal
    :is-show="modalsStore.evaluateStudentModal"
    @close="modalsStore.evaluateStudentModal = false"
  >
    <!-- MAIN CONTENT -->
    <div class="success-modal">
      <h1>Оценить студента</h1>
      <div ref="{containerRef}">
        <BaseButton
          @click="dropDownListShown = !dropDownListShown"
          :full-width="true"
          :variant="'outlined'"
          >Выбрать оценку</BaseButton
        >
        <DropdownList
          :is-open="dropDownListShown"
          :item-list="items"
          @update:is-open="(value) => $emit('update:isOpen', value)"
        />
      </div>
      <BaseTextarea placeholder="Опишите проделанную работу студента" />
      <div class="modal-buttons">
        <BaseButton case="uppercase"> Оценить </BaseButton>
      </div>
    </div>
    <!-- MAIN CONTENT -->
  </BaseModal>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useToast } from 'vue-toastification';
  import { DropdownItem } from '@/models/components/DropdownItem';
  import { useAuthMutation } from '@/api/AuthApi/hooks/useAuthMutation';
  import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
  import BaseButton from '../ui/BaseButton.vue';
  import BaseModal from '../ui/BaseModal.vue';
  import BaseTextarea from '../ui/BaseTextarea.vue';
  import DropdownList from '../ui/DropdownList.vue';

  const toast = useToast();
  const modalsStore = useEvaluationModal();
  const authMutation = useAuthMutation({ onError });

  const dropDownListShown = ref(false);

  const containerRef = ref<HTMLElement | undefined>(undefined);

  const items: DropdownItem[] = [
    { content: '0', type: 'button', action: () => {} },
    { content: '1', type: 'button', action: () => {} },
    { content: '2', type: 'button', action: () => {} },
    { content: '3', type: 'button', action: () => {} },
    { content: '4', type: 'button', action: () => {} },
    { content: '5', type: 'button', action: () => {} },
  ];

  function auth() {
    modalsStore.authModal = false;
    authMutation.mutate();
  }

  function onError(error: unknown) {
    toast.error(String(error));
  }
</script>

<style scoped>
  .success-modal {
    text-align: center;
  }

  .message {
    margin-top: 1.5625rem;
  }

  .modal-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2.1875rem;
  }
</style>
