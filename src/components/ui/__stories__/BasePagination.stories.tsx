import { Meta, StoryObj } from '@storybook/vue3';
import { toRefs } from 'vue';
import BasePagination from '../BasePagination.vue';

const meta: Meta<typeof BasePagination> = {
  title: 'ui/BasePagination',
  component: BasePagination,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BasePagination - компонент для создания навигации по страницам (пагинации), который упрощает работу с большим количеством элементов, распределяя их по страницам..
        Элемент состоит из текущей страницы, общего количества элементов для расчета страниц пагинации, количества элементов на странице, максимальное количество видимых ссылок пагинации.

        Руководство использования:
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          page: Передайте числовое значение, чтобы указать текущую страницу.
          totalItems: Передайте числовое значение, чтобы указать общее количество элементов для расчёта страниц пагинации.
          pageSize: Передайте числовое значение, чтобы указать количество элементов на странице.
          pagesVisible: Передайте числовое значение, чтобы указать максимальное количество видимых ссылок пагинации.

          `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BasePagination>;

export const Default: Story = {
  args: {
    page: 1,
    totalItems: 100,
    pageSize: 5,
    pagesVisible: 5,
  },

  render: (args) => ({
    setup: () => {
      const { page, totalItems, pageSize, pagesVisible } = toRefs(args);
      return () => (
        <BasePagination
          onUpdate:page={(newPage) => (page.value = newPage)}
          page={page.value}
          totalItems={totalItems.value}
          pageSize={pageSize.value}
          pagesVisible={pagesVisible.value}
        />
      );
    },
  }),
};
