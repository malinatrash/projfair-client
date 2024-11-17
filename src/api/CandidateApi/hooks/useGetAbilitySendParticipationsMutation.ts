import { UseMutationOptions, useMutation } from 'vue-query';
import { projectIncludesCandidateSpeciality } from '@/helpers/project';
import { isCandidate } from '@/helpers/typeCheck';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { ParticipationWithProject } from '@/models/Participation';
import { Project } from '@/models/Project';
import { AUTH_REQUIRED } from '@/values/error-messages';

type TData = { participations?: ParticipationWithProject[]; project: Project };
type TVariables = TData;

export type UseGetAbilitySendParticipationsMutationOptions = UseMutationOptions<
  TData,
  unknown,
  TVariables,
  unknown
>;

export const USE_GET_ABILITY_SEND_PARTICIPATIONS_MUTATION =
  'USE_GET_ABILITY_SEND_PARTICIPATIONS_MUTATION';

export const useGetAbilitySendParticipationsMutation = (
  options?: UseGetAbilitySendParticipationsMutationOptions,
) => {
  const { profileData } = useAuthStore();

  return useMutation(
    USE_GET_ABILITY_SEND_PARTICIPATIONS_MUTATION,
    async ({ participations, project }) => {
      if (!participations || !profileData || !isCandidate(profileData))
        throw AUTH_REQUIRED;
      if (!profileData.canSendParticipations) {
        throw 'На данный момент Вы не можете подавать заявки на проекты';
      }

      if (participations) {
        for (const participation of participations) {
          if (participation.project_id === project.id) {
            throw 'Вы уже подали заявку на этот проект';
          }
        }
      }

      const isSameInstitute = await projectIncludesCandidateSpeciality(
        profileData,
        project,
      );

      // if (!isSameInstitute) {
      //   throw 'Вы не можете подать заявку на проект другого института';
      // }

      return { project, participations };
    },
    options,
  );
};
