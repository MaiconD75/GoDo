/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { action } from 'typesafe-actions';
import { AppComponentsActionTypes } from './types';

export const changeModalState = () =>
  action(AppComponentsActionTypes.CHANGE_MODAL_STATE);

export const changeTheme = () => action(AppComponentsActionTypes.CHANGE_THEME);
