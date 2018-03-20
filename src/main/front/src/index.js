import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import 'semantic-ui-css/semantic.min.css';
import {Router, Route, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import rootReducer from './reducers'
import App from './components/App'
import Todo from './components/ToDo'
import Users from './components/Users'
import LoginForm from './components/LoginForm'
import requireAuth   from './utils/requireAuth'


const store = createStore(rootReducer);

const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={requireAuth(App)}/>
            <Route path="todo" component={requireAuth(Todo)}/>
            <Route path="users" component={requireAuth(Users)}/>
            <Route path="login" component={LoginForm}/>
        </Router>
    </Provider>,
    document.getElementById('react')
);