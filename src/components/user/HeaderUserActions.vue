<template>
  <div class="actions">
    <template v-if="authStore.profileData">
      <!-- UNDER DEV  -->
      <button v-if="false" class="ring-btn">
        <img :src="ringIconUrl" alt="уведомления" class="icon" />
      </button>
      <div class="dropdown-container">
        <div ref="handleMenuNode" class="user" @click="toggleMenu">
          <img :src="userPictureUrl" alt="" class="user-icon" />
          <span class="username">{{ fio }}</span>
          <button :class="['menu-btn', { active: isMenuOpen }]">
            <img :src="arrowIconUrl" alt="↓" />
          </button>
        </div>
        <UserNavigationDropdown
          v-model:is-open="isMenuOpen"
          :handle-node="handleMenuNode"
        />
      </div>
    </template>

    <template v-else>
      <BaseButton
        class="auth-btn"
        variant="link"
        :disabled="authMutation.isLoading.value"
        @click="authMutation.mutate()"
      >
        <img
          v-if="authMutation.isLoading.value"
          :src="userPictureGrayUrl"
          alt=""
          class="user-icon"
        />
        <img v-else :src="userPictureUrl" alt="" class="user-icon" />
        Войти
      </BaseButton>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useToast } from 'vue-toastification';
  import { useAuthMutation } from '@/api/AuthApi/hooks/useAuthMutation';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import arrowIconUrl from '@/assets/icons/dropdown-arrow.svg?url';
  import ringIconUrl from '@/assets/icons/ring.svg?url';
  import userPictureGrayUrl from '@/assets/icons/user-picture-gray.svg?url';
  import userPictureUrl from '@/assets/icons/user-picture.svg?url';
  import BaseButton from '../ui/BaseButton.vue';
  import UserNavigationDropdown from './UserNavigationDropdown.vue';

  const toast = useToast();
  const authMutation = useAuthMutation({ onError });
  const authStore = useAuthStore();
  const handleMenuNode = ref<HTMLElement | undefined>(undefined);
  const isMenuOpen = ref(false);

  const fio = computed(() => {
    const fio = authStore.profileData?.fio;
    if (!fio) return '';
    const [f, ...rest] = fio.split(' ');
    return `${f} ${rest.map((str: string) => str[0]).join('. ')}.`;
  });

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
  function onError(error: unknown) {
    toast.error(String(error));
  }
</script>

<style scoped>
  .auth-btn {
    font-size: 1.125rem;
  }

  .icon {
    width: 2rem;
    height: 2rem;
  }

  .actions {
    display: flex;
    gap: 1.875rem;
    align-items: center;
  }

  .ring-btn {
    padding: 0.5rem;
    cursor: pointer;
    background: transparent;
    border: 0;
  }

  .menu-btn {
    width: 2.1875rem;
    height: 1.9375rem;
    padding: 0 0.5rem;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    border-radius: 0.25rem;
    transform: rotate(180deg);
  }

  .menu-btn:hover {
    background-color: var(--gray-color-1);
  }

  .menu-btn.active {
    transform: rotate(0deg);
  }

  .user {
    display: flex;
    gap: 0.8125rem;
    align-items: center;
    max-width: 18.375rem;
    height: 100%;
    cursor: default;
  }

  .dropdown-container {
    position: relative;
    height: 100%;
  }

  .username {
    overflow: hidden;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4375em;
    color: var(--accent-color-1);
    text-overflow: ellipsis;
    white-space: nowrap;
    user-select: none;
  }
</style>
