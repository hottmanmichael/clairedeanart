'use strict';

import React, { Component } from 'react';
import cx from 'classnames';

// $untouched The field has not been touched yet
// $touched The field has been touched
// $pristine The field has not been modified yet
// $dirty The field has been modified
// $invalid The field content is not valid
// $valid The field content is valid

class Input extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            hasContent: false,
            invalid: false,
            valid: false,
            errors: []
        }
        props = {
            iconClassName: false,
            type: 'text',
            shouldCompare: false,
            compareValue: ''
        }
    }

    handleChange = (e) => {
        let value = this.refs.input.value;
        let key = this.props.label.toLowerCase();

        this.setHasContent(this.hasContent(value));

        //check same as if compare === true
        if (this.props.shouldCompare) {
            if (compareSameAs(value, this.props.compareValue)) {

            } else {

            }
        }

        this.props.handleUserInput(key, value);
    }

    setHasContent(state) {
        this.setState({
            dirty: state
        });
    }

    hasContent(input) {
        return input.trim().length > 0;
    }

    createIcon() {
        var icon = '';
        if (this.props.iconClassName) {
            icon = (<i className={"form-group-icon " + this.props.iconClassName}></i>);
        }
        return icon;
    }

    compareSameAs(a, b) {
        return a === b;
    }

    switchValidity() {
        this.setState({
            valid: !this.state.valid,
            invalid: !this.state.invalid
        });
    }

    render() {
        var hasContent = cx({
            ' dirty': this.state.dirty
        });
        var hasIcon = cx({
            ' has-icon': !!this.props.iconClassName
        });
        var validity = cx({
            ' valid': this.state.valid,
            ' invalid': this.state.invalid
        });
        return (
            <div className={"input-group" + hasContent + hasIcon}>
                <input
                    onChange={this.handleChange}
                    ref="input" type={this.props.type}
                    name={this.props.label.toLowerCase()}/>
                <label htmlFor={this.props.label.toLowerCase()}>{this.props.label}</label>
                <div className="bar"></div>
                {this.createIcon()}
                {this.state.errors.map(err=>{
                    return <div className="form-err">{err.msg}</div>
                })}
            </div>
        )
    }
}

Input.propTypes = {
    handleUserInput: React.PropTypes.func,
    label: React.PropTypes.string
};

export default Input;
