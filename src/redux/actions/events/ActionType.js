import axios from 'axios';

/* const BASE_URL = "https://cartelera-digital.herokuapp.com"; */

const BASE_URL = "http://localhost:3000";

const GET_EVENTS_ACTION = () => {
    return {
        type: "GET_EVENTS",
        payload: axios.get(BASE_URL + '/events')
    };
}

const GET_EVENT_ACTION = (id) => {
    return {
        type: "GET_EVENT",
        payload: axios.get(BASE_URL + '/events/edit-event/' + id)
    };
}

const DELETE_EVENT_ACTION = (id) => {
    return {
        type: "DELETE_EVENT",
        payload: axios.get(BASE_URL + '/events/delete/' + id)
    };
}

export {GET_EVENTS_ACTION,GET_EVENT_ACTION,DELETE_EVENT_ACTION};