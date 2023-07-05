import { defineStore } from 'pinia';
import { state } from './state';

export const useEvaluationModal = defineStore('evaluationModals', {
  state,
  actions: {
    openEvaluateStudentModal(title?: string) {
      this.evaluateStudentModalTitle = title;
      this.evaluateStudentModal = true;
    },

    closeEvaluateStudentModal() {
      this.evaluateStudentModalTitle = undefined;
    },
  },
});
