'use strict';

import { combineReducers } from 'redux';

import gallery from   './gallery';
import ui from        './ui';
import user from      './user';

const appReducer = combineReducers({
    gallery,
    ui,
    user
});

module.exports = function(state, action) {
    if (action.type === 'LOGOUT_USER') {
        state = undefined;
    }
    return appReducer(state, action);
}
