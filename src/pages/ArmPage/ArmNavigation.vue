<template>
  <div :class="['wrapper', props.variant]">
    <ul :class="['list', props.variant]">
      <template v-for="link in route?.children" :key="link.name">
        <li :class="['item', props.variant]">
          <RouterLink
            :class="['action', props.variant]"
            :to="{
              name: link.name,
            }"
          >
            {{ link.meta?.title }}
          </RouterLink>
        </li>
      </template>
      <li :class="['item', props.variant]">
        <button
          :class="['action', props.variant]"
          @click="() => router.push('/profile/info')"
        >
          Вернуться обратно
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { router } from '@/router';
  import { RouterLink } from 'vue-router';
  import { useArmNavigationRoutes } from '../../hooks/useRoutes';

  type Props = { variant: 'desktop' | 'mobile' };
  const props = withDefaults(defineProps<Props>(), { variant: 'desktop' });
  const route = useArmNavigationRoutes();
</script>

<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
    border: 1px solid var(--gray-color-1);
    border-radius: 0.625rem;

    &.mobile {
      overflow: visible;
      border: none;
      border-radius: 0;
    }

    &::-webkit-scrollbar {
      appearance: none;
      width: 5px;
      height: 5px;
    }
  }

  .list {
    padding: 0 1.375rem;
    background: var(--light-color);

    & > .item > .accordion > .content > .list {
      padding-right: 0;
    }

    &.mobile {
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      gap: 1rem;
      padding-bottom: 1rem;
      margin-top: -2px;
      margin-right: calc(var(--side-padding) * -1);
      margin-left: calc(var(--side-padding) * -1);
      overflow-x: auto;
      border: none;
      border-radius: 0;
    }

    & > .item.mobile {
      height: 47px;
    }

    &::-webkit-scrollbar {
      height: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--accent-color-2);
    }
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.25rem 0;
    font-size: 1.2rem;
    line-height: 1.625rem;
    color: var(--text-color);

    /* for button */
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    border: none;

    & > *:nth-child(1) {
      flex: none;
    }

    &.mobile {
      padding: 1rem;
      font-size: 0.9rem;
      color: var(--gray-color-2);
      text-transform: uppercase;
    }
  }

  .box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 1rem;
  }

  .action:hover,
  .action.router-link-active {
    color: var(--accent-color-1);

    &.mobile {
      border-bottom: 2px solid var(--accent-color-1);
    }
  }

  .item {
    list-style: none;
  }

  .item:not(:last-child) {
    border-bottom: 1px solid var(--gray-color-1);

    &.mobile {
      border-bottom: none;
    }
  }

  .accordion {
    &:deep(.title) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &.opened:deep(.title) {
      border-bottom: 1px solid var(--gray-color-1);
    }
  }
</style>
