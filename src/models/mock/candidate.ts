import { Candidate } from '../Candidate';
import { UserCandidate } from '../User';

export const userCandidate: UserCandidate = {
  id: 2,
  fio: 'Булгатов Александр',
  about: 'Информация обо мне',
  email: 'alexand.bulgatov13@gmail.com',
  phone: '+7 964 3500 255',
  numz: '19430087',
  course: 3,
  training_group: 'ИСТб-19-1',
  canSendParticipations: true,
  is_student: true,
  is_teacher: false,
  is_institute_director: false,
  is_head_project_education_center: false,
};

export const activeProjectId = 1;
export const archiveProjectIdList = [8];

export const candidateList: Candidate[] = [
  {
    id: 3,
    fio: 'Никульшеев Александр',
    about: 'Информация обо мне',
    email: 'alexand.bulgatov13@gmail.com',
    phone: '+7 964 3500 255',
    numz: '19430087',
    course: 3,
    training_group: 'ИСТб-19-2',
  },
  {
    id: 4,
    fio: 'Вечеслав Колосов',
    about: 'Информация обо мне',
    email: 'alexand.bulgatov13@gmail.com',
    phone: '+7 964 3500 255',
    numz: '19430087',
    course: 3,
    training_group: 'ИСТб-19-2',
  },
  {
    id: 5,
    fio: 'Иван Иванович',
    about: 'Информация обо мне',
    email: 'alexand.bulgatov13@gmail.com',
    phone: '+7 964 3500 255',
    numz: '19430087',
    course: 3,
    training_group: 'ИСТб-19-2',
  },
  {
    id: 6,
    fio: 'Пётр петров',
    about: 'Информация обо мне',
    email: 'alexand.bulgatov13@gmail.com',
    phone: '+7 964 3500 255',
    numz: '19430087',
    course: 3,
    training_group: 'ИСТб-19-2',
  },
  {
    id: 7,
    fio: 'Александр Алексеевич',
    about: 'Информация обо мне',
    email: 'alexand.bulgatov13@gmail.com',
    phone: '+7 964 3500 255',
    numz: '19430087',
    course: 3,
    training_group: 'ИСТб-19-1',
  },
];
