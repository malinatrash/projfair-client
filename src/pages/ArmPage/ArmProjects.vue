<template>
  <div style="position: relative">
    <div class="buttons">
      <BaseButton
        :disabled="
          isMutating || query.isLoading.value || query.isFetching.value
        "
        @click="openConfirmModal"
        >Применить</BaseButton
      >
    </div>

    <BaseStub
      v-if="query.isLoading.value"
      title="Получем список проектов..."
      subtitle="Можете пока выпить чай :)"
    />

    <BasePanel
      v-for="institute in institutes"
      :key="institute.institute_id"
      class="institute-card"
    >
      <SimpleAccordion>
        <template #title>
          <div class="accordion-title">
            <p class="title">
              {{ institute.institute_name }}
              <span class="title-description">
                id:
                <span style="color: var(--accent-color-1)">{{
                  institute.institute_id
                }}</span>
                | Кол-во молчунов:
                <span style="color: var(--accent-color-1)">{{
                  allSilentParticipations?.filter(
                    (participation) =>
                      participation.institute_id === institute.institute_id,
                  ).length
                }}</span>
                | Мин. кол-во мест на проект:
                <span style="color: var(--accent-color-1)">{{
                  Math.min(
                    ...institute.departments.flatMap((department) =>
                      department.projects.map(
                        (project) => inputProjects[project.project_id],
                      ),
                    ),
                  )
                }}</span>
              </span>
            </p>
            <div class="input">
              <BaseInput
                v-model="inputInstitutes[institute.institute_id]"
                type="number"
                min="5"
                max="100"
                :placeholder="
                  inputInstitutes[institute.institute_id].toString()
                "
                :style="[
                  {
                    boxShadow:
                      inputInstitutes[institute.institute_id] !=
                      institute.minPlacesProject?.places
                        ? '0 0 0 2px var(--accent-color-2)'
                        : 'none',
                  },
                ]"
                :disabled="
                  isMutating || query.isLoading.value || query.isFetching.value
                "
                @change="
                  (e: Event) => {
                    changeMaxValue(e, inputInstitutes, institute.institute_id)
                    changeMinPlaceForProjectOnInstitute(institute);
                  }
                "
              />
            </div>
          </div>
        </template>

        <template #content class="institute-content">
          <SimpleAccordion
            v-for="department in institute.departments
              .slice()
              .sort((a, b) => a.department_id - b.department_id)"
            :key="department.department_id"
          >
            <template #title>
              <div class="accordion-title">
                <p class="title" style="font-size: 22px">
                  Кафедра «{{ department.department_name }}»
                  <span class="title-description">
                    id:
                    <span style="color: var(--accent-color-1)">{{
                      department.department_id
                    }}</span>
                    | Кол-во молчунов:
                    <span style="color: var(--accent-color-1)">{{
                      allSilentParticipations?.filter(
                        (participation) =>
                          participation.department_id ===
                          department.department_id,
                      ).length
                    }}</span>
                    | Мин. кол-во мест на проект:
                    <span style="color: var(--accent-color-1)">{{
                      Math.min(
                        ...department.projects.map(
                          (project) => inputProjects[project.project_id],
                        ),
                      )
                    }}</span>
                  </span>
                </p>
                <div class="input">
                  <BaseInput
                    v-model="inputDepartments[department.department_id]"
                    type="number"
                    min="5"
                    max="100"
                    :placeholder="
                      department.minPlacesProject?.places.toString()
                    "
                    :style="[
                      {
                        boxShadow:
                          inputDepartments[department.department_id] !=
                          department.minPlacesProject?.places
                            ? '0 0 0 2px var(--accent-color-2)'
                            : 'none',
                      },
                    ]"
                    :disabled="
                      isMutating ||
                      query.isLoading.value ||
                      query.isFetching.value
                    "
                    @change="
                      (e: Event) => {
                        changeMaxValue(e, inputDepartments, department.department_id)
                        changeMinPlaceForProjectOnDepartment(
                          institute,
                          department,
                        );
                      }
                    "
                  />
                </div>
              </div>
            </template>

            <template #content>
              <div class="inner-accordion-content">
                <div
                  v-for="project in department.projects
                    .slice()
                    .sort((a, b) => a.project_id - b.project_id)"
                  :key="project.project_id"
                >
                  <div class="icon-project">
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
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>

                  <p class="title" style="font-size: 20px">
                    {{ project.title }}
                    <span class="title-description">
                      id:
                      <span style="color: var(--accent-color-1)">{{
                        project.project_id
                      }}</span>
                      | Кол-во студентов в проекте:
                      <span style="color: var(--accent-color-1)">{{
                        project.candidates_count
                      }}</span>
                      | Размер проектной команды:
                      <span style="color: var(--accent-color-1)">{{
                        inputProjects[project.project_id]
                      }}</span>
                    </span>
                  </p>

                  <div class="input">
                    <BaseInput
                      v-model="inputProjects[project.project_id]"
                      type="number"
                      :min="5"
                      :minlength="1"
                      :max="100"
                      :maxlength="3"
                      :placeholder="project.places.toString()"
                      :style="[
                        {
                          boxShadow:
                            inputProjects[project.project_id] != project.places
                              ? '0 0 0 2px var(--accent-color-2)'
                              : 'none',
                        },
                      ]"
                      :disabled="
                        isMutating ||
                        query.isLoading.value ||
                        query.isFetching.value
                      "
                      @change="
                        (e: Event) => {
                          changeMaxValue(e, inputProjects, project.project_id)
                          changeMinPlaceForProject(institute, department)
                        }
                      "
                    />
                  </div>
                </div>
              </div>
            </template>
          </SimpleAccordion>
        </template>
      </SimpleAccordion>
    </BasePanel>
  </div>
