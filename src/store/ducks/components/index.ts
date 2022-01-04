/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import produce from 'immer';

import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as Actions from './actions';
import { AppComponentsState, AppComponentsActionTypes } from './types';

export type AppComponentsAction = ActionType<typeof Actions>;

const INITIAL_STATE: AppComponentsState = {
  data: {
    modalIsOpen: false,
    isLigth: false,
  },
};

const reducer: Reducer<AppComponentsState, AppComponentsAction> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case AppComponentsActionTypes.CHANGE_MODAL_STATE: {
        draft.data.modalIsOpen = !draft.data.modalIsOpen;
        break;
      }
      case AppComponentsActionTypes.CHANGE_THEME: {
        draft.data.isLigth = !draft.data.isLigth;
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default reducer;
