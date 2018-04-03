import {FETCH_ITEMS_FULFILLED, FETCH_ITEMS_REJECTED, FETCH_ITEMS_START} from './../actions/itemsAction'
import {DELETE_ITEM_FULFILLED, DELETE_ITEM_REJECTED, DELETE_ITEM_START} from "../actions/itemsAction";

const initialState = {
    itemList: [],
    fetched: false,
    fetching: false,
    deleting: false,
    error: null
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_START :
            return {...state, fetched: false, fetching: true};
        case FETCH_ITEMS_REJECTED :
            return {...state, fetched: true, error: action.payload};
        case FETCH_ITEMS_FULFILLED :
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                itemList: action.payload,
                error: null
            });
        case DELETE_ITEM_START :
            return {...state, deleting: true};
        case DELETE_ITEM_FULFILLED:
            return {...state, deleting: false, error: null};
        case DELETE_ITEM_REJECTED:
            return {...state, deleting: false, error: action.payload};
        default:
            return state;
    }
};


export default itemsReducer