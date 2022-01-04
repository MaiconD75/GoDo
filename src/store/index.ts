import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './ducks/rootReducer';
import { AppComponentsState } from './ducks/components/types';
import { ToDosState } from './ducks/todos/types';

export interface ApplicationState {
  components: AppComponentsState;
  todos: ToDosState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
