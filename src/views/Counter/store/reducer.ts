import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions';

// reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function (state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
