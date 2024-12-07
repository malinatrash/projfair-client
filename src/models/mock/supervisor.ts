import { Supervisor } from '../Supervisor';
import { UserSupervisor } from '../User';
import { departments } from './department';

export const supervisorList: Supervisor[] = [
  {
    id: 3,
    fio: 'Серышева Ирина Анатольевна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: departments[0],
  },
  {
    id: 4,
    fio: 'Антипин Дмитрий Алексеевич',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: departments[1],
  },
  {
    id: 5,
    fio: 'Антипина Оксана Викторовна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: departments[2],
  },
  {
    id: 6,
    fio: 'Бацюн Наталья Владимировна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: departments[3],
  },
  {
    id: 7,
    fio: 'Богатырева Марина Валерьевна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: departments[0],
  },
  {
    id: 8,
    fio: 'Вовсеенко Елена Александровна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: departments[0],
  },
  {
    id: 9,
    fio: 'Вязников Вадим Евгеньевич',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: departments[0],
  },
  {
    id: 10,
    fio: 'Гафарова Елена Владиславовна',
    email: 'some-email@gmail.com',
    position: 'руководитель проекта',
    about: '',
    department: departments[0],
  },
];

export const userSupervisor: UserSupervisor = {
  ...supervisorList[1],
  is_student: false,
  is_teacher: true,
  is_institute_director: true,
  is_head_project_education_center: false,
  canSendParticipations: false,
};
