'use strict';

var UI = require('./constants').UI;

exports.isUploadingImages = function () {
    return {
        type: UI.UPLOADING_IMAGES
    }
};

exports.isUploadingImagesComplete = function () {
    return {
        type: UI.UPLOADING_IMAGES_COMPLETE
    }
};

exports.isFetchingImages = function () {
    return {
        type: UI.FETCHING_IMAGES
    }
};

exports.isFetchingImagesComplete = function () {
    return {
        type: UI.FETCHING_IMAGES_COMPLETE
    }
};
