<template>
  <div ref="tumblerRef" :class="['tumbler', { disabled: disabled }]">
    <div ref="sliderRef" class="slider" :class="{ animated: animation }"></div>
    <label
      v-for="option in options"
      :key="option.label"
      :class="['tumbler-option', { 'hug-fill': hugFill }]"
    >
      <input
        v-model="selectedOption"
        :value="option.label"
        :name="`tumbler-group-${randomId}`"
        type="radio"
        :class="['tumbler-radio', { active: selectedOption === option.label }]"
        :disabled="disabled"
      />
      <span :class="['radio-label', { animated: animation }]"
        >{{ option.label
        }}{{ option.prefix !== undefined ? ` ${option.prefix}` : '' }}</span
      >
    </label>
  </div>
</template>

<script setup lang="ts">
  import { useResizeObserver } from '@vueuse/core';
  import { computed, onMounted, ref, watch } from 'vue';

  const randomId = Math.random();

  const props = defineProps<{
    options: {
      label: string;
      prefix?: number | string;
    }[];
    modelValue: string;
    hugFill?: boolean;
    animation?: boolean;
    disabled?: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

  const selectedOption = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  });

  const tumblerRef = ref<HTMLElement | null>(null);
  const sliderRef = ref<HTMLElement | null>(null);

  function updateSliderWidth() {
    const inputElements =
      tumblerRef.value?.getElementsByClassName('tumbler-radio');
    const sliderElement = sliderRef.value;

    const index = props.options.findIndex(
      (option) => option.label === selectedOption.value,
    );

    const activeInputElement = inputElements?.item(index)?.parentElement;

    if (activeInputElement && sliderElement && tumblerRef.value) {
      const offsetLeft =
        activeInputElement?.getBoundingClientRect().left -
        tumblerRef.value?.getBoundingClientRect().left +
        Number(
          window
            .getComputedStyle(activeInputElement, null)
            .borderBlockWidth.replace('px', ''),
        ) /
          2;

      sliderElement.style.width = `${
        activeInputElement.getBoundingClientRect().width
      }px`;
      sliderElement.style.transform = `translateX(${offsetLeft}px)`;
      sliderElement.style.borderRadius = window.getComputedStyle(
        activeInputElement,
        null,
      ).borderRadius;
    }
  }

  useResizeObserver(tumblerRef, () => {
    updateSliderWidth();
  });

  onMounted(() => {
    updateSliderWidth();
  });

  watch(selectedOption, () => {
    updateSliderWidth();
  });
</script>

<style lang="scss" scoped>
  .tumbler {
    position: relative;
    display: flex;
    width: 100%;
    border-radius: 0.3125rem;
  }

  .slider {
    position: absolute;
    height: 100%;
    background-color: var(--accent-color-3);

    &.animated {
      transition: 0.25s ease;
    }
  }

  .radio-label {
    font-size: 1rem;
    color: var(--accent-color-3);
    text-transform: uppercase;

    &.animated {
      transition: 0.25s ease;
    }
  }

  .tumbler-radio {
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;

    &:checked + .radio-label {
      color: #fff;
    }
  }

  .tumbler-option {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    text-align: center;
    border: 2px solid var(--accent-color-3);
    border-right: none;

    &:nth-child(2) {
      border-radius: 0.3125rem 0 0 0.3125rem;
    }

    &:last-child {
      border-right: 2px solid var(--accent-color-3);
      border-radius: 0 0.3125rem 0.3125rem 0;
    }

    &.hug-fill {
      flex: none;
    }
  }
</style>
