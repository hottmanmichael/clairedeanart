

'use strict';

//bring in actions
const GALLERY = require('../actions/constants').GALLERY;

function gallery(state = [], action) {
    switch(action.type) {
        case GALLERY.SET_GALLERY:
            return Object.assign([], state, action.images);
            break;
        default: return state;
    }
}


export default gallery;
