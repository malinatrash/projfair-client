<template>
  <div class="admin-wrapper">
    <BaseTumbler
      v-model="transferProjectsStatus"
      :options="tumblerOptions"
      :disabled="isLoading"
      animated
    />

    <div class="buttons-wrapper">
      <BaseButton
        v-if="
          transferProjectsStatus === TransferStatus.RECRUITMENT ||
          transferProjectsStatus === TransferStatus.PROCESSING ||
          transferProjectsStatus === TransferStatus.ARCHIVE
        "
        variant="outlined"
        :disabled="isLoading"
        @click="cancelTransfer(transferProjectsStatus)"
        >Отменить перевод</BaseButton
      >
      <BaseButton
        full-width
        :disabled="isLoading"
        @click="transferProjects(transferProjectsStatus)"
        >Осуществить перевод</BaseButton
      >
    </div>

    <BasePanel class="panel">
      <h2>Краткая статистика</h2>
      <div class="divider"></div>
      <span v-if="transferedProjectsCount === 0"
        >Осуществите перевод проектов для сбора статистики</span
      >
      <span v-else
        >Все
        <span style="font-size: 24px; color: var(--accent-color-1)">
          {{ transferedProjectsCount }}
        </span>
        проектов были успешно переведны в статус “Обработка заявок”</span
      >
    </BasePanel>

    <BaseButton
      v-if="transferProjectsStatus === TransferStatus.PROCESSING"
      color="orange"
      :disabled="projects.length > 0 || isLoading"
      @click="goToProjectFormation"
      >Перейти в Формирование проектных команд</BaseButton
    >

    <BasePanel class="panel">
      <h2>Проекты ({{ projects.length }})</h2>

      <div class="divider"></div>

      <div v-if="projects.length > 0" class="projects-cards-wrapper">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="card-header">
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

            <p class="title" style="font-size: 20px">
              {{ project.title }}
            </p>
          </div>

          <BaseButton
            is="a"
            variant="tag-outlined"
            style="padding: 2.5px 10px"
            @click="goToProject(project.id)"
            >Перейти на проект ↗</BaseButton
          >
        </div>
      </div>

      <div v-else-if="isLoading" style="display: flex; justify-content: center">
        <span class="loader" style="margin: 10px 0"></span>
      </div>

      <div v-else>Проекты не найдены</div>
    </BasePanel>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseTumbler from '@/components/ui/BaseTumbler.vue';
  import { baseKyInstance } from '@/api/baseKy';
  import { Project } from '@/models/Project';

  enum TransferStatus {
    APPROVED = 'approved',
    RECRUITMENT = 'recruitment',
    PROCESSING = 'processing',
    ACTIVE = 'active',
    ARCHIVE = 'archive',
  }

  const tumblerOptions = [
    {
      value: TransferStatus.APPROVED,
      label: 'Активные → Одобрено',
      prefix: '',
    },
    {
      value: TransferStatus.RECRUITMENT,
      label: 'Одобрено → Идёт набор',
      prefix: '',
    },
    {
      value: TransferStatus.PROCESSING,
      label: 'Идёт набор → Обработка заявок',
      prefix: '',
    },
    {
      value: TransferStatus.ACTIVE,
      label: 'Обработка заявок → Активные',
      prefix: '',
    },
    {
      value: TransferStatus.ARCHIVE,
      label: 'Активные → Архивные',
      prefix: '',
    },
  ];

  const router = useRouter();

  const transferProjectsStatus = ref<TransferStatus>(tumblerOptions[0].value);

  const projects = ref<Project[]>([]);
  const transferedProjectsCount = ref(0);

  const isLoading = ref(true);

  const cancelTransfer = async (status: TransferStatus) => {
    isLoading.value = true;
    transferedProjectsCount.value = 0;

    try {
      await baseKyInstance
        .post(`api/transfer/${status}/cancel`)
        .json<Project[]>();
    } finally {
      projects.value = [];
    }
    isLoading.value = false;
  };

  const transferProjects = async (status: TransferStatus) => {
    isLoading.value = true;
    try {
      projects.value = await baseKyInstance
        .post(`api/transfer/${status}/update`)
        .json<Project[]>();
      transferedProjectsCount.value = projects.value.length;
    } finally {
      projects.value = [];
    }
    isLoading.value = false;
  };

  const goToProject = (projectId: number) => {
    window.open(`/project/${projectId}`, '_blank');
  };

  onMounted(async () => {
    try {
      projects.value = await baseKyInstance
        .get(`api/transfer/approved`)
        .json<Project[]>();
    } catch {
      projects.value = [];
    }
    isLoading.value = false;
  });

  watch([transferProjectsStatus], async () => {
    isLoading.value = true;
    transferedProjectsCount.value = 0;

    try {
      projects.value = await baseKyInstance
        .get(`api/transfer/${transferProjectsStatus.value}`)
        .json<Project[]>();
    } catch {
      projects.value = [];
    }

    isLoading.value = false;
  });

  const goToProjectFormation = (projectId: number) => {
    router.push('/arm');
  };
</script>

<style lang="scss" scoped>
  $padding: 20px;

  .admin-wrapper {
    display: flex;
    flex-direction: column;
    gap: $padding;
  }

  .buttons-wrapper {
    display: flex;
    gap: 15px;
  }

  .panel {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0;

    & h2 {
      color: #4f5569;
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: #e7e7e7;
  }

  ////////////////////////////////////////////

  .projects-cards-wrapper {
    max-height: 80vh;
    padding: 0 $padding;
    overflow-y: auto;
    border-left: 4px solid var(--accent-color-2);

    & .project-card {
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

    & .card-header {
      display: flex;
      gap: $padding;
      align-items: center;

      & .title {
        line-height: 1.5rem;
      }

      & svg {
        flex: none;
      }
    }

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: var(--gray-color-1);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--accent-color-2);
      border-radius: 100px;
    }
  }

  .loader {
    box-sizing: border-box;
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 5px solid var(--gray-color-2);
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
