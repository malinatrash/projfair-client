<template>
  <ProjectProposalCard :project-proposal="props.projectProposal">
    <template #team-member="{ teamMember }">
      <template v-if="teamMember.supervisor.id === authStore.profileData?.id">
        <p :class="$style['member-roles-title']">Роли в проекте:&nbsp;</p>
        <b
          v-for="(role, index) in teamMember.roles"
          :key="role.id"
          :class="$style['user-role']"
        >
          {{
            index === teamMember.roles.length - 1
              ? role.name
              : `${role.name},&nbsp;`
          }}
        </b>
      </template>
    </template>

    <template #actions>
      <BaseButton
        v-if="showDeleteButton"
        :class="$style['button-with-icon']"
        color="red"
        variant="inline-link"
        :disabled="deleteProjectProposalMutation.isLoading.value"
        @click="deleteDraft"
      >
        <svg
          :class="$style.icon"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.8208 6.8877H5.8208H21.8208"
            :stroke="
              deleteProjectProposalMutation.isLoading.value
                ? 'var(--gray-color-2)'
                : 'var(--red-color-1)'
            "
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.8208 6.8877V4.8877C8.8208 4.35726 9.03151 3.84855 9.40659 3.47348C9.78166 3.09841 10.2904 2.8877 10.8208 2.8877H14.8208C15.3512 2.8877 15.8599 3.09841 16.235 3.47348C16.6101 3.84855 16.8208 4.35726 16.8208 4.8877V6.8877M19.8208 6.8877V20.8877C19.8208 21.4181 19.6101 21.9268 19.235 22.3019C18.8599 22.677 18.3512 22.8877 17.8208 22.8877H7.8208C7.29037 22.8877 6.78166 22.677 6.40659 22.3019C6.03151 21.9268 5.8208 21.4181 5.8208 20.8877V6.8877H19.8208Z"
            :stroke="
              deleteProjectProposalMutation.isLoading.value
                ? 'var(--gray-color-2)'
                : 'var(--red-color-1)'
            "
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <template v-if="deleteProjectProposalMutation.isLoading.value">
          удаление черновика...
        </template>
        <template v-else>удалить черновик</template>
      </BaseButton>

      <BaseButton
        v-if="showRejectionReasonButton"
        :class="$style['button-with-icon']"
        variant="inline-link"
        @click="openRejectionModal"
      >
        <span :class="$style.icon" v-html="accentQuestionIcon"></span>
        узнать причину отклонения
      </BaseButton>

      <BaseButton
        is="router-link"
        v-if="showEditButton"
        :class="$style['button-with-icon']"
        :to="toProjectProposalCreateRoute(props.projectProposal.id)"
        variant="inline-link"
      >
        <span :class="$style.icon" v-html="penIcon"></span>
        редактировать заявку
      </BaseButton>

      <BaseButton
        is="router-link"
        v-else
        :class="$style['button-with-icon']"
        :to="toProjectProposalCreateRoute(props.projectProposal.id)"
        variant="inline-link"
      >
        <span :class="$style.icon" v-html="accentQuestionIcon"></span>
        подробнее
      </BaseButton>
    </template>
  </ProjectProposalCard>

  <ProjectProposalRejectionReasonModal
    v-model:is-show="showRejectionModal"
    :reason="props.projectProposal.rejection_reason"
  >
    <template #actions>
      <BaseButton
        v-if="showSaveAsDraftButton"
        :disabled="updateProjectProposalMutation.isLoading.value"
        variant="outlined"
        @click="saveAsDraft"
      >
        <template v-if="updateProjectProposalMutation.isLoading.value">
          сохранение...
        </template>
        <template v-else>сохранить как черновик</template>
      </BaseButton>
      <BaseButton variant="primary" @click="closeRejectionModal">
        Закрыть
      </BaseButton>
    </template>
  </ProjectProposalRejectionReasonModal>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useToast } from 'vue-toastification';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import { useDeleteProjectProposalMutation } from '@/api/SupervisorApi/hooks/useDeleteProjectProposalMutation';
  import { useUpdateProjectProposalMutation } from '@/api/SupervisorApi/hooks/useUpdateProjectProposalMutation';
  import { toProjectProposalCreateRoute } from '@/router/utils/routes';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { useModalsStore } from '@/stores/modals/useModalsStore';
  import {
    CreatedProjectProposal,
    MemberRole,
    ProjectProposalStateId,
  } from '@/models/ProjectProposal';
  import accentQuestionIcon from '@/assets/icons/accent-question-icon.svg?raw';
  import penIcon from '@/assets/icons/pen.svg?raw';
  import ProjectProposalCard from './ProjectProposalCard.vue';
  import ProjectProposalRejectionReasonModal from './ProjectProposalRejectionReasonModal.vue';

  interface Props {
    projectProposal: CreatedProjectProposal;
  }

  const props = defineProps<Props>();
  const authStore = useAuthStore();
  const toast = useToast();
  const updateProjectProposalMutation = useUpdateProjectProposalMutation({
    onError,
  });
  const deleteProjectProposalMutation = useDeleteProjectProposalMutation({
    onError,
  });

  const modalsStore = useModalsStore();

  const showRejectionModal = ref(false);

  // TODO: аналогичные кнопки и функции есть на странице CreateProjectPage.vue, надо отрефакторить
  const currentUser = computed(() =>
    props.projectProposal.supervisors.find(
      (member) => member.supervisor.id === authStore.profileData?.id,
    ),
  );
  const canUserEdit = computed(() =>
    currentUser.value?.roles
      .map((role) => role.id)
      .includes(MemberRole.JobDeveloper),
  );
  const proposalState = computed(() => props.projectProposal.state.id);

  const showEditButton = computed(
    () =>
      canUserEdit.value && proposalState.value === ProjectProposalStateId.Draft,
  );
  const showDeleteButton = computed(
    () =>
      canUserEdit.value && proposalState.value === ProjectProposalStateId.Draft,
  );
  const showSaveAsDraftButton = computed(
    () =>
      canUserEdit.value &&
      proposalState.value === ProjectProposalStateId.Rejected,
  );
  const showRejectionReasonButton = computed(
    () => proposalState.value === ProjectProposalStateId.Rejected,
  );

  function saveAsDraft() {
    updateProjectProposalMutation.mutate({
      id: props.projectProposal.id,
      projectProposal: { state_id: ProjectProposalStateId.Draft },
    });
  }

  function deleteDraft() {
    function agree() {
      modalsStore.openConfirmModal();
      deleteProjectProposalMutation.mutate(props.projectProposal.id);
    }

    function disagree() {
      modalsStore.openConfirmModal();
    }

    modalsStore.openConfirmModal(
      `Удалить черновик заявки «${props.projectProposal.title}»?`,
      'удалить',
      'отмена',
      agree,
      disagree,
    );
  }

  function closeRejectionModal() {
    showRejectionModal.value = false;
  }

  function openRejectionModal() {
    showRejectionModal.value = true;
  }

  function onError(error: unknown) {
    toast.error(String(error));
  }
</script>

<style lang="scss" module>
  @import '@styles/breakpoints';

  .icon {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 1.6em;
    height: 100%;
  }

  .button-with-icon {
    gap: 0.5rem !important;
  }

  .user-role {
    display: inline-block;
    white-space: nowrap;
  }

  .member-roles-title {
    display: inline-block;
  }
</style>
