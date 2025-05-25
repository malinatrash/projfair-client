<template>
  <BaseStub
    v-if="isTransferDataLoading"
    title="Получем список студентов..."
    subtitle="Можете пока выпить чай :)"
  />

  <BaseStub
    v-else-if="candidates?.length === 0"
    title="Студенты не найдены :("
    subtitle="Может что-то пошло не так?"
  />

  <div v-else-if="candidates?.length">
    <BaseInput
      v-model="candidateFilter"
      placeholder="Поиск студента"
      style="margin-bottom: 15px"
    />

    <div v-if="filteredSortedCandidates.length > 0">
      <BasePanel
        v-for="candidate in paginatedCandidates"
        :key="candidate.id"
        class="candidate-card"
        :class="{
          'has-participations': !!candidate.participations.length,
        }"
      >
        <div
          v-if="candidate.participations.length === 0"
          class="candidate-header"
        >
          <CandidateInfo :candidate="candidate" style="flex: 1" />
          <BaseButton
            variant="tag-outlined"
            :disabled="
              isFetchingCandidateParticipations ||
              isFetchingTransferCandidateParticipationToProject
            "
            @click="getCandidateParticipations(candidate.id)"
          >
            <span
              v-if="
                isFetchingCandidateParticipations &&
                candidateId === candidate.id
              "
            >
              Подгружаем...
            </span>
            <span v-else>Подгрузить заявки</span>
          </BaseButton>
        </div>

        <SimpleAccordion
          v-else
          :default-opened="
            candidateId === candidate.id && !isFetchingCandidateParticipations
          "
        >
          <template #title>
            <CandidateInfo :candidate="candidate" />
          </template>

          <template #content>
            <div class="section">
              <h3 class="section-title">Заявки на проекты</h3>
              <CandidateParticipations
                :participations="candidate.participations"
              />
            </div>
            <div class="section">
              <h3 class="section-title">Перевод студента на другой проект</h3>
              <TransferParticipation
                :projects="projects ?? []"
                :current-candidate-id="candidate.id"
                :current-project-id="candidate.participations[0].project_id"
                :reason-message="reasonMessage"
                :is-disabled="
                  isTransferDataLoading ||
                  isFetchingCandidateParticipations ||
                  isFetchingTransferCandidateParticipationToProject
                "
                :is-transferring="
                  isFetchingTransferCandidateParticipationToProject
                "
                style="padding-left: 20px"
                @transfer="
                  handleTransferCandidateParticipationToProject(
                    candidate.id,
                    $event,
                  )
                "
              />
            </div>
          </template>
        </SimpleAccordion>
      </BasePanel>
    </div>

    <BaseStub
      v-else
      title="Студенты не найдены :("
      subtitle="Пока нет ни одного студента с введёнными id/ФИО/№ зачётки/группой"
      style="margin: 25px 0"
    />

    <BasePagination
      v-if="filteredSortedCandidates.length > 0"
      :page-size="CANDIDATES_PER_PAGE"
      :pages-visible="
        isSmallDevice ? PAGES_VISIBLE_MOBILE : PAGES_VISIBLE_DESKTOP
      "
      :total-items="filteredSortedCandidates?.length || 0"
      :page="currentPage"
      @update:page="onPageChange"
    />
  </div>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useToast } from 'vue-toastification';
  import CandidateInfo from '@/components/admin/CandidateInfo.vue';
  import CandidateParticipations from '@/components/admin/CandidateParticipations.vue';
  import TransferParticipation from '@/components/admin/TransferParticipation.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BaseInput from '@/components/ui/BaseInput.vue';
  import BasePagination from '@/components/ui/BasePagination.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import SimpleAccordion from '@/components/ui/accordion/SimpleAccordion.vue';
  import { useGetAdminCandidateParticipationsListQuery } from '@/api/AdminApi/hooks/useGetAdminCandidateParticipationsListQuery';
  import { useGetAdminCandidatesWithProjectsListQuery } from '@/api/AdminApi/hooks/useGetAdminCandidatesWithProjectsListQuery';
  import { useUpdateAdminCandidateParticipationToAnotherProjectQuery } from '@/api/AdminApi/hooks/useUpdateCandidateParticipationToAnotherProjectQuery copy';
  import { useSmallDevice } from '@/hooks/useBreakpoints';
  import { usePaginatedList } from '@/hooks/usePaginatedList';
  import {
    CandidateWithParticipations,
    ParticipationWithStateId,
  } from '@/models/Admin';

  const isSmallDevice = useSmallDevice();
  const toast = useToast();

  const candidateFilter = ref('');
  const currentPage = ref(1);

  const CANDIDATES_PER_PAGE = 7;
  const PAGES_VISIBLE_DESKTOP = 7;
  const PAGES_VISIBLE_MOBILE = 4;

  const { data: transferData, isLoading: isTransferDataLoading } =
    useGetAdminCandidatesWithProjectsListQuery();

  const candidatesWithParticipations = ref<{
    [candidate_id: number]: ParticipationWithStateId[];
  }>({});

  const candidates = computed<CandidateWithParticipations[]>(
    () =>
      transferData.value?.candidates
        .map((candidate) => ({
          ...candidate,
          participations:
            candidatesWithParticipations.value[candidate.id] ?? [],
        }))
        .slice()
        .sort((a, b) => a.fio.localeCompare(b.fio)) ?? [],
  );

  const filteredSortedCandidates = computed(() =>
    candidates.value.filter((candidate) =>
      (
        candidate.fio.toLocaleLowerCase() +
        candidate.id.toString() +
        candidate.numz.toLocaleLowerCase() +
        candidate.training_group.toLocaleLowerCase()
      ).includes(candidateFilter.value.toLocaleLowerCase()),
    ),
  );

  const projects = computed(() => transferData.value?.projects);

  const candidateId = ref<number>(-1);

  const {
    refetch: refetchCandidateParticipations,
    isFetching: isFetchingCandidateParticipations,
  } = useGetAdminCandidateParticipationsListQuery(candidateId, {
    enabled: false,
    onSuccess: (data: {
      candidate_id: number;
      participations: ParticipationWithStateId[];
    }) => {
      candidatesWithParticipations.value[data.candidate_id] =
        data.participations
          .slice()
          .sort((a, b) => a.state_id - b.state_id || a.priority - b.priority);
    },
  });

  const selectedCandidateId = ref<number>(-1);
  const selectedProjectId = ref<number>(-1);
  const reasonMessage = ref<{
    [candidateId: number]: string;
  }>({});

  const {
    refetch: refetchTransferCandidateParticipationToProject,
    isFetching: isFetchingTransferCandidateParticipationToProject,
  } = useUpdateAdminCandidateParticipationToAnotherProjectQuery(
    selectedCandidateId,
    selectedProjectId,
    reasonMessage,
    {
      enabled: false,
      onSuccess: (data: {
        message: string;
        new_participation: {
          candidate_id: number;
          project_id: number;
          priority: number;
          state_id: number;
        };
      }) => {
        toast.success(data.message);
        getCandidateParticipations(Number(data.new_participation.candidate_id));
      },
      onError: (data: any) => {
        toast.error(data.message);
      },
    },
  );

  const paginatedCandidates = usePaginatedList<CandidateWithParticipations>(
    filteredSortedCandidates,
    {
      pageSize: CANDIDATES_PER_PAGE,
      currentPage: currentPage,
    },
  );

  const getCandidateParticipations = async (candidate_id: number) => {
    candidateId.value = candidate_id;
    refetchCandidateParticipations.value();
  };

  const handleTransferCandidateParticipationToProject = async (
    candidate_id: number,
    project_id: number,
  ) => {
    selectedCandidateId.value = candidate_id;
    selectedProjectId.value = project_id;

    refetchTransferCandidateParticipationToProject.value();
  };

  function onPageChange(page: number) {
    currentPage.value = page;
    candidateId.value = -1;
    selectedCandidateId.value = -1;
    selectedProjectId.value = -1;
  }
</script>

<style lang="scss" scoped>
  :deep(button.title) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  .section {
    background-color: white;
    border-left: 4px solid var(--accent-color-2);
    border-radius: 12px 0 0;

    &:has(+ &) {
      margin-bottom: 25px;
    }

    &-title {
      padding: 15px 0;
      padding-left: 20px;
      color: var(--accent-color-2);
      background-color: color-mix(in srgb, #ffa500 15%, white 100%);
      border-radius: 8px 0 0;
    }
  }

  .candidate-card {
    padding: 0 20px;
    transition: border-left 0.15s ease-in-out;

    &.has-participations {
      border-left: 2px solid var(--accent-color-1);
    }

    .candidate-header {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      align-items: center;

      @media (width <= 450px) {
        padding-bottom: 25px;
      }
    }

    &:has(.accordion.opened) {
      padding-bottom: 20px;
    }
  }
</style>
