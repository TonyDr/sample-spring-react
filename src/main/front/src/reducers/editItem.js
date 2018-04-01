import {SAVE_ITEM_START, SAVE_ITEM_FULFILLED, SAVE_ITEM_REJECTED} from './../actions/itemsAction'

const initialState = {
    processed: false,
    error: '',
    complete: false
};

const editItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_ITEM_START :
            return {...state, processed: true };
        case SAVE_ITEM_FULFILLED :
            return {...state, complete : true};
        case SAVE_ITEM_REJECTED :
            return {...state, error: action.payload};
        default:
            return state;
    }
};


export default editItemsReducer