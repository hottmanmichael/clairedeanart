'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';

export let render = function(node) {
    ReactDOM.render(routes, node);
}
