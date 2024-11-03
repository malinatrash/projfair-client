import { Meta, StoryObj } from '@storybook/vue3';
import ScrollablePanel from '../ScrollablePanel.vue';

const loremIpsum =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore illo eaque dolores dolor omnis dolorum necessitatibus reiciendis nostrum dolorem quibusdam! dolor omnis dolorum necessitatibus reiciendis nostrum dolorem quibusdam!';

const meta: Meta<typeof ScrollablePanel> = {
  title: 'ui/ScrollablePanel',
  component: ScrollablePanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          ScrollablePanel - компонент, который предоставляет возможность прокрутки контента, если он превышает заданную высоту.
        Элемент состоит из шапки компонента, контентной части, свойство доступности скролла элемента, высоты панели.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          header: Передайте строку в качестве значения, чтобы отобразить статичную шапку элемента.
          default: Передайте строку в качестве значения, чтобы отобразить контентную часть элемента.

        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          disableScroll: Передайте значение FALSE, чтобы скролл компонента был доступен.
          height: Передайте строку в качестве значения, чтобы изменить высоту панели элемента. Необходимо в конце добавить 'rem'.

          `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollablePanel>;

export const Default: Story = {
  args: { header: 'header', default: loremIpsum },
  render: (args) => ({
    setup: () => () =>
      (
        <ScrollablePanel
          style={{ fontSize: '50px', lineHeight: 'normal' }}
          disableScroll={args.disableScroll}
          height={args.height}
        >
          {{ header: args.header, default: args.default }}
        </ScrollablePanel>
      ),
  }),
};
