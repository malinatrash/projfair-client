<template>
  <!-- Вёрстка тут трешб конечно -->
  <!-- TODO: можно раскидать как-то по компонентам мб -->
  <div :class="['wrapper', props.variant]">
    <ul :class="['list', props.variant]">
      <template v-for="link in routes" :key="link.name">
        <li :class="['item', props.variant]">
          <RouterLink
            v-if="!link.meta.links"
            :class="['action', props.variant]"
            :to="{ name: link.name }"
          >
            {{ link.meta.title }}
          </RouterLink>
          <template v-else>
            <template v-if="props.variant == 'desktop'">
              <SimpleAccordion class="accordion" default-opened>
                <template #title>
                  <p :class="['action', props.variant]">
                    {{ link.meta.title }}
                  </p>
                </template>
                <template #content>
                  <ul :class="['list', props.variant]">
                    <li
                      v-for="childLink in link.meta.links"
                      :key="childLink.title"
                      :class="['item', props.variant]"
                    >
                      <RouterLink
                        :class="['action', props.variant]"
                        :to="childLink.location"
                      >
                        {{ childLink.title }}
                        <OnReviewProposalsLabel
                          v-if="
                            childLink.name ===
                            RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_NEW
                          "
                        />
                        <IntituteProjectsQuota
                          v-else-if="
                            childLink.name ===
                            RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_APPROVED_ON_YEAR
                          "
                          :state-id="
                            FilterByToProjectProposalStateId['approved_on_year']
                          "
                        />
                        <IntituteProjectsQuota
                          v-else-if="
                            childLink.name ===
                            RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_APPROVED_AUTUMN
                          "
                          :class="{
                            'disabled-autumn disabled':
                              !academicYear.isAutumn(),
                          }"
                          :state-id="
                            FilterByToProjectProposalStateId['approved_autumn']
                          "
                        />
                        <IntituteProjectsQuota
                          v-else-if="
                            childLink.name ===
                            RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_APPROVED_SPRING
                          "
                          :class="{
                            'disabled-spring disabled':
                              !academicYear.isSpring(),
                          }"
                          :state-id="
                            FilterByToProjectProposalStateId['approved_spring']
                          "
                        />
                        <IntituteProjectsQuota
                          v-else-if="
                            childLink.name ===
                            RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_REJECTED
                          "
                          :state-id="
                            FilterByToProjectProposalStateId['rejected']
                          "
                          :is-limit="false"
                        />
                      </RouterLink>
                    </li>
                  </ul>
                </template>
              </SimpleAccordion>
            </template>
            <template v-else>
              <li :class="['item', props.variant]">
                <RouterLink
                  v-if="!link.meta.links"
                  :class="['action', props.variant]"
                  :to="{ name: link.name }"
                >
                  {{ link.meta.title }}
                </RouterLink>
                <template v-else>
                  <ul :class="['list', props.variant]">
                    <template
                      v-for="childLink in link.meta.links"
                      :key="childLink.title"
                    >
                      <li :class="['item', props.variant]">
                        <RouterLink
                          :class="['action', props.variant]"
                          :to="childLink.location"
                        >
                          {{ childLink.title }}
                          <OnReviewProposalsLabel
                            v-if="
                              childLink.name ===
                              RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_NEW
                            "
                            style="margin-bottom: 3px; margin-left: 7.5px"
                          />
                          <IntituteProjectsQuota
                            v-else-if="
                              childLink.name ===
                              RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_APPROVED
                            "
                          />
                        </RouterLink>
                      </li>
                    </template>
                  </ul>
                </template>
              </li>
            </template>
          </template>
        </li>
      </template>
      <li :class="['item', props.variant]">
        <button :class="['action', props.variant]" @click="logout">
          Выйти из профиля
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import IntituteProjectsQuota from '@/components/project-proposal/IntituteProjectsQuota.vue';
  import SimpleAccordion from '@/components/ui/accordion/SimpleAccordion.vue';
  import { useLogoutWithModalMutation } from '@/api/AuthApi/hooks/useLogoutWithModalMutation';
  import { useRoledUserNavigationRoutes } from '@/hooks/useRoutes';
  import { getAcademicYear } from '@/helpers/date';
  import { RouteNames } from '@/router/types/route-names';
  import { FilterByToProjectProposalStateId } from '@/router/utils/routes';
  import OnReviewProposalsLabel from './OnReviewProposalsLabel.vue';

  type Props = { variant: 'desktop' | 'mobile' };
  const props = withDefaults(defineProps<Props>(), { variant: 'desktop' });
  const routes = useRoledUserNavigationRoutes();

  const academicYear = getAcademicYear(new Date().getMonth());

  const { logout } = useLogoutWithModalMutation();
