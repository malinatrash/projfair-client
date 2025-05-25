<template>
  <BasePanel
    v-if="props.isOpen"
    ref="root"
    :style="{ ...position }"
    class="dropdown"
  >
    <!-- @slot Тело выпадающего меню -->
    <slot></slot>
  </BasePanel>
</template>

<script setup lang="ts">
  import { onClickOutside } from '@vueuse/core';
  import { ref, watch } from 'vue';
  import { isPartOfNode } from '@/helpers/dom';
  import BasePanel from './BasePanel.vue';

  export type Position = {
    left?: string;
    right?: string;
    top?: string;
    bottom?: string;
  };
  type Props = {
    /**
     * Выпадающее меню открыто / закрыто
     */
    isOpen: boolean;
    /**
     * HTML элемент относительно которого будет позиционироваться выпадающее меню
     */
    handleNode?: HTMLElement;
    /**
     * Смещение относительно родителя
     */
    position?: Position;
  };
  type Emits = {
    /**
     * Событие обновления isOpen
     */
    (e: 'update:isOpen', isOpen: boolean): void;
  };

  const props = withDefaults(defineProps<Props>(), {
    position: () => ({}),
    handleNode: undefined,
  });
  const emit = defineEmits<Emits>();
  const root = ref(null);

  watch(
    () => props.handleNode,
    (handleNode, prevHandleNode) => {
      if (!handleNode) return;
      if (handleNode === prevHandleNode) return;
      handleNode.style.position = 'relative';
    },
    { immediate: true },
  );

  onClickOutside(root, (evt) => {
    if (isPartOfNode(evt.target as HTMLElement, props.handleNode)) return;
    emit('update:isOpen', false);
  });
</script>

<style scoped>
  .dropdown {
    position: absolute;
    top: 80%;
    right: 0;
    z-index: 1;
    width: 15rem;
    padding: 0.6rem 0 !important;
  }
</style>
