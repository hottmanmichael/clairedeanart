'use strict';

var GALLERY = require('./constants').GALLERY;



exports.setGallery = function (images) {
    return {
        type: GALLERY.SET_GALLERY,
        images: images
    }
};
