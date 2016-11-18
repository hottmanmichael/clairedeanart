'use strict';

//bring in actions
const UI = require('../actions/constants').UI;

function ui(state = {}, action) {
    switch(action.type) {
        case UI.UPLOADING_IMAGES:
            return Object.assign({}, state, {
                isUploadingImages: true
            });
            break;
        case UI.UPLOADING_IMAGES_COMPLETE:
            return Object.assign({}, state, {
                isUploadingImages: false
            });
            break;
        case UI.FETCHING_IMAGES:
            return Object.assign({}, state, {
                isFetchingImages: true
            });
            break;
        case UI.FETCHING_IMAGES_COMPLETE:
            return Object.assign({}, state, {
                isFetchingImages: false
            });
            break;
        default: return state;
    }
}


export default ui;
