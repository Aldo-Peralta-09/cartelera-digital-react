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

const NEW_EVENT_ACTION = (title,description,discipline,category,type,hierarchy,evento,start,finish,dates,municipality,place,organizer,
    speaker,
    url,
    entry,
    price,
    discount,
    publico,
    especificPublic,
    gender,
    banner,
    image) => {
    return {
        type: "NEW_EVENT",
        payload: axios({
            method: 'post',
            url: BASE_URL + '/events/add',
            data: {
                title:title,
                description:description,
                discipline:discipline,
                category:category,
                type:type,
                hierarchy:hierarchy,
                evento,
                start,
                finish,
                dates,
                municipality,
                place,
                organizer,
                speaker,
                url,
                entry,
                price,
                discount,
                publico,
                especificPublic,
                gender,
                banner,
                image
            },
            config: {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        })
    }
}

const DELETE_EVENT_ACTION = (id) => {
    return {
        type: "DELETE_EVENT",
        payload: axios.get(BASE_URL + '/events/delete/' + id)
    };
}

export {GET_EVENTS_ACTION,GET_EVENT_ACTION,NEW_EVENT_ACTION,DELETE_EVENT_ACTION};