</script>

<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
    border: 1px solid var(--gray-color-1);
    border-radius: 0.625rem;

    &.mobile {
      overflow: visible;
      border: none;
      border-radius: 0;
    }

    &::-webkit-scrollbar {
      appearance: none;
      width: 5px;
      height: 5px;
    }
  }

  .list {
    padding: 0 1.375rem;
    background: var(--light-color);

    & > .item > .accordion > .content > .list {
      padding-right: 0;
    }

    &.mobile {
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      gap: 1rem;
      padding-bottom: 1rem;
      margin-top: -2px;
      margin-right: calc(var(--side-padding) * -1);
      margin-left: calc(var(--side-padding) * -1);
      overflow-x: auto;
      border: none;
      border-radius: 0;
    }

    & > .item.mobile {
      height: 47px;
    }

    &::-webkit-scrollbar {
      height: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--accent-color-2);
    }
  }

  .action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.25rem 0;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: var(--text-color);

    /* for button */
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    background: transparent;
    border: none;

    &.mobile {
      padding: 1rem;
      font-size: 0.9rem;
      color: var(--gray-color-2);
      text-transform: uppercase;
    }
  }

  .action:hover,
  .action.router-link-active {
    color: var(--accent-color-1);

    &.mobile {
      border-bottom: 2px solid var(--accent-color-1);
    }
  }

  .item {
    list-style: none;

    &:has(.disabled) > .action {
      position: relative;
      color: #38383833;
      pointer-events: none;
      cursor: default;
    }

    &:has(.disabled-autumn) > .action {
      --text: 'Недоступно в весеннем семестре';
    }

    &:has(.disabled-spring) > .action {
      --text: 'Недоступно в осеннем семестре';
    }

    &:has(.disabled) > .action::after {
      position: absolute;
      bottom: 85%;
      left: 50%;
      display: none;
      width: 85%;
      height: auto;
      padding: 15px;
      font-size: 0.925rem;
      color: #383838;
      content: var(--text);
      background-color: white;
      border: 1px solid var(--gray-color-1);
      border-radius: 0.75rem;
      box-shadow: 0 0 15px 0 #38383822;
      transition: 0.15s ease-in-out;
      transition-behavior: allow-discrete;
    }

    &:has(.disabled):hover > .action::after {
      display: block;
      opacity: 1;
      transform: translate(-50%, 0);

      @starting-style {
        opacity: 0;
      }
    }

    &:has(.disabled-autumn):hover > .action::after {
      bottom: 85%;
      @starting-style {
        transform: translate(-50%, 10%) scale(0.75);
      }
    }

    &:has(.disabled-spring):hover > .action::after {
      bottom: -110%;
      @starting-style {
        transform: translate(-50%, -10%) scale(0.75);
      }
    }

    &.mobile {
      white-space: nowrap;
    }
  }

  .item:not(:last-child) {
    border-bottom: 1px solid var(--gray-color-1);

    &.mobile {
      border-bottom: none;
    }
  }

  .accordion {
    &:deep(.title) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &.opened:deep(.title) {
      border-bottom: 1px solid var(--gray-color-1);
    }
  }
</style>
