

export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';

export function authUserSuccess(name, token) {
    return {
        type: AUTH_USER_SUCCESS,
        payload: {
            user: name,
            token: token
        }
    }
}

export function authUserError(error) {
    return {
        type: AUTH_USER_ERROR,
        payload: {
            error
        }
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}