import { Meta, StoryObj } from '@storybook/vue3';
import { ref, watchEffect } from 'vue';
import BaseButton from '../BaseButton.vue';
import BaseDropdown from '../BaseDropdown.vue';

const meta: Meta<typeof BaseDropdown> = {
  title: 'ui/Dropdown/BaseDropdown',
  component: BaseDropdown,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseDropdown - это компонент реализующий выпадающее меню.
        Элемент состоит из контента, свойства открытости/закрытости меню, смещения контента.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          default: Передайте строку в качестве значения, чтобы отобразить контент элемента.

        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          isOpen: Передайте значение TRUE, чтобы содержимое компонета было доступным.
          position: Передайте числовое значение для смещения контента элемента влево.

          `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseDropdown>;

export const Default: Story = {
  args: { default: 'dropdown content', isOpen: true, position: { left: '0' } },
  render: (args) => ({
    setup: () => {
      const containerRef = ref<HTMLElement | undefined>(undefined);
      const isOpen = ref(args.isOpen);
      watchEffect(() => {
        containerRef.value = args.handleNode;
        isOpen.value = args.isOpen;
      });
      return () => (
        <section style={{ height: '200px' }}>
          <div
            style={{ display: 'inline-block' }}
            ref={containerRef}
            onClick={() => (isOpen.value = !isOpen.value)}
          >
            <BaseButton>trigger</BaseButton>
            <BaseDropdown
              isOpen={isOpen.value}
              onUpdate:isOpen={(value) => (isOpen.value = value)}
              handleNode={containerRef.value}
              position={args.position}
            >
              {args.default}
            </BaseDropdown>
          </div>
        </section>
      );
    },
  }),
};
