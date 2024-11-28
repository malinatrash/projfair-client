import { Meta, StoryObj } from '@storybook/vue3';
import { ref, watchEffect } from 'vue';
import BaseTextarea, { TextareaResize } from '@/components/ui/BaseTextarea.vue';

const resizePropVariants: TextareaResize[] = [
  'both',
  'horizontal',
  'vertical',
  'none',
];

const meta: Meta<typeof BaseTextarea> = {
  title: 'ui/BaseTextarea',
  component: BaseTextarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseTextarea - это компонент, который представляет собой текстовое поле ввода.
        Элемент состоит из заголовка, контентного содержимого, растягивания поля ввода по X/Y, максимального количества символов, свойства отображения максимального количества символов.

        Руководство использования:
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          modelValue: Передайте строку в качестве значения, чтобы отобразить контентное содержимое элемента.
          label: Передайте строку в качестве значения, чтобы отобразить заголовок элемента.
          resize: Выберите значение "both", "horizontal", "vertical", "none", чтобы выбрать необходимый вариант растягивания поля ввода по X/Y.
          maxLength: Передайте числовое значение для указания максимального количества символов.
          showMaxLength: Передайте значение TRUE, чтобы показать максимальное количество символов.

          `,
      },
    },
  },
  argTypes: {
    resize: {
      control: 'select',
      options: resizePropVariants,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseTextarea>;

export const Default: Story = {
  render: (args) => ({
    components: { BaseTextarea },
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
      <BaseTextarea v-bind="args" placeholder="Введите текст" v-model="value" />
      <div class="mt-2">modelValue: <b>{{ value }}</b></div>
    </div>
    `,
  }),
};
