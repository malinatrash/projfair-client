import Cookies from 'js-cookie';
import { defineStore } from 'pinia';
import { Project } from '@/models/Project';
import { useAuthStore } from '../auth/useAuthStore';
import { useProjectsStore } from '../projects/useProjectsStore';
import { state } from './state';

export const useModalsStore = defineStore('modals', {
  state,
  actions: {
    openAlertModal(title?: string, subtitle?: string) {
      this.alertModalTitle = title;
      this.alertModalSubtitle = subtitle;
    },

    closeAlertModal() {
      this.alertModalTitle = undefined;
      this.alertModalSubtitle = undefined;
    },

    openConfirmModal(
      title?: string,
      agree?: string,
      disagree?: string,
      agreeAction?: () => void,
      disagreeAction?: () => void,
    ) {
      this.confirmModalTitle = title;
      this.confirmModalAgree = agree;
      this.confirmModalDisagree = disagree;
      this.confirmModalAgreeAction = agreeAction;
      this.confirmModalDisagreeAction = disagreeAction;
    },

    closeConfirmModal() {
      this.confirmModalTitle = undefined;
      this.confirmModalAgree = undefined;
      this.confirmModalDisagree = undefined;
      this.confirmModalAgreeAction = undefined;
      this.confirmModalDisagreeAction = undefined;
    },

    openExitConfirmModal(agreeAction: () => void, disagreeAction: () => void) {
      this.openConfirmModal(
        'Вы уверены, что хотите выйти из аккаунта?',
        'Выйти из аккаунта',
        'Остаться',
        agreeAction,
        disagreeAction,
      );
    },

    openFeedbackModal(project: Project) {
      const authStore = useAuthStore();
      const projectsStore = useProjectsStore();

      if (!authStore.profileData) {
        this.authModalNewProject = true;
        return;
      }

      projectsStore.selectedProject = project;
      this.projectFeedbackModal = true;
    },

    openEditParticipationsDisabledModal() {
      this.openAlertModal('На данный момент вы не можете изменять свои заявки');
    },

    openAutoParticipationInfoModal() {
      const cookieKey = 'AUTO_PARTICIPATION_INFO_MODAL_IS_SHOWN';
      const isShown = Cookies.get(cookieKey);
      if (isShown) return;
      Cookies.set(cookieKey, 'true');
      this.openAlertModal(
        'Внимание',
        'У Вас есть автоматически созданная заявка на проект. В связи с тем, что в прошлом семестре Вы не заполнили заявки на проекты через Ярмарку проектов, Вас распределили на свободный, наиболее подходящий под Вашу специальность проект. Эта заявка имеет наименьший приоритет среди остальных заявок, Вы можете изменить её приоритет или удалить.',
      );
    },
  },
});
