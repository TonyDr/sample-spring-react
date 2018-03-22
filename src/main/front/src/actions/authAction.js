import axios from "axios";
import { push } from 'react-router-redux'


export const AUTH_USER_START = 'AUTH_USER_START';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';

export function authUser(username, password) {
    return function (dispatch) {
        dispatch({type: AUTH_USER_START});
        let bodyFormData = new FormData();
        bodyFormData.set('username', username);
        bodyFormData.set('password', password);
        axios.post("/login", bodyFormData)
            .then((response) => {
                dispatch(authUserSuccess(response))
                dispatch(push("/"))
            })
            .catch((err) => {
                dispatch(authUserError(err))
            })
    }
}

export function authUserSuccess(data) {
    return {
        type: AUTH_USER_SUCCESS,
        payload: data
    }
}

export function authUserError(error) {
    return {
        type: AUTH_USER_ERROR,
        payload: {
            error: error.response.data.message
        }
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}