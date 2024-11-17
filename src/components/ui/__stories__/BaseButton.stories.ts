import { Meta, StoryObj } from '@storybook/vue3';
import BaseButton, {
  Case,
  Color,
  Is,
  Variant,
} from '@/components/ui/BaseButton.vue';

const variantPropVariants: Variant[] = [
  'inline-link',
  'link',
  'outlined',
  'primary',
  'tag',
  'tag-outlined',
];
const casePropVariants: Case[] = ['lowercase', 'none', 'uppercase'];
const colorPropVariants: (Color | undefined)[] = ['red', 'white', undefined];
const isPropVariants: Is[] = ['a', 'button', 'router-link'];

const meta: Meta<typeof BaseButton> = {
  title: 'ui/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseButton - это компонент реализующий стандартную кнопку.
        Элемент состоит из контента кнопки, тип, тег html, свойство неактивности, ширина, регистр текста, цвет.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          default: Передайте строку в качестве значения, чтобы отобразить контент элемента.

        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          variant: Выберите необходимый тип кнопки
          is: Если необходимо сделать кнопку ссылкой, то выберите значение <a>, если необходим компонент для навигации пользователя в приложении, то <router-link>
          disabled: Передайте значение TRUE, чтобы сделать элемент неактивным
          fullWidth: Передайте значение TRUE, чтобы сделать ширину элемента 100% 
          case: Выберите необходимый тип регистра текста
          color: Выберите необходимый цвет кнопки
          `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variantPropVariants,
    },
    case: {
      control: 'select',
      options: casePropVariants,
    },
    color: {
      control: 'select',
      options: colorPropVariants,
    },
    is: {
      control: 'select',
      options: isPropVariants,
    },
    default: {
      type: 'string',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BaseButton>;

export const Default: Story = { args: { default: 'Кнопка' } };

export const Primary: Story = {
  ...Default,
  args: { ...Default.args, variant: 'primary' },
};

export const InlineLink: Story = {
  ...Default,
  args: { ...Default.args, variant: 'inline-link' },
};

export const Link: Story = {
  ...Default,
  args: { ...Default.args, variant: 'link' },
};

export const Outlined: Story = {
  ...Default,
  args: { ...Default.args, variant: 'outlined' },
};

export const Tag: Story = {
  ...Default,
  args: { ...Default.args, variant: 'tag' },
};

export const TagOutlined: Story = {
  ...Default,
  args: { ...Default.args, variant: 'tag-outlined' },
};

export const Disabled: Story = {
  ...Default,
  args: { ...Default.args, disabled: true },
};
