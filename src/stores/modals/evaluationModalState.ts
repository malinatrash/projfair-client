export interface EvaluateModalState {
  evaluateStudentModal?: boolean;
  evaluateStudentModalTitle?: string;
  mark?: number;
}

export const state = (): EvaluateModalState => ({
  evaluateStudentModal: false,
  evaluateStudentModalTitle: undefined,
});
