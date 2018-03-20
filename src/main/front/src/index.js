import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import 'semantic-ui-css/semantic.min.css';
import {Router, Route, hashHistory} from 'react-router'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import logger from "redux-logger"


import rootReducer from './reducers'
import App from './components/App'
import Todo from './components/ToDo'
import Users from './components/Users'
import LoginForm from './components/LoginForm'
import requireAuth   from './utils/requireAuth'

const routerMwr = routerMiddleware(hashHistory);
const store = createStore(rootReducer, applyMiddleware(routerMwr, logger));

const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={requireAuth(App)}/>
            <Router path="/todo" component={requireAuth(Todo)}/>
            <Router path="/users" component={requireAuth(Users)}/>
            <Router path="login" component={LoginForm}/>
        </Router>
    </Provider>,
    document.getElementById('react')
);