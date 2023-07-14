<template>
  <BasePanel class="panel">
    <table>
      <tr data-test-id="header">
        <!-- @slot Заголовки таблицы -->
        <slot
          v-for="(header, index) in $props.headers"
          v-bind="{ header, index }"
          :key="header"
          name="header"
        >
          <th>{{ header }}</th>
        </slot>
      </tr>
      <!-- @slot Строчки таблицы -->
      <slot
        v-for="({ data: row, key }, rowIndex) in rows"
        v-bind="{ row, key, index: rowIndex }"
        :key="key || rowIndex"
        name="row"
      >
        <tr data-test-id="row">
          <td v-for="(column, columnIndex) in row" :key="columnIndex">
            {{ column }}
          </td>
          <td>
            <OpenEvaluateStudentModalButton
              :id="ids[rowIndex].id[0]"
              :project-i-d="projectId"
              :name="ids[rowIndex].name[0]"
            />
          </td>
        </tr>
      </slot>
    </table>
  </BasePanel>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import OpenEvaluateStudentModalButton from '@/components/project-proposal/OpenEvaluateStudentModalButton.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';

  export type ColumnData = string | number;
  export type ParticipantsId = number;
  export type ParticipantsName = string;
  export type idData = {
    key?: string;
    id: ParticipantsId[];
    name: ParticipantsName[];
  };
  export type RowData = { key?: string; data: ColumnData[] };

  const route = useRoute();
  const projectId = computed(() => Number(route.params.id));

  interface Props {
    /**
     * Список заголовков таблицы
     */
    headers: string[];
    /**
     * Строчки таблицы
     */
    rows: RowData[];
    /**
     * id по строчкам таблицы
     */
    ids: idData[];
  }

  defineProps<Props>();
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  table {
    width: 100%;
    font-size: 1.25rem;
    color: #737373;
    text-align: left;
    border-collapse: collapse;

    @media (max-width: $tablet) {
      font-size: 1rem;
    }

    &:deep(th) {
      font-weight: 800;
      color: var(--text-color);
    }

    &:deep(td),
    &:deep(th) {
      padding-top: 1.4375rem;
      padding-bottom: 1.4375rem;
      border-bottom: 1px solid #e5f1ea;

      @media (max-width: $tablet) {
        height: 3.75rem;
        padding: 0.35rem 1rem;
      }
    }

    &:deep(th:first-child),
    &:deep(td:first-child) {
      padding-right: 0.625rem;
      padding-left: 0.625rem;
      text-align: center;
    }

    &:deep(tr:last-child > td) {
      border-bottom: none;
    }
  }

  .panel {
    padding: 0;

    @media (max-width: $tablet) {
      overflow-x: auto;
    }
  }
</style>
