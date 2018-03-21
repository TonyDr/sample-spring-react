import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_FULFILLED = "FETCH_USERS_FULFILLED"

export function fetchUsers() {
    return function(dispatch) {
        dispatch({type: "FETCH_USERS"});

        axios.get("/api/users")
            .then((response) => {
                dispatch({type: "FETCH_USERS_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_USERS_REJECTED", payload: err})
            })
    }
}