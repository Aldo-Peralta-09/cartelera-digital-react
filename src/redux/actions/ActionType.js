import axios from 'axios';

const BASE_URL = "https://cartelera-digital.herokuapp.com";

const GET_USERS_ACTION = () => {
    return {
        type: "GET_USERS",
        payload: axios.get(BASE_URL + '/users')
    };
}

const GET_EVENTS_ACTION = () => {
    return {
        type: "GET_EVENTS",
        payload: axios.get(BASE_URL + '/events')
    };
}

export {GET_USERS_ACTION,GET_EVENTS_ACTION};