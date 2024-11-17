<template>
  <!-- auth modal -->
  <BaseModal
    :is-show="
      modalsStore.authModalNewProject ||
      modalsStore.authModalResultProject ||
      modalsStore.authModalProfile
    "
    @close="
      () => {
        modalsStore.authModalNewProject = false;
        modalsStore.authModalResultProject = false;
        modalsStore.authModalProfile = false;
      }
    "
  >
    <!-- MAIN CONTENT -->
    <div class="success-modal">
      <h1>Вы не авторизованы</h1>
      <p class="message">
        Чтобы
        <span v-show="modalsStore.authModalProfile"
          >перейти на страницу профиля «Ярмарка проектов»</span
        >
        <span v-show="modalsStore.authModalNewProject"
          >подавать заявки на проекты</span
        >
        <span v-show="modalsStore.authModalResultProject"
          >перейти к результатам проекта</span
        >, Вам необходимо войти в свой профиль через систему «Кампус»
      </p>
      <div class="modal-buttons">
        <BaseButton case="uppercase" @click="auth">
          войти через кампус
        </BaseButton>
      </div>
    </div>
    <!-- MAIN CONTENT -->
  </BaseModal>
</template>

<script setup lang="ts">
  import { router } from '@/router';
  import { useToast } from 'vue-toastification';
  import { useAuthMutation } from '@/api/AuthApi/hooks/useAuthMutation';
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import BaseButton from '../ui/BaseButton.vue';
  import BaseModal from '../ui/BaseModal.vue';

  const toast = useToast();
  const modalsStore = useModalsStore();
  const authMutation = useAuthMutation({ onError });

  function auth() {
    modalsStore.authModalProfile = false;
    modalsStore.authModalNewProject = false;
    modalsStore.authModalResultProject = false;
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
