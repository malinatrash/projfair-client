import { RouteRecordRaw } from 'vue-router';
// P.S. тут раньше были динамические импорты, т.е. "() => import('@/pages/ProjectPage/index.vue')", но они плохо работали на продакшене "projfair.istu.edu", так что было решено оставить обычные импорты для всего приложения
// Contact page
import ContactPage from '@/pages/ContactPage.vue';
// Create project page
import CreateProjectPage from '@/pages/CreateProjectPage.vue';
// FAQ page
import FaqPage from '@/pages/FaqPage.vue';
// Home page
import HomePage from '@/pages/HomePage.vue';
// 404 page
import NotFoundPage from '@/pages/NotFoundPage.vue';
// Project page
import ProjectDetails from '@/pages/ProjectPage/ProjectDetails.vue';
import ProjectParticipantsList from '@/pages/ProjectPage/ProjectParticipantsList.vue';
import ProjectParticipationList from '@/pages/ProjectPage/ProjectParticipationList.vue';
import ProjectPage from '@/pages/ProjectPage/index.vue';
import ResultProjectPage from '@/pages/ResultProjectPage.vue';
// User page
import InstituteDirectorProjectProposals from '@/pages/UserPage/InstituteDirectorProjectProposals.vue';
import UserParticipations from '@/pages/UserPage/UserParticipations.vue';
import UserProfile from '@/pages/UserPage/UserProfile.vue';
import UserProjectProposals from '@/pages/UserPage/UserProjectProposals.vue';
import UserProjects from '@/pages/UserPage/UserProjects.vue';
import UserPage from '@/pages/UserPage/index.vue';
import { RouteNames } from './types/route-names';
import {
  FilterInstituteProjectProposalsBy,
  toInstituteProjectProposals,
} from './utils/routes';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
    name: RouteNames.HOME,
    meta: {
      type: ['main-nav', 'mobile-nav'],
      order: 0,
      title: 'Все проекты',
      svg: `
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3.50012H8C9.06087 3.50012 10.0783 3.92155 10.8284 4.67169C11.5786 5.42184 12 6.43926 12 7.50012V21.5001C12 20.7045 11.6839 19.9414 11.1213 19.3788C10.5587 18.8162 9.79565 18.5001 9 18.5001H2V3.50012Z" stroke="#3D68ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 3.50012H16C14.9391 3.50012 13.9217 3.92155 13.1716 4.67169C12.4214 5.42184 12 6.43926 12 7.50012V21.5001C12 20.7045 12.3161 19.9414 12.8787 19.3788C13.4413 18.8162 14.2044 18.5001 15 18.5001H22V3.50012Z" stroke="#3D68ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `,
    },
  },
  {
    path: '/project/:id',
    component: ProjectPage,
    name: RouteNames.PROJECT,
    children: [
      {
        path: '',
        name: RouteNames.PROJECT_DETAILS,
        component: ProjectDetails,
        meta: {
          title: 'О проекте',
        },
      },
      {
        path: 'participations',
        name: RouteNames.PROJECT_PARTICIPATIONS,
        component: ProjectParticipationList,
        meta: {
          title: 'Список заявок',
        },
      },
      {
        path: 'participants',
        name: RouteNames.PROJECT_PARTICIPANTS,
        component: ProjectParticipantsList,
        meta: {
          title: 'Список участников',
        },
      },
    ],
  },
  {
    path: '/project/create/:id?',
    name: RouteNames.SUPERVISOR_PROJECT_PROPOSAL_CREATE,
    component: CreateProjectPage,
    meta: {
      title: 'Создать проектную заявку',
      requiresAuth: true,
      role: ['is_teacher'],
    },
  },
  {
    path: '/project/result/:id?',
    name: RouteNames.SUPERVISOR_PROJECT_PROPOSAL_RESULT,
    component: ResultProjectPage,
    meta: {
      title: 'Сформировать результат проекта',
      requiresAuth: true,
      role: ['is_teacher'],
    },
  },
  {
    path: '/profile',
    name: RouteNames.PROFILE,
    component: UserPage,
    meta: {
      title: 'Профиль пользователя',
      requiresAuth: true,
    },
    children: [
      {
        path: 'info',
        name: RouteNames.USER_INFO,
        component: UserProfile,
        meta: {
          type: ['user-nav', 'mobile-nav'],
          order: 0,
          title: 'Мой профиль',
          svg: `
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.0005 21.5001V19.5001C20.0005 18.4393 19.5791 17.4218 18.8289 16.6717C18.0788 15.9216 17.0614 15.5001 16.0005 15.5001H8.00049C6.93962 15.5001 5.92221 15.9216 5.17206 16.6717C4.42192 17.4218 4.00049 18.4393 4.00049 19.5001V21.5001" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.0005 11.5001C14.2096 11.5001 16.0005 9.70926 16.0005 7.50012C16.0005 5.29098 14.2096 3.50012 12.0005 3.50012C9.79135 3.50012 8.00049 5.29098 8.00049 7.50012C8.00049 9.70926 9.79135 11.5001 12.0005 11.5001Z" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          `,
        },
      },
      {
        path: 'participations',
        name: RouteNames.CANDIDATE_PARTICIPATIONS,
        component: UserParticipations,
        meta: {
          type: ['user-nav'],
          order: 1,
          title: 'Мои заявки',
          role: ['is_student'],
        },
      },
      {
        path: 'project-proposals/:page?',
        name: RouteNames.SUPERVISOR_PROJECT_PROPOSALS,
        component: UserProjectProposals,
        meta: {
          type: ['user-nav'],
          order: 2,
          title: 'Мои заявки',
          role: ['is_teacher'],
        },
      },
      {
        path: 'inst-project-proposals/:filterBy?/:page?',
        name: RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS,
        component: InstituteDirectorProjectProposals,
        meta: {
          type: ['user-nav'],
          order: 3,
          title: 'Заявки от института',
          role: ['is_institute_director'],
          links: [
            {
              name: RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_NEW,
              title: 'Новые заявки',
              location: toInstituteProjectProposals(
                FilterInstituteProjectProposalsBy.New,
                1,
              ),
            },
            {
              name: RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_APPROVED,
              title: 'Одобренные заявки',
              location: toInstituteProjectProposals(
                FilterInstituteProjectProposalsBy.Approved,
                1,
              ),
            },
            {
              name: RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_REJECTED,
              title: 'Отклонённые заявки',
              location: toInstituteProjectProposals(
                FilterInstituteProjectProposalsBy.Rejected,
                1,
              ),
            },
          ],
        },
      },
      {
        path: 'projects',
        name: RouteNames.USER_PROJECTS,
        component: UserProjects,
        meta: {
          type: ['user-nav'],
          order: 4,
          title: 'Мои проекты',
        },
      },
    ],
  },
  {
    path: '/faq',
    component: FaqPage,
    name: RouteNames.FAQ,
    meta: {
      type: ['main-nav', 'mobile-nav'],
      order: 1,
      title: 'вопрос-ответ',
      svg: `
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.3335 15.5001C21.3335 16.0306 21.1228 16.5393 20.7477 16.9143C20.3726 17.2894 19.8639 17.5001 19.3335 17.5001H7.3335L3.3335 21.5001V5.50012C3.3335 4.96969 3.54421 4.46098 3.91928 4.08591C4.29436 3.71084 4.80306 3.50012 5.3335 3.50012H19.3335C19.8639 3.50012 20.3726 3.71084 20.7477 4.08591C21.1228 4.46098 21.3335 4.96969 21.3335 5.50012V15.5001Z" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
    },
  },
  {
    path: '/contacts',
    component: ContactPage,
    name: RouteNames.CONTACTS,
    meta: {
      type: ['main-nav', 'mobile-nav'],
      order: 2,
      title: 'контакты',
      svg: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1235_4978)">
        <path d="M21 10.0001C21 17.0001 12 23.0001 12 23.0001C12 23.0001 3 17.0001 3 10.0001C3 7.61317 3.94821 5.32399 5.63604 3.63616C7.32387 1.94833 9.61305 1.00012 12 1.00012C14.3869 1.00012 16.6761 1.94833 18.364 3.63616C20.0518 5.32399 21 7.61317 21 10.0001Z" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 13.0001C13.6569 13.0001 15 11.657 15 10.0001C15 8.34327 13.6569 7.00012 12 7.00012C10.3431 7.00012 9 8.34327 9 10.0001C9 11.657 10.3431 13.0001 12 13.0001Z" stroke="#A4A4A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1235_4978">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      `,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    name: RouteNames.NOT_FOUND,
  },
];
