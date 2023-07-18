import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
import { useResultStore } from '@/stores/resultPage/useResultStore';

export default function useEvaluation() {
  const evaluateStore = useEvaluationModal();

  const projectData = useGetSingleProjectQuery(evaluateStore.projectID!);

  const resultStore = useResultStore();

  const evaluate = () => {
    resultStore.setResult(
      evaluateStore.rating!,
      evaluateStore.review!,
      evaluateStore.evaluateStudentModalId!,
    );
    evaluateStore.closeEvaluateStudentModal();
    return;

    if (!projectData.data.value) {
      console.log('sdfsf');
    }

    for (const participation of projectData.data.value?.project
      .participations!) {
      if (participation.candidate.id == evaluateStore.evaluateStudentModalId) {
        participation.rating = evaluateStore.rating ?? participation.rating;
        participation.review = evaluateStore.review ?? participation.review;
        console.log(participation.rating);
        console.log(participation.review);
      }
    }
  };

  return {
    evaluateStore,
    evaluate,
  };
}
