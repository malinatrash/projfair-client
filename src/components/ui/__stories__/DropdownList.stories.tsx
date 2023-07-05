import { Meta, StoryObj } from '@storybook/vue3';
import { noop } from 'lodash';
import { ref, watchEffect } from 'vue';
import BaseButton from '../BaseButton.vue';
import DropdownList from '../DropdownList.vue';

const meta: Meta<typeof DropdownList> = {
  title: 'ui/Dropdown/DropdownList',
  component: DropdownList,
  tags: ['autodocs'],
  argTypes: {
    itemList: {
      table: {
        type: {
          detail: `type DropdownItem =
    | {
        content: string;
        type: 'link';
        href?: string;
        location?: RouteLocationRaw;
        }
    | { content: string; type: 'button'; action: () => void }`,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownList>;

export const Default: Story = {
  args: {
    isOpen: true,
    itemList: [
      { content: '0', type: 'button', action: noop },
      { content: '1', type: 'button', action: noop },
      { content: '2', type: 'button', action: noop },
      { content: '3', type: 'button', action: noop },
      { content: '4', type: 'button', action: noop },
      { content: '5', type: 'button', action: noop },
    ],
    position: { left: '0' },
  },
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
            <DropdownList
              isOpen={isOpen.value}
              onUpdate:isOpen={(value) => (isOpen.value = value)}
              itemList={args.itemList}
              handleNode={containerRef.value}
              position={args.position}
            />
          </div>
        </section>
      );
    },
  }),
};
