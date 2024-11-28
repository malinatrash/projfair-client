import { Meta, StoryObj } from '@storybook/vue3';
import { TagVariant } from '../BaseTag.vue';
import TagList from '../TagList.vue';

const variantPropVariants: TagVariant[] = ['outlined', 'primary'];

const meta: Meta<typeof TagList> = {
  title: 'ui/TagList',
  component: TagList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
      TagList - компонент, который отображает список тегов.
        Элемент состоит из количества тегов по умолчанию, списка тегов, свойства отображения тегов, свойства доступности тегов, свойство удаляемости тегов, вариантов отображения тегов.

        Руководство использования:
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          defaultVisible: Передайте числовое значение, чтобы указать сколько тегов видно по умолчанию.
          tagList: Передайте строковые значения, которые являются списком тегов.
          showAll: Передайте значение TRUE, чтобы отобразить все теги сразу.
          disableAll: Передайте значение FALSE, чтобы сделать доступными все теги.
          deletable: Передайте значение TRUE, чтобы сделать теги удаляемыми.
          tagVariant: Выберите значение "outline" или "primary" для выбора необходимого варианта отображения тегов.
        
          `,
      },
    },
  },
  argTypes: {
    tagVariant: {
      control: 'select',
      options: variantPropVariants,
    },
    declOfNum: {
      table: {
        type: {
          summary: '[string, string, string]',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  args: {
    defaultVisible: 2,
    tagList: [
      { id: 1, name: 'Название тега' },
      { id: 2, name: 'Другой тег' },
      { id: 3, name: 'Еще один' },
    ],
  },
};
