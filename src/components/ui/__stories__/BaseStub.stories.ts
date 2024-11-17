import { Meta, StoryObj } from '@storybook/vue3';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseStub from '@/components/ui/BaseStub.vue';

const meta: Meta<typeof BaseStub> = {
  title: 'ui/BaseStub',
  component: BaseStub,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseStub - компонент, предназначенный для отображения информации, когда основное содержимое недоступно или еще не загружено.
        Элемент состоит из заголовка, подзаголовка и кнопки действия.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          title: Передайте строку в качестве значения, чтобы отобразить заголовок элемента.
          subtitle: Передайте строку в качестве значения, чтобы отобразить подзаголовок элемента.
          button: Передайте строку в качестве значения для отображения кнопки действия внутри компонента.


          `,
      },
    },
  },
  argTypes: {
    title: {
      type: 'string',
    },
    subtitle: {
      type: 'string',
    },
    button: {
      type: 'string',
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseStub>;

export const Default: Story = {
  args: { title: 'Заголовок', subtitle: 'Подзаголовок' },
  render: (args) => ({
    components: { BaseStub, BaseButton },
    setup: () => {
      return { args };
    },
    template: `
    <BaseStub v-bind="args">
      <template #button>
        <BaseButton>Кнопка</BaseButton>
      </template>
    </BaseStub>`,
  }),
};
