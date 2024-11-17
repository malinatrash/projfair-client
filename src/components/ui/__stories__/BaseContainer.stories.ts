import { Meta, StoryObj } from '@storybook/vue3';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import { ContainerSize } from '@/models/components/BaseContainer';

const sizePropVariants: ContainerSize[] = [ContainerSize.lg, ContainerSize.md];

const meta: Meta<typeof BaseContainer> = {
  title: 'ui/BaseContainer',
  component: BaseContainer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseContainer - это компонент реализующий контейнер.
        Элемент состоит из контента и размера элемента.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          default: Передайте строку в качестве значения, чтобы отобразить контент элемента.

        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          size: Выберите необходимое значение размера элемента.

          `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: sizePropVariants,
    },
    default: {
      type: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseContainer>;

export const Default: Story = { args: { default: 'Контент' } };
