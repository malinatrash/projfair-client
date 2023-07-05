// TODO: надо Alert и Confirm вынести в отдельный store

export interface State {
  authModal: boolean;
  participationSuccessModal: boolean;
  participationModal: boolean;
  projectFeedbackModal: boolean;
  projectFilterModal: boolean;
  // Alert modal
  alertModalTitle?: string;
  alertModalSubtitle?: string;
  // Confirm modal
  confirmModalTitle?: string;
  confirmModalAgree?: string;
  confirmModalDisagree?: string;
  confirmModalAgreeAction?: () => void;
  confirmModalDisagreeAction?: () => void;
  // EvaluateStudentModal
  evaluateStudentModal?: boolean;
  evaluateStudentModalTitle?: string;
}

export const state = (): State => ({
  authModal: false,
  participationModal: false,
  participationSuccessModal: false,
  projectFeedbackModal: false,
  projectFilterModal: false,
  // Alert modal
  alertModalTitle: undefined,
  alertModalSubtitle: '',
  // Confirm modal
  confirmModalTitle: undefined,
  confirmModalAgree: '',
  confirmModalDisagree: '',
  confirmModalAgreeAction: undefined,
  confirmModalDisagreeAction: undefined,
});
