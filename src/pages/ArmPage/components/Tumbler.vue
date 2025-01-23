<template>
  <div class="tumbler">
    <label v-for="option in options" :key="option.label" class="tumbler-option">
      <input
        v-model="selectedOption"
        :value="option.label"
        :name="'tumbler-group'"
        type="radio"
        class="tumbler-radio"
      />
      <span class="radio-label"
        >{{ option.label
        }}{{ option.prefix !== undefined ? ` ${option.prefix}` : '' }}</span
      >
    </label>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    options: {
      label: string;
      prefix?: number | string;
    }[];
    modelValue: string;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

  const selectedOption = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  });
</script>

<style lang="scss" scoped>
  .tumbler {
    display: flex;
    width: 100%;
  }

  .tumbler-radio {
    appearance: none;
  }

  .radio-label {
    font-size: 1rem;
    color: var(--accent-color-3);
    text-transform: uppercase;
  }

  .tumbler-option {
    flex: 1;
    padding: 5px 10px;
    text-align: center;
    cursor: pointer;
    border: 2px solid var(--accent-color-3);
    border-right: none;

    &:first-child {
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-right: 2px solid var(--accent-color-3);
      border-radius: 0 5px 5px 0;
    }

    &:has(input[type='radio']:checked) {
      background-color: var(--accent-color-3);

      & > .radio-label {
        color: #fff;
      }
    }
  }
</style>
