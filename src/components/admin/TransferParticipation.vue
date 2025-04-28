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
      <BaseTextarea
        v-model="
          reasonMessage[currentCandidateId] // eslint-disable-line
        "
        label="Причина перевода заявки"
        placeholder="Напишите причину перевода заявки на другой проект"
        style="min-height: 100px"
      />
      <BaseButton
        full-width
        :disabled="selectedProject === -1 || isTransferring"
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
  import BaseTextarea from '../ui/BaseTextarea.vue';

  const props = defineProps<{
    projects: Project[];
    currentCandidateId: number;
    currentProjectId: number;
    reasonMessage: { [x: number]: string };
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
      margin-bottom: 10px;
      font-size: 18px;
    }

    .transfer-controls {
      display: flex;
      flex-direction: column;
      gap: 25px;
      margin-top: 5px;
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
