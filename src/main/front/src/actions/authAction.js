

export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR';

function authUserSuccess(name, token) {
    return {
        type: AUTH_USER_SUCCESS,
        payload: {
            user: name,
            token: token
        }
    }
}

function authUserSuccess(error) {
    return {
        type: AUTH_USER_SUCCESS,
        payload: {
            error
        }
    }
}