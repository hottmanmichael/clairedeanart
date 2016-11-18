'use strict';


global.API = 'http://localhost:4000';
global.ACTIONS = require('./actions/main');

import React, { Component, PropTypes } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/main';
const store = createStore(reducers, {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

import Template from './template';
import AdminTemplate from './admin_template';
import {Main, Admin}  from './components/connect';

export default (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Template}>
                <IndexRoute component={Main.Welcome}/>
                <Route path="about" component={Main.About}/>
            </Route>
            <Route path="/auth" component={AdminTemplate}>
                <Route path="login" component={Admin.Login}/>
            </Route>
            <Route path="/admin">
                <IndexRoute component={Admin.Index}/>
                <Route path="upload" component={Admin.Upload}/>
            </Route>
        </Router>
    </Provider>
);
