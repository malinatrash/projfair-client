import { ProjectResultFormValue } from '@/models/components/ProjectResultForm';
import { Project } from '@/models/Project';
import { CreatedProjectResult } from '@/models/ProjectProposal';

export function collectProjectResult(
  projectData: Project,
  formValue: ProjectResultFormValue,
): CreatedProjectResult {
  const { projectResultDescription, projectResultGoal } = formValue;

  return {
    title: projectData.title,
    places: projectData.places,
    goal: projectData.goal,
    description: projectData.description,
    difficulty: projectData.difficulty,
    date_start: projectData.date_start,
    date_end: projectData.date_end,
    requirements: projectData.requirements,
    customer: projectData.customer!,
    product_result: projectData.product_result,
    study_result: projectData.study_result,
    additional_inf: projectData.additional_inf!,
    project_review: projectResultDescription,
    project_goal: projectResultGoal,
  };
}
