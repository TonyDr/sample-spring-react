import {combineReducers} from 'redux'
import { routerReducer} from 'react-router-redux'
import authentication from './authentication'
import users from './users'
import items from './items'
import editItem from './editItem'

export default combineReducers( {
    routing: routerReducer,
    authentication,
    users,
    items,
    editItem
})
