import { Meta, StoryObj } from '@storybook/vue3';
import BaseBadge from '@/components/ui/BaseBadge.vue';

const meta: Meta<typeof BaseBadge> = {
  title: 'ui/BaseBadge',
  component: BaseBadge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `

          BaseBadge - компонет для отображения статуса проекта.
        Элемент состоит из контента внутри значка.

        Руководство использования:

        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          default: Передайте строку в качестве значения, чтобы отобразить контент элемента.
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
type Story = StoryObj<typeof BaseBadge>;

export const Default: Story = { args: { default: 'badge' } };
