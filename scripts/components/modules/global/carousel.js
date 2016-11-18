'use strict'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Flickity from 'flickity';
import imagesLoaded from 'imagesloaded';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.portal = false;
        this.flickity = false;
        this.state = {
            open: false,
            initialIndex: 0
        };
    }

    _mount = (props) => {
        if (!this.portal) {
            this.portal = document.createElement('div');
            this.portal.className = 'carousel-outer fade';
            document.body.appendChild(this.portal);
        }
        this._doRender(props);
        setTimeout(this._fadeIn, 10);
    }

    _doRender = (props) => {
        ReactDOM.render(
            <div onClick={this.handleClick} className="carousel-backdrop">
                <div className="close-icon"><i className="icon-cancel"></i></div>
                <div className="carousel">
                    {this._mapImages(props.images)}
                </div>
            </div>
        , this.portal);
        this._initializeFlickity(props);
    }

    _mapImages(images) {
        return images.map(img => {
            return (<CarouselCell
                key={'carousel-'+img.cloud_id}
                image={img}/>
            );
        });
    }

    _initializeFlickity = (props) => {
        this.flickty = new Flickity('.carousel', {
            // cellAlign: 'center',
            contain: true,
            imagesLoaded: true,
            lazyLoad: true,
            initialIndex: props.initialIndex
        });
    }

    _fadeIn = () => {
        this.portal.classList.add('in');
    }

    handleClick = (e) => {
        console.log("clicked!", e.target)
        if (e.target.className === 'carousel-backdrop') {
            this._unmount();
        }
        if (e.target.className === 'close-icon' || e.target.className === 'icon-cancel') {
            this._unmount();
        }
    }

    _unmount = () => {
        console.log("should unmount")
        if (this.portal) {
            this.hide(() => {
                ReactDOM.unmountComponentAtNode(this.portal);
                document.body.removeChild(this.portal);
                this.portal = false;
                this.props.close();
            });
        }
    }

    hide(callback) {
        if (this.portal) {
            this.portal.classList.remove('in');
            this.portal.classList.add('out');
            if (typeof callback === 'function') {
                setTimeout(callback, this.props.transition);
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log("initialIndex?? cwrp", nextProps);
        if (nextProps.open && !this.state.portal) {
            this._mount(nextProps);
        }
    }

    render() {
        // console.log("props!", this.props);
        return null;
    }
}

// Carousel.defaultProps = {
//     initialIndex: 0
// };

export default Carousel






class CarouselCell extends Component {
    render() {
        let {image} = this.props;
        return (
            <div className="carousel-cell">
                <img data-flickity-lazyload={image.tag} />
            </div>
        )
    }
}
