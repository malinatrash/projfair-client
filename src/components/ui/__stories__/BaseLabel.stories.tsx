import { Meta, StoryObj } from '@storybook/vue3';
import BaseLabel, { Is } from '../label/BaseLabel.vue';

const isPropVariants: Is[] = ['div', 'fieldset', 'label'];

const meta: Meta<typeof BaseLabel> = {
  title: 'ui/BaseLabel',
  component: BaseLabel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseLabel - компонент для отображения заголовка формы или поля ввода.
        Элемент состоит из заголовка, свойства отображения *, свойства вкл/выкл заголовка, варианта вида заголовка.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          label: Передайте строку в качестве значения, чтобы отобразить заголовок элемента.
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          required: Передайте значение TRUE, чтобы отобразить *.
          disabled: Передайте значение FALSE, чтобы заголовок компонета был доступен.
          is: Выберите значение "<div>", "<fieldset>", "<label>", чтобы выбрать необходимый вариант типа и стиля обертки заголовка.

          `,
      },
    },
  },
  argTypes: {
    is: {
      options: isPropVariants,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseLabel>;

export const Default: Story = {
  args: { label: 'Заголовок', required: true },

  render: (args) => ({
    setup: () => () =>
      (
        <BaseLabel
          label={args.label}
          disabled={args.disabled}
          is={args.is}
          required={args.required}
        >
          <input type="text" placeholder="инпут" />
        </BaseLabel>
      ),
  }),
};
