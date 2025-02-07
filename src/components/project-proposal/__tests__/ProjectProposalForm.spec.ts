import { mount } from '@vue/test-utils';
import {
  ProjectDuration,
  ProjectProposalFormValue,
} from '@/models/components/ProjectProposalForm';
import { getAcademicYear } from '@/helpers/date';
import {
  getDropdownValue,
  getInput,
  getInputValue,
  getRadioButton,
  getRadioButtonValue,
} from '@/helpers/tests';
import { ProjectDifficulty } from '@/models/ProjectDifficulty';
import { MemberRole } from '@/models/ProjectProposal';
import ProjectProposalForm from '../ProjectProposalForm.vue';

describe('ProjectProposalForm.vue', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });
  });

  describe(':props', () => {
    it('данные правильно устанавливаются в поля ввода', async () => {
      const projectProposalFormValue: ProjectProposalFormValue = {
        isNewProject: true,
        prevProjectId: null,
        projectName: 'projectName',
        projectGoal: 'projectGoal',
        projectCustomer: 'projectCustomer',
        projectThemeSourceId: 1,
        projectDuration: ProjectDuration.FallSemester,
        projectDifficulty: ProjectDifficulty.Low,
        skillsToBeFormed: 'skillsToBeFormed',
        projectExpectedResult: 'projectExpectedResult',
        projectDescription: 'projectDescription',
        specialtyList: [],
        additionalSpecialtyList: [],
        skillList: [],
        team: [
          {
            isCurrentUser: true,
            role: MemberRole.Mentor,
            memberData: {
              id: 1,
              fio: 'Антон',
              email: 'some-email@gmail.com',
              position: 'руководитель проекта',
              about: '',
              department: {
                id: 1,
                institute: {
                  id: 1,
                  maxApprovedProjects: 10,
                  maxSpringApprovedProjects: 100,
                  maxAutumnApprovedProjects: 100,
                  name: 'instituteName1',
                },
                name: 'departmentName1',
              },
            },
          },
          {
            isCurrentUser: false,
            role: MemberRole.JobDeveloper,
            memberData: {
              id: 2,
              fio: 'Валера',
              email: 'some-email@gmail.com',
              position: 'руководитель проекта',
              about: '',
              department: {
                id: 2,
                institute: {
                  id: 2,
                  maxApprovedProjects: 10,
                  maxSpringApprovedProjects: 100,
                  maxAutumnApprovedProjects: 100,
                  name: 'instituteName2',
                },
                name: 'departmentName2',
              },
            },
          },
        ],
        sharedRoleList: [MemberRole.CoMentor],
        currentUserRoleList: [MemberRole.Mentor],
      };
      const wrapper = mount(ProjectProposalForm, {
        props: {
          projectProposalFormValue,
          canUserEdit: true,
          isLoading: false,
          prevProjectList: [],
          supervisorList: [],
          projectSkillList: [],
          specialtyList: [],
          themeSourceList: [
            { id: 1, name: 'themeSourceList1' },
            { id: 2, name: 'themeSourceList2' },
          ],
          projectJobDeveloper: 'projectJobDeveloper',
        },
      });
      expect(wrapper.exists()).toBeTruthy();

      // Тип проекта
      expect(
        getRadioButtonValue(wrapper, 'isNewProjectRadioButton'),
      ).toBeTruthy();
      expect(
        getRadioButtonValue(wrapper, 'isOldProjectRadioButton'),
      ).toBeFalsy();
      // Название проекта
      expect(getInputValue(wrapper, 'projectName')).toBe(
        projectProposalFormValue.projectName,
      );
      // Цель проекта
      expect(getInputValue(wrapper, 'projectGoal')).toBe(
        projectProposalFormValue.projectGoal,
      );
      // Заказчик
      expect(getInputValue(wrapper, 'projectCustomer')).toBe(
        projectProposalFormValue.projectCustomer,
      );
      // Источник темы
      expect(getDropdownValue(wrapper, 'projectThemeSource')).toBe(
        'themeSourceList1',
      );
      // Проект для продолжения
      expect(getDropdownValue(wrapper, 'prevProject')).toBe('');
      // Длительность проекта
      expect(
        getRadioButtonValue(wrapper, 'projectDurationFallRadioButton'),
      ).toBeTruthy();
      expect(
        getRadioButtonValue(wrapper, 'projectDurationSpringRadioButton'),
      ).toBeFalsy();
      expect(
        getRadioButtonValue(wrapper, 'projectDurationFullYearRadioButton'),
      ).toBeFalsy();
      // Сложность проекта
      expect(
        getRadioButtonValue(wrapper, 'projectDifficultyLowRadioButton'),
      ).toBeTruthy();
      expect(
        getRadioButtonValue(wrapper, 'projectDifficultyMediumRadioButton'),
      ).toBeFalsy();
      expect(
        getRadioButtonValue(wrapper, 'projectDifficultyHighRadioButton'),
      ).toBeFalsy();
      // Разработчик проекта
      expect(getInputValue(wrapper, 'projectJobDeveloper')).toBe(
        'projectJobDeveloper',
      );
      // Подразделение, к которому будет привязан проект
      expect(getInputValue(wrapper, 'projectDepartment')).toBe(
        'departmentName1',
      );
      // Ожидаемый результат
      expect(getInputValue(wrapper, 'projectExpectedResult')).toBe(
        projectProposalFormValue.projectExpectedResult,
      );
      // Формируемые навыки
      expect(getInputValue(wrapper, 'skillsToBeFormed')).toBe(
        projectProposalFormValue.skillsToBeFormed,
      );
      // Описание проекта
      expect(getInputValue(wrapper, 'projectDescription')).toBe(
        projectProposalFormValue.projectDescription,
      );
    });
  });

  describe('@emits', () => {
    it('данные обновляются при обновлении инпутов', async () => {
      const projectProposalFormValue: ProjectProposalFormValue = {
        isNewProject: true,
        prevProjectId: null,
        projectName: 'projectName',
        projectGoal: 'projectGoal',
        projectCustomer: 'projectCustomer',
        projectThemeSourceId: 1,
        projectDuration: getAcademicYear(new Date().getMonth()).isSpring()
          ? ProjectDuration.SpringSemester
          : ProjectDuration.FallSemester,
        projectDifficulty: ProjectDifficulty.Low,
        skillsToBeFormed: 'skillsToBeFormed',
        projectExpectedResult: 'projectExpectedResult',
        projectDescription: 'projectDescription',
        specialtyList: [],
        additionalSpecialtyList: [],
        skillList: [],
        team: [],
        sharedRoleList: [MemberRole.CoMentor],
        currentUserRoleList: [MemberRole.Mentor],
      };
      const wrapper = mount(ProjectProposalForm, {
        props: {
          projectProposalFormValue,
          canUserEdit: true,
          isLoading: false,
          prevProjectList: [],
          supervisorList: [],
          projectSkillList: [],
          specialtyList: [],
          themeSourceList: [
            { id: 1, name: 'themeSourceList1' },
            { id: 2, name: 'themeSourceList2' },
          ],
          projectJobDeveloper: 'projectJobDeveloper',
        },
      });
      const projectNameInput = getInput(wrapper, 'projectName');
      const projectGoalInput = getInput(wrapper, 'projectGoal');
      const projectCustomerInput = getInput(wrapper, 'projectCustomer');
      const isOldProjectRadioButton = getRadioButton(
        wrapper,
        'isOldProjectRadioButton',
      );
      const projectDurationFullYearRadioButton = getRadioButton(
        wrapper,
        'projectDurationFullYearRadioButton',
      );
      const projectDifficultyHighRadioButton = getRadioButton(
        wrapper,
        'projectDifficultyHighRadioButton',
      );
      const projectExpectedResultInput = getInput(
        wrapper,
        'projectExpectedResult',
      );
      const skillsToBeFormedInput = getInput(wrapper, 'skillsToBeFormed');
      const projectDescriptionInput = getInput(wrapper, 'projectDescription');

      await projectNameInput.setValue('новый projectName');
      await projectGoalInput.setValue('новый projectGoal');
      await projectCustomerInput.setValue('новый projectCustomer');
      await isOldProjectRadioButton.setValue(true);
      await projectDurationFullYearRadioButton.setValue(true);
      await projectDifficultyHighRadioButton.setValue(true);
      await projectExpectedResultInput.setValue('новый projectExpectedResult');
      await skillsToBeFormedInput.setValue('новый skillsToBeFormed');
      await projectDescriptionInput.setValue('новый projectDescription');

      expect(wrapper.vm.projectProposalFormValue).toEqual({
        ...projectProposalFormValue,
        projectName: 'новый projectName',
        projectGoal: 'новый projectGoal',
        projectCustomer: 'новый projectCustomer',
        projectDuration: getAcademicYear(new Date().getMonth()).isSpring()
          ? ProjectDuration.SpringSemester
          : ProjectDuration.FullYear,
        projectDifficulty: ProjectDifficulty.High,
        projectExpectedResult: 'новый projectExpectedResult',
        skillsToBeFormed: 'новый skillsToBeFormed',
        projectDescription: 'новый projectDescription',
      } as ProjectProposalFormValue);
    });
  });
});
