import { Meta, StoryObj } from '@storybook/vue3';
import AppList, { RowGap } from '../AppList.vue';

const rowGapPropVariants: RowGap[] = ['l', 'm'];

const meta: Meta<typeof AppList> = {
  title: 'ui/AppList/AppList',
  component: AppList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          AppList - компонент, который отображает список элементов в виде упорядоченного списка. 

    Элемент состоит из расстояния между строками и элементов списка, которые в свою очередь состоят из заголовка и контента.
      Руководство использования:

        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

        items: Является элементом списка, у которого можно менять поведение следующих аргументов:
            title: Передайте строку в качестве значения, чтобы отобразить заголовок элемента.
            content: Передайте строку в качестве значения, чтобы отобразить контент элемента.
        rowGap: Чтобы увеличить расстояние между элементами списка выберите значение "l", чтобы уменьшить - "m"
          `,
      },
    },
  },
  argTypes: {
    items: {
      table: {
        type: {
          summary: 'AppListItemType[]',
          detail: `
title: string;
content?: string;
wide?: boolean;
bold?: boolean;
          `,
        },
      },
    },
    rowGap: {
      options: rowGapPropVariants,
      table: {
        type: { detail: 'l - large\nm - medium' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppList>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Заголовок один', content: 'обычный элемент списка' },
      {
        title: 'bold: false',
        content: 'bold: делает элемент списка жирным',
        bold: false,
      },
      {
        title: 'wide: true',
        content:
          'wide: true позволяет увеличить контентную часть элемента списка',
        wide: true,
      },
      {
        title:
          'Много символов, Много символов, Много символов, Много символов, Много символов, Много символов, Много символов, Много символов, ',
        content: 'content',
      },
      {
        title: 'title',
        content:
          'Много символов, Много символов, Много символов, Много символов, Много символов, Много символов, Много символов, Много символов, ',
      },
    ],
  },
};

export const UsingDefaultSlot: Story = {
  args: {
    rowGap: 'm',
    default: (
      <>
        <li>
          <p>p</p>
        </li>
        <li>
          <code>code</code>
        </li>
        <li>...</li>
      </>
    ),
  },
  render: (args) => ({
    setup: () => {
      return () => (
        <AppList items={args.items} rowGap={args.rowGap}>
          {args.default}
        </AppList>
      );
    },
  }),
};
