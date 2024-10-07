import { Meta, StoryObj } from '@storybook/vue3';
import { ref, watchEffect } from 'vue';
import BaseAccordion from '../accordion/BaseAccordion.vue';

const meta: Meta<typeof BaseAccordion> = {
  title: 'ui/accordion/BaseAccordion',
  component: BaseAccordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseAccordion - компонент для отображения содержимого блока при нажатии на заголовок.
    Элемент состоит из заголовка, иконки и содержимого, которые могут быть изменены в зависимости от переданных аргументов.
          
      Руководство использования:

        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          title: Передайте строку в качестве значения, чтобы отобразить заголовок элемента.
          content: Передайте строку в качестве значения, чтобы отобразить контент элемента.

        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          opened: Передайте значение TRUE, чтобы открыть компонент.
          animated: Передайте значение FALSE, чтобы включить анимацию.
          `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseAccordion>;

export const Default: Story = {
  args: { title: 'Заголовок компонента', content: 'Контент компонента' },
  render: (args) => ({
    setup: () => {
      const isOpened = ref(args.opened);
      watchEffect(() => (isOpened.value = args.opened));
      return () => (
        <BaseAccordion
          opened={isOpened.value}
          animated={args.animated}
          onUpdate:opened={(opened) => (isOpened.value = opened)}
        >
          {{
            title: args.title,
            content: args.content,
            icon: args.icon,
          }}
        </BaseAccordion>
      );
    },
  }),
};
