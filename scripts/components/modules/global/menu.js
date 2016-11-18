'use strict';

import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router';


class Menu extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }
    toggleMenu = () => {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        let open = cx({
            ' open': this.state.open
        });
        let hide = cx({
            ' hide': this.state.open
        });
        return (
            <div className={"menu-outer"+open}>
                <div className="nav-icon-container" onClick={this.toggleMenu}>
                    <div className={"bar top"+open}></div>
                    <div className={"bar"+hide}></div>
                    <div className={"bar bottom"+open}></div>
                </div>
                <div className="menu-inner">
                    <div className="menu-header">
                        <h2 className="title">Claire Dean Art</h2>
                    </div>
                    <div className="menu-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="menu-nav">
                        <Link onClick={this.toggleMenu} to="/" className="nav-item">
                            <h2>Gallery</h2>
                        </Link>
                        <Link onClick={this.toggleMenu} to="/about" className="nav-item">
                            <h2>About</h2>
                        </Link>
                        <Link onClick={this.toggleMenu} to="/contact" className="nav-item">
                            <h2>Contact</h2>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}


module.exports = Menu;
