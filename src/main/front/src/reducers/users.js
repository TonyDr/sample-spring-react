import {FETCH_USERS, FETCH_USERS_FULFILLED} from './../actions/usersAction'

const initialState = {
    userList: [],
    fetched: false,
    fetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS :
            return state;
        case FETCH_USERS_FULFILLED :
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                userList: action.payload,
            });
        default:
            return state;
    }
};


export default usersReducer