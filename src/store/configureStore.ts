import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

export default (initialState = {}) => {
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
    )
  );
};
