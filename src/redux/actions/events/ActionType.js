import axios from 'axios';

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
        payload: axios.get(BASE_URL + '/event/edit/' + id)
    };
}

const NEW_EVENT_ACTION = (datos) => {
    return {
        type: "NEW_EVENT",
        payload: axios.post(BASE_URL + '/events/add',datos,{
                headers: {
                    'accept': 'application/json',
                    'Content-Type': `multipart/form-data; boundary=${datos._boundary}`,
                }
            }
        )
    }
}

const DELETE_EVENT_ACTION = (id) => {
    return {
        type: "DELETE_EVENT",
        payload: axios.get(BASE_URL + '/events/delete/' + id)
    };
}

export {GET_EVENTS_ACTION,GET_EVENT_ACTION,NEW_EVENT_ACTION,DELETE_EVENT_ACTION};