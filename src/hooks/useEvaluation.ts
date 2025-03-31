import { useUpdateProjectCandidateMarkMutation } from '@/api/CandidateApi/hooks/useUpdateProjectCandidateMark';
import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
import { useModalsStore } from '@/stores/modals/useModalsStore';
import { useResultStore } from '@/stores/resultPage/useResultStore';

export default function useEvaluation() {
  const evaluateStore = useEvaluationModal();
  const resultStore = useResultStore();
  const modalsStore = useModalsStore();
  const markMutation = useUpdateProjectCandidateMarkMutation();

  // Кладем в стор оценку
  const evaluate = async () => {
    try {
      if (evaluateStore.projectID) {
        markMutation.mutate([
          evaluateStore.projectID,
          evaluateStore.evaluateStudentModalId!,
          evaluateStore.rating ?? 0,
          evaluateStore.review ?? '',
        ]);

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
