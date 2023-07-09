import { defineStore } from 'pinia';
import { state } from './state';

export const useEvaluationModal = defineStore('evaluationModals', {
  state,
  actions: {
    openEvaluateStudentModal(id?: number, name?: string) {
      this.evaluateStudentModalId = id;
      this.evaluateStudentModalName = name;
      this.evaluateStudentModal = true;
    },

    closeEvaluateStudentModal() {
      this.evaluateStudentModalId = undefined;
      this.evaluateStudentModalName = undefined;
      this.evaluateStudentModal = false;
    },
  },
});
