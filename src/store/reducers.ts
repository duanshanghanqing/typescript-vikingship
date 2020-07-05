import { combineReducers } from 'redux';
import { reducer as counter } from '../views/Counter/store';

// 使用redux的combineReducers方法将所有reducer合并起来
export default combineReducers({
  counter,
});
