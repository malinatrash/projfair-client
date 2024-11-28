import { Meta, StoryObj } from '@storybook/vue3';
import QuestionAccordion from '../accordion/QuestionAccordion.vue';

const meta: Meta<typeof QuestionAccordion> = {
  title: 'ui/accordion/QuestionAccordion',
  component: QuestionAccordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        Стилизованный выпадающий список.
      QuestionAccordion - это компонент, представляющий собой стилизованный выпадающий список с заголовком и контентом.
        Элемент состоит из заголовка и контентной части.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          title: Передайте строку в качестве значения, чтобы отобразить заголовок элемента.
          content: Передайте строку в качестве значения, чтобы отобразить контентную часть элемента.

        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof QuestionAccordion>;

export const Default: Story = {
  args: { title: 'Заголовок компонента', content: 'Контент компонента' },
};

export const Example: Story = {
  render: (args) => ({
    setup: () => {
      return () => (
        <>
          <QuestionAccordion>
            {{ title: 'Вопрос первый', content: 'content' }}
          </QuestionAccordion>
          <QuestionAccordion>
            {{ title: 'Вопрос второй', content: 'content' }}
          </QuestionAccordion>
          <QuestionAccordion>
            {{ title: 'Вопрос третий', content: 'content' }}
          </QuestionAccordion>
        </>
      );
    },
  }),
};
