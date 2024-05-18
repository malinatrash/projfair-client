<template>
  <BasePanel :class="$style.card">
    <header :class="$style.header">
      <RouterLink
        :class="$style.title"
        :to="toProjectProposalCreateRoute(props.projectProposal.id)"
      >
        {{ props.projectProposal.title }}
      </RouterLink>
      <ProjectProposalStatus
        :class="$style.status"
        :state="props.projectProposal.state"
      />
      <p :class="$style.subtitle">
        {{ props.projectProposal.goal }}
      </p>

      <div v-if="projectProposal?.specialities.length > 0" class="subtitle">
        <div
          v-if="
            projectProposal.project_specialities.some(
              (spec) => spec.course === null,
            )
          "
        >
          {{ projectProposal.specialities.map((ins) => ins.name).join(', ') }}
        </div>
        <div
          v-for="(course, index) in [...courses].sort((a: any, b: any) => a - b)"
          v-else
          :key="index"
        >
          <b>
            <span>{{ course }}</span> курс:
          </b>

          <span
            v-for="(spec, indexInner) in specialtistOfFirstPriority(course)"
            :key="indexInner"
          >
            <span>{{ spec.name }}</span>

            <span
              v-if="
                indexInner !== specialtistOfFirstPriority(course).length - 1
              "
              >,
            </span>
          </span>
          <span
            v-if="specialtistWithoutFirstPriority(course).length !== 0"
            style="margin-bottom: 0.25rem"
          >
            <span v-if="specialtistOfFirstPriority(course).length"> | </span>
            <b>приглашённые: </b>
            <span
              v-for="(spec, indexInner) in specialtistWithoutFirstPriority(
                course,
              )"
              :key="indexInner"
            >
              <span>{{ spec.name }}</span>

              <span
                v-if="
                  indexInner !==
                  specialtistWithoutFirstPriority(course).length - 1
                "
                >,
              </span>
            </span>
          </span>
        </div>
      </div>

      <div
        style="
          display: flex;
          grid-row: 2;
          grid-column: 2;
          justify-content: right;
        "
      >
        <svg
          v-if="
            new Date(
              Date.parse(props.projectProposal.date_end) -
                Date.parse(props.projectProposal.date_start),
            ).getMonth() > 4
          "
          width="80"
          height="41"
          viewBox="0 0 80 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1.96924"
            width="78"
            height="38"
            rx="19"
            fill="url(#paint0_linear_76_3537)"
            stroke="#3D68ED"
            stroke-width="2"
          />
          <line
            y1="-1"
            x2="42.3301"
            y2="-1"
            transform="matrix(0.440592 -0.897707 0.440592 0.897707 30.4297 40.7754)"
            stroke="#3D68ED"
            stroke-width="2"
          />
          <path
            d="M32.9583 15.2V16.698H29.1783V25H27.5683V15.2H32.9583ZM38.5984 25.182C37.1144 25.182 35.8824 24.7013 34.9024 23.74C33.9224 22.7693 33.4324 21.556 33.4324 20.1C33.4324 18.644 33.9224 17.4353 34.9024 16.474C35.8824 15.5033 37.1144 15.018 38.5984 15.018C40.0824 15.018 41.3144 15.5033 42.2944 16.474C43.2744 17.4353 43.7644 18.644 43.7644 20.1C43.7644 21.052 43.5404 21.92 43.0924 22.704C42.6537 23.4787 42.0377 24.0853 41.2444 24.524C40.4604 24.9627 39.5784 25.182 38.5984 25.182ZM36.0784 22.634C36.7504 23.306 37.5904 23.642 38.5984 23.642C39.6157 23.642 40.4557 23.306 41.1184 22.634C41.7904 21.9527 42.1264 21.108 42.1264 20.1C42.1264 19.092 41.7904 18.252 41.1184 17.58C40.4557 16.8987 39.6157 16.558 38.5984 16.558C37.5904 16.558 36.7504 16.8987 36.0784 17.58C35.4064 18.252 35.0704 19.092 35.0704 20.1C35.0704 21.108 35.4064 21.9527 36.0784 22.634ZM53.085 23.502H54.065V26.904H52.581V25H45.875V26.904H44.391V23.502H45.161C45.2823 23.418 45.385 23.3293 45.469 23.236C45.553 23.1427 45.637 23.012 45.721 22.844C45.805 22.676 45.875 22.4987 45.931 22.312C45.987 22.1253 46.043 21.8687 46.099 21.542C46.1643 21.206 46.2203 20.8653 46.267 20.52C46.3137 20.1653 46.365 19.7033 46.421 19.134C46.4863 18.5553 46.5423 17.9767 46.589 17.398C46.645 16.81 46.7103 16.0773 46.785 15.2H53.085V23.502ZM48.227 16.698C48.059 18.9753 47.8863 20.5853 47.709 21.528C47.5317 22.4613 47.261 23.1193 46.897 23.502H51.461V16.698H48.227Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_76_3537"
              x1="41.9632"
              y1="16.2754"
              x2="42.3587"
              y2="16.4695"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3D68ED" />
              <stop offset="1" stop-color="#3D68ED" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          v-else-if="
            getAcademicYear(
              new Date(Date.parse(props.projectProposal.date_start)).getMonth(),
            ).isAutumn()
          "
          width="80"
          height="40"
          viewBox="0 0 80 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="78"
            height="38"
            rx="19"
            fill="url(#paint0_linear_76_3529)"
            stroke="#3D68ED"
            stroke-width="2"
          />
          <line
            y1="-1"
            x2="42.3301"
            y2="-1"
            transform="matrix(0.440592 -0.897707 0.440592 0.897707 30.4297 39.8062)"
            stroke="#3D68ED"
            stroke-width="2"
          />
          <path
            d="M20.6952 23.8062V14.0062H22.3052V23.8062H20.6952Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_76_3529"
              x1="41.9632"
              y1="15.3061"
              x2="42.3587"
              y2="15.5003"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3D68ED" />
              <stop offset="1" stop-color="#131313" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          v-else-if="
            getAcademicYear(
              new Date(Date.parse(props.projectProposal.date_start)).getMonth(),
            ).isSpring()
          "
          width="80"
          height="41"
          viewBox="0 0 80 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1.58154"
            width="78"
            height="38"
            rx="19"
            fill="url(#paint0_linear_76_3533)"
            stroke="#3D68ED"
            stroke-width="2"
          />
          <line
            y1="-1"
            x2="42.3301"
            y2="-1"
            transform="matrix(0.440592 -0.897707 0.440592 0.897707 30.4297 40.3877)"
            stroke="#3D68ED"
            stroke-width="2"
          />
          <path
            d="M55.6444 25V15.2H57.2544V25H55.6444ZM59.746 25V15.2H61.356V25H59.746Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_76_3533"
              x1="41.9632"
              y1="15.8877"
              x2="42.3587"
              y2="16.0818"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3D68ED" stop-opacity="0" />
              <stop offset="1" stop-color="#3D68ED" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </header>
    <footer :class="$style.footer">
      <slot name="team">
        <ul :class="$style['team-list']">
          <li v-for="teamMember in teamList" :key="teamMember.id">
            <slot
              name="team-member"
              :teamMember="teamMember"
              :teamList="teamList"
            ></slot>
          </li>
        </ul>
      </slot>

      <div :class="$style.actions">
        <slot name="actions"></slot>
      </div>
    </footer>
  </BasePanel>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import ProjectProposalStatus from '@/components/project/ProjectProposalStatus.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import { getAcademicYear } from '../../helpers/date';
  import { toProjectProposalCreateRoute } from '@/router/utils/routes';
  import { CreatedProjectProposal } from '@/models/ProjectProposal';

  interface Props {
    projectProposal: CreatedProjectProposal;
  }

  const props = defineProps<Props>();

  const teamList = computed(() => props.projectProposal.supervisors);

  const courses = new Set();
  props.projectProposal.project_specialities.forEach((spec) => {
    courses.add(spec.course);
  });

  const getSpecialtyNameAndPriorityListFromCourse = (course: unknown) => {
    return [
      ...new Set(
        props.projectProposal.project_specialities
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

<style lang="scss" module>
  @import '@styles/breakpoints';

  .actions {
    display: flex;
    gap: 0.8125rem;
    align-items: center;
  }

  .header {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.8125rem;
    align-items: center;
    padding-bottom: 1.25rem;
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

  .card {
    padding: 1.375rem 1.3125rem !important;
  }

  .footer {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    justify-content: space-between;
  }

  .title {
    max-width: 26.375rem;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.9375rem;
    color: #4f5569;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .subtitle {
    grid-column: 1 / -1;
    max-width: 26.3125rem;
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

  .team-list {
    flex: 1;
    list-style: none;

    li:empty {
      display: none;
    }
  }
</style>
