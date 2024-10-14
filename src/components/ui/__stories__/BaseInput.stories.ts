import { Meta, StoryObj } from '@storybook/vue3';
import { ref, watchEffect } from 'vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import checkedIconUrl from '@/assets/icons/checked.svg?url';

const meta: Meta<typeof BaseInput> = {
  title: 'ui/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseInput - компонент, представляющий собой текстовое поле.
        Элемент состоит из контента, иконки, заголовка.

        Руководство использования:

        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          modelValue: Передайте строковое значение для отображения контента текстового поля.
          icon: Передайте строковое значение для указания пути до файла с изображением.
          label: Передайте строковое значение для отображения заголовка над текстовым полем.

          `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseInput },
    setup() {
      const value = ref<string>(args.modelValue || '');
      watchEffect(() => {
        const newValue = args.modelValue;
        if (newValue) value.value = newValue;
      });
      return { args, value };
    },
    template: `
    <div class="text-area">
      <BaseInput v-bind="args" placeholder="Введите текст" v-model="value" />
      <div class="mt-2">modelValue: <b>{{ value }}</b></div>
    </div>
    `,
  }),
};
export const WithIcon: Story = { ...Default, args: { icon: checkedIconUrl } };
