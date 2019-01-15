import { createStore, combineReducers, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import reducer from './data/reducer';

export const history = createBrowserHistory();

export default () => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    teamsState: reducer,
    form: formReducer
  })
  return createStore(
    rootReducer,
    undefined,
    applyMiddleware(
      reduxPackMiddleware,
    ),
  );
}
