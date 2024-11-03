import { Meta, StoryObj } from '@storybook/vue3';
import ToUpButton from '../ToUpButton.vue';

const meta: Meta<typeof ToUpButton> = {
  title: 'ui/ToUpButton',
  component: ToUpButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
      ToUpButton - компонент, представляющий собой кнопку "Вверх", которая появляется при прокрутке страницы вниз.
        Элемент состоит из свойства отображения компонента, расстояния от верха страницы до места в котором кнопка начнёт отображаться.

        Руководство использования:
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          visible: Передайте значение TRUE, чтобы включить отображение компонента.
          topOffset: Передайте числовое значение, чтобы указать расстояние от верха страницы до места в котором кнопка начнёт отображаться.

        
          `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToUpButton>;

export const Default: Story = {
  args: { visible: true },
  render: (args) => ({
    setup: () => () =>
      (
        <div style={{ height: '200px' }}>
          <ToUpButton visible={args.visible} />
        </div>
      ),
  }),
};
