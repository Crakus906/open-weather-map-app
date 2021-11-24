import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from './reduser/index';

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middlewares.push(logger);
}

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(rootReducer, enhancers);

export default store;
