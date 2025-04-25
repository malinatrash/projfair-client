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
        class="institute-card"
      >
        <div
          v-if="candidate.participations.length === 0"
          class="accordion-wrapper"
        >
          <div class="accordion-header">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4f5569"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <p class="title" style="font-size: 20px">
              {{ candidate.fio }}
              <span class="title-description">
                id:
                <span style="color: var(--accent-color-1)">{{
                  candidate.id
                }}</span>
              </span>
              <span class="title-description">
                № зачетки:
                <span style="color: var(--accent-color-1)">{{
                  candidate.numz
                }}</span>
              </span>
              <span class="title-description">
                Группа:
                <span style="color: var(--accent-color-1)">{{
                  candidate.training_group
                }}</span>
              </span>
            </p>
          </div>

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
              >Подгружаем...</span
            >
            <span v-else>Подгрузить заявки</span>
          </BaseButton>
        </div>

        <SimpleAccordion v-else>
          <template #title>
            <div class="accordion-header">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f5569"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <p class="title" style="font-size: 20px">
                {{ candidate.fio }}
                <span class="title-description">
                  id:
                  <span style="color: var(--accent-color-1)">{{
                    candidate.id
                  }}</span>
                </span>
                <span class="title-description">
                  № зачетки:
                  <span style="color: var(--accent-color-1)">{{
                    candidate.numz
                  }}</span>
                </span>
                <span class="title-description">
                  Группа:
                  <span style="color: var(--accent-color-1)">{{
                    candidate.training_group
                  }}</span>
                </span>
              </p>
            </div>
          </template>

          <template #content>
            <div class="accordion-content">
              <h3
                style="
                  padding-left: 20px;
                  background-color: color-mix(in srgb, #ffa500 25%, white 100%);
                "
              >
                Заявки на проекты
              </h3>
              <div
                v-for="(participation, index) in candidate.participations"
                :key="participation.id"
                style="padding-left: 20px"
                :style="{
                  'background-color':
                    index % 2
                      ? 'color-mix(in srgb, #e7e7e7 25%, white 100%)'
                      : '',
                }"
              >
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <span style="min-width: 30px; color: #4f5569">{{
                    index + 1
                  }}</span>

                  <div class="icon" style="min-width: 50px">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4f5569"
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-file-spreadsheet-icon lucide-file-spreadsheet"
                    >
                      <path
                        d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                      />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M8 13h2" />
                      <path d="M14 13h2" />
                      <path d="M8 17h2" />
                      <path d="M14 17h2" />
                    </svg>
                  </div>
                </div>

                <p
                  class="title"
                  style="
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 20px;
                  "
                >
                  <span class="title-description" style="min-width: 150px">
                    id:
                    <span style="color: var(--accent-color-1)">{{
                      participation.id
                    }}</span>
                  </span>
                  <span class="title-description" style="min-width: 150px">
                    Приоритет:
                    <span style="color: var(--accent-color-1)">{{
                      participation.priority
                    }}</span>
                  </span>
                  <span class="title-description" style="min-width: 150px">
                    Статус:
                    <span style="color: var(--accent-color-1)"
                      >{{ participation.state_id }}
                      <br />
                      <span style="font-size: 14px"
                        >({{
                          ParticipationStateName[
                            participation.state_id as unknown as ParticipationState
                          ]
                        }})</span
                      >
                    </span>
                  </span>
                  <span class="title-description" style="min-width: 150px">
                    id проекта:
                    <BaseButton
                      variant="tag-outlined"
                      style="padding: 0 5px"
                      @click="goToProject(participation.project_id)"
                    >
                      {{ participation.project_id }}
                    </BaseButton>
                  </span>
                </p>
              </div>
            </div>

            <div style="margin-top: 25px">
              <h3 style="font-size: 16px">
                Перевод заявки №1 на другой проект
              </h3>
              <div style="display: flex; gap: 25px; margin-top: 5px">
                <VMultiselect
                  v-model="selectedProjects[candidate.id]"
                  :class="[
                    'multiselect',
                    selectedProjects[candidate.id] ? 'selected' : '',
                  ]"
                  placeholder="Выберите проект для переноса заявки"
                  no-results-text="Проект не найден"
                  no-options-text="Проекты не найдены"
                  :searchable="true"
                  :options="
                    projects
                    ?.filter((project: any) => project.id !== candidatesWithParticipations[candidate.id]?.[0].project_id)
                    .map((project: any) => getEligibleProjectsForMultiselect(project))
                  "
                  :disabled="
                    isTransferDataLoading ||
                    isFetchingCandidateParticipations ||
                    isFetchingTransferCandidateParticipationToProject
                  "
                  aria-label="Выбор проекта"
                />
                <BaseButton
                  :disabled="
                    !selectedProjects[candidate.id] ||
                    isFetchingTransferCandidateParticipationToProject
                  "
                  @click="
                    handleTransferCandidateParticipationToProject(candidate.id)
                  "
                  >Применить</BaseButton
                >
              </div>
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
  import VMultiselect from '@vueform/multiselect';
  import { computed, ref } from 'vue';
  import { useToast } from 'vue-toastification';
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
  import { Candidate } from '@/models/Candidate';
  import {
    ParticipationState,
    ParticipationStateName,
  } from '@/models/Participation';
  import { Project } from '@/models/Project';

  type CandidateParticipation = {
    id: number;
    candidate_id: number;
    project_id: number;
    priority: number;
    state_id: number;
  };

  type ParticipationWithStateId = CandidateParticipation & { state_id: number };
  type CandidateWithParticipations = Candidate & {
    participations: ParticipationWithStateId[];
  };

  const isSmallDevice = useSmallDevice();

  const toast = useToast();

  const candidateFilter = ref('');

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
  const selectedProjects = ref<{
    [candidate_id: number]: number;
  }>({});

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

  const {
    refetch: refetchTransferCandidateParticipationToProject,
    isFetching: isFetchingTransferCandidateParticipationToProject,
  } = useUpdateAdminCandidateParticipationToAnotherProjectQuery(
    selectedCandidateId,
    selectedProjects,
    {
      enabled: false,
      onSuccess: (data: {
        message: string;
        new_participation: CandidateParticipation;
      }) => {
        toast.success(data.message);
        getCandidateParticipations(Number(data.new_participation.candidate_id));
      },
      onError: (data: any) => {
        toast.error(data.message);
      },
    },
  );

  const currentPage = ref(1);

  const CANDIDATES_PER_PAGE = 7;
  const PAGES_VISIBLE_DESKTOP = 7;
  const PAGES_VISIBLE_MOBILE = 4;

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

    selectedProjects.value[candidate_id] = -1;
  };

  const handleTransferCandidateParticipationToProject = async (
    candidate_id: number,
  ) => {
    selectedCandidateId.value = candidate_id;
    refetchTransferCandidateParticipationToProject.value();
  };

  const getEligibleProjectsForMultiselect = (project: Project) => ({
    label: `id: ${project.id} | Название: ${project.title}`,
    value: project.id,
  });

  function onPageChange(page: number) {
    currentPage.value = page;
  }

  const goToProject = (projectId: number) => {
    window.open(`/project/${projectId}`, '_blank');
  };
