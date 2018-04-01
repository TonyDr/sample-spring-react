import {FETCH_ITEMS, FETCH_ITEMS_FULFILLED} from './../actions/itemsAction'

const initialState = {
    itemList: [],
    fetched: false,
    fetching: false
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS :
            return state;
        case 'ACT' :
            return {...state, fetched : true};
        case FETCH_ITEMS_FULFILLED :
            return Object.assign({}, state, {
                fetching: false,
                fetched: true,
                itemList: action.payload,
            });
        default:
            return state;
    }
};


export default itemsReducer