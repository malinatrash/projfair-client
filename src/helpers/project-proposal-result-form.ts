import { DateTime } from 'luxon';
import { TeamMember } from '@/components/project/ProjectTeamCollect.vue';
import {
  ProjectProposalResultFormValue,
  ProjectResultGoal,
} from '@/models/components/ProjectProposalResultForm';
import { DateRange } from '@/models/Date';
import { ProjectSupervisor, ProjectTypeName } from '@/models/Project';
import {
  CreatedProjectProposalResult,
  MemberRole,
  NewProjectProposalResult,
  ProjectProposalResultSpecialty,
  ProjectProposalResultStateId,
  ProjectProposalResultTeamMember,
} from '@/models/ProjectProposalResult';
import {
  SelectedSpecialty,
  SpecialtyGroup,
  SpecialtyPriority,
} from '@/models/Specialty';
import { sortByRolePriority } from './project-member-role';
import { specialtyFullName } from './specialty';

export function collectProjectProposalResult(
  formValue: ProjectProposalResultFormValue,
  projectProposalResultState: ProjectProposalResultStateId,
  projectDepartmentId: number,
): NewProjectProposalResult {
  const {
    additionalSpecialtyList,
    prevProjectId,
    projectCustomer,
    projectDescription,
    projectDifficulty,
    projectResultGoal,
    projectExpectedResult,
    projectGoal,
    projectName,
    projectThemeSourceId,
    skillList,
    skillsToBeFormed,
    specialtyList,
    team,
  } = formValue;

  // const supervisors: ProjectProposalResultTeamMember[] = team
  //   .filter((member) => member.memberData && member.role)
  //   .map((member) => ({
  //     supervisor_id: member.memberData!.id,
  //     role_ids: [member.role!],
  //   }));

  const specialities: ProjectProposalResultSpecialty[] = [
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
    description: projectDescription,
    state_id: projectProposalResultState,
    places: 0,
    type_id: ProjectTypeName.Applied,
    study_result: skillsToBeFormed,
    additional_inf: 'additional_inf',
    requirements: 'requirements',
    specialities,
    // supervisors,
  };
}

export function getCurrentProjectProposalResult(
  currentProjectId: number,
  createdProjectProposalResultList?: CreatedProjectProposalResult[],
): CreatedProjectProposalResult | undefined {
  return createdProjectProposalResultList?.find(
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

// export function mapProjectProposalResultTeam(
//   supervisors: ProjectSupervisor[],
//   sharedRoleList: MemberRole[],
//   currentUserRoleList: MemberRole[],
// ): Required<TeamMember>[] {
//   const projectProposalResultTeam: Required<TeamMember>[] = supervisors
//     .filter(({ roles }) => {
//       return (
//         roles.filter((role) =>
//           [...sharedRoleList, ...currentUserRoleList].includes(role.id),
//         ).length > 0
//       );
//     })
//     .map<Required<TeamMember>>(({ roles, supervisor }) => {
//       // фильтруем только нужные роли
//       let acceptedRoles = roles
//         .map((role) => role.id)
//         .filter((role) =>
//           [...sharedRoleList, ...currentUserRoleList].includes(role),
//         );

//       acceptedRoles = sortByRolePriority(acceptedRoles, (role) => role);

//       return {
//         role: acceptedRoles[0],
//         isCurrentUser: Boolean(
//           acceptedRoles.find((role) => role === MemberRole.Mentor),
//         ),
//         memberData: supervisor,
//       };
//     });

//   // сортируем команду по ролям
//   return sortByRolePriority(projectProposalResultTeam, (member) => member.role);
// }
