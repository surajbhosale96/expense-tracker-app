import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
import {fromJS} from 'immutable';
import createReducer from './reducers';

let store = null;

export function configureStore(initialState = fromJS({})) {
  store = createStore(createReducer, applyMiddleware(thunk));
  return store;
}

export function getStore() {
  return store;
}