</script>

<style lang="scss" scoped>
  $padding: 20px;

  :deep(.multiselect-placeholder) {
    overflow: hidden;
  }

  :deep(.multiselect-dropdown) {
    max-height: 375px;
    overscroll-behavior: none;

    & li > span {
      font-size: 16px !important;
    }
  }

  .panel {
    padding: 0 $padding;

    &:has(.accordion.opened) {
      padding-bottom: $padding;
    }
  }

  .title {
    font-size: 24px;
    line-height: normal;
    color: #4f5569;
  }

  ////////////////////////////////////////////

  .accordion {
    &-wrapper {
      display: flex;
      align-items: center;
      width: 100%;

      @media (width <= 500px) {
        flex-wrap: wrap;
        padding-bottom: $padding;

        & .title {
          font-size: 20px;

          &-description {
            font-size: 14px;
          }
        }
      }
    }

    &-content {
      background-color: white;
      border-left: 4px solid var(--accent-color-2);

      & .title {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        font-weight: 700;

        &-description {
          font-size: 16px;
          font-weight: 600;
          color: var(--gray-color-2);
        }
      }

      & > *:not(.accordion) {
        display: flex;
        flex-direction: row;
        gap: $padding;
        align-items: center;
        justify-content: space-between;
        padding: $padding 0;
        border-bottom: 1px solid var(--gray-color-1);

        @media (width <= 500px) {
          flex-wrap: wrap;
        }
      }
    }

    &-header {
      display: flex;
      gap: $padding;
      align-items: center;
      width: 100%;
      padding: $padding 0;

      & > .icon {
        flex: none;
      }

      & .title {
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;
        font-weight: 700;

        &-description {
          font-size: 16px;
          font-weight: 600;
          color: var(--gray-color-2);
        }
      }

      &:hover .title {
        color: var(--accent-color-1);
      }
    }

    &.opened p.title {
      color: var(--accent-color-1);
    }

    &:deep(button.title) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
  }
</style>
