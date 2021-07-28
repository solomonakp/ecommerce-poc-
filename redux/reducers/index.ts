import { combineReducers } from 'redux';
import uiReducer from './Ui/uiReducer';
import blogReducer from './blog/blogReducer';

interface rootReducerType {}

const rootReducer = combineReducers({
  ui: uiReducer,
  blog: blogReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
