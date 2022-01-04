/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import produce from 'immer';

import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { v4 } from 'uuid';

import * as Actions from './actions';
import { ToDosActionTypes, ToDosState } from './types';

export type ToDosAction = ActionType<typeof Actions>;

const INITIAL_STATE: ToDosState = {
  data: [],
};

const reducer: Reducer<ToDosState, ToDosAction> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ToDosActionTypes.CHANGE_DONE_STATE: {
        const { todo } = action.payload;
        const todoIndex = draft.data.findIndex(item => item.id === todo.id);

        draft.data[todoIndex].isDoned = !draft.data[todoIndex].isDoned;
        break;
      }
      case ToDosActionTypes.ADD_TODO: {
        const { todo } = action.payload;

        todo.id = v4();
        todo.isDoned = false;

        draft.data.push(todo);
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default reducer;
