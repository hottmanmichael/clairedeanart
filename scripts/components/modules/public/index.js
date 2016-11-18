'use strict';

import React, {Component} from 'react';
import request from 'superagent';
import Gallery from '../reuse/gallery';

class Index extends Component {
    componentWillMount() {
        this.props.loadGallery();
        console.log("props", this.props);
    }
    render() {
        let {gallery} = this.props;
        return (
            <div>
                <Gallery {...this.props} images={gallery}/>
            </div>
        );
    }
}


export default Index;
