import { CreatedProjectProposalWithFilter } from '../ProjectProposal';
import { Tag } from '../Tag';

export const themeSources: Tag[] = [
  {
    id: 1,
    name: 'текущие запросы служб ИРНИТУ',
  },
  {
    id: 2,
    name: 'тематики бизнес акселератора ИРНИТУ',
  },
  {
    id: 3,
    name: 'тематики проектно-образовательных интенсивов (в том числе реализуемых в сетевой форме)',
  },
  {
    id: 4,
    name: 'тематики предприятий и сторонних организаций (в том числе реализуемых в рамках НИР, НИОКР и хоз. договорных работ)',
  },
  {
    id: 5,
    name: 'тематики российских и международных конкурсов и соревнований',
  },
  {
    id: 6,
    name: 'тематики грантов (любого уровня, в том числе ИРНИТУ)',
  },
  {
    id: 7,
    name: 'тематики российских и международных акселерационных программ',
  },
];

export const mockProjectProposalList: CreatedProjectProposalWithFilter[] = [
  {
    id: 884,
    prevProjectId: null,
    title: 'Проект переоборудования чердачного помещения корпуса Г ИРНИТУ',
    places: 0,
    goal: 'Разработать проект переоборудования чердачного помещения корпуса Г ИРНИТУ',
    description:
      'С целью полезной эксплуатации площади разработать проект переоборудования чердачного помещения корпуса Г ИРНИТУ',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result: 'Переоборудованное  чердачное помещение корпуса Г ИРНИТУ',
    customer: 'ИРНИТУ',
    study_result:
      'Умение разработать проект переоборудования чердачного помещения корпуса Г ИРНИТУ',
    supervisors: [
      {
        id: 1067,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 159,
          fio: 'Пешков Виталий Владимирович',
          email: 'pvv@istu.edu',
          about: 'нет инфо',
          position:
            '246010 Дирекция института архитектуры, строительства и дизайна',
          created_at: '',
          updated_at: '2023-09-07T18:55:34.000000Z',
          canReviewProjects: true,
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 81,
        name: 'Microsoft Windows',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 121,
        name: 'MS Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 144,
        name: 'Владеть навыками презентации результатов проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 150,
        name: 'NanoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 177,
        name: 'Умение работать в команде и нести ответственность за свою часть проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 183,
        name: 'MS Word',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 184,
        name: 'MS Excel',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 185,
        name: 'MS PowerPoint',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 228,
        name: 'Конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 230,
        name: 'AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 233,
        name: 'Autodesk AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 234,
        name: 'Конструирование и проектирование зданий, инженерных систем зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 236,
        name: 'Владение автоматизированной системой проектирования и черчения.',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 246,
        name: 'Способность применять современные технологии, требуемые при реализации дизайн-проекта на практике',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 262,
        name: 'Знание основ архитектурно-строительной, дизайнерской, социологической и экономической подготовки и действующих проектных норм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 33,
        name: 'МДБб',
        institute: {
          id: 8,
          name: 'Байкальский институт БРИКС',
          maxApprovedProjects: 18,
        },
        department: {
          id: 57,
          name: 'БРИКС',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
        },
      },
      {
        id: 33,
        name: 'МДБб',
        institute: {
          id: 8,
          name: 'Байкальский институт БРИКС',
          maxApprovedProjects: 18,
        },
        department: {
          id: 57,
          name: 'БРИКС',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 70,
        name: 'ЭПОб',
        institute: {
          id: 7,
          name: 'Институт экономики, управления и права',
          maxApprovedProjects: 49,
        },
        department: {
          id: 54,
          name: 'Экономики и цифровых бизнес-технологий',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
        },
      },
      {
        id: 70,
        name: 'ЭПОб',
        institute: {
          id: 7,
          name: 'Институт экономики, управления и права',
          maxApprovedProjects: 49,
        },
        department: {
          id: 54,
          name: 'Экономики и цифровых бизнес-технологий',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5203,
        course: 3,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5204,
        course: 4,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5205,
        course: 5,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5206,
        course: 3,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5207,
        course: 4,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5208,
        course: 3,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5209,
        course: 4,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5210,
        course: 5,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5211,
        course: 3,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5212,
        course: 3,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5213,
        course: 4,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5214,
        course: 4,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5215,
        course: 3,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5216,
        course: 4,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5217,
        course: 3,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5218,
        course: 4,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5219,
        course: 5,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5220,
        course: 3,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5221,
        course: 4,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5222,
        course: 3,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5223,
        course: 4,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5224,
        course: 5,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5225,
        course: 3,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5226,
        course: 4,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5227,
        course: 3,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5228,
        course: 4,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5229,
        course: 3,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5230,
        course: 4,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5231,
        course: 3,
        priority: 2,
        speciality: {
          id: 70,
          name: 'ЭПОб',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
          department: {
            id: 54,
            name: 'Экономики и цифровых бизнес-технологий',
            institute: {
              id: 7,
              name: 'Институт экономики, управления и права',
              maxApprovedProjects: 49,
            },
          },
        },
      },
      {
        id: 5232,
        course: 4,
        priority: 2,
        speciality: {
          id: 70,
          name: 'ЭПОб',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
          department: {
            id: 54,
            name: 'Экономики и цифровых бизнес-технологий',
            institute: {
              id: 7,
              name: 'Институт экономики, управления и права',
              maxApprovedProjects: 49,
            },
          },
        },
      },
      {
        id: 5233,
        course: 3,
        priority: 2,
        speciality: {
          id: 33,
          name: 'МДБб',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
          department: {
            id: 57,
            name: 'БРИКС',
            institute: {
              id: 8,
              name: 'Байкальский институт БРИКС',
              maxApprovedProjects: 18,
            },
          },
        },
      },
      {
        id: 5234,
        course: 3,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5235,
        course: 4,
        priority: 2,
        speciality: {
          id: 33,
          name: 'МДБб',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
          department: {
            id: 57,
            name: 'БРИКС',
            institute: {
              id: 8,
              name: 'Байкальский институт БРИКС',
              maxApprovedProjects: 18,
            },
          },
        },
      },
      {
        id: 5236,
        course: 4,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5237,
        course: 5,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5238,
        course: 3,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5239,
        course: 3,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5240,
        course: 3,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5241,
        course: 4,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5242,
        course: 4,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5243,
        course: 4,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: '',
    rejection_date: '',
    department: {
      id: 29,
      name: 'Экспертиза и управление недвижимостью',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 1,
      name: 'текущие запросы служб ИРНИТУ',
    },
    participations: [],
    created_at: '2023-09-05T00:53:35.000000Z',
    updated_at: '2023-09-07T15:27:29.000000Z',
  },
  {
    id: 885,
    prevProjectId: null,
    title:
      'Проект переоборудования чердачного помещения корпуса Г ИРНИТУ: разработка концепции',
    places: 0,
    goal: 'Разработка концепции проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    description:
      'В целях расширения учебного пространства разработка концепции проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Разработанная концепция проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    customer: 'ИРНИТУ',
    study_result:
      'Знание основ проектирования и разработки концепции проектной деятельности',
    supervisors: [
      {
        id: 1068,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 159,
          fio: 'Пешков Виталий Владимирович',
          email: 'pvv@istu.edu',
          about: 'нет инфо',
          position:
            '246010 Дирекция института архитектуры, строительства и дизайна',
          created_at: '',
          updated_at: '2023-09-07T18:55:34.000000Z',
          canReviewProjects: true,
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1069,
        roles: [
          {
            id: 3,
            name: 'Сонаставник',
          },
        ],
        supervisor: {
          id: 924,
          fio: 'Селиванов Роман Александрович',
          email: 'romanseliva@yandex.ru',
          about: '',
          position: '246060 Кафедра архитектурного проектирования',
          created_at: '',
          updated_at: '2023-08-27T14:43:21.000000Z',
          canReviewProjects: false,
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 81,
        name: 'Microsoft Windows',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 121,
        name: 'MS Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 152,
        name: 'Auto CAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 183,
        name: 'MS Word',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 184,
        name: 'MS Excel',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 185,
        name: 'MS PowerPoint',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 219,
        name: 'Конструирование и проектирование предметов мебели, малых архитектурных форм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 228,
        name: 'Конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 230,
        name: 'AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 234,
        name: 'Конструирование и проектирование зданий, инженерных систем зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 236,
        name: 'Владение автоматизированной системой проектирования и черчения.',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 237,
        name: 'AutoCAD Architecture',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 238,
        name: 'Microsoft Visual Studio ',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 252,
        name: 'Теория градостроительства',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 262,
        name: 'Знание основ архитектурно-строительной, дизайнерской, социологической и экономической подготовки и действующих проектных норм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 264,
        name: 'Знание правил оформления архитектурно-строительных чертежей',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 300,
        name: 'Строительство',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5244,
        course: 3,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5245,
        course: 4,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5246,
        course: 5,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5247,
        course: 3,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5248,
        course: 4,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5249,
        course: 3,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5250,
        course: 4,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5251,
        course: 5,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5252,
        course: 3,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5253,
        course: 4,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5254,
        course: 3,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5255,
        course: 4,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5256,
        course: 5,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5257,
        course: 3,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5258,
        course: 4,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5259,
        course: 3,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5260,
        course: 4,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5261,
        course: 3,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5262,
        course: 4,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5263,
        course: 5,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5264,
        course: 3,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5265,
        course: 4,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5266,
        course: 3,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5267,
        course: 4,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5268,
        course: 3,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5269,
        course: 3,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5270,
        course: 3,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5271,
        course: 4,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5272,
        course: 4,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5273,
        course: 4,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: '',
    rejection_date: '',
    department: {
      id: 29,
      name: 'Экспертиза и управление недвижимостью',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 1,
      name: 'текущие запросы служб ИРНИТУ',
    },
    participations: [],
    created_at: '2023-09-05T00:59:51.000000Z',
    updated_at: '2023-09-05T12:57:40.000000Z',
  },
  {
    id: 886,
    prevProjectId: null,
    title:
      'Проект переоборудования чердачного помещения корпуса Г ИРНИТУ: разработка концепции',
    places: 0,
    goal: 'Разработка концепции проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    description:
      'В целях расширения учебного пространства разработка концепции проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Разработанная концепция проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    customer: 'ИРНИТУ',
    study_result:
      'Знание основ проектирования и разработки концепции проектной деятельности',
    supervisors: [
      {
        id: 1070,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 159,
          fio: 'Пешков Виталий Владимирович',
          email: 'pvv@istu.edu',
          about: 'нет инфо',
          position:
            '246010 Дирекция института архитектуры, строительства и дизайна',
          created_at: '',
          updated_at: '2023-09-07T18:55:34.000000Z',
          canReviewProjects: true,
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1071,
        roles: [
          {
            id: 3,
            name: 'Сонаставник',
          },
        ],
        supervisor: {
          id: 924,
          fio: 'Селиванов Роман Александрович',
          email: 'romanseliva@yandex.ru',
          about: '',
          position: '246060 Кафедра архитектурного проектирования',
          created_at: '',
          updated_at: '2023-08-27T14:43:21.000000Z',
          canReviewProjects: false,
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 81,
        name: 'Microsoft Windows',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 82,
        name: 'Microsoft Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 121,
        name: 'MS Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 144,
        name: 'Владеть навыками презентации результатов проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 152,
        name: 'Auto CAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 183,
        name: 'MS Word',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 184,
        name: 'MS Excel',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 185,
        name: 'MS PowerPoint',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 219,
        name: 'Конструирование и проектирование предметов мебели, малых архитектурных форм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 222,
        name: 'ArchiCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 228,
        name: 'Конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 229,
        name: 'ArchiCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 234,
        name: 'Конструирование и проектирование зданий, инженерных систем зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 236,
        name: 'Владение автоматизированной системой проектирования и черчения.',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 255,
        name: 'Archicad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 262,
        name: 'Знание основ архитектурно-строительной, дизайнерской, социологической и экономической подготовки и действующих проектных норм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 70,
        name: 'ЭПОб',
        institute: {
          id: 7,
          name: 'Институт экономики, управления и права',
          maxApprovedProjects: 49,
        },
        department: {
          id: 54,
          name: 'Экономики и цифровых бизнес-технологий',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
        },
      },
      {
        id: 70,
        name: 'ЭПОб',
        institute: {
          id: 7,
          name: 'Институт экономики, управления и права',
          maxApprovedProjects: 49,
        },
        department: {
          id: 54,
          name: 'Экономики и цифровых бизнес-технологий',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5274,
        course: 3,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5275,
        course: 4,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5276,
        course: 5,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5277,
        course: 3,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5278,
        course: 4,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5279,
        course: 3,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5280,
        course: 4,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5281,
        course: 5,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5282,
        course: 3,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5283,
        course: 3,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5284,
        course: 4,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5285,
        course: 4,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5286,
        course: 3,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5287,
        course: 4,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5288,
        course: 3,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5289,
        course: 4,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5290,
        course: 5,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5291,
        course: 3,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5292,
        course: 4,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5293,
        course: 3,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5294,
        course: 4,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5295,
        course: 5,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5296,
        course: 3,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5297,
        course: 4,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5298,
        course: 3,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5299,
        course: 4,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5300,
        course: 3,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5301,
        course: 4,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5302,
        course: 3,
        priority: 2,
        speciality: {
          id: 70,
          name: 'ЭПОб',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
          department: {
            id: 54,
            name: 'Экономики и цифровых бизнес-технологий',
            institute: {
              id: 7,
              name: 'Институт экономики, управления и права',
              maxApprovedProjects: 49,
            },
          },
        },
      },
      {
        id: 5303,
        course: 4,
        priority: 2,
        speciality: {
          id: 70,
          name: 'ЭПОб',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
          department: {
            id: 54,
            name: 'Экономики и цифровых бизнес-технологий',
            institute: {
              id: 7,
              name: 'Институт экономики, управления и права',
              maxApprovedProjects: 49,
            },
          },
        },
      },
      {
        id: 5304,
        course: 3,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5305,
        course: 3,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5306,
        course: 3,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5307,
        course: 4,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5308,
        course: 4,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5309,
        course: 4,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: '',
    rejection_date: '',
    department: {
      id: 29,
      name: 'Экспертиза и управление недвижимостью',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 1,
      name: 'текущие запросы служб ИРНИТУ',
    },
    participations: [],
    created_at: '2023-09-05T01:05:27.000000Z',
    updated_at: '2023-09-05T12:57:53.000000Z',
  },
  {
    id: 887,
    prevProjectId: null,
    title:
      'Проект переоборудования чердачного помещения корпуса Г ИРНИТУ: обследование технического состояния',
    places: 0,
    goal: 'Выполнить обследование технического состояния здания при разработке проект переоборудования чердачного помещения корпуса Г ИРНИТУ',
    description:
      'Проведение обследования обследование технического состояния здания при разработке проект переоборудования чердачного помещения корпуса Г ИРНИТУ:',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Выполнить обследование технического состояния здания при разработке проект переоборудования чердачного помещения корпуса Г ИРНИТУ:',
    customer: 'ИРНИТУ',
    study_result:
      'Знание основ проведения обследование технического состояния здания при разработке проект переоборудования чердачного помещения корпуса Г ИРНИТУ:',
    supervisors: [
      {
        id: 1072,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 159,
          fio: 'Пешков Виталий Владимирович',
          email: 'pvv@istu.edu',
          about: 'нет инфо',
          position:
            '246010 Дирекция института архитектуры, строительства и дизайна',
          created_at: '',
          updated_at: '2023-09-07T18:55:34.000000Z',
          canReviewProjects: true,
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1073,
        roles: [
          {
            id: 3,
            name: 'Сонаставник',
          },
        ],
        supervisor: {
          id: 25,
          fio: 'Пинайкин Игорь Петрович',
          email: 'pinaykin@bk.ru',
          about: '',
          position: '246030 Кафедра строительного производства',
          created_at: '2022-06-15T16:23:45.000000Z',
          updated_at: '2023-08-08T12:14:15.000000Z',
          canReviewProjects: false,
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 81,
        name: 'Microsoft Windows',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 121,
        name: 'MS Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 133,
        name: 'Знать основные ресурсные ограничения проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 144,
        name: 'Владеть навыками презентации результатов проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 152,
        name: 'Auto CAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 183,
        name: 'MS Word',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 184,
        name: 'MS Excel',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 185,
        name: 'MS PowerPoint',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 215,
        name: 'ArhiCad 25',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 219,
        name: 'Конструирование и проектирование предметов мебели, малых архитектурных форм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 228,
        name: 'Конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 230,
        name: 'AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 233,
        name: 'Autodesk AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 234,
        name: 'Конструирование и проектирование зданий, инженерных систем зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 236,
        name: 'Владение автоматизированной системой проектирования и черчения.',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 237,
        name: 'AutoCAD Architecture',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 248,
        name: 'Способность анализировать и определять требования к дизайн-проекту и синтезировать набор возможных решений задачи или подходов к выполнению дизайн-проекта и применять современные технологии, требуемые при реализации дизайн-проекта на практике',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 262,
        name: 'Знание основ архитектурно-строительной, дизайнерской, социологической и экономической подготовки и действующих проектных норм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 33,
        name: 'МДБб',
        institute: {
          id: 8,
          name: 'Байкальский институт БРИКС',
          maxApprovedProjects: 18,
        },
        department: {
          id: 57,
          name: 'БРИКС',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
        },
      },
      {
        id: 33,
        name: 'МДБб',
        institute: {
          id: 8,
          name: 'Байкальский институт БРИКС',
          maxApprovedProjects: 18,
        },
        department: {
          id: 57,
          name: 'БРИКС',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5310,
        course: 3,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5311,
        course: 4,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5312,
        course: 5,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5313,
        course: 3,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5314,
        course: 4,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5315,
        course: 3,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5316,
        course: 4,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5317,
        course: 5,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5318,
        course: 3,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5319,
        course: 3,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5320,
        course: 4,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5321,
        course: 4,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5322,
        course: 3,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5323,
        course: 4,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5324,
        course: 3,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5325,
        course: 4,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5326,
        course: 5,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5327,
        course: 3,
        priority: 2,
        speciality: {
          id: 33,
          name: 'МДБб',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
          department: {
            id: 57,
            name: 'БРИКС',
            institute: {
              id: 8,
              name: 'Байкальский институт БРИКС',
              maxApprovedProjects: 18,
            },
          },
        },
      },
      {
        id: 5328,
        course: 3,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5329,
        course: 4,
        priority: 2,
        speciality: {
          id: 33,
          name: 'МДБб',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
          department: {
            id: 57,
            name: 'БРИКС',
            institute: {
              id: 8,
              name: 'Байкальский институт БРИКС',
              maxApprovedProjects: 18,
            },
          },
        },
      },
      {
        id: 5330,
        course: 4,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5331,
        course: 5,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5332,
        course: 3,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5333,
        course: 4,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5334,
        course: 3,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5335,
        course: 4,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5336,
        course: 5,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5337,
        course: 3,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5338,
        course: 4,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5339,
        course: 3,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5340,
        course: 4,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5341,
        course: 3,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5342,
        course: 4,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5343,
        course: 3,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5344,
        course: 3,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5345,
        course: 3,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5346,
        course: 4,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5347,
        course: 4,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5348,
        course: 4,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'Уточнить наставника с каф. Строительного производства',
    rejection_date: '',
    department: {
      id: 29,
      name: 'Экспертиза и управление недвижимостью',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 1,
      name: 'текущие запросы служб ИРНИТУ',
    },
    participations: [],
    created_at: '2023-09-05T01:09:56.000000Z',
    updated_at: '2023-09-07T15:29:09.000000Z',
  },
  {
    id: 888,
    prevProjectId: null,
    title:
      'Проект переоборудования чердачного помещения корпуса Г ИРНИТУ: обследование деревянных конструкций',
    places: 0,
    goal: 'выполнить обследование деревянных конструкций с целью разработки проекта  переоборудования чердачного помещения корпуса Г ИРНИТУ',
    description:
      'Обследование деревянных конструкций на техническое состояние с целью разработки проекта  переоборудования чердачного помещения корпуса Г ИРНИТУ',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Выполненное обследование деревянных конструкций с целью разработки проекта  переоборудования чердачного помещения корпуса Г ИРНИТУ',
    customer: 'ИРНИТУ',
    study_result:
      'Умение проводить обследование деревянных конструкций с целью разработки проекта  переоборудования чердачного помещения корпуса Г ИРНИТУ',
    supervisors: [
      {
        id: 1074,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 159,
          fio: 'Пешков Виталий Владимирович',
          email: 'pvv@istu.edu',
          about: 'нет инфо',
          position:
            '246010 Дирекция института архитектуры, строительства и дизайна',
          created_at: '',
          updated_at: '2023-09-07T18:55:34.000000Z',
          canReviewProjects: true,
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1075,
        roles: [
          {
            id: 3,
            name: 'Сонаставник',
          },
        ],
        supervisor: {
          id: 25,
          fio: 'Пинайкин Игорь Петрович',
          email: 'pinaykin@bk.ru',
          about: '',
          position: '246030 Кафедра строительного производства',
          created_at: '2022-06-15T16:23:45.000000Z',
          updated_at: '2023-08-08T12:14:15.000000Z',
          canReviewProjects: false,
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 81,
        name: 'Microsoft Windows',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 121,
        name: 'MS Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 133,
        name: 'Знать основные ресурсные ограничения проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 134,
        name: 'Знать основные требования к представлению результатов проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 142,
        name: 'Уметь спланировать и реализовать проект с учетом ресурсных ограничений и требований к результату проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 144,
        name: 'Владеть навыками презентации результатов проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 152,
        name: 'Auto CAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 177,
        name: 'Умение работать в команде и нести ответственность за свою часть проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 183,
        name: 'MS Word',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 184,
        name: 'MS Excel',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 185,
        name: 'MS PowerPoint',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 228,
        name: 'Конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 229,
        name: 'ArchiCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 230,
        name: 'AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 233,
        name: 'Autodesk AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 234,
        name: 'Конструирование и проектирование зданий, инженерных систем зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 235,
        name: 'ARCHICAD ',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 236,
        name: 'Владение автоматизированной системой проектирования и черчения.',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 246,
        name: 'Способность применять современные технологии, требуемые при реализации дизайн-проекта на практике',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 255,
        name: 'Archicad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 262,
        name: 'Знание основ архитектурно-строительной, дизайнерской, социологической и экономической подготовки и действующих проектных норм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 380,
        name: 'Формирование проектной и рабочей документации',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 33,
        name: 'МДБб',
        institute: {
          id: 8,
          name: 'Байкальский институт БРИКС',
          maxApprovedProjects: 18,
        },
        department: {
          id: 57,
          name: 'БРИКС',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
        },
      },
      {
        id: 33,
        name: 'МДБб',
        institute: {
          id: 8,
          name: 'Байкальский институт БРИКС',
          maxApprovedProjects: 18,
        },
        department: {
          id: 57,
          name: 'БРИКС',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5349,
        course: 3,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5350,
        course: 4,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5351,
        course: 5,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5352,
        course: 3,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5353,
        course: 4,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5354,
        course: 3,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5355,
        course: 4,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5356,
        course: 5,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5357,
        course: 3,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5358,
        course: 3,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5359,
        course: 4,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5360,
        course: 4,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5361,
        course: 3,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5362,
        course: 4,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5363,
        course: 3,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5364,
        course: 4,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5365,
        course: 5,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5366,
        course: 3,
        priority: 2,
        speciality: {
          id: 33,
          name: 'МДБб',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
          department: {
            id: 57,
            name: 'БРИКС',
            institute: {
              id: 8,
              name: 'Байкальский институт БРИКС',
              maxApprovedProjects: 18,
            },
          },
        },
      },
      {
        id: 5367,
        course: 3,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5368,
        course: 4,
        priority: 2,
        speciality: {
          id: 33,
          name: 'МДБб',
          institute: {
            id: 8,
            name: 'Байкальский институт БРИКС',
            maxApprovedProjects: 18,
          },
          department: {
            id: 57,
            name: 'БРИКС',
            institute: {
              id: 8,
              name: 'Байкальский институт БРИКС',
              maxApprovedProjects: 18,
            },
          },
        },
      },
      {
        id: 5369,
        course: 4,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5370,
        course: 5,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5371,
        course: 3,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5372,
        course: 4,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5373,
        course: 3,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5374,
        course: 4,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5375,
        course: 5,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5376,
        course: 3,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5377,
        course: 4,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5378,
        course: 3,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5379,
        course: 4,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5380,
        course: 3,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5381,
        course: 4,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5382,
        course: 3,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5383,
        course: 3,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5384,
        course: 3,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5385,
        course: 4,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5386,
        course: 4,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5387,
        course: 4,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: '',
    rejection_date: '',
    department: {
      id: 29,
      name: 'Экспертиза и управление недвижимостью',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 1,
      name: 'текущие запросы служб ИРНИТУ',
    },
    participations: [],
    created_at: '2023-09-05T01:14:25.000000Z',
    updated_at: '2023-09-05T12:58:02.000000Z',
  },
  {
    id: 889,
    prevProjectId: null,
    title:
      'Проект переоборудования чердачного помещения корпуса Г ИРНИТУ: разработка конструктивных решений',
    places: 0,
    goal: 'Разработать конструктивные решения для проекта переоборудования чердачного помещения корпуса Г ИРНИТУ:',
    description:
      'Разработать конструктивные решения и выбрать оптимальные для проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2023-12-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Разработать конструктивные решения для проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    customer: 'ИРНИТУ',
    study_result:
      'Умение разрабатывать конструктивные решения для проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    supervisors: [
      {
        id: 1076,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 159,
          fio: 'Пешков Виталий Владимирович',
          email: 'pvv@istu.edu',
          about: 'нет инфо',
          position:
            '246010 Дирекция института архитектуры, строительства и дизайна',
          created_at: '',
          updated_at: '2023-09-07T18:55:34.000000Z',
          canReviewProjects: true,
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1077,
        roles: [
          {
            id: 3,
            name: 'Сонаставник',
          },
        ],
        supervisor: {
          id: 333,
          fio: 'Петунин Александр Геннадьевич',
          email: 'termina@mail.ru',
          about: '',
          position: '',
          created_at: '',
          updated_at: '2023-09-12T15:00:53.000000Z',
          canReviewProjects: false,
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 82,
        name: 'Microsoft Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 121,
        name: 'MS Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 133,
        name: 'Знать основные ресурсные ограничения проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 134,
        name: 'Знать основные требования к представлению результатов проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 144,
        name: 'Владеть навыками презентации результатов проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 152,
        name: 'Auto CAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 183,
        name: 'MS Word',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 185,
        name: 'MS PowerPoint',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 228,
        name: 'Конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 230,
        name: 'AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 233,
        name: 'Autodesk AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 234,
        name: 'Конструирование и проектирование зданий, инженерных систем зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 235,
        name: 'ARCHICAD ',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 236,
        name: 'Владение автоматизированной системой проектирования и черчения.',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 237,
        name: 'AutoCAD Architecture',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 245,
        name: 'Способность анализировать и определять требования к дизайн-проекту и синтезировать набор возможных решений задачи или подходов к выполнению дизайн-проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 246,
        name: 'Способность применять современные технологии, требуемые при реализации дизайн-проекта на практике',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 253,
        name: 'Autodesk 3ds Max',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 262,
        name: 'Знание основ архитектурно-строительной, дизайнерской, социологической и экономической подготовки и действующих проектных норм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 264,
        name: 'Знание правил оформления архитектурно-строительных чертежей',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 300,
        name: 'Строительство',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5388,
        course: 3,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5389,
        course: 4,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5390,
        course: 5,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5391,
        course: 3,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5392,
        course: 4,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5393,
        course: 3,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5394,
        course: 4,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5395,
        course: 5,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5396,
        course: 3,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5397,
        course: 3,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5398,
        course: 4,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5399,
        course: 4,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5400,
        course: 3,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5401,
        course: 4,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5402,
        course: 5,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5403,
        course: 3,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5404,
        course: 4,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5405,
        course: 3,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5406,
        course: 4,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5407,
        course: 5,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5408,
        course: 3,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5409,
        course: 4,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5410,
        course: 3,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5411,
        course: 4,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5412,
        course: 5,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5413,
        course: 3,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5414,
        course: 4,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5415,
        course: 3,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5416,
        course: 4,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5417,
        course: 3,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5418,
        course: 4,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5419,
        course: 3,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5420,
        course: 3,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5421,
        course: 3,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5422,
        course: 4,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5423,
        course: 4,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5424,
        course: 4,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'Должен быть Пинайкин',
    rejection_date: '',
    department: {
      id: 29,
      name: 'Экспертиза и управление недвижимостью',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 1,
      name: 'текущие запросы служб ИРНИТУ',
    },
    participations: [],
    created_at: '2023-09-05T01:18:49.000000Z',
    updated_at: '2023-09-07T15:29:33.000000Z',
  },
  {
    id: 890,
    prevProjectId: null,
    title:
      'Проект переоборудования чердачного помещения корпуса Г ИРНИТУ: водопровод и водоотведение',
    places: 0,
    goal: 'Разработать схему водопровода и водоотведения при разработке проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    description:
      'Разработать оптимальную схему водопровода и водоотведения при разработке проекта переоборудования чердачного помещения корпуса Г ИРНИТУ:',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Разработать схему водопровода и водоотведения при разработке проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    customer: 'ИРНИТУ',
    study_result:
      'Умение разрабатывать схемы водопровода и водоотведения при разработке проекта переоборудования чердачного помещения корпуса Г ИРНИТУ:',
    supervisors: [
      {
        id: 1078,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 159,
          fio: 'Пешков Виталий Владимирович',
          email: 'pvv@istu.edu',
          about: 'нет инфо',
          position:
            '246010 Дирекция института архитектуры, строительства и дизайна',
          created_at: '',
          updated_at: '2023-09-07T18:55:34.000000Z',
          canReviewProjects: true,
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1079,
        roles: [
          {
            id: 3,
            name: 'Сонаставник',
          },
        ],
        supervisor: {
          id: 211,
          fio: 'Судникович Вера Геннадьевна',
          email: 'hitroglazaya@mail.ru',
          about: '',
          position: '',
          created_at: '',
          updated_at: '2023-09-12T15:00:53.000000Z',
          canReviewProjects: false,
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 152,
        name: 'Auto CAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 190,
        name: 'Знания в области проектирования систем автоматизации',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 215,
        name: 'ArhiCad 25',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 219,
        name: 'Конструирование и проектирование предметов мебели, малых архитектурных форм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 228,
        name: 'Конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 230,
        name: 'AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 233,
        name: 'Autodesk AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 234,
        name: 'Конструирование и проектирование зданий, инженерных систем зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 236,
        name: 'Владение автоматизированной системой проектирования и черчения.',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 237,
        name: 'AutoCAD Architecture',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5425,
        course: 3,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5426,
        course: 4,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5427,
        course: 5,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5428,
        course: 3,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5429,
        course: 4,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5430,
        course: 3,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5431,
        course: 4,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5432,
        course: 5,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5433,
        course: 3,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5434,
        course: 3,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5435,
        course: 4,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5436,
        course: 4,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5437,
        course: 3,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5438,
        course: 4,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5439,
        course: 3,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5440,
        course: 4,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5441,
        course: 5,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5442,
        course: 3,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5443,
        course: 4,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5444,
        course: 3,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5445,
        course: 4,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5446,
        course: 3,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5447,
        course: 4,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5448,
        course: 3,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5449,
        course: 3,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5450,
        course: 3,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5451,
        course: 4,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5452,
        course: 4,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5453,
        course: 4,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'Должна быть Судникович В.Г. каф. ИКиСЖ',
    rejection_date: '',
    department: {
      id: 29,
      name: 'Экспертиза и управление недвижимостью',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 1,
      name: 'текущие запросы служб ИРНИТУ',
    },
    participations: [],
    created_at: '2023-09-05T01:21:48.000000Z',
    updated_at: '2023-09-07T15:30:23.000000Z',
  },
  {
    id: 891,
    prevProjectId: null,
    title:
      'Проект переоборудования чердачного помещения корпуса Г ИРНИТУ: отопление и вентиляция',
    places: 0,
    goal: 'Разработать схему отопления и вентиляции при выполнении проектных работ по переоборудованию чердачного помещения корпуса Г ИРНИТУ',
    description:
      'Разработать схему отопления и вентиляции при выполнении проектных работ по переоборудованию чердачного помещения корпуса Г ИРНИТУ:',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Разработанные  схемы отопления и вентиляции при выполнении проектных работ по переоборудованию чердачного помещения корпуса Г ИРНИТУ',
    customer: 'ИРНИТУ',
    study_result:
      'Умение разработать схемы отопления и вентиляции при выполнении проектных работ по переоборудованию чердачного помещения корпуса Г ИРНИТУ:',
    supervisors: [
      {
        id: 1080,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 159,
          fio: 'Пешков Виталий Владимирович',
          email: 'pvv@istu.edu',
          about: 'нет инфо',
          position:
            '246010 Дирекция института архитектуры, строительства и дизайна',
          created_at: '',
          updated_at: '2023-09-07T18:55:34.000000Z',
          canReviewProjects: true,
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1081,
        roles: [
          {
            id: 3,
            name: 'Сонаставник',
          },
        ],
        supervisor: {
          id: 224,
          fio: 'Тюменцев Владимир Александрович',
          email: 'vatyumen@istu.edu',
          about: '',
          position:
            '246080 Кафедра инженерных коммуникаций и систем жизнеобеспечения',
          created_at: '',
          updated_at: '2023-09-11T17:53:12.000000Z',
          canReviewProjects: false,
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 81,
        name: 'Microsoft Windows',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 101,
        name: 'Конструирование и проектирование изделий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 121,
        name: 'MS Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 133,
        name: 'Знать основные ресурсные ограничения проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 144,
        name: 'Владеть навыками презентации результатов проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 152,
        name: 'Auto CAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 177,
        name: 'Умение работать в команде и нести ответственность за свою часть проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 183,
        name: 'MS Word',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 184,
        name: 'MS Excel',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 185,
        name: 'MS PowerPoint',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 228,
        name: 'Конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 229,
        name: 'ArchiCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 230,
        name: 'AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 235,
        name: 'ARCHICAD ',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 236,
        name: 'Владение автоматизированной системой проектирования и черчения.',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 245,
        name: 'Способность анализировать и определять требования к дизайн-проекту и синтезировать набор возможных решений задачи или подходов к выполнению дизайн-проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 246,
        name: 'Способность применять современные технологии, требуемые при реализации дизайн-проекта на практике',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 248,
        name: 'Способность анализировать и определять требования к дизайн-проекту и синтезировать набор возможных решений задачи или подходов к выполнению дизайн-проекта и применять современные технологии, требуемые при реализации дизайн-проекта на практике',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 262,
        name: 'Знание основ архитектурно-строительной, дизайнерской, социологической и экономической подготовки и действующих проектных норм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 264,
        name: 'Знание правил оформления архитектурно-строительных чертежей',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 300,
        name: 'Строительство',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 380,
        name: 'Формирование проектной и рабочей документации',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5454,
        course: 3,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5455,
        course: 4,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5456,
        course: 5,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5457,
        course: 3,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5458,
        course: 4,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5459,
        course: 3,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5460,
        course: 3,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5461,
        course: 4,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5462,
        course: 4,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5463,
        course: 3,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5464,
        course: 4,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5465,
        course: 5,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5466,
        course: 3,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5467,
        course: 4,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5468,
        course: 5,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5469,
        course: 3,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5470,
        course: 4,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5471,
        course: 3,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5472,
        course: 4,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5473,
        course: 5,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5474,
        course: 3,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5475,
        course: 4,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5476,
        course: 3,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5477,
        course: 4,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5478,
        course: 5,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5479,
        course: 3,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5480,
        course: 4,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5481,
        course: 3,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5482,
        course: 4,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5483,
        course: 3,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5484,
        course: 4,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5485,
        course: 3,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5486,
        course: 3,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5487,
        course: 3,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5488,
        course: 4,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5489,
        course: 4,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5490,
        course: 4,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'Наставник Тюменцев В.А.',
    rejection_date: '',
    department: {
      id: 29,
      name: 'Экспертиза и управление недвижимостью',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 1,
      name: 'текущие запросы служб ИРНИТУ',
    },
    participations: [],
    created_at: '2023-09-05T01:27:05.000000Z',
    updated_at: '2023-09-07T15:31:22.000000Z',
  },
  {
    id: 897,
    prevProjectId: null,
    title:
      'Проект переоборудования чердачного помещения корпуса Г ИРНИТУ: разработка концепции',
    places: 0,
    goal: 'Разработка концепции проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    description:
      'В целях расширения учебного пространства разработка концепции проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Разработанная концепция проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    customer: 'ИРНИТУ',
    study_result:
      'Знание основ проектирования и разработки концепции проектной деятельности',
    supervisors: [
      {
        id: 1087,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 159,
          fio: 'Пешков Виталий Владимирович',
          email: 'pvv@istu.edu',
          about: 'нет инфо',
          position:
            '246010 Дирекция института архитектуры, строительства и дизайна',
          created_at: '',
          updated_at: '2023-09-07T18:55:34.000000Z',
          canReviewProjects: true,
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1088,
        roles: [
          {
            id: 3,
            name: 'Сонаставник',
          },
        ],
        supervisor: {
          id: 72,
          fio: 'Козлов Валерий Васильевич',
          email: 'valery_kozlov@mail.ru',
          about: '',
          position: '',
          created_at: '',
          updated_at: '2023-09-12T15:00:53.000000Z',
          canReviewProjects: false,
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 81,
        name: 'Microsoft Windows',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 121,
        name: 'MS Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 152,
        name: 'Auto CAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 183,
        name: 'MS Word',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 184,
        name: 'MS Excel',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 185,
        name: 'MS PowerPoint',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 215,
        name: 'ArhiCad 25',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 218,
        name: 'Умение схематизировать и стилизовать, конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 228,
        name: 'Конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 230,
        name: 'AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 234,
        name: 'Конструирование и проектирование зданий, инженерных систем зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 235,
        name: 'ARCHICAD ',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 236,
        name: 'Владение автоматизированной системой проектирования и черчения.',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 238,
        name: 'Microsoft Visual Studio ',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 262,
        name: 'Знание основ архитектурно-строительной, дизайнерской, социологической и экономической подготовки и действующих проектных норм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 264,
        name: 'Знание правил оформления архитектурно-строительных чертежей',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 300,
        name: 'Строительство',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5500,
        course: 3,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5501,
        course: 4,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5502,
        course: 5,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5503,
        course: 3,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5504,
        course: 4,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5505,
        course: 3,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5506,
        course: 4,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5507,
        course: 5,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5508,
        course: 3,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5509,
        course: 3,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5510,
        course: 4,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5511,
        course: 4,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5512,
        course: 3,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5513,
        course: 4,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5514,
        course: 3,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5515,
        course: 4,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5516,
        course: 5,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5517,
        course: 3,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5518,
        course: 4,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5519,
        course: 5,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5520,
        course: 3,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5521,
        course: 4,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5522,
        course: 3,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5523,
        course: 4,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5524,
        course: 5,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5525,
        course: 3,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5526,
        course: 4,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5527,
        course: 3,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5528,
        course: 4,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5529,
        course: 3,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5530,
        course: 4,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5531,
        course: 3,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5532,
        course: 3,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5533,
        course: 3,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5534,
        course: 4,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5535,
        course: 4,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5536,
        course: 4,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'наставник неверно (должен быть Козлов В.В. )',
    rejection_date: '',
    department: {
      id: 29,
      name: 'Экспертиза и управление недвижимостью',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 1,
      name: 'текущие запросы служб ИРНИТУ',
    },
    participations: [],
    created_at: '2023-09-06T10:42:34.000000Z',
    updated_at: '2023-09-07T15:18:39.000000Z',
  },
  {
    id: 898,
    prevProjectId: null,
    title:
      'Проект переоборудования чердачного помещения корпуса Г ИРНИТУ: планировка помещений',
    places: 0,
    goal: 'Разработка проекта планировки помещений при переоборудовании чердачного помещения корпуса Г ИРНИТУ',
    description:
      'в целях проектной деятельность обязательным является грамотная планировка помещений',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Разработать проект планировки помещений при переоборудовании чердачного помещения корпуса Г ИРНИТУ',
    customer: 'ИРНИТУ',
    study_result:
      'Умение разрабатывать проекты планировки помещений при переоборудовании чердачного помещения корпуса Г ИРНИТУ',
    supervisors: [
      {
        id: 1089,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 159,
          fio: 'Пешков Виталий Владимирович',
          email: 'pvv@istu.edu',
          about: 'нет инфо',
          position:
            '246010 Дирекция института архитектуры, строительства и дизайна',
          created_at: '',
          updated_at: '2023-09-07T18:55:34.000000Z',
          canReviewProjects: true,
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1090,
        roles: [
          {
            id: 3,
            name: 'Сонаставник',
          },
        ],
        supervisor: {
          id: 924,
          fio: 'Селиванов Роман Александрович',
          email: 'romanseliva@yandex.ru',
          about: '',
          position: '246060 Кафедра архитектурного проектирования',
          created_at: '',
          updated_at: '2023-08-27T14:43:21.000000Z',
          canReviewProjects: false,
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 81,
        name: 'Microsoft Windows',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 121,
        name: 'MS Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 133,
        name: 'Знать основные ресурсные ограничения проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 134,
        name: 'Знать основные требования к представлению результатов проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 142,
        name: 'Уметь спланировать и реализовать проект с учетом ресурсных ограничений и требований к результату проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 144,
        name: 'Владеть навыками презентации результатов проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 152,
        name: 'Auto CAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 183,
        name: 'MS Word',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 184,
        name: 'MS Excel',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 185,
        name: 'MS PowerPoint',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 215,
        name: 'ArhiCad 25',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 219,
        name: 'Конструирование и проектирование предметов мебели, малых архитектурных форм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 228,
        name: 'Конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 230,
        name: 'AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 235,
        name: 'ARCHICAD ',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 236,
        name: 'Владение автоматизированной системой проектирования и черчения.',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 246,
        name: 'Способность применять современные технологии, требуемые при реализации дизайн-проекта на практике',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 255,
        name: 'Archicad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 262,
        name: 'Знание основ архитектурно-строительной, дизайнерской, социологической и экономической подготовки и действующих проектных норм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 264,
        name: 'Знание правил оформления архитектурно-строительных чертежей',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 300,
        name: 'Строительство',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 403,
        name: '3D печать',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 19,
        name: 'ГРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 23,
          name: 'Архитектура и градостроительство ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5537,
        course: 3,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5538,
        course: 4,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5539,
        course: 5,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5540,
        course: 3,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5541,
        course: 4,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5542,
        course: 3,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5543,
        course: 4,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5544,
        course: 5,
        priority: 2,
        speciality: {
          id: 19,
          name: 'ГРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 23,
            name: 'Архитектура и градостроительство ',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5545,
        course: 3,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5546,
        course: 3,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5547,
        course: 4,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5548,
        course: 4,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5549,
        course: 3,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5550,
        course: 4,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5551,
        course: 3,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5552,
        course: 4,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5553,
        course: 3,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5554,
        course: 4,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5555,
        course: 5,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5556,
        course: 3,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5557,
        course: 4,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5558,
        course: 3,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5559,
        course: 4,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5560,
        course: 5,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5561,
        course: 3,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5562,
        course: 4,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5563,
        course: 3,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5564,
        course: 4,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5565,
        course: 3,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5566,
        course: 4,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5567,
        course: 3,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5568,
        course: 3,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5569,
        course: 3,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5570,
        course: 4,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5571,
        course: 4,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5572,
        course: 4,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'Наставник Селиванов',
    rejection_date: '',
    department: {
      id: 29,
      name: 'Экспертиза и управление недвижимостью',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 1,
      name: 'текущие запросы служб ИРНИТУ',
    },
    participations: [],
    created_at: '2023-09-06T10:46:49.000000Z',
    updated_at: '2023-09-07T15:18:58.000000Z',
  },
  {
    id: 908,
    prevProjectId: null,
    title:
      'Проект переоборудования чердачного помещения корпуса Г ИРНИТУ: разработка концепции',
    places: 0,
    goal: 'Разработка концепции проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    description:
      'В целях расширения учебного пространства разработка концепции проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Разработанная концепция проекта переоборудования чердачного помещения корпуса Г ИРНИТУ',
    customer: 'ирниту',
    study_result:
      'Знание основ проектирования и разработки концепции проектной деятельности',
    supervisors: [
      {
        id: 1102,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 159,
          fio: 'Пешков Виталий Владимирович',
          email: 'pvv@istu.edu',
          about: 'нет инфо',
          position:
            '246010 Дирекция института архитектуры, строительства и дизайна',
          created_at: '',
          updated_at: '2023-09-07T18:55:34.000000Z',
          canReviewProjects: true,
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1103,
        roles: [
          {
            id: 3,
            name: 'Сонаставник',
          },
        ],
        supervisor: {
          id: 72,
          fio: 'Козлов Валерий Васильевич',
          email: 'valery_kozlov@mail.ru',
          about: '',
          position: '',
          created_at: '',
          updated_at: '2023-09-12T15:00:53.000000Z',
          canReviewProjects: false,
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 81,
        name: 'Microsoft Windows',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 121,
        name: 'MS Office',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 142,
        name: 'Уметь спланировать и реализовать проект с учетом ресурсных ограничений и требований к результату проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 144,
        name: 'Владеть навыками презентации результатов проекта',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 152,
        name: 'Auto CAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 183,
        name: 'MS Word',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 184,
        name: 'MS Excel',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 185,
        name: 'MS PowerPoint',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 215,
        name: 'ArhiCad 25',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 219,
        name: 'Конструирование и проектирование предметов мебели, малых архитектурных форм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 228,
        name: 'Конструирование и проектирование зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 230,
        name: 'AutoCAD',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 234,
        name: 'Конструирование и проектирование зданий, инженерных систем зданий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 236,
        name: 'Владение автоматизированной системой проектирования и черчения.',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 237,
        name: 'AutoCAD Architecture',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 238,
        name: 'Microsoft Visual Studio ',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 253,
        name: 'Autodesk 3ds Max',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 262,
        name: 'Знание основ архитектурно-строительной, дизайнерской, социологической и экономической подготовки и действующих проектных норм',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 264,
        name: 'Знание правил оформления архитектурно-строительных чертежей',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 300,
        name: 'Строительство',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 380,
        name: 'Формирование проектной и рабочей документации',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 8,
        name: 'ДСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 9,
        name: 'АРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 24,
          name: 'Архитектурное проектирование',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 14,
        name: 'ВВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 16,
        name: 'ГСХб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 17,
        name: 'ГСХбп',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 28,
          name: 'Городское строительство и хозяйство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 28,
        name: 'КНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 41,
        name: 'УСТб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 46,
        name: 'ПГСб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 52,
        name: 'ТВб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 52,
          name: 'Инженерные коммуникации и системы жизнеобеспечения',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 70,
        name: 'ЭПОб',
        institute: {
          id: 7,
          name: 'Институт экономики, управления и права',
          maxApprovedProjects: 49,
        },
        department: {
          id: 54,
          name: 'Экономики и цифровых бизнес-технологий',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
        },
      },
      {
        id: 70,
        name: 'ЭПОб',
        institute: {
          id: 7,
          name: 'Институт экономики, управления и права',
          maxApprovedProjects: 49,
        },
        department: {
          id: 54,
          name: 'Экономики и цифровых бизнес-технологий',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 71,
        name: 'ЭУНб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 29,
          name: 'Экспертиза и управление недвижимостью',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 95,
        name: 'СУЗ',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 26,
          name: 'Строительное производство',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5600,
        course: 3,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5601,
        course: 4,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5602,
        course: 5,
        priority: 2,
        speciality: {
          id: 9,
          name: 'АРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5603,
        course: 3,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5604,
        course: 4,
        priority: 2,
        speciality: {
          id: 46,
          name: 'ПГСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5605,
        course: 3,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5606,
        course: 4,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5607,
        course: 5,
        priority: 2,
        speciality: {
          id: 95,
          name: 'СУЗ',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 26,
            name: 'Строительное производство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5608,
        course: 3,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5609,
        course: 4,
        priority: 2,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5610,
        course: 3,
        priority: 2,
        speciality: {
          id: 70,
          name: 'ЭПОб',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
          department: {
            id: 54,
            name: 'Экономики и цифровых бизнес-технологий',
            institute: {
              id: 7,
              name: 'Институт экономики, управления и права',
              maxApprovedProjects: 49,
            },
          },
        },
      },
      {
        id: 5611,
        course: 4,
        priority: 2,
        speciality: {
          id: 70,
          name: 'ЭПОб',
          institute: {
            id: 7,
            name: 'Институт экономики, управления и права',
            maxApprovedProjects: 49,
          },
          department: {
            id: 54,
            name: 'Экономики и цифровых бизнес-технологий',
            institute: {
              id: 7,
              name: 'Институт экономики, управления и права',
              maxApprovedProjects: 49,
            },
          },
        },
      },
      {
        id: 5612,
        course: 3,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5613,
        course: 4,
        priority: 2,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5614,
        course: 3,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5615,
        course: 4,
        priority: 2,
        speciality: {
          id: 14,
          name: 'ВВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5616,
        course: 3,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5617,
        course: 4,
        priority: 2,
        speciality: {
          id: 52,
          name: 'ТВб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 52,
            name: 'Инженерные коммуникации и системы жизнеобеспечения',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5618,
        course: 3,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5619,
        course: 4,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5620,
        course: 5,
        priority: 2,
        speciality: {
          id: 8,
          name: 'ДСб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 24,
            name: 'Архитектурное проектирование',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5621,
        course: 3,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5622,
        course: 4,
        priority: 2,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5623,
        course: 3,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5624,
        course: 3,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5625,
        course: 4,
        priority: 2,
        speciality: {
          id: 16,
          name: 'ГСХб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5626,
        course: 4,
        priority: 2,
        speciality: {
          id: 17,
          name: 'ГСХбп',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 28,
            name: 'Городское строительство и хозяйство',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5627,
        course: 3,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5628,
        course: 4,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5629,
        course: 5,
        priority: 2,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5630,
        course: 3,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5631,
        course: 3,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5632,
        course: 3,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5633,
        course: 4,
        priority: 1,
        speciality: {
          id: 28,
          name: 'КНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5634,
        course: 4,
        priority: 1,
        speciality: {
          id: 41,
          name: 'УСТб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5635,
        course: 4,
        priority: 1,
        speciality: {
          id: 71,
          name: 'ЭУНб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 29,
            name: 'Экспертиза и управление недвижимостью',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: '',
    rejection_date: '',
    department: {
      id: 29,
      name: 'Экспертиза и управление недвижимостью',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 6,
      state: 'На рассмотрении',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 1,
      name: 'текущие запросы служб ИРНИТУ',
    },
    participations: [],
    created_at: '2023-09-08T08:08:31.000000Z',
    updated_at: '2023-09-08T08:08:31.000000Z',
  },
  {
    id: 872,
    prevProjectId: null,
    title:
      'Проектное предложение организации коворкинг-центра для Шелиховского реабилитационного центра "Мы вместе".',
    places: 0,
    goal: 'Создание проектного предложения для коворкинг-центра Шелиховского реабилитационного центра "Мы вместе".',
    description:
      'Провести анализ местности.\nПровести анализ возможных аналогов.\nВыполнить концептуальное предложение в 2d редакторе\nОтработать примеры модулей для коворкинга в зависимости от задач помещений.\nВыполнить 3d модель одного из модулей.\nОрганизовать территорию для коворкинга на местности\nВыполнить визуализацию.\nСформировать презентацию проектного предложения.',
    difficulty: 1,
    date_start: '2023-09-01',
    date_end: '2023-12-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Освоение инструментов концептуального проектирования средствами комьютеного дизайна',
    customer: '',
    study_result: 'Презентация проектного предложения',
    supervisors: [
      {
        id: 1053,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 33,
          fio: 'Победаш Екатерина Викторовна',
          email: 'viktoriyasha@outlook.com',
          about: '',
          position:
            '246020 Кафедра монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          created_at: '2022-09-04T17:02:45.000000Z',
          updated_at: '2023-09-11T22:50:56.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 123,
        name: 'Активная позиция',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 146,
        name: 'Владеть навыками четкого формулирования запроса на поиск новых знаний',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 217,
        name: 'Формирование проектной концепции',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 339,
        name: 'Уметь выполнять поиск, критический анализ и синтез информации',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5156,
        course: 3,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5157,
        course: 3,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5158,
        course: 4,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5159,
        course: 4,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5160,
        course: 5,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'уточнить',
    rejection_date: '',
    department: {
      id: 49,
      name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: null,
    participations: [],
    created_at: '2023-09-02T19:39:23.000000Z',
    updated_at: '2023-09-07T15:22:23.000000Z',
  },
  {
    id: 873,
    prevProjectId: null,
    title: 'Мост "Победы"',
    places: 0,
    goal: 'Освоить концептуальное проектирование в дизайне средствами компьютерной графики',
    description:
      'В п. Мегет в связи разрушением моста через железную дорогу требуется срочное предложение концепции изготовления и монтажа моста. \nПоселок разделен на две половины, связь между которыми проходит по неприспособленному переезду.  \nПроблема: стоимость установки моста увеличивается из-за оплаты окон для проведения работ, необходимо концептуальное решение проекта и его сборки без остановки движения по железнодорожной ветке ВСЖД. \nПринимаются любые концепции, предложенные студентами.',
    difficulty: 1,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Презентация проекта концептуального дизайн-предложения  с использованием компьютерных программ.',
    customer: 'Администрация п.Мегет',
    study_result:
      'Навык исполнения и подготовки презентации проекта концептуального дизайн-предложения с использованием компьютерных программ.',
    supervisors: [
      {
        id: 1055,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 33,
          fio: 'Победаш Екатерина Викторовна',
          email: 'viktoriyasha@outlook.com',
          about: '',
          position:
            '246020 Кафедра монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          created_at: '2022-09-04T17:02:45.000000Z',
          updated_at: '2023-09-11T22:50:56.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 173,
        name: 'Предлагать нестандартные варианты решения задач',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 217,
        name: 'Формирование проектной концепции',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 410,
        name: 'желание работать в agile-команде',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5166,
        course: 3,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5167,
        course: 3,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5168,
        course: 4,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5169,
        course: 4,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5170,
        course: 5,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'уточнить',
    rejection_date: '',
    department: {
      id: 49,
      name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: null,
    participations: [],
    created_at: '2023-09-02T19:49:01.000000Z',
    updated_at: '2023-09-07T15:22:32.000000Z',
  },
  {
    id: 874,
    prevProjectId: 209,
    title:
      'Проектирование мебели и оборудования как системы формирования комфортной среды',
    places: 0,
    goal: 'Создать проект мебели\n1. Мягкой\n2. Корпусной',
    description:
      'Каждый студент выполнит 1 проект в семестр, лучшие из проектов будут предложены мебельным предприятиям города, а один из них возможно получит патент на промышленный образец.',
    difficulty: 1,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Создать проект 1 предмета мебели в семестр каждым студентом',
    customer: 'Ситуативно',
    study_result:
      'Знания основ проектирования мебели, современных технологий в мебельной промышленности, основных материалов и фурнитуры.',
    supervisors: [
      {
        id: 1056,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 798,
          fio: 'Шолохов Андрей Викторович',
          email: 'mate63@mail.ru',
          about: '',
          position:
            '246020 Кафедра монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          created_at: '',
          updated_at: '2023-09-07T22:00:49.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 411,
        name: 'Эргономика, знание графический и 3-д редакторов',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5171,
        course: 3,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5172,
        course: 3,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'уточнить',
    rejection_date: '',
    department: {
      id: 49,
      name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 4,
      name: 'тематики предприятий и сторонних организаций (в том числе реализуемых в рамках НИР, НИОКР и хоз. договорных работ)',
    },
    participations: [],
    created_at: '2023-09-02T19:52:40.000000Z',
    updated_at: '2023-09-07T15:23:22.000000Z',
  },
  {
    id: 875,
    prevProjectId: 208,
    title:
      'Визуальное решение театральных и культурно массовых  мероприятий (организация среды и системы айдентики)',
    places: 0,
    goal: '1. Создание визуального облика драматического спектакля\n2. Создание визуального облика корпоративного праздника',
    description:
      'Каждый студент создает собственный проект сценографии пьесы по собственному выбору и культурно-массового мероприятия  по теме дипломного проекта',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'сценография драматического спектакля\nвизуальное решение культурно-массового мероприятия',
    customer: 'ситуативно',
    study_result:
      'Знание основ создания визуального облика спектакля и культурно массового мероприятия',
    supervisors: [
      {
        id: 1057,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 798,
          fio: 'Шолохов Андрей Викторович',
          email: 'mate63@mail.ru',
          about: '',
          position:
            '246020 Кафедра монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          created_at: '',
          updated_at: '2023-09-07T22:00:49.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 412,
        name: 'Знание истории, истории моды, 3-д редакторов',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5173,
        course: 4,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5174,
        course: 4,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'уточнить',
    rejection_date: '',
    department: {
      id: 49,
      name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 4,
      name: 'тематики предприятий и сторонних организаций (в том числе реализуемых в рамках НИР, НИОКР и хоз. договорных работ)',
    },
    participations: [],
    created_at: '2023-09-02T20:05:02.000000Z',
    updated_at: '2023-09-07T15:23:12.000000Z',
  },
  {
    id: 876,
    prevProjectId: null,
    title: 'Проектное предложение для оформления входной группы ДШИ п.Мегет',
    places: 0,
    goal: 'Освоить навыки разработки проектного предложения средствами компьютерных программ.',
    description:
      'Проанализировать структуру входной группы здания ДШИ п.Мегет.\nПредложить графическое решение поиска оформления входной группы.\nВыполнить макет входной группы.\nВыполнить визуализацию проектного предложения.\nПодготовить презентацию оформления входной группы ДШИ п.Мегет',
    difficulty: 1,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Презентация проектного предложения для оформления входной группы МБУДО ДШИ п.Мегет',
    customer: '',
    study_result:
      'Применение программных средств растровой/векторной компьютерной  графики для изображения объектов дизайна\nПредставление визуальных образов с  использованием информационных  технологий, ориентируется в  различных графических редакторах\nИспользование технологии трехмерной компьютерной графики для объемно-пространственного моделирования дизайн-объектов\nВыполнение визуализации дизайн проектов в прикладных программах,  синтезируя различные современные \nинформационные технологии',
    supervisors: [
      {
        id: 1058,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 33,
          fio: 'Победаш Екатерина Викторовна',
          email: 'viktoriyasha@outlook.com',
          about: '',
          position:
            '246020 Кафедра монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          created_at: '2022-09-04T17:02:45.000000Z',
          updated_at: '2023-09-11T22:50:56.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 317,
        name: 'желание работать на результат',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 350,
        name: 'Умение работать на результат',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 413,
        name: 'владение навыками композиции и колористики',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5175,
        course: 3,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5176,
        course: 3,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5177,
        course: 4,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5178,
        course: 4,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5179,
        course: 5,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'уточнить',
    rejection_date: '',
    department: {
      id: 49,
      name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: null,
    participations: [],
    created_at: '2023-09-02T20:10:05.000000Z',
    updated_at: '2023-09-07T15:22:06.000000Z',
  },
  {
    id: 877,
    prevProjectId: null,
    title:
      'Проектное решение иконостаса для храма святителя Иннокентия Иркутского, Московского патриархата Российской православной церкви.',
    places: 0,
    goal: 'Освоение средств компьютерного проектирования для объектов культового назначения.',
    description:
      'Исследовать возможные варианты керамических иконостасов.\nИсследовать примеры декора керамических иконостасов в России.\nРазработать проектное предложение для декоративного оформления иконостаса средствами 2d графики.\nВыполнить 3d модель интерьера храма по чертежу.\nВыполнить визуализацию интерьера с проектом иконостаса.\nВыполнить презентацию проектного предложения.',
    difficulty: 1,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Презентации проектного предложение керамического иконостаса, для помещения храма.',
    customer: '',
    study_result:
      'Применение программных средств растровой/векторной компьютерной  графики для изображения объектов дизайна\nПредставление визуальных образов с  использованием информационных  технологий, ориентируется в  различных графических редакторах\nИспользование технологии трехмерной компьютерной графики для объемно-пространственного моделирования дизайн-объектов\nВыполнение визуализации дизайн проектов в прикладных программах,  синтезируя различные современные \nинформационные технологии',
    supervisors: [
      {
        id: 1059,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 33,
          fio: 'Победаш Екатерина Викторовна',
          email: 'viktoriyasha@outlook.com',
          about: '',
          position:
            '246020 Кафедра монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          created_at: '2022-09-04T17:02:45.000000Z',
          updated_at: '2023-09-11T22:50:56.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 136,
        name: 'Уметь использовать различные инструменты поиска и анализа информации',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 147,
        name: 'Владеть навыками выполнения системного анализа полученной информации, выделения «дефицитов» знаний и формулирования запроса на поиск новой информации',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 338,
        name: 'Знать методы сбора и обработки информации с использованием современных информационных технологий',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 339,
        name: 'Уметь выполнять поиск, критический анализ и синтез информации',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 414,
        name: 'интерес к родной культуре',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5180,
        course: 3,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5181,
        course: 3,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5182,
        course: 4,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5183,
        course: 4,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5184,
        course: 5,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'уточнить',
    rejection_date: '',
    department: {
      id: 49,
      name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: null,
    participations: [],
    created_at: '2023-09-02T20:33:40.000000Z',
    updated_at: '2023-09-07T15:21:56.000000Z',
  },
  {
    id: 878,
    prevProjectId: null,
    title:
      'Дизайн принтов для тканей с использованием региональной и корпоративной айдентики.',
    places: 0,
    goal: 'Освоение векторного построения принтов с использованием региональной и корпоративной айдентики.',
    description:
      'Подготовить набор образов и объектов, носителей региональной и корпоративной айдентики, проанализировать его средствами векторной графики, выполнить эскизы двухмерных и трехмерных принтов с использованием раппорта и тесселяции.',
    difficulty: 1,
    date_start: '2024-02-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Альбом примеров двухмерных и трехмерных принтов с использованием региональной и корпоративной айдентики.',
    customer: '',
    study_result:
      'Применение программных средств растровой/векторной компьютерной  графики для изображения объектов дизайна',
    supervisors: [
      {
        id: 1060,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 33,
          fio: 'Победаш Екатерина Викторовна',
          email: 'viktoriyasha@outlook.com',
          about: '',
          position:
            '246020 Кафедра монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          created_at: '2022-09-04T17:02:45.000000Z',
          updated_at: '2023-09-11T22:50:56.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 326,
        name: 'Аккуратность, внимательность, готовность выполнять кропотливую работу',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 413,
        name: 'владение навыками композиции и колористики',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5185,
        course: 3,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5186,
        course: 3,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5187,
        course: 4,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5188,
        course: 4,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5189,
        course: 5,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'отклонить',
    rejection_date: '',
    department: {
      id: 49,
      name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: null,
    participations: [],
    created_at: '2023-09-02T21:55:09.000000Z',
    updated_at: '2023-09-07T15:21:41.000000Z',
  },
  {
    id: 879,
    prevProjectId: null,
    title: 'Создание прототипов для голографических  изображений.',
    places: 0,
    goal: 'Освоить навык создания и подготовки голографических изображений. Разработка плагина для Photoshop с данными требованиями.',
    description:
      'Изучить какие бывают формы голографических изображений.\nНайти способы которыми эти изображения создаются.\nСредствами растрового редактора подготовить статические и динамические варианты рабочих материалов для создания голографических изображений. \nПроверить полученные средства на образцах.\nРазработать свой плагин для перевода обычного изображения в голографическое.\nНайти средства применения и продвижения данного стартапа.',
    difficulty: 1,
    date_start: '2023-09-01',
    date_end: '2023-12-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'Альбом прототипов для голографических изображений и демонстрационные образцы (по возможности).',
    customer: '',
    study_result:
      'Использование навыков работы в растровом редакторе для создания голографических изображений.',
    supervisors: [
      {
        id: 1061,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 33,
          fio: 'Победаш Екатерина Викторовна',
          email: 'viktoriyasha@outlook.com',
          about: '',
          position:
            '246020 Кафедра монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          created_at: '2022-09-04T17:02:45.000000Z',
          updated_at: '2023-09-11T22:50:56.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 136,
        name: 'Уметь использовать различные инструменты поиска и анализа информации',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 176,
        name: 'Умение работать не только головой, но и руками',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 317,
        name: 'желание работать на результат',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 332,
        name: 'обязательность, готовность к исследованиям и поиску оптимального решения',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 351,
        name: 'Поиск информации',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 415,
        name: 'желание продвигать стартап',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5190,
        course: 3,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5191,
        course: 3,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5192,
        course: 4,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5193,
        course: 4,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5194,
        course: 5,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'уточнить',
    rejection_date: '',
    department: {
      id: 49,
      name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: null,
    participations: [],
    created_at: '2023-09-02T22:11:45.000000Z',
    updated_at: '2023-09-07T15:21:30.000000Z',
  },
  {
    id: 900,
    prevProjectId: 208,
    title:
      'визуальное решений театральных и культурно массовых мероприятий в специфике китайской культуры',
    places: 0,
    goal: '1. разработать современное визуальное решение для традиционного китайского театра\n2. Разработать визуальное решение для корпоративного праздника',
    description:
      'Создание законченного  и реализуемого проекта по выбранной теме',
    difficulty: 2,
    date_start: '2023-09-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result:
      'проект визуального решения в соответствии с выбранной темой',
    customer: 'ситуативно',
    study_result:
      'Знания основ и приемов организации пространства и его выразительных возможностей',
    supervisors: [
      {
        id: 1092,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 798,
          fio: 'Шолохов Андрей Викторович',
          email: 'mate63@mail.ru',
          about: '',
          position:
            '246020 Кафедра монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          created_at: '',
          updated_at: '2023-09-07T22:00:49.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 216,
        name: 'Владение  навыками компьютерного моделирования',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5575,
        course: 4,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: 'Уточнить',
    rejection_date: '',
    department: {
      id: 49,
      name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 8,
      state: 'Отклонено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 4,
      name: 'тематики предприятий и сторонних организаций (в том числе реализуемых в рамках НИР, НИОКР и хоз. договорных работ)',
    },
    participations: [],
    created_at: '2023-09-06T22:52:03.000000Z',
    updated_at: '2023-09-07T15:31:59.000000Z',
  },
  {
    id: 903,
    prevProjectId: null,
    title: 'Оформление входной группы для школы Арт-Политех',
    places: 15,
    goal: 'Освоение навыков проектирования оформления входной группы образовательного учреждения',
    description:
      'Проанализировать структуру входной группы и всего здания школы.\r\nПроанализировать особенности деятельности школы\r\nПредложить графическое решение поиска оформления входной группы.\r\nВыполнить макет входной группы.\r\nВыполнить визуализацию проектного предложения.\r\nПодготовить презентацию оформления входной группы.\r\nРассчитать стоимость реализации.\r\nРазработать стратегию реализации и авторского надзора.',
    difficulty: 1,
    date_start: '2024-02-01',
    date_end: '2023-12-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result: 'Оформление входной группы для школы Арт-Политех',
    customer: 'ИрНИТУ',
    study_result: 'Навыки разработки и реализации входной группы здания.',
    supervisors: [
      {
        id: 1095,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
        ],
        supervisor: {
          id: 721,
          fio: 'Свердлов Григорий Викторович',
          email: 'weter30@inbox.ru',
          about: '',
          position: '',
          created_at: '',
          updated_at: '2023-09-12T15:00:53.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1096,
        roles: [
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 33,
          fio: 'Победаш Екатерина Викторовна',
          email: 'viktoriyasha@outlook.com',
          about: '',
          position:
            '246020 Кафедра монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          created_at: '2022-09-04T17:02:45.000000Z',
          updated_at: '2023-09-11T22:50:56.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 224,
        name: 'Corel Draw',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 231,
        name: 'D моделирование (3D MAX)',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5587,
        course: 3,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5588,
        course: 3,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5589,
        course: 4,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5590,
        course: 4,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5591,
        course: 5,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: '',
    rejection_date: '',
    department: {
      id: 49,
      name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 9,
      state: 'Одобрено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: null,
    participations: [],
    created_at: '2023-09-07T14:42:19.000000Z',
    updated_at: '2023-09-08T15:18:58.000000Z',
  },
  {
    id: 916,
    prevProjectId: null,
    title: 'Оформление входной группы для школы "Арт-Политех"',
    places: 0,
    goal: 'Освоение навыков проектирования оформления входной группы образовательного учреждения',
    description:
      'Проанализировать структуру входной группы и всего здания школы.\nПроанализировать особенности деятельности школы\nПредложить графическое решение поиска оформления входной группы.\nВыполнить макет входной группы.\nВыполнить визуализацию проектного предложения.\nПодготовить презентацию оформления входной группы.\nРассчитать стоимость реализации.\nРазработать стратегию реализации и авторского надзора.',
    difficulty: 1,
    date_start: '2023-09-01',
    date_end: '2023-12-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result: 'Проект оформления  входной группы для школы Арт-Политех',
    customer: 'Арт-Политех',
    study_result:
      'Навыки разработки и реализации входной группы здания.\nРабота над проектом в группе  с использованием технологии agile.',
    supervisors: [
      {
        id: 1118,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
        ],
        supervisor: {
          id: 721,
          fio: 'Свердлов Григорий Викторович',
          email: 'weter30@inbox.ru',
          about: '',
          position: '',
          created_at: '',
          updated_at: '2023-09-12T15:00:53.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 1119,
        roles: [
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 33,
          fio: 'Победаш Екатерина Викторовна',
          email: 'viktoriyasha@outlook.com',
          about: '',
          position:
            '246020 Кафедра монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          created_at: '2022-09-04T17:02:45.000000Z',
          updated_at: '2023-09-11T22:50:56.000000Z',
          canReviewProjects: false,
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [
      {
        id: 2,
        name: 'Blender',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 184,
        name: 'MS Excel',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 221,
        name: 'AutoCad',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 223,
        name: 'Adobe',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 224,
        name: 'Corel Draw',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
      {
        id: 392,
        name: '3D-моделирование',
        skillCategory: {
          id: 1,
          name: 'Навыки',
        },
      },
    ],
    specialities: [
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 50,
        name: 'ДИб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 88,
        name: 'МД',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 49,
          name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 5798,
        course: 3,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5799,
        course: 3,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5800,
        course: 4,
        priority: 1,
        speciality: {
          id: 50,
          name: 'ДИб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5801,
        course: 4,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 5802,
        course: 5,
        priority: 1,
        speciality: {
          id: 88,
          name: 'МД',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 49,
            name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: '',
    rejection_date: '',
    department: {
      id: 49,
      name: 'Монументально-декоративной живописи и дизайна им. В.Г. Смагина',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 6,
      state: 'На рассмотрении',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: null,
    participations: [],
    created_at: '2023-09-09T20:02:50.000000Z',
    updated_at: '2023-09-09T20:02:50.000000Z',
  },
  {
    id: 804,
    prevProjectId: 518,
    title:
      'Пространственная база данных ценной застройки г. Иркутска советского периода',
    places: 15,
    goal: 'Формирование базы данных  для поиска текстовой и графической информации об объектах архитектуры',
    description:
      'Идея проекта заключается в оцифровке и создании наглядного предоставления информации о ценной застройке Иркутска советского периода.',
    difficulty: 2,
    date_start: '2024-02-01',
    date_end: '2024-05-30',
    requirements: 'requirements',
    additional_inf: 'additional_inf',
    product_result: 'Интерактивная карта',
    customer:
      'Служба по охране объектов культурного наследия Иркутской области',
    study_result:
      'Визуализация, редактирование и анализ сведений об архитектуре Иркутска',
    supervisors: [
      {
        id: 954,
        roles: [
          {
            id: 2,
            name: 'Руководитель',
          },
          {
            id: 1,
            name: 'Создатель задания',
          },
        ],
        supervisor: {
          id: 23,
          fio: 'Сыроежкина Мария Александровна',
          email: 'marbrest@gmail.com',
          about: '',
          position:
            '246170 Кафедра рисунка, основ проектирования и историко-архитектурного наследия',
          created_at: '2022-06-11T20:09:47.000000Z',
          updated_at: '2023-09-09T11:33:33.000000Z',
          canReviewProjects: false,
          department: {
            id: 50,
            name: 'Рисунка, основ проектирования и историко-архитектурного наследия',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 955,
        roles: [
          {
            id: 3,
            name: 'Сонаставник',
          },
        ],
        supervisor: {
          id: 707,
          fio: 'Прокудин Александр Николаевич',
          email: 'a.n.pro@yandex.ru',
          about: '',
          position: '',
          created_at: '',
          updated_at: '2023-09-12T15:00:53.000000Z',
          canReviewProjects: false,
          department: {
            id: 50,
            name: 'Рисунка, основ проектирования и историко-архитектурного наследия',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    skills: [],
    specialities: [
      {
        id: 10,
        name: 'РРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 50,
          name: 'Рисунка, основ проектирования и историко-архитектурного наследия',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
      {
        id: 10,
        name: 'РРб',
        institute: {
          id: 5,
          name: 'Институт архитектуры, строительства и дизайна',
          maxApprovedProjects: 68,
        },
        department: {
          id: 50,
          name: 'Рисунка, основ проектирования и историко-архитектурного наследия',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
        },
      },
    ],
    project_specialities: [
      {
        id: 4308,
        course: 4,
        priority: 1,
        speciality: {
          id: 10,
          name: 'РРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 50,
            name: 'Рисунка, основ проектирования и историко-архитектурного наследия',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
      {
        id: 4309,
        course: 5,
        priority: 1,
        speciality: {
          id: 10,
          name: 'РРб',
          institute: {
            id: 5,
            name: 'Институт архитектуры, строительства и дизайна',
            maxApprovedProjects: 68,
          },
          department: {
            id: 50,
            name: 'Рисунка, основ проектирования и историко-архитектурного наследия',
            institute: {
              id: 5,
              name: 'Институт архитектуры, строительства и дизайна',
              maxApprovedProjects: 68,
            },
          },
        },
      },
    ],
    supervisorsNames: '',
    rejection_reason: '',
    rejection_date: '',
    department: {
      id: 50,
      name: 'Рисунка, основ проектирования и историко-архитектурного наследия',
      institute: {
        id: 5,
        name: 'Институт архитектуры, строительства и дизайна',
        maxApprovedProjects: 68,
      },
    },
    state: {
      id: 9,
      state: 'Одобрено',
    },
    type: {
      id: 1,
      type: 'Прикладной',
    },
    theme_source: {
      id: 4,
      name: 'тематики предприятий и сторонних организаций (в том числе реализуемых в рамках НИР, НИОКР и хоз. договорных работ)',
    },
    participations: [],
    created_at: '2023-07-03T18:15:39.000000Z',
    updated_at: '2023-07-11T16:48:32.000000Z',
  },
];
