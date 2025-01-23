<template>
  <div
    ref="tumblerRef"
    :class="['tumbler', { disabled: disabled }]"
    :style="tumblerStyle"
  >
    <div
      ref="sliderRef"
      class="slider"
      :style="sliderStyle"
      :class="{ animated: animation }"
    ></div>
    <label v-for="option in options" :key="option.label" class="tumbler-option">
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
  import { CSSProperties, computed, onMounted, ref, watch } from 'vue';

  const randomId = Math.random();

  const props = defineProps<{
    options: {
      label: string;
      prefix?: number | string;
    }[];
    modelValue: string;
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
    const activeInputElement = tumblerRef.value?.querySelector(
      '.tumbler-radio.active',
    ) as HTMLInputElement;
    const sliderElement = sliderRef.value;

    if (activeInputElement && sliderElement) {
      sliderElement.style.width = `${activeInputElement.offsetWidth}px`;
    }
  }

  onMounted(() => {
    updateSliderWidth();
  });

  watch(selectedOption, () => {
    updateSliderWidth();
  });

  const sliderStyle = computed(() => {
    const index = props.options.findIndex(
      (option) => option.label === selectedOption.value,
    );
    return {
      transform: `translateX(${index * 100}%)`,
    } as CSSProperties;
  });

  const tumblerStyle = computed(
    () =>
      ({
        '--option-count': props.options.length,
      } as CSSProperties),
  );
</script>

<style lang="scss" scoped>
  .tumbler {
    position: relative;
    display: flex;
    width: 100%;
    overflow: hidden;
    border: 1px solid var(--accent-color-3);
    border-radius: 0.3125rem;
    box-shadow: inset 0 0 0 1px var(--accent-color-3);
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    appearance: none;

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
  }
</style>
