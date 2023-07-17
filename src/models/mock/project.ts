import { ProjectListResponse } from '@/api/ProjectApi/ProjectApiType';
import { ParticipationState } from '../Participation';
import { Project, ProjectType } from '../Project';
import { ProjectState, ProjectStateID } from '../ProjectState';
import { State } from '../State';
import { candidateList, userCandidate } from './candidate';
import { skills } from './project-skills';
import { projectSupervisorList } from './project-supervisor';

// состояния проектов вынесенные в переменные для переиспользования в "mockProjectList", используется в режиме отладки
const recruitingState: ProjectState = {
  state: 'идёт набор',
  id: ProjectStateID.RecruitingState,
};
const activeState: ProjectState = {
  state: 'активный',
  id: ProjectStateID.ActiveState,
};
const extraState: ProjectState = {
  state: 'добор',
  id: ProjectStateID.ExtraState,
};
const archivedState: ProjectState = {
  state: 'в архиве',
  id: ProjectStateID.ArchivedState,
};
const processingState: ProjectState = {
  state: 'обработка заявок',
  id: ProjectStateID.ProcessingState,
};

export const activeParticipationState: State<ParticipationState> = {
  id: ParticipationState.Active,
  state: 'активный',
};

// массив всех состояний проекта, используется в режиме отладки
export const states: ProjectState[] = [
  recruitingState,
  activeState,
  extraState,
  archivedState,
  processingState,
];

// массив всех типов проекта, используется в режиме отладки
export const types: ProjectType[] = [
  {
    id: 1,
    type: 'Прикладной',
  },
];

