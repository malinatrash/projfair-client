import { defineStore } from 'pinia';
import { state } from './state';

export const useEvaluationModal = defineStore('evaluationModals', {
  state,
  actions: {
    openEvaluateStudentModal(
      id?: number,
      name?: string,
      projectID?: number,
      rating?: number,
      reivew?: string,
    ) {
      this.evaluateStudentModalId = id;
      this.evaluateStudentModalName = name;
      this.evaluateStudentModal = true;
      this.projectID = projectID;
      this.rating = rating;
      this.review = reivew ?? '';
    },

    closeEvaluateStudentModal() {
      this.evaluateStudentModalId = undefined;
      this.evaluateStudentModalName = undefined;
      this.evaluateStudentModal = false;
      this.projectID = undefined;
      this.rating = 0;
      this.review = '';
    },
  },
});
