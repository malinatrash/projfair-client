import { ProjectDuration } from '@/models/components/ProjectProposalForm';
import { getAcademicYear } from '../date';
import {
  projectDateFromDuration,
  projectDurationFromDate,
} from '../project-proposal-form';

describe('project-proposal-form.ts', () => {
  it('projectDateFromDuration()', () => {
    const currentMonth = new Date(Date.now()).getMonth();
    const currentYear = getAcademicYear(currentMonth).academicYear();

    expect(projectDateFromDuration(ProjectDuration.FallSemester)).toEqual({
      start: `${currentYear}-09-01`,
      end: `${currentYear}-12-30`,
    });
    expect(projectDateFromDuration(ProjectDuration.SpringSemester)).toEqual({
      start: `${currentYear + 1}-02-01`,
      end: `${currentYear + 1}-05-30`,
    });
    expect(projectDateFromDuration(ProjectDuration.FullYear)).toEqual({
      start: `${currentYear}-09-01`,
      end: `${currentYear + 1}-05-30`,
    });
  });
  it('projectDurationFromDate()', () => {
    const currentMonth = new Date(Date.now()).getMonth();
    const currentYear = getAcademicYear(currentMonth).academicYear();

    const format = 'yyyy-MM-dd';
    expect(
      projectDurationFromDate(
        {
          start: `${currentYear}-09-01`,
          end: `${currentYear}-12-30`,
        },
        format,
      ),
    ).toBe(ProjectDuration.FallSemester);
    expect(
      projectDurationFromDate(
        {
          start: `${currentYear + 1}-02-01`,
          end: `${currentYear + 1}-05-30`,
        },
        format,
      ),
    ).toBe(ProjectDuration.SpringSemester);
    expect(
      projectDurationFromDate(
        {
          start: `${currentYear}-09-01`,
          end: `${currentYear + 1}-05-30`,
        },
        format,
      ),
    ).toBe(ProjectDuration.FullYear);
  });
});
