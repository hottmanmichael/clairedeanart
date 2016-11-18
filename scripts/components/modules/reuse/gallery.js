'use strict';

import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import Packery from 'packery';
import GalleryImage from './galleryImage';
// import Expander from './expander';
import Carousel from '../global/carousel';

var imagesLoaded = require('imagesloaded');

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carousel: false,
            carouselInitialIndex: 0
        };
        this.packery = false;
        this.loadCount = 0;
        this.imageCount = this.props.images.length;
    }

    _checkHasImage = () => {
        let image = this.props.location.query.image;
        if (image) {
            // console.log("hasImage!", image);
            // console.log("props???", this.props);
            // // console.log("index!!lkajsdfl;kj", this.props.gallery.indexOf(cloud_id===))
            // //get index
            // var index = this.props.gallery.findIndex(this._getImageIndex.bind(this, image));
            // console.log("index!", index);
            // this._showCarousel(index);
        } else {
            // this.toggleCarousel(true);
        }
    }

    _getImageIndex(id, gallery) {
        let idx = -1;
        gallery.forEach((img, index) => {
            if (img.cloud_id === id) {
                return index;
            }
        });
        return idx;
    }

    _showCarousel = (initialIndex) => {
        this.setState({
            carouselInitialIndex: initialIndex,
            carousel: true
        });
    }

    handleReorder = (e) => {
        this.reveal(e.target);
        // this.packery.reloadItems();
        this.packery.layout();
    }

    reveal(image) {
        setTimeout(function() {
            image.classList.add('show');
        }, 250);
    }

    initializePackery() {
        this.packery = new Packery('.grid', {
            itemSelector: '.grid-item',
            gutter: 15
        });
    }

    handleClick = (index, image, e) => {
        this._showCarousel(index);
        browserHistory.push({
            query: {
                image: image.cloud_id
            }
        });
    }

    renderImage = (img, index) => {
        return (
            <GalleryImage
                handleClick={this.handleClick}
                index={index}
                key={"img-"+img.id}
                reorder={this.handleReorder}
                image={img}/>
        );
    }

    toggleCarousel = (force, index, e) => {
        let carousel = !this.state.carousel;
        if (force) {
            carousel = false;
        }
        this.setState({
            carousel: carousel,
            carouselInitialIndex: 0
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.gallery.length) {
            this.initializePackery();
            this._checkHasImage();
        }
    }

    componentDidMount() {
        this.initializePackery();
        // this._checkHasImage();
    }

    render() {
        let {images} = this.props;
        return (
            <div className="grid" ref="grid">
                {images.map(this.renderImage)}
                <Carousel initialIndex={this.state.carouselInitialIndex}
                    close={this.toggleCarousel.bind(this, true)}
                    open={this.state.carousel}
                    images={images}/>
            </div>
        );
    }
}

export default Gallery
