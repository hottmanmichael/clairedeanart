'use strict';

import React, {Component} from 'react';
import Menu from './components/modules/global/menu';

class Template extends Component {
    render() {
        return (
            <div className="template">
                <Menu />
                <div id="background-image">
                    <div id="image-cover"></div>
                </div>
                <div className="main-app">
                    {this.props.children}
                </div>
            </div>
        )
    }
}



module.exports = Template;
