<template>
  <section class="section" :class="{ divider: props.divider }">
    <div class="meta-info">
      <div data-test-id="tag" class="tag">{{ props.tag }}</div>
      <p data-test-id="title" class="title">{{ props.title }}</p>
    </div>
    <div data-test-id="content" v-bind="$attrs" class="content">
      <!-- @slot Основной контент секции, отображается в правой колонке компонента -->
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    inheritAttrs: false,
  });
</script>

<script setup lang="ts">
  type Props = {
    /**
     * Короткий тег секции, отображается сверху над заголовком
     */
    tag: string;
    /**
     * Заголовок секции, отображается слева от основного контента
     */
    title: string;
    /**
     * Опциональный разделитель под секцией
     */
    divider?: boolean;
  };

  const props = withDefaults(defineProps<Props>(), {
    divider: false,
  });
</script>

<style lang="scss" scoped>
  .section {
    display: flex;
    gap: 1.875rem;
    margin-bottom: 1.875rem;
    @media (max-width: 900px) {
      & {
        flex-direction: column;
      }
    }
  }

  .divider {
    padding-bottom: 1.875rem;
    border-bottom: 0.125rem solid var(--gray-color-1);
  }

  .meta-info {
    width: 15.9375rem;
    @media (max-width: 900px) {
      & {
        display: flex;
        align-items: center;
        min-width: 300px;
      }
    }
  }

  .title {
    display: inline;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 130%;

    @media (max-width: 900px) {
      & {
        margin-left: 20px;
      }
    }
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.625rem;
    height: 4.625rem;
    margin-bottom: 1.125rem;
    font-size: 2rem;
    color: var(--accent-color-1);
    background: #f1f4fe;
    border-radius: 50%;

    @media (max-width: 900px) {
      & {
        min-width: 4.625rem;
        min-height: 4.625rem;
        margin-bottom: 0;
      }
    }
  }

  .content {
    width: 100%;

    @media (max-width: 450px) {
      & {
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
