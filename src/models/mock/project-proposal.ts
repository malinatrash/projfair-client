import { CreatedProjectProposal } from '../ProjectProposal';
import { Tag } from '../Tag';
import mockProjectProposals from './mockProjectProposals.json';

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

export const mockProjectProposalList: CreatedProjectProposal[] =
  mockProjectProposals as CreatedProjectProposal[];
