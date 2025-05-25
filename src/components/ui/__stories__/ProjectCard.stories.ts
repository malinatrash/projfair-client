import { Meta, StoryObj } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { template } from 'lodash';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { QueryClient, VueQueryPlugin } from 'vue-query';
import { createRouter, createWebHistory } from 'vue-router';
import { Project, ProjectTypeName } from '@/models/Project';
import { ProjectDifficulty } from '@/models/ProjectDifficulty';
import {
  Specialty,
  SpecialtyCourse,
  SpecialtyPriority,
} from '@/models/Specialty';
import ProjectCard from '../../project/ProjectCard.vue';

const app = createApp({});
app.use(createPinia());

const queryClient = new QueryClient();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/project/:id',
      name: 'ProjectCard',
      component: { template: '<div>ProjectCard</div>' },
      // component: ProjectCard,
    },
  ],
});

setup((app) => {
  app.use(router);
  app.use(VueQueryPlugin, { queryClient });
});

const sampleInstitute = {
  id: 1,
  name: 'Институт информационных технологий',
  maxApprovedProjects: 10,
  maxSpringApprovedProjects: 5,
  maxAutumnApprovedProjects: 5,
};

const sampleDepartment = {
  id: 1,
  name: 'Кафедра программной инженерии',
  institute: sampleInstitute,
};

const sampleSpecialty: Specialty = {
  id: 1,
  name: 'Программная инженерия',
  institute: sampleInstitute,
  department: sampleDepartment,
};

const sampleProject: Project = {
  id: 1,
  prevProjectId: 1,
  title: 'Проект по разработке',
  places: 5,
  goal: 'Создать веб-приложение',
  description: 'Проект по созданию веб-приложения для управления задачами.',
  difficulty: ProjectDifficulty.Low,
  date_start: '2024-01-01',
  date_end: '2024-12-31',
  requirements: 'Знание JavaScript и Vue.js.',
  product_result: 'Готовое веб-приложение.',
  study_result: 'Опыт разработки командного проекта.',
  supervisorsNames: 'Иван Иванов',
  supervisors: [
    {
      id: 1,
      roles: [{ id: 1, name: 'Руководитель' }],
      supervisor: {
        fio: 'Иван Иванов',
        position: '',
        id: 0,
        email: '',
        about: '',
        department: sampleDepartment,
      },
    },
  ],
  state: { id: 1, state: '' },
  type: { id: ProjectTypeName.Applied, type: 'Прикладной' },
  skills: [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Vue.js' },
  ],
  specialities: [sampleSpecialty],
  project_specialities: [
    {
      id: 1,
      course: SpecialtyCourse.Third,
      priority: SpecialtyPriority.High,
      speciality: sampleSpecialty,
    },
  ],
};

const meta: Meta<typeof ProjectCard> = {
  title: 'ui/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ProjectCard - компонент, предназначенный для отображения информации о проекте',
      },
    },
  },
  argTypes: {
    project: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    project: sampleProject,
  },
};
