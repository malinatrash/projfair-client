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
        {
          'length-limit': !isValid,
        },
      ]"
      :style="{ resize: props.resize }"
      @input="onInput"
    >
    </textarea>
    <span
      v-if="showMaxLength"
      :class="[
        'maxlength',
        {
          'length-limit': !isValid,
        },
      ]"
    >
      {{ props.modelValue?.length || 0 }}/{{ maxLength }}
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

  // Добавил регулярку
  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;

    const inputValue = target.value;
    const sqlRegex =
      /(\bSELECT\b|\bINSERT\b|\bUPDATE\b|\bDELETE\b|\bDROP\b|\bALTER\b|\bTRUNCATE\b|\bTABLE\b|\bCREATE\b)/gi;

    if (sqlRegex.test(inputValue)) {
      alert('Ввод SQL-запросов запрещен!');
      target.value = '';
    }

    const cleanedValue = target.value.replace(/[\n\r\t]/g, '');
    emit('update:modelValue', cleanedValue);
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
    margin-right: 0.25rem;
    font-size: 0.85rem;
    line-height: normal;
    color: var(--orange-color-1);
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
    transition: 100ms ease;
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

  .input.length-limit {
    border: 2px solid var(--orange-color-1);
  }

  .input:user-invalid {
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--red-color-1) 100%, white 35%);
  }

  .maxlength.length-limit {
    color: var(--orange-color-1);
  }

  @media (max-width: 1000px) {
    .label-full-text {
      margin-top: -10px;
    }
  }
</style>
