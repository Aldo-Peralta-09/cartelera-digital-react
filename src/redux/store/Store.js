import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {GET_USERS_REDUCER,NEW_USER_REDUCER,DELETE_USER_REDUCER,GET_EVENTS_REDUCER,DELETE_EVENT_REDUCER} from '../reducers/Reducer';

const CATALOGO = combineReducers({
    stateUsers: GET_USERS_REDUCER,
    responseNewUser: NEW_USER_REDUCER,
    responseDeleteUser: DELETE_USER_REDUCER,
    stateEvents: GET_EVENTS_REDUCER,
    responseDeleteEvent: DELETE_EVENT_REDUCER
});

const Store = createStore(CATALOGO, applyMiddleware(promiseMiddleware));

export default Store;