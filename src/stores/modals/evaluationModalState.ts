export interface EvaluateModalState {
  evaluateStudentModal?: boolean;
  evaluateStudentModalTitle?: string;
}

export const state = (): EvaluateModalState => ({
  evaluateStudentModal: false,
  evaluateStudentModalTitle: undefined,
});
