'use strict'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageExpanded from './imageExpanded';

let genClientRect = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%'
};

class Expander extends Component {
    constructor(props) {
        super(props);
        this.portal = false;
        this.state = {
            innerStyle: this._setInitialStyle()
        };
    }

    handleClick = (e) => {
        if (e.target.className === 'expander-backdrop') {
            this._unmount();
        }
    }

    _mount() {
        if (!this.portal) {
            this.portal = document.createElement('div');
            this.portal.className = 'expander fade';
            document.body.appendChild(this.portal);
        }
        this._doRender();
        setTimeout(this._reveal, 10);
    }

    _doRender() {
        ReactDOM.render(
            <div onClick={this.handleClick} className="expander-backdrop">
                {this._setInner()}
            </div>
        , this.portal);
        setTimeout(this._updateStyle, 10);
    }

    _setInner = () => {
        let {image, rect} = this.props;
        let {innerStyle} = this.state;
        return (
            <ImageExpanded image={image} style={this.state.innerStyle}/>
        );
    }

    _updateStyle = () => {
        console.log("updating!")
        this.setState({
            innerStyle: genClientRect
        });
    }


    _setInitialStyle = () => {
        console.log("props?", this.props)
        let {image, rect} = this.props;
        if (!rect || typeof rect.top === 'undefined') {
            rect = genClientRect;
        }
        var style = {
            top: rect.top || genClientRect.top,
            bottom: rect.bottom || genClientRect.bottom,
            right: rect.right || genClientRect.right,
            left: rect.left || genClientRect.left,
            width: rect.width || genClientRect.width,
            height: rect.height || genClientRect.height,
            position: 'fixed'
        };
        return style;
    }


    _reveal = () => {
        console.log("portal?", this.portal)
        this.portal.classList.add('in');
    }

    _unmount = () => {
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
                setTimeout(callback, 300);
            }
        }
    }

    componentWillMount() {
        // console.log("next?", nextProps);
        // if (nextProps.open && !this.props.open) {
            console.log("should mount")
            this._mount();
        // }
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextProps", nextProps);
        this._mount();
    }

    render() {
        return null;
    }
}

export default Expander
