import { computed, ref } from 'vue';
import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';

export default function useEvaluation() {
  const evaluateStore = useEvaluationModal();
  const projId = computed(() => evaluateStore.projectID ?? -1);
  const projectData = useGetSingleProjectQuery(projId);

  console.log(evaluateStore.projectID);

  const evaluate = () => {
    if (!projectData.data.value?.project.participations) return;
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
