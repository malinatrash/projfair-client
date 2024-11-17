import { Meta, StoryObj } from '@storybook/vue3';
import GridLayout from '../GridLayout.vue';

const meta: Meta<typeof GridLayout> = {
  title: 'ui/GridLayout',
  component: GridLayout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          GridLayout - это компонент, предоставляющий гибкую сетку для размещения контента.
        Элемент состоит из контентной части и количества колонок.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          default: Передайте строку в качестве значения, чтобы отобразить контентную часть элемента.
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          cols: Передайте числовое значение для указания количества колонок.

          `,
      },
    },
  },
  argTypes: {
    cols: {
      table: {
        type: {
          summary: 'number | string',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof GridLayout>;

export const Default: Story = {
  args: { cols: 1, default: 'default' },
};

export const TwoCols: Story = {
  args: {
    cols: 2,
    default: (
      <>
        <div>1fr</div>
        <div>1fr</div>
      </>
    ),
  },
};

export const CustomCols: Story = {
  args: {
    cols: '1fr 2fr',
    default: (
      <>
        <div>1fr</div>
        <div>2fr</div>
      </>
    ),
  },
};
