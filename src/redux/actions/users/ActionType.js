import axios from 'axios';

/* const BASE_URL = "https://cartelera-digital.herokuapp.com"; */

const BASE_URL = "http://localhost:3000";

const GET_USERS_ACTION = () => {
    return {
        type: "GET_USERS",
        payload: axios.get(BASE_URL + '/users')
    };
}

const GET_USER_ACTION = (id) => {
    return {
        type: "GET_USER",
        payload: axios.get(BASE_URL + '/user/edit/' + id)
    };
}

const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
}

const NEW_USER_ACTION = (name,email,dependency,password) => {
    return {
        type: "NEW_USER",
        payload: axios.post(
            BASE_URL + '/users/signup', 
            {
                name,email,dependency,password
            },
            config
            )
    }
}

const UPDATE_USER_ACTION = (id,name,email,dependency,password) => {
    return {
        type: "NEW_USER",
        payload: axios.put(BASE_URL + '/users/edit-user/' + id, {
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

export {GET_USERS_ACTION,GET_USER_ACTION,NEW_USER_ACTION,UPDATE_USER_ACTION,DELETE_USER_ACTION};