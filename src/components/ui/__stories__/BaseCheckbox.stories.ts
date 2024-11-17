import { Meta, StoryObj } from '@storybook/vue3';
import { ref, watchEffect } from 'vue';
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue';

const meta: Meta<typeof BaseCheckbox> = {
  title: 'ui/BaseCheckbox',
  component: BaseCheckbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseCheckbox - это компонент реализующий флажок с возможностью выбора множественных значений.
        Элемент состоит из значения, привязанного к флажку, массива, связанного с флажком, свойства недоступности и контента флажка.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          default: Передайте строку в качестве значения, чтобы отобразить название флажка.

        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          value: Передайте числовое значение, которое будет привязано к флажку при активированном состоянии флажка.
          modelValue: Передайте строку в качестве значения, чтобы отобразить массив флажка.
          disabled: Передайте значение TRUE, чтобы сделать элемент неактивным.
          `,
      },
    },
  },
  argTypes: {
    default: {
      type: 'string',
    },
    modelValue: {
      table: {
        type: {
          detail: `unknown`,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseCheckbox>;

export const Default: Story = {
  args: {
    value: 1,
    default: 'Один',
    modelValue: [],
  },
  render: (args) => ({
    components: { BaseCheckbox },
    setup() {
      const modelValue = ref<unknown[]>(args.modelValue || []);
      watchEffect(() => {
        const value = args.modelValue;
        if (value) modelValue.value = value;
      });
      return { args, modelValue };
    },
    template: `
      <BaseCheckbox
        v-bind="args"
        v-model="modelValue"
      >
        {{ args.default }}
      </BaseCheckbox>
      <p class="mt-2">modelValue: <b>{{ modelValue }}</b></p>
    `,
  }),
};

export const MultipleButtons: Story = {
  args: { value: 1, default: 'Один', modelValue: [] },
  render: (args) => ({
    components: { BaseCheckbox },
    setup() {
      const modelValue = ref<unknown[]>(args.modelValue || []);
      return { args, modelValue };
    },
    template: `
      <BaseCheckbox
        v-bind="args"
        :value="1"
        v-model="modelValue"
      >
        Один
      </BaseCheckbox>

      <BaseCheckbox
        class="mt-1"
        v-bind="args"
        :value="2"
        v-model="modelValue"
      >
        Два
      </BaseCheckbox>
      <p class="mt-2">modelValue: <b>{{ modelValue }}</b></p>
    `,
  }),
};
