export const enum AppComponentsActionTypes {
  CHANGE_MODAL_STATE = '@components/CHANGE_MODAL_STATE',
  CHANGE_THEME = '@components/CHANGE_THEME',
}

export interface AppComponents {
  modalIsOpen: boolean;
  isLigth: boolean;
}

export interface AppComponentsState {
  readonly data: AppComponents;
}
