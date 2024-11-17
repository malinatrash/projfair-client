<template>
  <SimpleAccordion :default-opened="opened" class="accordion">
    <template #title>
      <!-- @slot Слот для заголовка компонента -->
      <slot name="title"></slot>
    </template>
    <template #content>
      <div class="content">
        <!-- @slot Слот контента компонента -->

        <slot name="content"></slot>
      </div>
    </template>
  </SimpleAccordion>
</template>

<script setup lang="ts">
  import SimpleAccordion from './SimpleAccordion.vue';

  const props = defineProps({
    opened: {
      type: Boolean,
      default: true,
      required: false,
    },
  });
</script>

<style lang="scss" scoped>
  .accordion {
    --side-padding: 1.375rem;

    &:deep(.icon) {
      width: 1rem;
      height: 0.625rem;
    }

    &:deep(.title) {
      display: flex;
      flex-flow: row-reverse;
      gap: 0.75rem;
      align-items: center;
      justify-content: flex-end;
      padding: 1.0625rem var(--side-padding);
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.625rem;
      color: var(--text-color);
      cursor: pointer;

      &:hover {
        color: var(--accent-color-1);
      }
    }
  }

  .content {
    padding: 0.375rem var(--side-padding) 1.8125rem;
  }
</style>
