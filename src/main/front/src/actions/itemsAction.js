import axios from "axios";
import {push} from "react-router-redux";

export const FETCH_ITEMS_START = "FETCH_ITEMS_START";
export const FETCH_ITEMS_FULFILLED = "FETCH_ITEMS_FULFILLED";
export const FETCH_ITEMS_REJECTED = "FETCH_ITEMS_REJECTED";

export const DELETE_ITEM_START = "DELETE_ITEM_START";
export const DELETE_ITEM_FULFILLED = "DELETE_ITEM_FULFILLED";
export const DELETE_ITEM_REJECTED = "DELETE_ITEM_REJECTED";

export const SAVE_ITEM_START = "SAVE_ITEM_START";
export const SAVE_ITEM_FULFILLED = "SAVE_ITEM_FULFILLED";
export const SAVE_ITEM_REJECTED = "SAVE_ITEM_REJECTED";

export function fetchItems() {
    return function (dispatch) {
        dispatch({type: FETCH_ITEMS_START});

        axios.get("/api/items")
            .then((response) => {
                dispatch({type: FETCH_ITEMS_FULFILLED, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: FETCH_ITEMS_REJECTED, payload: err})
            })
    }
}

export function saveItem(data) {
    return function (dispatch) {
        dispatch({type: SAVE_ITEM_START});
        if (data.id === null) {
            axios.post("/api/items", data)
                .then((response) => {
                    dispatch({type: SAVE_ITEM_FULFILLED, payload: response.data});
                    dispatch(push("/items"));
                })
                .catch((err) => {
                    dispatch({type: SAVE_ITEM_REJECTED, payload: err.message})
                })
        } else {
            axios.put("/api/items/" + data.id, data)
                .then((response) => {
                    dispatch({type: SAVE_ITEM_FULFILLED, payload: response.data});
                    dispatch(push("/items"));
                })
                .catch((err) => {
                    dispatch({type: SAVE_ITEM_REJECTED, payload: err.message})
                })
        }
    }
}

export function deleteItem(id) {
    return function (dispatch) {
        dispatch({type: DELETE_ITEM_START});

        axios.delete("/api/items/" + id)
            .then((response) => {
                dispatch({type: DELETE_ITEM_FULFILLED, payload: response.data});
            })
            .catch((err) => {
                dispatch({type: DELETE_ITEM_REJECTED, payload: err})
            })
    }
}