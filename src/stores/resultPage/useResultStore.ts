import { defineStore } from 'pinia';
import { StudentsResult } from '@/models/StudentsResult';
import { state } from './state';

export const useResultStore = defineStore('result', {
  state,
  actions: {
    setResults(results: StudentsResult[]) {
      this.results = [...results];
    },
    getResultById(studentID: number) {
      return this.results?.filter((result) => result.id === studentID)[0];
    },
    setResult(rating: number, review: string, id: number) {
      this.results?.forEach((e) => {
        if (e.id === id) {
          e.rating = rating;
          e.review = review;
        }
      });
    },
  },
});
