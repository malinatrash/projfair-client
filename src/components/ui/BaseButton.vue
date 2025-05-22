<template>
  <component
    :is="props.is"
    :disabled="props.disabled"
    :class="['button', props.variant, props.color]"
    :style="{
      textTransform: props.case,
      width: props.fullWidth ? '100%' : undefined,
    }"
  >
    <!-- @slot Контент внутри кнопки -->
    <slot> </slot>
  </component>
</template>

<script setup lang="ts">
  import { withDefaults } from '@vue/runtime-core';

  export type Variant =
    | 'outlined'
    | 'link'
    | 'inline-link'
    | 'primary'
    | 'tag'
    | 'tag-outlined'
    | 'rating';
  export type Is = 'button' | 'router-link' | 'a';
  export type Case = 'uppercase' | 'lowercase' | 'none';
  export type Color = 'red' | 'white' | 'green' | 'orange';

  interface Props {
    /**
     * Вариант кнопки для отображения
     */
    variant?: Variant;
    /**
     * Тег кнопки (если нужно использовать ссылку `<a />`, а не `<button />`)
     */
    is?: Is;
    /**
     * Кнопка вкл / выкл
     */
    disabled?: boolean;
    /**
     * true: ширина кнопки 100%
     * false: ширина кнопки равна контенту внутри кнопки
     */
    fullWidth?: boolean;
    /**
     * Регистр текста в кнопке
     */
    case?: Case;
    /**
     * Один из возможных цветов кнопки
     */
    color?: Color;
  }

  const props = withDefaults(defineProps<Props>(), {
    is: 'button',
    variant: 'primary',
    disabled: false,
    fullWidth: false,
    case: 'uppercase',
    color: undefined,
  });
</script>

<style scoped lang="scss">
  .button {
    --background-color: var(--accent-color-1);
    --disabled-color: var(--gray-color-2);
    --hover-color: #2248bb;
    --active-color: #3e8bff;

    display: inline-flex;
    gap: 0.8125rem;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: normal;
    color: var(--light-color);
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    border-radius: 0.3125rem;
    transition: background-color 20ms ease, color 20ms ease;

    &.red {
      --background-color: var(--red-color-1);
      --hover-color: var(--red-color-2);
      --active-color: #f14646;
    }

    &.white {
      --background-color: #fff;
      --hover-color: var(--gray-color-1);
      --active-color: var(--gray-color-2);
    }

    &.green {
      --background-color: var(--green-color-1);
      --hover-color: var(--green-color-2);
      --active-color: #31c96e;
    }

    &.orange {
      --background-color: var(--accent-color-2);
      --hover-color: var(--orange-color-2);
      --active-color: var(--orange-color-1);
    }

    &:disabled {
      pointer-events: none;
    }
  }

  // SCSS: A.K.A. "Silent Classes"
  %primary {
    background-color: var(--background-color);

    &:hover {
      color: #fff;
      background-color: var(--hover-color);
    }

    &:active {
      color: #fff;
      background-color: var(--active-color);
    }

    &:disabled {
      background-color: var(--disabled-color);
    }
  }

  %tag {
    @extend %primary;

    padding: 0.4375rem 1.25rem;
    font-size: 0.875rem;
    border: none;
    border-radius: 6.25rem;
  }

  %outlined {
    color: var(--background-color);
    background-color: transparent;
    border: 0.125rem solid var(--background-color);

    &:hover {
      color: #fff;
      background-color: var(--hover-color);
      border-color: var(--hover-color);
    }

    &.white:hover {
      color: var(--text-color);
    }

    &:active {
      color: #fff;
      background-color: var(--active-color);
      border-color: var(--active-color);
    }

    &.white:active {
      color: var(--text-color);
    }

    &:disabled {
      color: var(--disabled-color);
      background-color: transparent;
      border-color: var(--disabled-color);
    }
  }

  %link {
    color: var(--background-color);

    &:hover {
      color: var(--background-color);
      text-decoration: underline;
    }

    &:active {
      color: var(--active-color);
    }

    &:disabled {
      color: var(--disabled-color);
    }
  }

  // Наследование стилей в SCSS https://sass-lang.com/documentation/at-rules/extend
  .primary {
    @extend %primary;
  }

  .outlined {
    @extend %outlined;
  }

  .link {
    @extend %link;
  }

  .inline-link {
    @extend %link;

    padding: 0;
    font-size: 0.875rem;
    border-radius: 0;
  }

  .tag {
    @extend %tag;
  }

  .tag-outlined {
    @extend %tag;
    @extend %outlined;
  }
</style>
