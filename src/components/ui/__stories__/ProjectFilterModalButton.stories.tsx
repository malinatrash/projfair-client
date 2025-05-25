import { Meta, StoryObj } from '@storybook/vue3';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import OpenProjectFilterModalButton from '../../project/OpenProjectFilterModalButton.vue';

const app = createApp({});
app.use(createPinia());

const meta: Meta<typeof OpenProjectFilterModalButton> = {
  title: 'ui/ProjectFilterModalButton',
  component: OpenProjectFilterModalButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          ProjectFilterModalButton — кнопка для открытия модального окна с фильтрами проектов.
          Содержит иконку фильтров и индикатор наличия активных фильтров.
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof OpenProjectFilterModalButton>;

export const Default: Story = {};