</template>

<script setup lang="ts">
  import { computed } from '@vue/runtime-core';
  import { ref } from 'vue';
  import { useMutation, useQuery, useQueryClient } from 'vue-query';
  import { useToast } from 'vue-toastification';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BaseInput from '@/components/ui/BaseInput.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import SimpleAccordion from '@/components/ui/accordion/SimpleAccordion.vue';
  import { useUpdateArmManualDistributionMutation } from '../../api/ArmApi/hooks/useUpdateArmManualDistributionQuery';
  import { USE_GET_ARM_PROJECTS_LIST_QUERY_KEY } from '@/api/ArmApi/hooks/useGetArmProjectsListQuery';
  import { USE_UPDATE_ARM_PROJECTS_LIST_MUTATION_KEY } from '@/api/ArmApi/hooks/useUpdateArmProjectsListQuery';
  import { armApi } from '@/api/ArmApi/index';
  import { useModalsStore } from '../../stores/modals/useModalsStore';
  import {
    ArmDepartment,
    ArmInstitute,
    ArmWithoutParticipation,
  } from '@/models/ArmProjects';

  const toast = useToast();
  const modalsStore = useModalsStore();

  const changeMaxValue = (
    e: Event,
    input: { [x: number]: number },
    value: number,
  ) => {
    const inputElement = e.currentTarget as HTMLInputElement;
    if (inputElement.valueAsNumber >= Number(inputElement.max)) {
      inputElement.value = inputElement.max;
      input[value] = Number(inputElement.max);
    }
  };

  const inputInstitutes = ref<{
    [instituteId: number]: number;
  }>({});

  const inputDepartments = ref<{
    [departmentId: number]: number;
  }>({});

  const inputProjects = ref<{
    [projectId: number]: number;
  }>({});

  const queryClient = useQueryClient();

  const isMutating = ref(false);

  const mutation = useUpdateArmManualDistributionMutation();

  const query = useQuery({
    queryKey: USE_GET_ARM_PROJECTS_LIST_QUERY_KEY,
    queryFn: () => armApi.getArmProjectsList(),
    refetchOnWindowFocus: false,
    onSuccess: () => {
      if (isMutating.value) {
        toast.success('Проекты сформированы');

        isMutating.value = false;

        inputInstitutes.value = {};
        inputDepartments.value = {};
        inputProjects.value = {};

        queryClient.invalidateQueries('GET_DISTRIBUTION_EXIST');

        mutation.mutate([]);
      }
    },
  });

  const mutationQuery = useMutation({
    mutationKey: USE_UPDATE_ARM_PROJECTS_LIST_MUTATION_KEY,
    mutationFn: (data: ArmInstitute[]) => armApi.updateArmProjectsList(data),
    onSuccess: () => {
      queryClient.invalidateQueries(USE_GET_ARM_PROJECTS_LIST_QUERY_KEY);
    },
  });

  const allSilentParticipations = computed<ArmWithoutParticipation[]>(() =>
    new Array([]).flatMap(() => [
      ...(query.data.value?.excess_participations ?? []),
      ...(query.data.value?.without_participation ?? []),
    ]),
  );

  const institutes = computed<ArmInstitute[]>(() =>
    (query.data.value?.projects as ArmInstitute[])
      ?.map((institute) => {
        inputInstitutes.value[institute.institute_id] = Math.min(
          ...institute.departments.flatMap((department) =>
            department.projects.map((project) => project.places),
          ),
        );
        return {
          institute_id: institute.institute_id,
          institute_name: institute.institute_name,
          departments: institute.departments.map((department) => {
            inputDepartments.value[department.department_id] = Math.min(
              ...department.projects.map((project) => project.places),
            );
            return {
              department_id: department.department_id,
              department_name: department.department_name,
              projects: department.projects.map((project) => {
                inputProjects.value[project.project_id] = project.places;
                return {
                  ...project,
                };
              }),
              minPlacesProject: department.projects
                .slice()
                .sort((a, b) => a.places - b.places)[0],
            };
          }),
          minPlacesProject: institute.departments
            .map(
              (department) =>
                department.projects
                  .slice()
                  .sort((a, b) => a.places - b.places)[0],
            )
            .slice()
            .sort((a, b) => a.places - b.places)[0],
        };
      })
      .slice()
      .sort((a, b) => a.institute_id - b.institute_id),
  );

  const changeMinPlaceForProjectOnInstitute = (institute: ArmInstitute) => {
    const minPlacesDepartment = Number(
      inputDepartments.value[
        institute.departments
          .slice()
          .sort(
            (a, b) =>
              inputDepartments.value[a.department_id] -
              inputDepartments.value[b.department_id],
          )[0].department_id
      ],
    );

    institute.departments.forEach((department) => {
      const diff =
        Number(inputInstitutes.value[institute.institute_id]) -
        minPlacesDepartment;

      if (
        Number(inputDepartments.value[department.department_id]) + diff <=
        Number(inputInstitutes.value[institute.institute_id])
      ) {
        inputDepartments.value[department.department_id] = Number(
          inputInstitutes.value[institute.institute_id],
        );

        department.projects.forEach((project) => {
          if (
            Number(inputProjects.value[project.project_id]) + diff <=
            Number(inputDepartments.value[department.department_id])
          ) {
            inputProjects.value[project.project_id] = Number(
              inputDepartments.value[department.department_id],
            );
          }
        });
      }
    });
  };

  const changeMinPlaceForProjectOnDepartment = (
    institute: ArmInstitute,
    department: ArmDepartment,
  ) => {
    const minPlacesProject = Number(
      inputProjects.value[
        department.projects
          .slice()
          .sort(
            (a, b) =>
              inputProjects.value[a.project_id] -
              inputProjects.value[b.project_id],
          )[0].project_id
      ],
    );

    department.projects.forEach((project) => {
      const diff =
        Number(inputDepartments.value[department.department_id]) -
        minPlacesProject;

      if (
        Number(inputProjects.value[project.project_id]) + diff <=
        Number(inputDepartments.value[department.department_id])
      ) {
        inputProjects.value[project.project_id] = Number(
          inputDepartments.value[department.department_id],
        );

        inputInstitutes.value[institute.institute_id] = Math.min(
          ...institute.departments.map((department) =>
            Number(inputDepartments.value[department.department_id]),
          ),
        );
      }
    });
  };

  const changeMinPlaceForProject = (
    institute: ArmInstitute,
    department: ArmDepartment,
  ) => {
    inputDepartments.value[department.department_id] = Math.min(
      ...department.projects.map(
        (project) => inputProjects.value[project.project_id],
      ),
    );
    inputInstitutes.value[institute.institute_id] = Math.min(
      ...institute.departments.flatMap((department) =>
        department.projects.map(
          (project) => inputProjects.value[project.project_id],
        ),
      ),
    );
  };

  const apply = () => {
    let filteredProjectsCount = 0;

    const updatedProjects = institutes.value
      .map((institute) => ({
        institute_id: institute.institute_id,
        institute_name: institute.institute_name,
        departments: institute.departments
          .map((department) => ({
            department_id: department.department_id,
            department_name: department.department_name,
            projects: department.projects
              .map((project) => {
                if (
                  project.places !==
                  Number(inputProjects.value[project.project_id])
                ) {
                  filteredProjectsCount++;
                }

                return project;
              })
              .map((project) => ({
                ...project,
                places: Number(inputProjects.value[project.project_id]),
              })),
          }))
          .filter((department) => department.projects.length),
      }))
      .filter((institute) => institute.departments.length);

    if (!filteredProjectsCount) {
      toast.info('Внесите какие нибудь изменения');

      return;
    }

    isMutating.value = true;

    mutationQuery.mutate(updatedProjects);
  };

  const openConfirmModal = () => {
    const agree = () => {
      apply();
      modalsStore.closeConfirmModal();
    };
    const disagree = () => {
      modalsStore.closeConfirmModal();
    };
    modalsStore.openConfirmModal(
      'Вы хотите применить автоматическое распределение?',
      'Да',
      'Нет',
      agree,
      disagree,
    );
  };
