import { combineReducers } from 'redux';
import todos from './todos';
import components from './components';

export default combineReducers({
  todos,
  components,
});
