import { Meta, StoryObj } from '@storybook/vue3';
import DeleteButton from '../DeleteButton.vue';

const meta: Meta<typeof DeleteButton> = {
  title: 'ui/DeleteButton',
  component: DeleteButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          DeleteButton - это компонент кнопки удаления.
        Элемент состоит из свойства доступности компонента.

        Руководство использования:
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          disable: Передайте значение FALSE, чтобы сделать компонент доступным.

          `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DeleteButton>;

export const Default: Story = {};
