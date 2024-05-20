<template>
  <section>
    <LoadingParticipationsList v-if="isFetching" />
    <BaseStub
      v-else-if="isError"
      title="Ошибка загрузки списка заявок"
      :subtitle="String(error)"
    />
    <BaseStub
      v-else-if="filteredProjectProposalList?.length === 0"
      title="Заявки на проекты не найдены :("
      subtitle="На данный момент Вам не отправили ни одной заявки на проект"
    />
    <template v-else>
      <InstituteDirectorProjectProposalCard
        v-for="projectProposal in paginatedProposals"
        :key="projectProposal.id"
        :project-proposal="projectProposal"
      />
      <BasePagination
        :page="currentPage"
        :total-items="filteredProjectProposalList?.length || 0"
        :page-size="PAGE_SIZE"
        :pages-visible="PAGES_VISIBLE"
        @update:page="onPageChange"
      />
    </template>
  </section>
</template>

<script setup lang="ts">
  import { computed, watch } from 'vue';
  import { useRoute } from 'vue-router';
  import { useRouter } from 'vue-router';
  import InstituteDirectorProjectProposalCard from '@/components/project-proposal/InstituteDirectorProjectProposalCard.vue';
  import BasePagination from '@/components/ui/BasePagination.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import { useGetInstituteProjectProposalsQuery } from '@/api/InstituteDirectorApi/hooks/useGetInstituteProjectProposalsQuery';
  import { useStateApprovedFilter } from '../../hooks/useStateApprovedFilter';
  import { usePaginatedList } from '@/hooks/usePaginatedList';
  import { RouteNames } from '@/router/types/route-names';
  import {
    FilterByToProjectProposalStateId,
    FilterInstituteProjectProposalsBy,
    toInstituteProjectProposals,
  } from '@/router/utils/routes';
  import { ProjectProposalStateId } from '@/models/ProjectProposal';
  import LoadingParticipationsList from './LoadingParticipationsList.vue';

  const router = useRouter();
  const route = useRoute();

  const filterBy = computed<ProjectProposalStateId | undefined>(() => {
    const filterBy = String(
      route.params.filterBy,
    ) as FilterInstituteProjectProposalsBy;
    return FilterByToProjectProposalStateId[filterBy];
  });

  watch(
    () => filterBy.value,
    (currentFilterBy) => {
      if (route.name !== RouteNames.INST_DIRECTOR_PROJECT_PROPOSALS) return;
      if (!currentFilterBy) router.replace(toInstituteProjectProposals());
    },
    { immediate: true },
  );

  const {
    isFetching,
    isError,
    error,
    data: projectProposalList,
  } = useGetInstituteProjectProposalsQuery({
    select: (list) => list.sort((a, b) => b.state.id - a.state.id),
  });

  const filteredProjectProposalList = computed(() => {
    return projectProposalList.value?.filter((proposal) => {
      const stateFilter = useStateApprovedFilter(proposal);

      return (
        stateFilter === route.params.filterBy ||
        proposal.state.id === filterBy.value ||
        stateFilter == FilterInstituteProjectProposalsBy.ApprovedOnYear
      );
    });
  });

  const PAGE_SIZE = 5;
  const PAGES_VISIBLE = 7;

  const currentPage = computed(() => Number(route.params.page) || 1);
  const paginatedProposals = usePaginatedList(filteredProjectProposalList, {
    pageSize: PAGE_SIZE,
    currentPage: currentPage,
  });

  function onPageChange(page: number) {
    router.push({
      ...route,
      params: { ...route.params, page },
    });
  }
</script>
