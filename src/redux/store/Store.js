import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import {GET_USERS_REDUCER,GET_USER_REDUCER,NEW_USER_REDUCER,UPDATE_USER_REDUCER,DELETE_USER_REDUCER} from '../reducers/users/Reducer';
import {GET_EVENTS_REDUCER,GET_EVENT_REDUCER,NEW_EVENT_REDUCER,DELETE_EVENT_REDUCER} from '../reducers/events/Reducer';

const CATALOGO = combineReducers({
    stateUsers: GET_USERS_REDUCER,
    stateUser: GET_USER_REDUCER,
    responseNewUser: NEW_USER_REDUCER,
    responseUpdateUser: UPDATE_USER_REDUCER,
    responseDeleteUser: DELETE_USER_REDUCER,
    stateEvents: GET_EVENTS_REDUCER,
    stateEvent: GET_EVENT_REDUCER,
    responseNewEvent: NEW_EVENT_REDUCER,
    responseDeleteEvent: DELETE_EVENT_REDUCER
});

const Store = createStore(CATALOGO, applyMiddleware(promiseMiddleware));

export default Store;