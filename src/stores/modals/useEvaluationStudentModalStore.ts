import { defineStore } from 'pinia';
import { state } from './state';

export const useEvaluationModal = defineStore('evaluationModals', {
  state,
  actions: {
    openEvaluateStudentModal(
      projectID?: number,
      id?: number,
      name?: string,
      rating?: number,
      review?: string,
    ) {
      this.projectID = projectID;
      this.evaluateStudentModalId = id;
      this.evaluateStudentModalName = name;
      this.evaluateStudentModal = true;
      this.rating = rating;
      this.review = review;
    },

    closeEvaluateStudentModal() {
      this.projectID = undefined;
      this.evaluateStudentModalId = undefined;
      this.evaluateStudentModalName = undefined;
      this.evaluateStudentModal = false;
      this.rating = 0;
      this.review = '';
    },
  },
});
