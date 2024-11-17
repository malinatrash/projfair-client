import { Meta, StoryObj } from '@storybook/vue3';
import ProjectFilterAccordion from '../accordion/ProjectFilterAccordion.vue';

const meta: Meta<typeof ProjectFilterAccordion> = {
  title: 'ui/accordion/ProjectFilterAccordion',
  component: ProjectFilterAccordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
        Стилизованный выпадающий список.
      ProjectFilterAccordion - это компонент, представляющий собой стилизованный выпадающий список с заголовком и контентом.
        Элемент состоит из заголовка, контентной части, свойства открытости компонента.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          title: Передайте строку в качестве значения, чтобы отобразить заголовок элемента.
          content: Передайте строку в качестве значения, чтобы отобразить контентную часть элемента.
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          opened: Передайте значение TRUE, чтобы открыть контент компонента.

        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectFilterAccordion>;

export const Default: Story = {
  args: { title: 'Заголовок компонента', content: 'Контент компонента' },
};

export const Example: Story = {
  render: (args) => ({
    setup: () => {
      return () => (
        <>
          <ProjectFilterAccordion>
            {{ title: 'Вопрос первый', content: 'content' }}
          </ProjectFilterAccordion>
          <ProjectFilterAccordion>
            {{ title: 'Вопрос второй', content: 'content' }}
          </ProjectFilterAccordion>
          <ProjectFilterAccordion>
            {{ title: 'Вопрос третий', content: 'content' }}
          </ProjectFilterAccordion>
        </>
      );
    },
  }),
};
