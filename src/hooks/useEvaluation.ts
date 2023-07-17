import { computed, ref } from 'vue';
import { useQueryClient } from 'vue-query';
import { useUpdateParticipationListMutation } from '@/api/CandidateApi/hooks/useUpdateParticipationListMutation';
import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';

export default function useEvaluation() {
  const evaluateStore = useEvaluationModal();
  const projId = computed(() => evaluateStore.projectID ?? -1);
  const projectData = useGetSingleProjectQuery(projId);

  const evaluate = () => {
    const filteredParticipations =
      projectData.data.value?.project.participations?.filter(
        (part) => part.priority == 1,
      );
    if (!filteredParticipations) return;
    for (const participation of filteredParticipations) {
      if (participation.candidate.id == evaluateStore.evaluateStudentModalId) {
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
