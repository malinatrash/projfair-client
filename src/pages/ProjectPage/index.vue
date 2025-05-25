<template>
  <PageLayout style="position: relative">
    <header class="header">
      <BaseBreadcrumbs
        class="breadcrumbs"
        :breadcrumbs="[
          {
            title: 'Все проекты',
            to: { name: RouteNames.HOME },
          },
          {
            title: projectData?.project.title || '',
          },
        ]"
      />
      <h1 class="page-title">
        <span v-if="isError">{{ error }}</span>
        <span v-else-if="isFetching">загрузка...</span>
        <span v-else>{{ projectData?.project.title }}</span>
      </h1>
    </header>
    <ProjectTabs
      v-if="projectData && !isFetching && !isError"
      :project-state="projectData.project.state"
    />
    <RouterView></RouterView>
    <div class="d-flex justify-content-center mt-3">
      <BaseButton
        case="uppercase"
        variant="link"
        @click="$router.push({ name: RouteNames.HOME })"
      >
        назад к списку
      </BaseButton>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { RouterView, useRoute } from 'vue-router';
  import PageLayout from '@/components/layout/PageLayout.vue';
  import ProjectTabs from '@/components/project/ProjectTabs.vue';
  import BaseBreadcrumbs from '@/components/ui/BaseBreadcrumbs.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import { useGetSingleProjectQuery } from '@/api/ProjectApi/hooks/useGetSingleProjectQuery';
  import { RouteNames } from '@/router/types/route-names';

  const route = useRoute();

  const projectId = computed(() => Number(route.params.id));
  const {
    isFetching,
    isError,
    error,
    data: projectData,
  } = useGetSingleProjectQuery(projectId);
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  .page-title {
    margin-top: 1.625rem;
    margin-bottom: 1.5rem;

    @media (max-width: $tablet) {
      font-size: 1.75rem;
      line-height: 2.5rem;
    }
  }

  .breadcrumbs {
    margin-top: 2rem;
  }
</style>