</script>

<style lang="scss" scoped>
  $padding: 20px;

  .buttons {
    position: absolute;
    top: -82.5px;
    right: 0;
    display: flex;
    gap: 15px;

    @media (width <= 900px) {
      position: relative;
      top: 0;
      justify-content: end;
      margin-bottom: 15px;
    }

    @media (width <= 430px) {
      & > button {
        width: 100%;
      }
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

  .input {
    $input-width: 85px;

    min-width: $input-width;
    max-width: $input-width;
    text-align: center;
  }

  .inner-accordion-content {
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
      padding-right: 45px;
      border-bottom: 1px solid var(--gray-color-1);

      @media (width <= 500px) {
        flex-wrap: wrap;
      }
    }
  }

  .accordion {
    &-title {
      display: flex;
      gap: 15px;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: $padding 0;
      padding-right: 26.5px;

      & .title {
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;

        &-description {
          font-size: 16px;
          color: var(--gray-color-2);
        }
      }

      &:hover .title {
        color: var(--accent-color-1);
      }

      @media (width <= 500px) {
        flex-wrap: wrap;

        & .title {
          font-size: 20px;

          &-description {
            font-size: 14px;
          }
        }
      }
    }

    &.opened > header > button > div > p.title {
      color: var(--accent-color-1);
    }

    &.opened:deep(.header > button.title) {
      border-bottom: 1px solid var(--gray-color-1);
    }

    &.opened:deep(.content) {
      border-left: 2px dashed var(--gray-color-1);
      transition: 0.05s ease-in-out;

      // &:hover {
      //   border-left: 2px solid var(--accent-color-1);
      // }

      &:has(> .inner-accordion-content) {
        border-left: 4px solid var(--accent-color-2);
      }
    }

    &:deep(button.title) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }

    &:deep(.content) {
      padding-left: $padding;
    }
  }
</style>
