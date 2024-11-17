<template>
  <AuthModal />
  <EvaluateStudentModal />
  <ParticipationModal />
  <ParticipationSuccessModal />
  <ProjectFeedbackModal />
  <AlertModal />
  <ConfirmModal />
  <ToUpButton v-model:visible="toUpButtonVisible" />
  <RouterView></RouterView>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { RouterView } from 'vue-router';
  import ProjectFeedbackModal from './components/feedback/ProjectFeedbackModal.vue';
  import EvaluateStudentModal from './components/layout/EvaluateStudentModal.vue';
  import ToUpButton from './components/ui/ToUpButton.vue';
  import AlertModal from '@/components/layout/AlertModal.vue';
  import AuthModal from '@/components/layout/AuthModal.vue';
  import ConfirmModal from '@/components/layout/ConfirmModal.vue';
  import ParticipationModal from '@/components/participation/ParticipationModal.vue';
  import ParticipationSuccessModal from '@/components/participation/ParticipationSuccessModal.vue';
  import { useGetUserInfoQuery } from './api/AuthApi/hooks/useGetUserInfoQuery';

  useGetUserInfoQuery();
  const toUpButtonVisible = ref(false);
</script>
