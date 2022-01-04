/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { ToDo, ToDosActionTypes } from './types';

export const changeDoneState = (todo: ToDo) =>
  action(ToDosActionTypes.CHANGE_DONE_STATE, { todo });

export const addTodo = (todo: ToDo) =>
  action(ToDosActionTypes.ADD_TODO, { todo });
