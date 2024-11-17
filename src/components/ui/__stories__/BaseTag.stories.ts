import { Meta, StoryObj } from '@storybook/vue3';
import BaseTag, { TagVariant } from '@/components/ui/BaseTag.vue';

const variantPropVariants: TagVariant[] = ['outlined', 'primary'];

const meta: Meta<typeof BaseTag> = {
  title: 'ui/BaseTag',
  component: BaseTag,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseTag - компонент, предназначенный для отображения тега с настраиваемым стилем, доступностью и возможностью удаления.
        Элемент состоит из варианта отображения тега, свойства доступности тега, свойства удаляемости тега.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          default: Передайте строку в качестве значения, чтобы отобразить контент элемента.
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          variant: Выберите значение "outline" или "primary" для выбора необходимого варианта отображения тега.
          disabled: Передайте значение FALSE, чтобы тег был доступен.
          deletable: Передайте значение TRUE, чтобы тег имел возможность удаления.
          `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variantPropVariants,
    },
  },
  args: { default: 'Tag' },
};

export default meta;
type Story = StoryObj<typeof BaseTag>;

export const Default: Story = {};
export const Disabled: Story = { args: { disabled: true } };
export const Deletable: Story = { args: { deletable: true } };
