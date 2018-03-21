import {AUTH_USER_SUCCESS, AUTH_USER_ERROR, LOGOUT_USER} from './../actions/authAction'

const initialState = {
    username: '',
    userToken: '',
    isAuthenticated: false,
    authError: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_USER_SUCCESS :
            return Object.assign({}, state, {
                username: action.payload.username,
                userToken: action.payload.token,
                isAuthenticated: true,
                authError: ''
            });

        case AUTH_USER_ERROR:
            return Object.assign({}, state, {
                username: null,
                userToken: null,
                isAuthenticated: false,
                authError: action.payload.error
            });
        case LOGOUT_USER:
            return Object.assign({}, state, {
                username: null,
                userToken: null,
                isAuthenticated: false,
                authError: null
            });
        default:
            return state;
    }
};


export default authReducer