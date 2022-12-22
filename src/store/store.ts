// eslint-disable-next-line camelcase
import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';

import { appReducer, signUpReducer, usersReducer } from 'store/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer,
  signUp: signUpReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
