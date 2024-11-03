import { Meta, StoryObj } from '@storybook/vue3';
import ClosableAccordion from '../accordion/ClosableAccordion.vue';

const meta: Meta<typeof ClosableAccordion> = {
  title: 'ui/accordion/ClosableAccordion',
  component: ClosableAccordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Основное отличие от <a href="?path=/docs/ui-accordion-simpleaccordion--docs"><code>SimpleAccordion</code></a> состоит в том, что выпадающее меню закрывается если событие клика сработало за пределами компонента
          
            ClosableAccordion - это компонент, который представляет собой выпадающий аккордеон с возможностью закрытия при клике за пределами компонента.
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
type Story = StoryObj<typeof ClosableAccordion>;

export const Default: Story = {
  args: { title: 'Заголовок компонента', content: 'Контент компонента' },
};

export const Example: Story = {
  render: (args) => ({
    setup: () => {
      return () => (
        <>
          <ClosableAccordion>
            {{ title: 'Вопрос первый', content: 'content' }}
          </ClosableAccordion>
          <ClosableAccordion>
            {{ title: 'Вопрос второй', content: 'content' }}
          </ClosableAccordion>
          <ClosableAccordion>
            {{ title: 'Вопрос третий', content: 'content' }}
          </ClosableAccordion>
        </>
      );
    },
  }),
};
