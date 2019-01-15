import { createStore, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';

import teamsState from './data/reducer';

export default () => {
  return createStore(
    teamsState,
    undefined,
    applyMiddleware(
      reduxPackMiddleware,
    ),
  );
}
