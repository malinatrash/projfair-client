<template>
  <div class="candidate-info">
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

    <p class="title">
      {{ candidate.fio }}
      <span class="title-description">
        id: <span class="highlight">{{ candidate.id }}</span>
      </span>
      <span class="title-description">
        № зачетки: <span class="highlight">{{ candidate.numz }}</span>
      </span>
      <span class="title-description">
        Группа: <span class="highlight">{{ candidate.training_group }}</span>
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
  import { CandidateWithParticipations } from '@/models/Admin';

  defineProps<{
    candidate: CandidateWithParticipations;
  }>();
</script>

<style lang="scss" scoped>
  .candidate-info {
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    padding: 20px 0;

    .icon {
      flex: none;
    }

    .title {
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
      font-size: 20px;
      font-weight: 700;
      line-height: normal;
      color: #4f5569;

      &-description {
        font-size: 16px;
        font-weight: 600;
        color: var(--gray-color-2);
      }

      .highlight {
        color: var(--accent-color-1);
      }
    }
  }
</style>
