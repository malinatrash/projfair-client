import { Meta, StoryObj } from '@storybook/vue3';
import BaseEmptyCard, {
  EmptyCardSize,
} from '@/components/ui/BaseEmptyCard.vue';

const sizePropVariants: EmptyCardSize[] = ['s', 'm'];

const meta: Meta<typeof BaseEmptyCard> = {
  title: 'ui/BaseEmptyCard',
  component: BaseEmptyCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseEmptyCard — это компонент, отображающий пустую карточку при отсутствии данных у пользователя.
        Элемент состоит из размера компонента.

        Руководство использования:

        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          size: Выберите значение "s", чтобы уменьшить размер, "m" - увеличить.

          `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: sizePropVariants,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseEmptyCard>;

export const Default: Story = {};
export const SizeS: Story = { args: { size: 's' } };
export const SizeM: Story = { args: { size: 'm' } };
