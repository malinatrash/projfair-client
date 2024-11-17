import { Meta, StoryObj } from '@storybook/vue3';
import BaseTooltip, {
  TooltipPositionX,
  TooltipPositionY,
} from '@/components/ui/BaseTooltip.vue';

const posYPropVariants: TooltipPositionY[] = ['bottom', 'top'];
const posXPropVariants: TooltipPositionX[] = ['left', 'right'];

const meta: Meta<typeof BaseTooltip> = {
  title: 'ui/BaseTooltip',
  component: BaseTooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseTolltip - представляет собой компонент, который выводит всплывающую подсказку с дополнительной информацией.
        Элемент состоит из контентной части, текста подсказки, позиция подсказки по Y, позиция подсказки по X.

        Руководство использования:
        SLOTS: специальные области в компоненте, где можно разместить другой контент. Они позволяют "встраивать" контент из родительского компонента.

          default: Передайте строку в качестве значения, чтобы отобразить контент, в правом верхнем углу которого будет появляться подсказка.
          message: Передайте строку в качестве значения, чтобы отобразить текст подсказки.
        
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.

          positionX: Выберите значение "top", "bottom", чтобы выбрать необходимый вариант позиции подсказки по Y относительно основного текста.
          positionY: Выберите значение "left", "right", чтобы выбрать необходимый вариант позиции подсказки по X относительно основного текста.

          `,
      },
    },
  },
  argTypes: {
    positionX: {
      control: 'select',
      options: posXPropVariants,
    },
    positionY: {
      control: 'select',
      options: posYPropVariants,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseTooltip>;

export const Default: Story = {
  args: {
    default: 'Текст для которого нужно дополнительное описание',
    message: 'Описание для текста',
  },
};
