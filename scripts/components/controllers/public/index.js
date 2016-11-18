'use strict';

//INDEX GALLERY
import Index from '../../modules/public/index';
import Ajax from '../ajax';
import { connect } from 'react-redux';
const mapStateToProps = state => state;

function mapDispatchToProps(dispatch) {
    return {
        loadGallery: function() {
            dispatch(ACTIONS.UI.isFetchingImages());

            var ajax = new Ajax('/gallery');
            ajax.send('get').then(function(images) {

                console.log("images", images);
                dispatch(ACTIONS.GALLERY.setGallery(images));
                dispatch(ACTIONS.UI.isFetchingImagesComplete());

            }).catch(function(err) {
                console.log("err", err);
            });

        }
    }
}

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
