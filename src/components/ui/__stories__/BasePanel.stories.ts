import { Meta, StoryObj } from '@storybook/vue3';
import BasePanel from '@/components/ui/BasePanel.vue';

const meta: Meta<typeof BasePanel> = {
  title: 'ui/BasePanel',
  component: BasePanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BasePanel -  компонент для создания панели, предназначенной для отображения содержимого, которое может быть различным в зависимости от потребностей интерфейса.
        Элемент состоит из контентной части.

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
type Story = StoryObj<typeof BasePanel>;

export const Default: Story = {};
