export const enum ToDosActionTypes {
  CHANGE_DONE_STATE = '@todos/CHANGE_DONE_STATE',
  ADD_TODO = '@todos/ADD_TODO',
}

export interface ToDo {
  id: string;
  title: string;
  description: string;
  isDoned: boolean;
}

export interface ToDosState {
  readonly data: ToDo[];
}
