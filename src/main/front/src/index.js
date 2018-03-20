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

const store = createStore(rootReducer);

const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
            <Route path="/todo" component={Todo}/>
            <Route path="/users" component={Users}/>
        </Router>
    </Provider>,
    document.getElementById('react')
);