// массив фейковых проектов, используется в режиме отладки
export const mockProjectList: Project[] = [
  {
    date_end: '2021-06-01',
    prevProjectId: null,
    date_start: '2021-01-29',
    description:
      'Проводимые в ИРНИТУ мероприятия различаются продолжительностью времени, необходимого для их подготовки, и пакетом оформляемых документов. На этапе подготовки мероприятия организаторы иногда упускают из вида некоторые факторы, значимые при составлении сметы и формирования других документов, необходимых для беспроблемного проведения мероприятия. Разработанная «дорожная карта» должна давать организаторам исчерпывающую информацию о каждом шаге подготовки мероприятия',
    difficulty: 2,
    goal: 'Автоматизированная «дорожная карта» подготовки и проведения мероприятий в ИРНИТУ',
    id: 1,
    specialities: [
      { id: 2, name: 'НвГДСз', department: null, institute: null },
      { id: 4, name: 'ЭВМ', department: null, institute: null },
      { id: 3, name: 'ИСТб', department: null, institute: null },
    ],
    participations: [
      {
        id: 100,
        candidate: userCandidate,
        created_at: '2022-11-12T08:10:37.891Z',
        updated_at: '2022-11-12T08:10:37.891Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '100',
        rating: 0,
      },
      {
        id: 1,
        candidate: candidateList[0],
        created_at: '2022-06-01T04:58:25.177Z',
        updated_at: '2022-06-01T04:58:25.177Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '1',
        rating: 1,
      },
      {
        id: 2,
        candidate: candidateList[1],
        created_at: '2022-06-01T05:06:43.792Z',
        updated_at: '2022-06-01T05:06:43.792Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '2',
        rating: 2,
      },
      {
        id: 3,
        candidate: candidateList[2],
        created_at: '2022-06-01T05:01:58.261Z',
        updated_at: '2022-06-01T05:01:58.261Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '3',
        rating: 3,
      },
      {
        id: 4,
        candidate: candidateList[3],
        created_at: '2022-06-01T04:58:25.177Z',
        updated_at: '2022-06-01T04:58:25.177Z',
        priority: 2,
        project_id: 1,
        state: activeParticipationState,
        review: '4',
        rating: 4,
      },
      {
        id: 5,
        candidate: candidateList[4],
        created_at: '2022-06-01T05:34:01.738Z',
        updated_at: '2022-06-01T05:34:01.738Z',
        priority: 2,
        project_id: 1,
        state: activeParticipationState,
        review: '5',
        rating: 5,
      },
    ],
    participants: [
      userCandidate,
      candidateList[0],
      candidateList[1],
      candidateList[2],
    ],
    places: 4,
    product_result:
      'Автоматизированная «дорожная карта» подготовки и проведения мероприятий в ИРНИТУ, адаптированная под разные их виды',
    requirements:
      'ПМб 38.03.02 Менеджмент Производственный менеджмент, УПб 38.03.02 Менеджмент Управление проектами',
    skills: [skills[0], skills[1], skills[2]],
    state: activeState,
    study_result:
      'Знания: эффективное делопроизводства в современных условиях функционирования организации Умения: отладка процессов эффективного движения документов внутри организации Навыки: грамотного распределения времени и ресурсов для нормального функционирования организации',
    supervisors: projectSupervisorList.slice(0, 2),
    supervisorsNames: '',
    title:
      'Разработка автоматизированной «дорожной карты» подготовки и проведения мероприятий в ИРНИТУ',
    type: {
      id: 1,
      type: 'Прикладной',
    },
    participant_feedback: '',
    result_description: '',
    result_goal: undefined,
  },
  {
    date_end: '2021-06-01',
    prevProjectId: 1,
    date_start: '2021-01-29',
    description:
      'Проводимые в ИРНИТУ мероприятия различаются продолжительностью времени, необходимого для их подготовки, и пакетом оформляемых документов. На этапе подготовки мероприятия организаторы иногда упускают из вида некоторые факторы, значимые при составлении сметы и формирования других документов, необходимых для беспроблемного проведения мероприятия. Разработанная «дорожная карта» должна давать организаторам исчерпывающую информацию о каждом шаге подготовки мероприятия',
    difficulty: 2,
    goal: 'Автоматизированная «дорожная карта» подготовки и проведения мероприятий в ИРНИТУ',
    id: 40,
    specialities: [
      { id: 2, name: 'НвГДСз', department: null, institute: null },
      { id: 4, name: 'ЭВМ', department: null, institute: null },
      { id: 3, name: 'ИСТб', department: null, institute: null },
    ],
    participations: [
      {
        id: 100,
        candidate: userCandidate,
        created_at: '2022-11-12T08:10:37.891Z',
        updated_at: '2022-11-12T08:10:37.891Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
      {
        id: 1,
        candidate: candidateList[0],
        created_at: '2022-06-01T04:58:25.177Z',
        updated_at: '2022-06-01T04:58:25.177Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
      {
        id: 2,
        candidate: candidateList[1],
        created_at: '2022-06-01T05:06:43.792Z',
        updated_at: '2022-06-01T05:06:43.792Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
      {
        id: 3,
        candidate: candidateList[2],
        created_at: '2022-06-01T05:01:58.261Z',
        updated_at: '2022-06-01T05:01:58.261Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
      {
        id: 4,
        candidate: candidateList[3],
        created_at: '2022-06-01T04:58:25.177Z',
        updated_at: '2022-06-01T04:58:25.177Z',
        priority: 2,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
      {
        id: 5,
        candidate: candidateList[4],
        created_at: '2022-06-01T05:34:01.738Z',
        updated_at: '2022-06-01T05:34:01.738Z',
        priority: 2,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
    ],
    participants: [userCandidate, candidateList[0], candidateList[1]],
    places: 4,
    product_result:
      'Автоматизированная «дорожная карта» подготовки и проведения мероприятий в ИРНИТУ, адаптированная под разные их виды',
    requirements:
      'ПМб 38.03.02 Менеджмент Производственный менеджмент, УПб 38.03.02 Менеджмент Управление проектами',
    skills: [skills[0], skills[1], skills[2]],
    state: recruitingState,
    study_result:
      'Знания: эффективное делопроизводства в современных условиях функционирования организации Умения: отладка процессов эффективного движения документов внутри организации Навыки: грамотного распределения времени и ресурсов для нормального функционирования организации',
    supervisors: projectSupervisorList.slice(0, 2),
    supervisorsNames: '',
    title:
      'Разработка автоматизированной «дорожной карты» подготовки и проведения мероприятий в ИРНИТУ',
    type: {
      id: 1,
      type: 'Прикладной',
    },
    participant_feedback: '',
    result_description: '',
    result_goal: undefined,
  },
  {
    date_end: '2021-06-01',
    prevProjectId: 40,
    date_start: '2021-01-29',
    description:
      'Проводимые в ИРНИТУ мероприятия различаются продолжительностью времени, необходимого для их подготовки, и пакетом оформляемых документов. На этапе подготовки мероприятия организаторы иногда упускают из вида некоторые факторы, значимые при составлении сметы и формирования других документов, необходимых для беспроблемного проведения мероприятия. Разработанная «дорожная карта» должна давать организаторам исчерпывающую информацию о каждом шаге подготовки мероприятия',
    difficulty: 2,
    goal: 'Автоматизированная «дорожная карта» подготовки и проведения мероприятий в ИРНИТУ',
    id: 41,
    specialities: [
      { id: 2, name: 'НвГДСз', department: null, institute: null },
      { id: 4, name: 'ЭВМ', department: null, institute: null },
      { id: 3, name: 'ИСТб', department: null, institute: null },
    ],
    participations: [
      {
        id: 100,
        candidate: userCandidate,
        created_at: '2022-11-12T08:10:37.891Z',
        updated_at: '2022-11-12T08:10:37.891Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
      {
        id: 1,
        candidate: candidateList[0],
        created_at: '2022-06-01T04:58:25.177Z',
        updated_at: '2022-06-01T04:58:25.177Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
      {
        id: 2,
        candidate: candidateList[1],
        created_at: '2022-06-01T05:06:43.792Z',
        updated_at: '2022-06-01T05:06:43.792Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
      {
        id: 3,
        candidate: candidateList[2],
        created_at: '2022-06-01T05:01:58.261Z',
        updated_at: '2022-06-01T05:01:58.261Z',
        priority: 1,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
      {
        id: 4,
        candidate: candidateList[3],
        created_at: '2022-06-01T04:58:25.177Z',
        updated_at: '2022-06-01T04:58:25.177Z',
        priority: 2,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
      {
        id: 5,
        candidate: candidateList[4],
        created_at: '2022-06-01T05:34:01.738Z',
        updated_at: '2022-06-01T05:34:01.738Z',
        priority: 2,
        project_id: 1,
        state: activeParticipationState,
        review: '',
        rating: 0,
      },
    ],
    participants: [userCandidate, candidateList[0], candidateList[1]],
    places: 4,
    product_result:
      'Автоматизированная «дорожная карта» подготовки и проведения мероприятий в ИРНИТУ, адаптированная под разные их виды',
    requirements:
      'ПМб 38.03.02 Менеджмент Производственный менеджмент, УПб 38.03.02 Менеджмент Управление проектами',
    skills: [skills[0], skills[1], skills[2]],
    state: archivedState,
    study_result:
      'Знания: эффективное делопроизводства в современных условиях функционирования организации Умения: отладка процессов эффективного движения документов внутри организации Навыки: грамотного распределения времени и ресурсов для нормального функционирования организации',
    supervisors: projectSupervisorList.slice(0, 2),
    supervisorsNames: '',
    title:
      'Разработка автоматизированной «дорожной карты» подготовки и проведения мероприятий в ИРНИТУ',
    type: {
      id: 1,
      type: 'Прикладной',
    },
    participant_feedback: '',
    result_description: '',
    result_goal: undefined,
  },
  {
    date_end: '2021-06-01',
    prevProjectId: 41,
    date_start: '2021-01-29',
    description:
      'Проанализировать базу данных параметров потребителя, которую собирает ИЭСБК, оценить, какими данными еще стоит ее наполнить и из каких источников (внешних/внутренних); разработать методику формирования профиля потребителя; сформировать типы профилей и их характеристики; провести сегментацию всех потребителей по профилям; разработать методику/набор инструментов для взаимодействия (в части контроля и взыскания задолженности) с потребителем в зависимости от его профиля',
    difficulty: 3,
    goal: 'На основе данных ИЭСБК создать профиль потребителя энергоресурсов',
    id: 2,
    participations: [],
    participants: [],
    specialities: [
      { id: 2, name: 'НвГДСз', department: null, institute: null },
      { id: 3, name: 'ИСТб', department: null, institute: null },
    ],
    places: 12,
    product_result:
      'Разработан набор характеристик каждого профиля, алгоритм дополнения БД недостающими характеристиками, критерии кластеризации потребителей по профилям',
    requirements: 'Работа ПО MS Office',
    skills: skills,
    state: archivedState,
    study_result:
      'Знать: особенности потребителя энергетической продукции, причины недополучения платы за энергоуслуги. Уметь: анализировать базы данных, синтезировать информацию Владеть навыками командной работы при решении проблемных ситуаций',
    supervisors: projectSupervisorList.slice(2, 3),
    supervisorsNames: '',
    title: 'Профиль потребителя энергоресурсов',
    type: {
      id: 1,
      type: 'Прикладной',
    },
    participant_feedback: '',
    result_description: '',
    result_goal: undefined,
  },
  {
    date_end: '2021-06-01',
    prevProjectId: 2,
    date_start: '2021-01-29',
    description:
      'Забота о благополучии сотрудников – это выгодные инвестиции в управление производительностью, повышение конкурентоспособности и корпоративной культуры компании. Подобные стратегии полезны для крупного, малого и среднего бизнеса, который нацелен привлекать и удерживать ценные кадры, а также максимально раскрывать их потенциал в работе на благо компании',
    difficulty: 3,
    goal: 'Применение знаний и получение навыков в организации работы предприятия',
    id: 3,
    participations: [],
    participants: [],
    specialities: [
      { id: 1, name: 'НГДСз', department: null, institute: null },
      { id: 3, name: 'ИСТб', department: null, institute: null },
    ],
    places: 12,
    product_result:
      'Создание мобильного приложения по Well-being в стиле Agile, с возможностью дополнения инициатив в виде конструктора',
    requirements: '',
    skills: [skills[2], skills[6], skills[5]],
    state: processingState,
    study_result:
      'Знания: знать методы сбора, анализа, систематизации, хранения информации предприятия Умения: уметь, в соответствии с поставленной задачей, выявлять критерии оценки и отбора информации Навыки: владеть способами получения информации из различных источников',
    supervisors: projectSupervisorList.slice(2, 3),
    supervisorsNames: '',
    title:
      'Создание корпоративной программы благополучия сотрудников «Well-being» (мобильная версия)',
    type: {
      id: 1,
      type: 'Прикладной',
    },
    participant_feedback: '',
    result_description: '',
    result_goal: undefined,
  },
  {
    date_end: '2021-06-01',
    prevProjectId: null,
    date_start: '2021-01-29',
    description:
      'Проблема заключается в противоречии между возрастающим значением инновационных технологий и сохраняющейся слабостью механизмов коммерциализации знаний и инновационных разработок в России. Образовательные и научные организации чаще всего сталкиваются с низким уровнем обладания предпринимательскими способностями, которые к тому же неравномерно распределены среди научных работников. В этих условиях важно оценить влияние предпринимательских качеств на профессиональные достижения, финансовое вознаграждение и нематериальную «выгоду» научных работников',
    difficulty: 2,
    goal: 'Исследование влияния предпринимательских качеств на профессиональные достижения, финансовое вознаграждение и нематериальную «выгоду» научных работников',
    id: 4,
    participations: [],
    participants: [],
    specialities: [{ id: 1, name: 'НГДСз', department: null, institute: null }],
    places: 12,
    product_result:
      'Практические рекомендации по развитию определённых soft skills у различных категорий научных работников',
    requirements: '',
    skills: [skills[2], skills[5]],
    state: recruitingState,
    study_result:
      'Знания: методов проведения исследований, понятий предмета и объекта исследования Умения: постановка цели и задач исследования, определение предмета и объекта, актуальности темы исследования, выдвижение и проверка гипотезы исследования Навыки: подбор и изучение источников, обработка и анализ полученной информации, формирование результата исследования',
    supervisors: projectSupervisorList.slice(2, 4),
    supervisorsNames: '',
    title: 'Предпринимательские качества у научных работников',
    type: {
      id: 1,
      type: 'Прикладной',
    },
    participant_feedback: '',
    result_description: '',
    result_goal: undefined,
  },
  {
    date_end: '2021-06-01',
    prevProjectId: null,
    date_start: '2021-01-29',
    description:
      'Стратегия необходима, поскольку будущее в основном непредсказуемо, абсолютной определенности относительно будущего нет. Современный темп изменений во внешней среде, увеличение количества знаний и информационных потоков настолько велики, что планирование стратегии представляется единственным способом формального прогнозирования будущих проблем и возможностей.Основой развития территориальной социально-экономической системы выступает ее потенциал, представляющий собой совокупные возможности, способности, скрытые не реализованные резервы экономической системы. При этом стратегическое управление предполагает выбор из всей совокупности структурных составляющих потенциала развития территориальной социально-экономической системы ключевых, концентрация на которых позволит достичь максимальных долгосрочных результатов с учетом ограниченных ресурсов территории',
    difficulty: 3,
    goal: 'Стратегическое управление ключевыми потенциалами развития территориальных социально-экономических систем',
    id: 5,
    participations: [],
    participants: [],
    specialities: [{ id: 1, name: 'НГДСз', department: null, institute: null }],
    places: 12,
    product_result:
      'Создание мобильного приложения по Well-being в стиле Agile, с возможностью дополнения инициатив в виде конструктора',
    requirements: 'Навыки анализа и интерпретации данных',
    skills: [skills[2]],
    state: recruitingState,
    study_result:
      'Знания: знать методы сбора, анализа, систематизации, хранения информации предприятия Умения: уметь, в соответствии с поставленной задачей, выявлять критерии оценки и отбора информации Навыки: владеть способами получения информации из различных источников',
    supervisors: projectSupervisorList.slice(2, 4),
    supervisorsNames: '',
    title:
      'Стратегическое управление ключевыми потенциалами развития территориальных социально-экономических систем',
    type: {
      id: 1,
      type: 'Прикладной',
    },
    participant_feedback: '',
    result_description: '',
    result_goal: undefined,
  },
  {
    date_end: '2021-06-01',
    prevProjectId: null,
    date_start: '2021-01-29',
    description: 'Забота о благополучии сотрудников – это выгодные инвестиции',
    difficulty: 3,
    goal: 'Применение знаний и получение навыков в организации работы предприятия',
    id: 6,
    participations: [],
    participants: [],
    specialities: [{ id: 1, name: 'НГДСз', department: null, institute: null }],
    places: 12,
    product_result:
      'Создание мобильного приложения по Well-being в стиле Agile, с возможностью дополнения инициатив в виде конструктора',
    requirements: '',
    skills: [skills[2], skills[6], skills[5]],
    state: recruitingState,
    study_result:
      'Знания: знать методы сбора, анализа, систематизации, хранения информации предприятия Умения: уметь, в соответствии с поставленной задачей, выявлять критерии оценки и отбора информации Навыки: владеть способами получения информации из различных источников',
    supervisors: projectSupervisorList.slice(2, 4),
    supervisorsNames: '',
    title:
      'Создание корпоративной программы благополучия сотрудников «Well-being» (мобильная версия)',
    type: {
      id: 1,
      type: 'Прикладной',
    },
    participant_feedback: '',
    result_description: '',
    result_goal: undefined,
  },
  {
    date_end: '2021-06-01',
    prevProjectId: null,
    date_start: '2021-01-29',
    description: 'Забота о благополучии сотрудников – это выгодные инвестиции',
    difficulty: 2,
    goal: 'Разработка развлекательных, познавательных и научных материалов в социальных сетях ИРНИТУ. ',
    id: 7,
    participations: [],
    participants: [],
    specialities: [{ id: 1, name: 'НГДСз', department: null, institute: null }],
    places: 12,
    product_result:
      'Короткометражные повторяющиеся и не повторяющиеся видеопередачи (выпуски), юмористического и познавательного содержания, призванные привлекать внимание целевых и потенциальных целевых групп.',
    requirements:
      'Активная позиция, творческие навыки, желание работать в коллективе, знание программ по обработке и монтажу видео',
    skills: [skills[2], skills[6], skills[5], skills[3]],
    state: activeState,
    study_result:
      'Знания: получает новые знания о сути и ходе реализации проекта, о его специфических свойствах и способах работы с видеоматериалом. Умения: использовать полученные навыки в ходе обучения для создания качественного видеоконтента;Навыки: Способен создавать  качественный развлекательный или образовательный продукт, востребованный обществом и индустрией.',
    supervisors: projectSupervisorList.slice(2, 4),
    supervisorsNames: '',
    title: '«Продвижение ИРНИТУ в социальных сетях»',
    type: {
      id: 1,
      type: 'Прикладной',
    },
    participant_feedback: '',
    result_description: '',
    result_goal: undefined,
  },
  {
    date_end: '2021-06-01',
    prevProjectId: null,
    date_start: '2021-01-29',
    description: 'Забота о благополучии сотрудников – это выгодные инвестиции',
    difficulty: 2,
    goal: 'Разработка развлекательных, познавательных и научных материалов в социальных сетях ИРНИТУ. ',
    id: 8,
    participations: [],
    participants: [userCandidate],
    specialities: [{ id: 1, name: 'НГДСз', department: null, institute: null }],
    places: 12,
    product_result:
      'Короткометражные повторяющиеся и не повторяющиеся видеопередачи (выпуски), юмористического и познавательного содержания, призванные привлекать внимание целевых и потенциальных целевых групп.',
    requirements:
      'Активная позиция, творческие навыки, желание работать в коллективе, знание программ по обработке и монтажу видео',
    skills: [skills[2], skills[6], skills[5], skills[6]],
    state: archivedState,
    study_result:
      'Знания: получает новые знания о сути и ходе реализации проекта, о его специфических свойствах и способах работы с видеоматериалом. Умения: использовать полученные навыки в ходе обучения для создания качественного видеоконтента;Навыки: Способен создавать  качественный развлекательный или образовательный продукт, востребованный обществом и индустрией.',
    supervisors: projectSupervisorList.slice(2, 4),
    supervisorsNames: '',
    title: 'Подготовка хрестоматии по трудовому праву',
    type: {
      id: 1,
      type: 'Прикладной',
    },
    participant_feedback: `
      Студент-практикант Ф.И.О. в период с 29.06.2015 г. по 12.07.2015 г.
      проходил учебно-ознакомительную практику в магазине ООО «Центральное»,
      расположенном по адресу: г. Южно-Сахалинск, ул. Ленина 218 в качестве
      помощника руководителя.

      В течение всего периода практики, Ф.И.О. внимательно и ответственно
      относился к выполняемой работе. Изучал методы управления и основные методы
      мотивации персонала, должностные обязанности персонала, пробовал проводить
      анализ хозяйственной деятельности организации за последние три года,
      ознакомился с порядком ведения различных распорядительных документов,
      учетной документации, изучал организационную структуру предприятия,
      участвовал в различной повседневной работе.

      Всю порученную работу выполнял добросовестно и в срок. Стремился
      приобретать новые знания, чтобы быть ещё более полезным на месте практики.
      Неоднократно оказывал помощь сотрудникам организации. Руководство
      организации оценивают работу Ф.И.О. на «отлично».

      Замечаний по прохождению практики к Ф.И.О. нет.
    `,
    result_description: '',
    result_goal: undefined,
  },
];

export const projectListResponse: ProjectListResponse = {
  projectCount: mockProjectList.length,
  data: mockProjectList,
};
