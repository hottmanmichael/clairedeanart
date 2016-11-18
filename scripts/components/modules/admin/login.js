'use strict'

import React, { Component } from 'react';
import Input from '../global/input';

class Login extends Component {

    constructor(props) {
        super();
        this.state = {
            form: {
                username: '',
                password: ''
            }
        }
    }

    submit = () => {
        let form = this.state.form;
        this.props.handleLogin(form);
    }

    handleChange = (key, val) => {
        let state = this.state;
        state.form[key] = val;
        this.setState(state);
    }

    render() {
        return (
            <div className="form-box">
                <div className="form-box-inner">
                    <div className="form-box-head">
                        <h1 className="title">Login</h1>
                    </div>
                    <div className="form-box-main">
                        <Input
                            type="text"
                            label="Username"
                            iconClassName="icon-user-secret"
                            handleUserInput={this.handleChange}/>
                        <Input
                            type="password"
                            label="Password"
                            iconClassName="icon-lock"
                            handleUserInput={this.handleChange}/>
                    </div>
                    <div onClick={this.submit} className="button button-formbox">
                        <h3 className="text">Login</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
