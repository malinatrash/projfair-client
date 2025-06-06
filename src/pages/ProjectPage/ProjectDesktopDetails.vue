<template>
  <!-- Panel -->
  <BasePanel>
    <GridLayout cols="4fr 4fr 2fr">
      <!-- Information list -->
      <AppList
        :items="[
          {
            title: 'Руководители проекта',
            content:
              project.supervisorsNames ||
              project.supervisors
                .map((supervisor) => supervisor.supervisor.fio)
                .join(', '),
          },
          {
            title: 'Старт проекта',
            content: project.date_start,
          },
          {
            title: 'Сложность',
            content: DifficultyText[project.difficulty],
          },
          {
            title: 'Заказчик',
            content: project.customer,
          },
        ]"
      />
      <!-- Information list -->
      <AppList>
        <AppListItem>
          <template #title>Цель проекта</template>
          <template #default>
            {{ project.goal }}
          </template>
        </AppListItem>

        <AppListItem>
          <template #title>История проекта</template>
          <template #default>
            <ProjectHistoryButton
              :history-length="history?.length"
              @click="emit('showHistory')"
            />
          </template>
        </AppListItem>
      </AppList>

      <div>
        <p class="info-title">Статус проекта</p>
        <ProjectStatus class="badge mt-2" :state="project.state" />
        <p class="info-title mt-4">Максимальное количество студентов</p>
        <ProjectTeamCounter class="mt-2" :total="project.places" />
        <BaseButton
          is="router-link"
          v-if="project.state.id === 2 && isCurrentSupervisor"
          class="mt-2"
          variant="outlined"
          case="uppercase"
          :to="toProjectResultRoute(project.id)"
        >
          Сформировать результаты
        </BaseButton>
        <!--<BaseButton
          is="router-link"
          v-if="project.state.id === 4"
          class="mt-2"
          variant="outlined"
          case="uppercase"
          :to="toProjectResultRoute(project.id)"
        >
          Результаты проекта
        </BaseButton>-->
        <OpenParticipationModalButton class="mt-4" :project="project" />
        <OpenFeedbackModalButton class="mt-4" :project="project" />
      </div>
    </GridLayout>
  </BasePanel>

  <!-- Panel -->
  <BasePanel>
    <!-- Information list -->
    <AppList
      :items="[
        {
          title: 'Описание проекта',
          content: project.description,
          wide: true,
        },
      ]"
    />
  </BasePanel>

  <!-- Panel -->
  <BasePanel>
    <GridLayout :cols="2">
      <!-- Information list -->
      <AppList
        :items="[
          {
            title: 'Ожидаемый продуктовый результат',
            content: project.product_result,
          },
        ]"
      />

      <!-- Information list -->
      <AppList
        :items="[
          {
            title: 'Ожидаемый учебный результат',
            content: project.study_result,
          },
        ]"
      />
    </GridLayout>
  </BasePanel>

  <!-- Panel -->
  <BasePanel v-if="project.specialities.length > 0">
    <!-- Information list -->
    <AppList>
      <AppListItem :bold="false" :wide="true">
        <template #title>Специальности</template>
        <template #default>
          <div
            class="subtitle"
            style="display: flex; flex-direction: column; gap: 15px"
          >
            <div
              v-if="
                project.project_specialities.some(
                  (spec) => spec.course === null,
                )
              "
            >
              {{ project.specialities.map((ins) => ins.name).join(', ') }}
            </div>
            <div
              v-for="(course, index) in [...courses].sort((a: any, b: any) => a - b)"
              v-else
              :key="index"
              style="display: flex; gap: 0.5rem; align-items: center"
            >
              <b>
                <span>{{ course }}</span> курс:
              </b>

              <TagList
                :tag-list="
                  filterSpecialtiesByPriority(project, course).map(
                    (spec, index) => ({
                      id: index,
                      name: spec.name,
                    }),
                  )
                "
                show-all
              />
              <b
                v-if="
                  filterSpecialtiesByPriority(project, course, false).length !==
                  0
                "
                >приглашённые:
              </b>
              <TagList
                :tag-list="
                  filterSpecialtiesByPriority(project, course, false).map(
                    (spec, index) => ({
                      id: index,
                      name: spec.name,
                    }),
                  )
                "
                show-all
              />
            </div>
          </div>
        </template>
      </AppListItem>
    </AppList>
  </BasePanel>

  <!-- Panel -->
  <BasePanel v-if="project.skills.length > 0">
    <!-- Information list -->
    <AppList>
      <AppListItem :bold="false" :wide="true">
        <template #title>Требования к студентам</template>
        <template #default>
          <TagList :tag-list="project.skills" show-all />
        </template>
      </AppListItem>
    </AppList>
  </BasePanel>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import OpenFeedbackModalButton from '@/components/feedback/OpenFeedbackModalButton.vue';
  import OpenParticipationModalButton from '@/components/participation/OpenParticipationModalButton.vue';
  import ProjectStatus from '@/components/project/ProjectStatus.vue';
  import ProjectTeamCounter from '@/components/project/ProjectTeamCounter.vue';
  import AppList from '@/components/ui/AppList.vue';
  import AppListItem from '@/components/ui/AppListItem.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import GridLayout from '@/components/ui/GridLayout.vue';
  import TagList from '@/components/ui/TagList.vue';
  import {
    checkCurrentSupervisor,
    filterSpecialtiesByPriority,
    getCourses,
  } from '@/helpers/projectCardUtils';
  import { toProjectResultRoute } from '@/router/utils/routes';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { Project } from '@/models/Project';
  import { DifficultyText } from '@/models/ProjectDifficulty';
  import ProjectHistoryButton from './ProjectHistoryButton.vue';

  interface Props {
    project: Project;
    history?: Project[];
    showHistoryModal: boolean;
  }

  interface Emits {
    (e: 'showHistory'): void;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<Emits>();

  const courses = computed(() => getCourses(props.project));

  const isCurrentSupervisor = computed(() =>
    checkCurrentSupervisor(props.project, useAuthStore()),
  );
</script>

<style lang="scss" scoped>
  .badge {
    width: max-content;
  }

  .info-title {
    font-size: inherit;
    font-weight: 600;
    line-height: normal;
  }
</style>
