'use strict'

import React, { Component } from 'react';

let genClientRect = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    // position: 'fixed'
};

class Expanded extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: props.style
        };
    }
    componentDidMount() {
        setTimeout(this._updateStyle, 10);
        setTimeout(this._translate, 310);

    }
    _updateStyle = () => {
        var mid =
        this.setState({
            style: genClientRect
        });
    }
    _calculateTranslate = () => {
        let fromLeft = (screen.width / 2) - (720/2);
        return 'translateX('+fromLeft+'px)';
    }
    _translate = () => {
        var state = this.state;
        console.log("translateX", this._calculateTranslate());
        state.style = Object.assign({}, state.style, {
            // position: 'fixed',
            transform: this._calculateTranslate()
        })
        this.setState(state);
    }
    render() {
        let {style, image} = this.props;
        console.log("incoming???", this.props)
        return (
            <div className="image--expanded" >
                <img style={this.state.style} src={image.tag} alt={'gallery-'+image.cloud_id}/>
            </div>
        )
    }
}

export default Expanded
