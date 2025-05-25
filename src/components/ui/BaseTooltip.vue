<template>
  <div class="tooltip-container">
    <!-- @slot Контент, в правом верхнем углу которого будет появляться подсказка -->
    <slot></slot>
    <button class="btn">
      <img class="icon" :src="questionIconUrl" alt="«?»" />
      <div
        data-test-id="message"
        :class="['tooltip-msg', props.positionY, props.positionX]"
      >
        <!-- @slot Текст подсказки -->
        <slot name="message" :message="props.message">
          {{ props.message }}
        </slot>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
  import questionIconUrl from '@/assets/icons/question.svg?url';

  export type TooltipPositionY = 'top' | 'bottom';
  export type TooltipPositionX = 'left' | 'right';
  type Props = {
    /**
     * Текст подсказки
     */
    message?: string;
    /**
     * Позиция подсказки по Y относительно основного текста
     */
    positionY?: TooltipPositionY;
    /**
     * Позиция подсказки по X относительно основного текста
     */
    positionX?: TooltipPositionX;
  };
  const props = withDefaults(defineProps<Props>(), {
    message: '',
    positionY: 'top',
    positionX: 'right',
  });
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  .tooltip-msg {
    position: absolute;
    z-index: 10;
    display: none;
    width: min(3000%, 100vw);
    max-width: 22.25rem;
    padding: 0.9375rem;
    font-size: 0.9375rem;
    font-weight: 600;
    line-height: 180%;
    text-align: left;
    cursor: default;
    background: #fff;
    border: 1px solid var(--gray-color-1);
    border-radius: 0.625rem;
    box-shadow: 0 0 0.3125rem rgb(0 0 0 / 18%);

    &.top {
      bottom: 100%;
    }

    &.bottom {
      top: 100%;
    }

    &.left {
      right: 100%;
    }

    &.right {
      left: 100%;
    }
  }

  .tooltip-msg:hover,
  .tooltip-msg:focus-visible {
    display: none !important;
  }

  .tooltip-container {
    display: inline-flex;
    align-items: center;

    @media (max-width: $tablet) {
      position: relative;
    }
  }

  .btn {
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    margin-left: 0.4375rem;
    cursor: pointer;
    background: transparent;
    border: none;

    @media (max-width: $tablet) {
      position: static;
    }
  }

  .btn:hover .tooltip-msg,
  .btn:focus-visible .tooltip-msg {
    display: block;
  }

  .icon {
    width: 100%;
    height: 100%;
  }
</style>
