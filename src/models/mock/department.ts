import { Department } from '../Department';
import { Institute } from '../Institute';

export const institutes: Institute[] = [
  {
    id: 1,
    name: 'Байкальский институт БРИКС',
    maxApprovedProjects: 10,
    maxSpringApprovedProjects: 100,
    maxAutumnApprovedProjects: 100,
  },
  {
    id: 2,
    name: 'Институт авиамашиностроения и транспорта',
    maxApprovedProjects: 10,
    maxSpringApprovedProjects: 100,
    maxAutumnApprovedProjects: 100,
  },
  {
    id: 3,
    name: 'Институт архитектуры, строительства и дизайна',
    maxApprovedProjects: 10,
    maxSpringApprovedProjects: 100,
    maxAutumnApprovedProjects: 100,
  },
  {
    id: 4,
    name: 'Институт высоких технологий',
    maxApprovedProjects: 10,
    maxSpringApprovedProjects: 100,
    maxAutumnApprovedProjects: 100,
  },
  {
    id: 5,
    name: 'Институт заочно-вечернего обучения',
    maxApprovedProjects: 10,
    maxSpringApprovedProjects: 100,
    maxAutumnApprovedProjects: 100,
  },
  {
    id: 6,
    name: 'Институт информационных технологий и анализа данных',
    maxApprovedProjects: 10,
    maxSpringApprovedProjects: 100,
    maxAutumnApprovedProjects: 100,
  },
  {
    id: 7,
    name: 'Институт лингвистики и межкультурной коммуникации',
    maxApprovedProjects: 10,
    maxSpringApprovedProjects: 100,
    maxAutumnApprovedProjects: 100,
  },
  {
    id: 8,
    name: 'Институт недропользования',
    maxApprovedProjects: 10,
    maxSpringApprovedProjects: 100,
    maxAutumnApprovedProjects: 100,
  },
  {
    id: 9,
    name: 'Институт экономики, управления и права',
    maxApprovedProjects: 10,
    maxSpringApprovedProjects: 100,
    maxAutumnApprovedProjects: 100,
  },
  {
    id: 10,
    name: 'Институт энергетики',
    maxApprovedProjects: 10,
    maxSpringApprovedProjects: 100,
    maxAutumnApprovedProjects: 100,
  },
];

export const departments: Department[] = [
  {
    id: 1,
    institute: institutes[0],
    name: 'ИРНИТУ',
  },
  {
    id: 2,
    institute: institutes[1],
    name: 'Кафедра высоких технологий',
  },
  {
    id: 3,
    institute: institutes[2],
    name: 'Кафедра энергетики',
  },
];
