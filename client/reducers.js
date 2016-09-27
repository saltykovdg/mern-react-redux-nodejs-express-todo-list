/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import todos from './modules/Todo/TodoReducer';
import intl from './modules/Intl/IntlReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  todos,
  intl,
});
