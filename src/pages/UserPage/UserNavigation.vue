<template>
  <!-- Вёрстка тут трешб конечно -->
  <!-- TODO: можно раскидать как-то по компонентам мб -->
  <div :class="['wrapper', props.variant]">
    <ul :class="['list', props.variant]">
      <!--      <li :class="['item', props.variant]">-->
      <!--        <SimpleAccordion-->
      <!--          v-if="props.variant == 'desktop'"-->
      <!--          class="accordion"-->
      <!--          default-opened-->
      <!--        >-->
      <!--          <template #title>-->
      <!--            <span :class="['action', props.variant]">Фильтрация</span>-->
      <!--          </template>-->
      <!--          <template #content>-->
      <!--            <div class="box">-->
      <!--              <div class="container">-->
      <!--                <span>НАСТАВНИК</span>-->
      <!--                <BaseInput placeholder="Аршинский В.Л." :model-value="mentor" />-->
      <!--              </div>-->
      <!--              <div class="container">-->
      <!--                <span>ПРОДОЛЖИТЕЛЬНОСТЬ</span>-->
      <!--                <BaseCheckbox :value="true">1 СЕМЕСТР</BaseCheckbox>-->
      <!--                <BaseCheckbox :value="true">2 СЕМЕСТР</BaseCheckbox>-->
      <!--                <BaseCheckbox :value="true">ГОД</BaseCheckbox>-->
      <!--              </div>-->
      <!--              <div class="container">-->
      <!--                <div style="display: flex; gap: 8px; justify-content: center">-->
      <!--                  <BaseButton variant="tag-outlined">Сбросить</BaseButton>-->
      <!--                  <BaseButton variant="tag">Показать</BaseButton>-->
      <!--                </div>-->
      <!--              </div>-->
      <!--            </div>-->
      <!--          </template>-->
      <!--        </SimpleAccordion>-->
      <!--      </li>-->
      <template v-for="link in routes" :key="link.name">
        <li
          v-if="
            link.name !== RouteNames.INST_DIRECTOR_PROJECTS_REPORTS ||
            authStore.isInstDirector
          "
          :class="['item', props.variant]"
        >
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
                        v-if="(profileData.department.institute.id ==
                            FilterByToProjectReportNameId[
                              childLink.location.params
                                ?.filterBy as FilterInstituteProjectReportsBy
                            ] || link.name === 'INST_DIRECTOR_PROJECT_PROPOSALS' || authStore.isHeadOfProjectEducationCenter) && getReportCountMaxApproved(childLink.name)"
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
                        <InstituteProjectsQuota
                          v-else-if="
                            childLink.name ===
                            RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_APPROVED_ON_YEAR
                          "
                          :state-id="
                            FilterByToProjectProposalStateId['approved_on_year']
                          "
                        />
                        <InstituteProjectsQuota
                          v-else-if="
                            childLink.name ===
                            RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_APPROVED_AUTUMN
                          "
                          :state-id="
                            FilterByToProjectProposalStateId['approved_autumn']
                          "
                        />
                        <InstituteProjectsQuota
                          v-else-if="
                            childLink.name ===
                            RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_APPROVED_SPRING
                          "
                          :state-id="
                            FilterByToProjectProposalStateId['approved_spring']
                          "
                        />
                        <InstituteProjectsQuota
                          v-else-if="
                            childLink.name ===
                            RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS_REJECTED
                          "
                          :state-id="
                            FilterByToProjectProposalStateId['rejected']
                          "
                          :is-limit="false"
                        />
                        <InstituteProjectReportsQuota
                          v-else-if="
                            childLink.name ===
                            RouteNames.INST_DIRECTOR_PROJECTS_REPORTS_ALL
                          "
                          :state-id="FilterByToProjectReportNameId['all']"
                          :is-compare="true"
                          :is-limit="false"
                        />

                        <InstituteProjectReportsQuota
                          v-else-if="
                            childLink.name.includes(
                              'INST_DIRECTOR_PROJECTS_REPORTS_',
                            )
                          "
                          :state-id="
                            FilterByToProjectReportNameId[
                            childLink.name.replace('INST_DIRECTOR_PROJECTS_REPORTS_', '').toLowerCase() as FilterInstituteProjectReportsBy
                            ]
                          "
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
                          <InstituteProjectsQuota
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
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router';
  import InstituteProjectsQuota from '@/components/project-proposal/InstituteProjectsQuota.vue';
  import InstituteProjectReportsQuota from '@/components/project-report/InstituteProjectReportsQuota.vue';
  import SimpleAccordion from '@/components/ui/accordion/SimpleAccordion.vue';
  import { useLogoutWithModalMutation } from '@/api/AuthApi/hooks/useLogoutWithModalMutation';
  import { useInstituteReportsMetaData } from '../../hooks/useInstituteReportsMetaData';
  import { ReportsCount } from '@/hooks/useInstituteReportsMetaData';
  import { useRoledUserNavigationRoutes } from '@/hooks/useRoutes';
  import { FilterInstituteProjectReportsBy } from '../../router/utils/routes';
  import { RouteNames } from '@/router/types/route-names';
  import {
    FilterByToProjectProposalStateId,
    FilterByToProjectReportNameId,
  } from '@/router/utils/routes';
  import { useAuthStore } from '@/stores/auth/useAuthStore';
  import { UserSupervisor } from '@/models/User';
  import OnReviewProposalsLabel from './OnReviewProposalsLabel.vue';

  const mentor = ref('');

  type Props = { variant: 'desktop' | 'mobile' };
  const props = withDefaults(defineProps<Props>(), { variant: 'desktop' });
  const routes = useRoledUserNavigationRoutes();

  const authStore = useAuthStore();
  const profileData = authStore.profileData as UserSupervisor;

  const { reportsCount } = useInstituteReportsMetaData({
    enabled: authStore.isInstDirector,
  });

  const getReportCountMaxApproved = (nameRoute: RouteNames) => {
    if (!nameRoute.includes('INST_DIRECTOR_PROJECTS_REPORTS_')) return 1;

    const projectReportName = nameRoute
      .replace('INST_DIRECTOR_PROJECTS_REPORTS_', '')
      .toLowerCase() as FilterInstituteProjectReportsBy;

    return reportsCount.value[
      FilterByToProjectReportNameId[projectReportName] as keyof ReportsCount
    ].maxApproved;
  };

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
    gap: 15px;
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

    & > *:nth-child(1) {
      flex: none;
    }

    &.mobile {
      padding: 1rem;
      font-size: 0.9rem;
      color: var(--gray-color-2);
      text-transform: uppercase;
    }
  }

  .box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    font-size: 20px;
    font-weight: 600;
    text-transform: capitalize;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 1rem;
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
  }

  .item:not(:last-child) {
    &:has(*) {
      border-bottom: 1px solid var(--gray-color-1);
    }

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
