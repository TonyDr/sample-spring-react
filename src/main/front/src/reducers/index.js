import {combineReducers} from 'redux'
import { routerReducer} from 'react-router-redux'
import authentication from './authentication'
import users from './users'

export default combineReducers( {
    routing: routerReducer,
    authentication,
    users
})
