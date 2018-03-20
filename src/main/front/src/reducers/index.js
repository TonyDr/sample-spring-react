import {combineReducers} from 'redux'
import { routerReducer} from 'react-router-redux'


const myReducer = (state = [], action) => {


};

export default combineReducers( {
    routing: routerReducer,
    myReducer
})
