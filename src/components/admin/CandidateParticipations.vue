<template>
  <div class="participations">
    <h3 class="section-title">Заявки на проекты</h3>
    <div
      v-for="(participation, index) in participations"
      :key="participation.id"
      class="participation-item"
      :class="{ 'participation-item--even': index % 2 }"
    >
      <div class="participation-header">
        <span class="index">{{ index + 1 }}</span>
        <div class="icon">
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
            class="lucide lucide-file-spreadsheet-icon"
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

      <div class="participation-details">
        <span class="detail">
          id: <span class="highlight">{{ participation.id }}</span>
        </span>
        <span class="detail">
          Приоритет: <span class="highlight">{{ participation.priority }}</span>
        </span>
        <span class="detail">
          Статус:
          <span class="highlight">
            {{ participation.state_id }}
            <br />
            <span class="state-name">
              ({{
                ParticipationStateName[
                  participation.state_id as ParticipationState
                ]
              }})
            </span>
          </span>
        </span>
        <span class="detail">
          id проекта:
          <BaseButton
            variant="tag-outlined"
            class="project-button"
            @click="goToProject(participation.project_id)"
          >
            {{ participation.project_id }}
          </BaseButton>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BaseButton from '@/components/ui/BaseButton.vue';
  import { ParticipationWithStateId } from '@/models/Admin';
  import {
    ParticipationState,
    ParticipationStateName,
  } from '@/models/Participation';

  defineProps<{
    participations: ParticipationWithStateId[];
  }>();

  const goToProject = (projectId: number) => {
    window.open(`/project/${projectId}`, '_blank');
  };
</script>

<style lang="scss" scoped>
  .participations {
    background-color: white;
    border-left: 4px solid var(--accent-color-2);

    .section-title {
      padding: 15px 0;
      padding-left: 20px;
      background-color: color-mix(in srgb, #ffa500 25%, white 100%);
    }

    .participation-item {
      display: flex;
      padding: 15px 0;
      padding-left: 20px;

      &--even {
        background-color: color-mix(in srgb, #e7e7e7 25%, white 100%);
      }

      .participation-header {
        display: flex;
        align-items: center;
        justify-content: center;

        .index {
          min-width: 30px;
          color: #4f5569;
        }

        .icon {
          min-width: 50px;
        }
      }

      .participation-details {
        display: flex;
        flex-flow: row wrap;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;

        .detail {
          min-width: 150px;
          font-size: 16px;
          font-weight: 600;
          color: var(--gray-color-2);

          .highlight {
            color: var(--accent-color-1);
          }

          .state-name {
            font-size: 14px;
          }
        }

        .project-button {
          padding: 0 5px;
        }
      }
    }
  }
</style>
