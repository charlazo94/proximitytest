import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from './reducers';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createHashHistory';

export const history = createHistory();

const historyMiddleware = routerMiddleware(history);

const middleware = applyMiddleware(
    thunk,

    createLogger(),
    historyMiddleware);

export default createStore(reducers, middleware);
