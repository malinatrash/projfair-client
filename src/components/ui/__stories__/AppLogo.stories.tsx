import { Meta, StoryObj } from '@storybook/vue3';
import AppLogo from '../AppLogo.vue';

const meta: Meta<typeof AppLogo> = {
  title: 'ui/AppLogo',
  component: AppLogo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `

          AppLogo - компонент, который отображает логотип проекта. 
          Элементы для управления компонентом отсутствуют.
          `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppLogo>;

export const Default: Story = {};
