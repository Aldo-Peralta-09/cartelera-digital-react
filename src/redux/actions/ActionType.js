import axios from 'axios';

const BASE_URL = "https://cartelera-digital.herokuapp.com";

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
            name: name,
            email: email,
            dependency: dependency,
            password: password
        })
    }
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
        payload: axios.delete(BASE_URL + '/events/delete/?id=' + id)
    };
}

export {GET_USERS_ACTION,NEW_USER_ACTION,GET_EVENTS_ACTION,DELETE_EVENT_ACTION};