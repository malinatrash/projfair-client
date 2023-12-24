<template>
  <article :class="['card', stateClass]">
    <header class="header container">
      <RouterLink class="title" :to="toProjectRoute(project.id)">
        {{ project.title }}
      </RouterLink>
      <ProjectStatus
        class="status"
        :state="project.state"
        :use-acronyms="isMobile"
      />
      <div
        v-if="project.supervisorsNames || project.supervisors?.length > 0"
        class="subtitle"
      >
        {{
          project.supervisorsNames ||
          project.supervisors
            .map((supervisor) => supervisor.supervisor.fio)
            .join(', ')
        }}
      </div>
      <div v-if="project?.specialities.length > 0" class="subtitle">
        <div
          v-if="
            project.project_specialities.some((spec) => spec.course === null)
          "
        >
          {{ project.specialities.map((ins) => ins.name).join(', ') }}
        </div>
        <div
          v-else
          v-for="(course, index) in [...courses].sort((a, b) => a - b)"
          :key="index"
        >
          <b>
            <span>{{ course }}</span> курс:
          </b>

          <span
            v-for="(spec, index) in specialtistOfFirstPriority(course)"
            :key="index"
          >
            <span>{{ spec.name }}</span>

            <span v-if="index !== specialtistOfFirstPriority(course).length - 1"
              >,
            </span>
          </span>
          <span
            v-if="specialtistWithoutFirstPriority(course).length !== 0"
            style="margin-bottom: 0.25rem"
          >
            |
            <b>приглашённые: </b>
            <span
              v-for="(spec, index) in specialtistWithoutFirstPriority(course)"
              :key="index"
            >
              <span>{{ spec.name }}</span>

              <span
                v-if="
                  index !== specialtistWithoutFirstPriority(course).length - 1
                "
                >,
              </span>
            </span>
          </span>
        </div>
      </div>
      <ProjectCardInfo
        v-if="isSmallDevice"
        class="mobile-info"
        :places="project.places"
        :difficulty="project.difficulty"
      />
    </header>
    <div class="divider"></div>
    <div class="body container">
      <ul class="list">
        <li v-if="project.goal" class="list-item">
          <b>Цель:</b>
          {{ project.goal }}
        </li>
        <li v-if="project.date_start" class="list-item">
          <b>Старт проекта:</b> {{ project.date_start }}
        </li>
      </ul>
      <ProjectCardInfo
        v-if="isDesktop"
        :places="project.places"
        :difficulty="project.difficulty"
      />
    </div>
    <footer class="footer container">
      <TagList
        :tag-list="
          props.project.skills.filter(
            (skill) => skill.name.split(' ').length < 10,
          )
        "
        :decl-of-num="['навык', 'навыка', 'навыков']"
      />
      <div class="actions">
        <OpenParticipationModalButton :project="props.project" />
        <OpenFeedbackModalButton :project="props.project" />
        <BaseButton
          is="router-link"
          v-if="props.project.state.id === 2 && isCurrentSupervisor"
          variant="outlined"
          case="uppercase"
          :to="toProjectResultRoute(project.id)"
        >
          Сформировать результаты
        </BaseButton>
        <BaseButton
          is="router-link"
          v-if="props.project.state.id === 4"
          variant="outlined"
          case="uppercase"
          :to="toProjectResultRoute(project.id)"
        >
          Результаты проекта
        </BaseButton>
        <BaseButton
          is="router-link"
          case="uppercase"
          :to="toProjectRoute(project.id)"
        >
          Подробнее
        </BaseButton>
      </div>
    </footer>
  </article>
</template>

