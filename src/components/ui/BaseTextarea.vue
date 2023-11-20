<template>
  <label class="label">
    <p v-if="props.label" class="label-text">{{ props.label }}</p>
    <p v-if="!isValid" class="label-full-text">
      Вы достигли максимума по символам
    </p>
    <textarea
      :maxlength="props.maxLength"
      v-bind="$attrs"
      :value="props.modelValue"
      :class="[
        'input',
        { 'with-maxlength': isValid },
        {
          'lenght-limit': !isValid,
        },
      ]"
      :style="{ resize: isValid }"
      @input="onInput"
    >
    </textarea>
    <span
      v-if="showMaxLength"
      :class="[
        'maxlength',
        {
          'lenght-limit': !isValid,
        },
      ]"
    >
      {{ props.modelValue.length || 0 }}/{{ maxLength }}
    </span>
  </label>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    inheritAttrs: false,
  });
</script>

<script setup lang="ts">
  import {
    TextareaHTMLAttributes,
    computed,
    useAttrs,
    withDefaults,
  } from 'vue';

  export type TextareaResize = 'horizontal' | 'vertical' | 'both' | 'none';

  interface Props extends TextareaHTMLAttributes {
    /**
     * Значение инпута
     */
    modelValue?: string;
    /**
     * Заголовок над инпутом
     * @deprecated используйте компонент <BaseLabel />
     */
    label?: string;
    /**
     * Растягивание поля ввода по X/Y
     */
    resize?: TextareaResize;
    /**
     * Максимальное кол-во символов
     */
    maxLength?: number;
    /**
     * Показать макс. кол-во символов
     */
    showMaxLength?: boolean;
  }

  interface Emits {
    /**
     * Обновление строчки modelValue
     *
     * @event update:modelValue
     * @property {string} value новая строчка
     */
    (e: 'update:modelValue', value: string): void;
  }

  const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    label: '',
    resize: 'none',
    maxLength: 255,
    showMaxLength: true,
  });

  const isValid = computed(() => props.maxLength > props.modelValue.length);

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    emit('update:modelValue', target.value);
  };
  const emit = defineEmits<Emits>();
  const attrs = useAttrs();
</script>

<style scoped>
  .label {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .maxlength {
    position: absolute;
    right: 1.25rem;
    bottom: 0.625rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--gray-color-2);
    user-select: none;
  }

  .label-text {
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--text-color);
  }

  .label-full-text {
    position: relative;
    padding-bottom: 5px;
    margin-top: -20px;
    margin-right: 0.25rem;
    font-size: 0.85rem;
    color: var(--red-color-1);
    text-align: end;
  }

  .input {
    width: 100%;
    padding: 0.75rem 0.8rem;
    font-size: 1.125rem;
    color: var(--text-color);
    background-color: #fff;
    border: 1px solid var(--gray-color-1);
    border-radius: 0.3125rem;
    transition: border 100ms ease;
  }

  .input.with-maxlength {
    padding-bottom: 2.5rem;
  }

  .input::placeholder {
    font-size: 1.125rem;
    color: var(--gray-color-2);
  }

  .input:focus {
    outline: none;
  }

  .input:disabled {
    color: var(--gray-color-2);
    cursor: default;
    background-color: var(--gray-color-4);
  }

  .input:focus-visible {
    border: 1px solid var(--accent-color-1);
  }

  .input.lenght-limit {
    margin-top: -4px;
    margin-left: -1px;
    border: 2px solid var(--red-color-1);
  }

  .maxlength.lenght-limit {
    color: var(--red-color-1);
  }

  @media (max-width: 1000px) {
    .label-full-text {
      margin-top: -10px;
    }
  }
</style>
