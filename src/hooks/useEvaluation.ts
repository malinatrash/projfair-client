import { projectApi } from '@/api/ProjectApi';
import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
import { useModalsStore } from '@/stores/modals/useModalsStore';
import { useResultStore } from '@/stores/resultPage/useResultStore';

export default function useEvaluation() {
  const evaluateStore = useEvaluationModal();
  // const projectData = useGetSingleProjectQuery(evaluateStore.projectID!);
  const resultStore = useResultStore();
  const modalsStore = useModalsStore();

  // Кладем в стор оценку
  const evaluate = async () => {
    try {
      if (evaluateStore.projectID) {
        await projectApi.updateProjectCandidateMark(
          evaluateStore.projectID,
          evaluateStore.evaluateStudentModalId!,
          evaluateStore.rating ?? 0,
          evaluateStore.review ?? '',
        );
        resultStore.setResult(
          evaluateStore.rating ?? 0,
          evaluateStore.review ?? '',
          evaluateStore.evaluateStudentModalId!,
        );

        evaluateStore.closeEvaluateStudentModal();
      } else {
        console.error('Не удалось получить id проекта');
      }
    } catch (error) {
      console.error('Произошла ошибка при отправке оценки:', error);
      modalsStore.openAlertModal('Произошла ошибка');
    }
  };

  return {
    evaluateStore,
    evaluate,
  };
}
