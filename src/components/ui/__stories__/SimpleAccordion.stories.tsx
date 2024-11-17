import { Meta, StoryObj } from '@storybook/vue3';
import SimpleAccordion from '../accordion/SimpleAccordion.vue';

const meta: Meta<typeof SimpleAccordion> = {
  title: 'ui/accordion/SimpleAccordion',
  component: SimpleAccordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          Нет контроля над состоянием выпадающего списка, вместо этого сам открывает / закрывает выпадающий список при нажатии на него.
      SimpleAccordion - компонент, представляющий собой аккордеон, который позволяет пользователю открывать и закрывать отдельные секции контента.
        Элемент состоит из заголовка компонента, контентной части, свойства доступности анимации, свойства открывания при монтировании компонента.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          title: Передайте строку в качестве значения, чтобы отобразить заголовок элемента.
          content: Передайте строку в качестве значения, чтобы отобразить контентную часть элемента.
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          animated: Передайте значение TRUE, чтобы включить анимацию компонента.
          defaultOpened: Передайте значение TRUE, чтобы открывать при монтировании компонента.
          `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SimpleAccordion>;

export const Default: Story = {
  args: { title: 'Заголовок компонента', content: 'Контент компонента' },
};

export const Example: Story = {
  render: (args) => ({
    setup: () => {
      return () => (
        <>
          <SimpleAccordion>
            {{ title: 'Вопрос первый', content: 'content' }}
          </SimpleAccordion>
          <SimpleAccordion>
            {{ title: 'Вопрос второй', content: 'content' }}
          </SimpleAccordion>
          <SimpleAccordion>
            {{ title: 'Вопрос третий', content: 'content' }}
          </SimpleAccordion>
        </>
      );
    },
  }),
};
