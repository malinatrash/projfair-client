import { Meta, StoryObj } from '@storybook/vue3';
import AppListItem from '../AppListItem.vue';

const meta: Meta<typeof AppListItem> = {
  title: 'ui/AppList/AppListItem',
  component: AppListItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          AppListItem - компонент для отображения одного элемента списка.
    Элемент состоит из заголовка и содержимого, которые могут быть изменены в зависимости от переданных аргументов.
          
      Руководство использования:

        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          title: Передайте строку в качестве значения, чтобы отобразить заголовок элемента.
          default: Передайте строку в качестве значения, чтобы отобразить контент элемента.

        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          bold: Передайте значение TRUE, чтобы сделать элемент списка жирным.
          wide: Передайте значение FALSE, чтобы увеличить место для контентной части элемента.
          `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppListItem>;

export const Default: Story = {
  args: { title: 'Заголовок', default: 'контент' },
};
