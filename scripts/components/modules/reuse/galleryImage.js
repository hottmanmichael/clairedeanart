'use strict'

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import cx from 'classnames';

class GalleryImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: false
        }
    }
    toggleDetails = () => {
        this.setState({
            details: !this.state.details
        });
    }
    handleLoaded = (e) => {
        this.props.reorder(e);
    }
    render() {
        let {image, index} = this.props;
        let imageStyle = {
            backgroundColor: image.dominant_color,
            width: 350
        };
        let details = cx({
            ' show': this.state.details
        });

        return (
            <div onLoad={this.handleLoaded}
                onClick={this.props.handleClick.bind(null, index, image)}
                onMouseEnter={this.toggleDetails}
                onMouseLeave={this.toggleDetails}
                key={"img-"+image.id}
                style={imageStyle}
                ref="item"
                className={"grid-item"}>
                <div className={"grid-item-inner details"+details}>
                    <div className="title"><h3>Title Goes Here</h3></div>
                </div>
                <img className="image" src={image.tag} alt={'Gallery-'+image.cloud_id}/>
            </div>
        );
    }
}

export default GalleryImage
