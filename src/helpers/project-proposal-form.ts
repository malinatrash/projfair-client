import { DateTime } from 'luxon';
import { TeamMember } from '@/components/project/ProjectTeamCollect.vue';
import {
  ProjectDuration,
  ProjectProposalFormValue,
} from '@/models/components/ProjectProposalForm';
import { DateRange } from '@/models/Date';
import { ProjectSupervisor, ProjectTypeName } from '@/models/Project';
import {
  CreatedProjectProposal,
  MemberRole,
  NewProjectProposal,
  ProjectProposalSpecialty,
  ProjectProposalStateId,
  ProjectProposalTeamMember,
} from '@/models/ProjectProposal';
import {
  SelectedSpecialty,
  SpecialtyGroup,
  SpecialtyPriority,
} from '@/models/Specialty';
import { getAcademicYear } from './date';
import { sortByRolePriority } from './project-member-role';
import { specialtyFullName } from './specialty';

export function collectProjectProposal(
  formValue: ProjectProposalFormValue,
  projectProposalState: ProjectProposalStateId,
  projectDepartmentId: number,
): NewProjectProposal {
  const {
    additionalSpecialtyList,
    prevProjectId,
    projectCustomer,
    projectDescription,
    projectDifficulty,
    projectDuration,
    projectExpectedResult,
    projectGoal,
    projectName,
    projectThemeSourceId,
    skillList,
    skillsToBeFormed,
    specialtyList,
    team,
  } = formValue;
  const projectDate = projectDateFromDuration(projectDuration);

  const supervisors: ProjectProposalTeamMember[] = team
    .filter((member) => member.memberData && member.role)
    .map((member) => ({
      supervisor_id: member.memberData!.id,
      role_ids: [member.role!],
    }));

  const specialities: ProjectProposalSpecialty[] = [
    ...additionalSpecialtyList.map((specialty) => ({
      course: specialty.course,
      specialitiy_id: specialty.specialty_id,
      priority: SpecialtyPriority.Low,
    })),
    ...specialtyList.map((specialty) => ({
      course: specialty.course,
      specialitiy_id: specialty.specialty_id,
      priority: SpecialtyPriority.High,
    })),
  ];

  const skillIds: number[] = skillList
    .filter((skill) => !skill.isNew)
    .map((skill) => skill.id);

  const newSkills: string[] = skillList
    .filter((skill) => skill.isNew)
    .map((skill) => skill.name);

  return {
    title: projectName,
    goal: projectGoal,
    customer: projectCustomer,
    theme_source_id: projectThemeSourceId ?? null,
    prev_project_id: prevProjectId,
    difficulty: projectDifficulty,
    department_id: projectDepartmentId,
    product_result: projectExpectedResult,
    skill_ids: skillIds,
    new_skills: newSkills,
    date_start: projectDate.start,
    date_end: projectDate.end,
    description: projectDescription,
    state_id: projectProposalState,
    places: 0,
    type_id: ProjectTypeName.Applied,
    study_result: skillsToBeFormed,
    additional_inf: 'additional_inf',
    requirements: 'requirements',
    specialities,
    supervisors,
  };
}

export function projectDateFromDuration(duration: ProjectDuration): DateRange {
  const currentMonth = new Date(Date.now()).getMonth();
  const currentYear = getAcademicYear(currentMonth).academicYear();

  const fallStartDate = DateTime.fromObject({
    year: currentYear,
    month: 9,
    day: 1,
  });
  const fallEndDate = DateTime.fromObject({
    year: currentYear,
    month: 12,
    day: 30,
  });

  const springStartDate = DateTime.fromObject({
    year: currentYear + 1,
    month: 2,
    day: 1,
  });
  const springEndDate = DateTime.fromObject({
    year: currentYear + 1,
    month: 5,
    day: 30,
  });

  let dateStart = '';
  let dateEnd = '';
  switch (duration) {
    case ProjectDuration.SpringSemester:
      dateStart = springStartDate.toISODate();
      dateEnd = springEndDate.toISODate();
      break;
    case ProjectDuration.FallSemester:
      dateStart = fallStartDate.toISODate();
      dateEnd = fallEndDate.toISODate();
      break;
    case ProjectDuration.FullYear:
      dateStart = fallStartDate.toISODate();
      dateEnd = springEndDate.toISODate();
      break;
  }

  return {
    start: dateStart,
    end: dateEnd,
  };
}

export function projectDurationFromDate(
  isoDate: DateRange,
  format = 'dd.MM.yyyy',
): ProjectDuration {
  const dateStart = DateTime.fromFormat(isoDate.start, format);
  const dateEnd = DateTime.fromFormat(isoDate.end, format);

  const startMonth = dateStart.month;
  const endMonth = dateEnd.month;

  if (startMonth === 9 && endMonth === 12) return ProjectDuration.FallSemester;
  if (startMonth === 2 && endMonth === 5) return ProjectDuration.SpringSemester;

  return ProjectDuration.FullYear;
}

export function getCurrentProjectProposal(
  currentProjectId: number,
  createdProjectProposalList?: CreatedProjectProposal[],
): CreatedProjectProposal | undefined {
  return createdProjectProposalList?.find(
    (proposal) => Number(proposal.id) === currentProjectId,
  );
}

export function mapSpecialtyList(
  projectSpecialities: SpecialtyGroup[],
  priority: SpecialtyPriority,
): SelectedSpecialty<number | string>[] {
  return projectSpecialities
    .filter((specialty) => specialty.priority === priority)
    .map((specialty) => ({
      course: specialty.course,
      id: specialty.id,
      name: specialtyFullName(specialty.speciality.name, specialty.course),
      specialty_id: specialty.speciality.id,
    }));
}

export function mapProjectProposalTeam(
  supervisors: ProjectSupervisor[],
  sharedRoleList: MemberRole[],
  currentUserRoleList: MemberRole[],
): Required<TeamMember>[] {
  const projectProposalTeam: Required<TeamMember>[] = supervisors
    .filter(({ roles }) => {
      return (
        roles.filter((role) =>
          [...sharedRoleList, ...currentUserRoleList].includes(role.id),
        ).length > 0
      );
    })
    .map<Required<TeamMember>>(({ roles, supervisor }) => {
      // фильтруем только нужные роли
      let acceptedRoles = roles
        .map((role) => role.id)
        .filter((role) =>
          [...sharedRoleList, ...currentUserRoleList].includes(role),
        );

      acceptedRoles = sortByRolePriority(acceptedRoles, (role) => role);

      return {
        role: acceptedRoles[0],
        isCurrentUser: Boolean(
          acceptedRoles.find((role) => role === MemberRole.Mentor),
        ),
        memberData: supervisor,
      };
    });

  // сортируем команду по ролям
  return sortByRolePriority(projectProposalTeam, (member) => member.role);
}
