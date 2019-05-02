import axios from 'axios';

/* const BASE_URL = "https://cartelera-digital.herokuapp.com"; */

const BASE_URL = "http://localhost:3000";

const GET_USERS_ACTION = () => {
    return {
        type: "GET_USERS",
        payload: axios.get(BASE_URL + '/users')
    };
}

const NEW_USER_ACTION = (name,email,dependency,password) => {
    return {
        type: "NEW_USER",
        payload: axios.post(BASE_URL + '/users/signup', {
            name:name,
            email:email,
            dependency:dependency,
            password:password
        })
    }
}

const DELETE_USER_ACTION = (id) => {
    return {
        type: "DELETE_USER",
        payload: axios.get(BASE_URL + '/users/delete/' + id)
    };
}

const GET_EVENTS_ACTION = () => {
    return {
        type: "GET_EVENTS",
        payload: axios.get(BASE_URL + '/events')
    };
}

const DELETE_EVENT_ACTION = (id) => {
    return {
        type: "DELETE_EVENT",
        payload: axios.get(BASE_URL + '/events/delete/' + id)
    };
}

export {GET_USERS_ACTION,NEW_USER_ACTION,DELETE_USER_ACTION,GET_EVENTS_ACTION,DELETE_EVENT_ACTION};