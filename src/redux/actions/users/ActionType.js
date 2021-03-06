import axios from 'axios';

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

const NEW_USER_ACTION = (name,email,dependency,password) => {
    return {
        type: "NEW_USER",
        payload: axios({
            method: 'post',
            url: BASE_URL + '/users/signup',
            data: {
                name: name,
                email: email,
                dependency: dependency,
                password: password
            },
            config: {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        })
    }
}

const UPDATE_USER_ACTION = (id,name,email,dependency,password) => {
    return {
        type: "UPDATE_USER",
        payload: axios({
            method: 'put',
            url: BASE_URL + '/users/edit/' + id,
            data: {
                name:name,
                email:email,
                dependency:dependency,
                password:password
            },
            config: {
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                }
            }
        })
    }
}

const DELETE_USER_ACTION = (id) => {
    return {
        type: "DELETE_USER",
        payload: axios.get(BASE_URL + '/users/delete/' + id)
    };
}

const LOGIN_ACTION = (datos) => {
    return {
        type: "LOGIN",
        payload: axios.post(BASE_URL + '/users/signin',datos,{
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data; boundary=${datos._boundary}`,
            }
        }
    )
    };
}

const LOGOUT_ACTION = () => {
    return {
        type: "LOGOUT",
        payload: axios.get(BASE_URL + '/users/logout')
    };
}

export {GET_USERS_ACTION,GET_USER_ACTION,NEW_USER_ACTION,UPDATE_USER_ACTION,DELETE_USER_ACTION,LOGOUT_ACTION,LOGIN_ACTION};