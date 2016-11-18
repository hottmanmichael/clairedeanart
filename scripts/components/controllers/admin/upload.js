'use strict';

import Upload from '../../modules/admin/upload';
import Ajax from '../ajax';
import request from 'superagent';

var connect = require('react-redux').connect;

function mapStateToProps(state, ownProps) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        handleUpload: function(files) {
            console.log("files", files);

            dispatch(ACTIONS.UI.isUploadingImages());

            var ajax = new Ajax('/admin/upload');
            ajax.send('postImages', null, files)
            .then(function(data) {
                console.log("data!", data);
                dispatch(ACTIONS.UI.isUploadingImagesComplete());
            }).catch(function(err) {
                console.log("err!", err);
            });
        }
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Upload);
