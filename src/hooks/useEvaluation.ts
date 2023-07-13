import { ref } from 'vue';
import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';

export default function useEvaluation() {
  const evaluateStore = useEvaluationModal();
  const projId = ref(evaluateStore.projectID ?? 0);

  const projectData = useGetSingleProjectQuery(projId.value);

  alert(evaluateStore.projectID);

  const evaluate = () => {
    if (!projectData.data.value?.project.participations) throw Error('нету');
    for (const participation of projectData.data.value?.project
      .participations) {
      if (participation.id == evaluateStore.evaluateStudentModalId) {
        participation.rating = evaluateStore.rating ?? participation.rating;
        participation.review = evaluateStore.review ?? participation.review;
      }
    }
    evaluateStore.closeEvaluateStudentModal();
  };

  return {
    evaluateStore,
    evaluate,
  };
}
