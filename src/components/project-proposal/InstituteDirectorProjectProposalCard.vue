<template>
  <ProjectProposalCard :project-proposal="projectProposal">
    <template #team>
      <ul :class="$style['team-list']">
        <li v-for="memberRole in teamList" :key="memberRole[0]">
          <b>{{ MemberRoleText[memberRole[0]] }}: </b>
          {{ memberRole[1].join(', ') }}
        </li>
        <li>
          <b>Заказчик: </b>
          {{ projectProposal.customer }}
        </li>
      </ul>
    </template>

    <template #actions>
      <BaseButton
        v-if="proposalState === ProjectProposalStateId.Rejected"
        variant="outlined"
        :disabled="reviewProjectProposalMutation.isLoading.value"
        @click="onOpenRejectionModal"
      >
        изменить причину отклонения
      </BaseButton>
      <BaseButton
        v-else
        color="red"
        variant="outlined"
        :disabled="reviewProjectProposalMutation.isLoading.value"
        @click="onOpenRejectionModal"
      >
        отклонить
      </BaseButton>
      <BaseButton
        v-if="proposalState !== ProjectProposalStateId.Approved"
        color="green"
        variant="outlined"
        :disabled="reviewProjectProposalMutation.isLoading.value"
        @click="onApprove"
      >
        одобрить
      </BaseButton>
      <BaseButton
        is="router-link"
        :to="toProjectProposalCreateRoute(props.projectProposal.id)"
        variant="primary"
      >
        Подробнее
      </BaseButton>
    </template>
  </ProjectProposalCard>

  <ProjectProposalRejectionReasonEditModal
    v-model:is-show="showRejectionReasonModal"
    :is-loading="reviewProjectProposalMutation.isLoading.value"
    :reason="props.projectProposal.rejection_reason"
    @reject="onReject"
  />
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useToast } from 'vue-toastification';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import { useReviewProjectProposalMutation } from '@/api/InstituteDirectorApi/hooks/useReviewProjectProposalMutation';
  import {
    groupTeamByRoles,
    sortByRolePriority,
  } from '@/helpers/project-member-role';
  import { toProjectProposalCreateRoute } from '@/router/utils/routes';
  import {
    CreatedProjectProposal,
    MemberRole,
    MemberRoleText,
    ProjectProposalStateId,
  } from '@/models/ProjectProposal';
  import ProjectProposalCard from './ProjectProposalCard.vue';
  import ProjectProposalRejectionReasonEditModal from './ProjectProposalRejectionReasonEditModal.vue';

  interface Props {
    projectProposal: CreatedProjectProposal;
  }

  const props = defineProps<Props>();
  const reviewProjectProposalMutation = useReviewProjectProposalMutation({
    onError,
  });
  const toast = useToast();

  const showRejectionReasonModal = ref(false);

  const proposalState = computed<ProjectProposalStateId>(
    () => props.projectProposal.state.id,
  );
  const teamList = computed(() =>
    sortByRolePriority(
      Array.from(
        groupTeamByRoles(props.projectProposal.supervisors, [
          MemberRole.CoMentor,
          MemberRole.Expert,
        ]),
      ),
      (role) => role[0],
    ),
  );

  function onApprove() {
    reviewProjectProposalMutation.mutate({
      project_proposal_id: props.projectProposal.id,
      state_id: ProjectProposalStateId.Approved,
    });
  }

  function onOpenRejectionModal() {
    showRejectionReasonModal.value = true;
  }

  function onReject(reason: string) {
    reviewProjectProposalMutation.mutate({
      project_proposal_id: props.projectProposal.id,
      state_id: ProjectProposalStateId.Rejected,
      rejection_reason: reason,
    });
  }

  function onError(error: unknown) {
    toast.error(String(error));
  }
</script>

<style lang="scss" module>
  @import '@styles/breakpoints';

  .team-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;
  }
</style>