<script setup lang="ts">
  import Cookies from 'js-cookie';
  import { isEmpty } from 'lodash';
  import { RouterLink } from 'vue-router';
  import {
    useDesktop,
    useMobile,
    useSmallDevice,
  } from '@/hooks/useBreakpoints';
  import { toProjectResultRoute, toProjectRoute } from '@/router/utils/routes';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { Project } from '@/models/Project';
  import { StateClass } from '@/models/ProjectState';
  import OpenFeedbackModalButton from '../feedback/OpenFeedbackModalButton.vue';
  import OpenParticipationModalButton from '../participation/OpenParticipationModalButton.vue';
  import BaseButton from '../ui/BaseButton.vue';
  import TagList from '../ui/TagList.vue';
  import ProjectCardInfo from './ProjectCardInfo.vue';
  import ProjectStatus from './ProjectStatus.vue';

  const props = defineProps<{ project: Project }>();
  const isSmallDevice = useSmallDevice();
  const isDesktop = useDesktop();
  const isMobile = useMobile();
  const isCurrentSupervisor = props.project.supervisors.some((supervisor) => {
    return supervisor.id === useAuthStore().profileData?.id;
  });

  const stateClass = StateClass[props.project.state.id];

  const courses = new Set();
  props.project.project_specialities.forEach((spec) => {
    courses.add(spec.course);
  });

  const getSpecialtyNameAndPriorityListFromCourse = (course: unknown) => {
    return [
      ...new Set(
        props.project.project_specialities
          .filter((spec) => spec.course === course)
          .map((spec) => {
            return {
              name: spec.speciality.name,
              priority: spec.priority,
            };
          }),
      ),
    ];
  };

  const specialtistOfFirstPriority = (course: unknown) =>
    getSpecialtyNameAndPriorityListFromCourse(course).filter(
      (spec) => spec.priority === 1,
    );
  const specialtistWithoutFirstPriority = (course: unknown) =>
    getSpecialtyNameAndPriorityListFromCourse(course).filter(
      (spec) => spec.priority !== 1,
    );
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  .card {
    --border-left-color: var(--accent-color-1);

    width: 100%;
    padding-top: 1.375rem;
    padding-bottom: 1.375rem;
    background: #fff;
    border-left: 1.25rem solid var(--border-left-color);
    border-radius: 0.625rem;
    box-shadow: 0 0 0.3125rem rgb(0 0 0 / 18%);

    @media (max-width: $tablet) {
      border-left: none;
    }
  }

  .card.active {
    --border-left-color: var(--green-color-1);
  }

  .card.extra {
    --border-left-color: var(--accent-color-2);
  }

  .card.archived {
    --border-left-color: var(--gray-color-2);
  }

  .card.processing {
    --border-left-color: var(--accent-color-3);
  }

  .footer {
    display: flex;
    gap: 3.375rem;
    align-items: center;
    justify-content: space-between;

    @media (max-width: $tablet) {
      flex-direction: column;
      gap: 18px;
      align-items: initial;
    }
  }

  .header {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.8125rem;
    align-items: center;
    padding-bottom: 1.25rem;
  }

  .actions {
    display: flex;
    gap: 0.75rem;
    align-self: flex-end;
    margin-left: auto;

    @media (max-width: $tablet) {
      flex-direction: column;
      align-items: initial;
      align-self: initial;
      margin-left: 0;
    }
  }

  .mobile-info {
    display: flex;
    grid-row: 4;
    grid-column: 1;
    margin-top: 0;
  }

  .container {
    padding-right: 1.25rem;
    padding-left: 1.25rem;
  }

  .divider {
    width: 100%;
    height: 2px;
    background-color: var(--gray-color-1);
  }

  .title {
    max-width: 44.0625rem;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.9375rem;
    color: #4f5569;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:focus-visible {
      text-decoration: underline;
    }
    @media (max-width: $tablet) {
      grid-column: 1 / -1;
      max-width: none;
    }
  }

  .subtitle {
    grid-column: 1 / -1;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #4f5569;

    &:nth-child(3) {
      grid-row: 2;
    }

    &:nth-child(4) {
      grid-row: 3;
    }
  }

  .status {
    align-self: flex-start;
    justify-self: flex-end;
    white-space: nowrap;

    @media (max-width: $tablet) {
      grid-column: 2;
      padding-right: 1rem;
      padding-left: 1rem;
    }
  }

  .body {
    padding-top: 2.3125rem;
    padding-bottom: 1.625rem;
  }

  .list {
    padding-left: 0;
  }

  .list-item {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    color: var(--text-color);
    overflow-wrap: anywhere;
    list-style: none;
  }

  .list-item:not(:last-child) {
    margin-bottom: 1.0625rem;
  }
</style>
