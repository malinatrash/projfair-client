import { SBType } from '@storybook/csf';
import { Meta, StoryObj } from '@storybook/vue3';
import Breadcrumbs from '@/components/ui/BaseBreadcrumbs.vue';
import BaseBreadcrumbs from '@/components/ui/BaseBreadcrumbs.vue';
import { Breadcrumb } from '@/models/components/BaseBreadcrumbs';

const breadcrumbsPropExampleValue: Breadcrumb[] = [
  {
    title: 'Первый уровень',
  },
  {
    title: '...',
  },
];

const breadcrumbSBType: SBType = {
  name: 'object',
  value: {
    to: { name: 'other', value: 'RouteLocationRaw', required: false },
    back: {
      name: 'boolean',
      required: false,
    },
    title: { name: 'string', required: true },
  },
};

const meta: Meta<typeof BaseBreadcrumbs> = {
  title: 'ui/BaseBreadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
          BaseBreadcrumbs - это компонент навигации на сайте, который позволяет пользователю отслеживать свое местоположение в иерархической структуре сайта.
        Элемент состоит из "хлебных крошек", которые включают в себя заголовок.

        Руководство использования:
        PROPS: аргументы, которые используются для изменения поведения или внешнего вида компонента.
        breadcrumbs: Является элеиентом навигации на сайте, у которого можно менять поведение следующих аргументов:
            title: Передайте строку в качестве значения, чтобы отобразить заголовок элемента.
          `,
      },
    },
  },
  argTypes: {
    breadcrumbs: {
      type: {
        name: 'array',
        value: breadcrumbSBType,
        required: true,
      },
      table: {
        type: {
          detail: `
to?: RouteLocationRaw;
back?: boolean;
title: string;
          `,
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BaseBreadcrumbs>;

export const Default: Story = {
  args: { breadcrumbs: breadcrumbsPropExampleValue },
};
