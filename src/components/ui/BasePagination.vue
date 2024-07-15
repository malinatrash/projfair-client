<template>
  <nav class="pagination">
    <ul class="pagination-list">
      <li :class="['pagination-item', { 'disabled-item': props.page <= 1 }]">
        <button
          :disabled="props.page <= 1"
          :class="['pagination-btn', 'pagination-arrow']"
          :tabindex="props.page <= 1 ? -1 : 0"
          @click="setPage(props.page - 1)"
        >
          &lt;
        </button>
      </li>
      <li
        v-for="pageLink in pages"
        :key="pageLink"
        :class="['pagination-item', { active: pageLink === props.page }]"
      >
        <button class="pagination-btn" @click="setPage(pageLink)">
          {{ pageLink }}
        </button>
      </li>
      <li
        :class="[
          'pagination-item',
          { 'disabled-item': props.page >= totalPages },
        ]"
      >
        <button
          :disabled="props.page >= totalPages"
          :class="['pagination-btn', 'pagination-arrow']"
          :tabindex="props.page >= totalPages ? -1 : 0"
          @click="setPage(props.page + 1)"
        >
          &gt;
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { computed, ref, watch } from 'vue';

  type Props = {
    /**
     * Текущая страница
     */
    page: number;
    /**
     * Общее количество элементов для расчёта страниц пагинации
     */
    totalItems: number;
    /**
     * Количество элементов на странице
     */
    pageSize: number;
    /**
     * Максимальное количество видимых ссылок пагинации
     */
    pagesVisible: number;
  };
  type Emits = {
    /**
     * Событие изменения страницы
     */
    (event: 'update:page', page: number): void;
  };

  const props = defineProps<Props>();
  const emit = defineEmits<Emits>();

  const totalPages = computed(() =>
    Math.ceil(props.totalItems / props.pageSize),
  );
  const startPage = ref(1);
  const endPage = ref(1);

  // генерирует видимые ссылки пагинации
  const pages = computed(() => {
    const pages = [1];
    if (totalPages.value <= 1) return pages;

    for (let i = startPage.value + 1; i <= endPage.value - 1; i++) {
      pages.push(i);
    }

    if (totalPages.value !== 1) {
      pages.push(totalPages.value);
    }

    return pages;
  });

  watch(
    () => [props.page, props.totalItems, props.pagesVisible],
    ([page, totalItems, pagesVisible, prevPage]) => {
      if (page === prevPage) return;
      if (!page || page < 1) return setPage(1);
      if (page > totalPages.value) return setPage(totalPages.value);
      updatePages(page);
    },
    { immediate: true },
  );

  // обновляет состояние компонента
  function updatePages(page: number) {
    startPage.value = page - Math.ceil(props.pagesVisible / 2);
    endPage.value = page + Math.floor(props.pagesVisible / 2) - 1;

    if (startPage.value <= 0) {
      endPage.value -= startPage.value - 1;
      startPage.value = 1;
    }

    if (endPage.value > totalPages.value) {
      endPage.value = totalPages.value;
      if (endPage.value > props.pageSize) {
        startPage.value = endPage.value - props.pagesVisible + 1;
      }
    }
  }

  function setPage(page: number) {
    emit('update:page', page);
  }
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  .pagination {
    margin-top: 0.9375rem;
    margin-bottom: 0.9375rem;
    background: #fff;
    border-radius: 0.625rem;
    box-shadow: 0 0 0.3125rem rgb(0 0 0 / 18%);
  }

  .pagination-list {
    display: flex;
    gap: 2.25rem;
    justify-content: center;
    list-style: none;

    @media (max-width: $tablet) {
      gap: 1.25rem;
    }
  }

  .pagination-item {
    width: 2.5625rem;
    height: 3.3125rem;

    &.active > button {
      color: var(--text-color-2);
    }
  }

  .disabled-item {
    pointer-events: none;
    opacity: 0.4;
  }

  .pagination-btn {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 1.25rem;
    color: var(--gray-color-2);
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-bottom: 0.25rem solid transparent;
  }

  .pagination-btn:hover,
  .pagination-item.active .pagination-btn {
    border-bottom-color: var(--accent-color-2);
  }

  .pagination-arrow:hover {
    color: var(--accent-color-2);
    border-bottom-color: transparent;
  }
</style>
