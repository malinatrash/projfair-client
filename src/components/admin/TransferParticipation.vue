<template>
  <div class="transfer-participation">
    <h3 class="section-title">Перевод заявки №1 на другой проект</h3>
    <div class="transfer-controls">
      <VMultiselect
        v-model="selectedProject"
        :class="['multiselect', selectedProject ? 'selected' : '']"
        placeholder="Выберите проект для переноса заявки"
        no-results-text="Проект не найден"
        no-options-text="Проекты не найдены"
        :searchable="true"
        :options="eligibleProjects"
        :disabled="isDisabled"
        aria-label="Выбор проекта"
      />
      <BaseButton
        full-width
        :disabled="!selectedProject || isTransferring"
        @click="handleTransfer"
      >
        Применить
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import VMultiselect from '@vueform/multiselect';
  import { computed, ref, watch, watchEffect } from 'vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import { Project } from '@/models/Project';

  const props = defineProps<{
    projects: Project[];
    currentProjectId: number;
    isDisabled: boolean;
    isTransferring: boolean;
  }>();

  const emit = defineEmits<{
    (e: 'transfer', projectId: number): void;
  }>();

  const selectedProject = ref<number | null>(null);

  const eligibleProjects = computed(() =>
    props.projects
      .filter((project) => project.id !== props.currentProjectId)
      .map((project) => ({
        label: `id: ${project.id} | Название: ${project.title}`,
        value: project.id,
      })),
  );

  const handleTransfer = () => {
    if (selectedProject.value) {
      emit('transfer', selectedProject.value);
    }
  };

  // Если отправка закончена - сбрасываем выбранный проект
  watchEffect(() => {
    if (!props.isTransferring) {
      selectedProject.value = -1;
    }
  });
</script>

<style lang="scss" scoped>
  .transfer-participation {
    margin-top: 25px;

    .section-title {
      font-size: 16px;
    }

    .transfer-controls {
      display: flex;
      gap: 15px;
      margin-top: 5px;

      & > *:last-child {
        flex: 0;
      }

      @media (width <= 500px) {
        flex-wrap: wrap;

        & > *:last-child {
          flex: 1;
        }
      }
    }
  }

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
</style>
