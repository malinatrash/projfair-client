import { Meta, StoryObj } from '@storybook/vue3';
import { ref, watchEffect } from 'vue';
import BaseRadioButton from '@/components/ui/BaseRadioButton.vue';

const meta: Meta<typeof BaseRadioButton> = {
  title: 'ui/BaseRadioButton',
  component: BaseRadioButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseRadioButton - компонент, представляющий собой радиокнопку, позволяющую пользователю выбирать одно значение из предложенного набора.
        Элемент состоит из заголовка, значения, которое привязано к кнопке и свойства доступности заголовка.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          default: Передайте строку в качестве значения, чтобы отобразить заголовок элемента.
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          value: Передайте числовое значение, которое будет привязано к кнопке.
          disabled: Передайте значение FALSE, чтобы заголовок кнопки был доступен.
          `,
      },
    },
  },
  argTypes: {
    default: {
      type: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseRadioButton>;

export const Default: Story = {
  args: {
    value: 1,
    default: 'Один',
    modelValue: null,
  },
  render: (args) => ({
    components: { BaseRadioButton },
    setup() {
      const modelValue = ref<unknown>(args.modelValue);
      watchEffect(() => {
        const value = args.modelValue;
        if (value) modelValue.value = value;
      });
      return { args, modelValue };
    },
    template: `
      <BaseRadioButton
        v-bind="args"
        v-model="modelValue"
      >
        {{ args.default }}
      </BaseRadioButton>
      <p class="mt-2">modelValue: <b>{{ modelValue }}</b></p>
    `,
  }),
};

export const MultipleButtons: Story = {
  args: { value: 1, default: 'Один', modelValue: null },
  render: (args) => ({
    components: { BaseRadioButton },
    setup() {
      const modelValue = ref<unknown>(args.modelValue);
      return { args, modelValue };
    },
    template: `
      <BaseRadioButton
        v-bind="args"
        :value="1"
        v-model="modelValue"
      >
        Один
      </BaseRadioButton>

      <BaseRadioButton
        class="mt-1"
        v-bind="args"
        :value="2"
        v-model="modelValue"
      >
        Два
      </BaseRadioButton>
      <p class="mt-2">modelValue: <b>{{ modelValue }}</b></p>
    `,
  }),
};
