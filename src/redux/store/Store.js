import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {GET_USERS_REDUCER,GET_EVENTS_REDUCER,DELETE_EVENT_REDUCER} from '../reducers/Reducer';

const CATALOGO = combineReducers({
    stateUsers: GET_USERS_REDUCER,
    stateEvents: GET_EVENTS_REDUCER,
    responseDeleteEvent: DELETE_EVENT_REDUCER
});

const Store = createStore(CATALOGO, applyMiddleware(promiseMiddleware));

export default Store;