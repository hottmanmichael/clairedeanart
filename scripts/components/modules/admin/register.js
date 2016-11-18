// 'use strict'
//
// import React, { Component } from 'react';
// import Input from '../global/input';
//
// class Register extends Component {
//
//     constructor(props) {
//         super();
//         this.state = {
//             form: {
//                 username: '',
//                 password: ''
//             },
//             errors: []
//         }
//     }
//
//     submit = () => {
//         let form = this.state.form;
//         // if (this.validate(form)) {
//         //this.props.handleLogin(form);
//         // }
//     }
//
//     handleChange = (key, val) => {
//         let state = this.state;
//         state.form[key] = val;
//         this.setState(state);
//     }
//
//     validate(form) {
//         let errors = [];
//         if (!form.hasOwnProperty('username') || !form.username.trim()) {
//             errors.push('Username cannot be blank.');
//         }
//         if (!form.hasOwnProperty('password') || !form.password.trim()) {
//             errors.push('Password cannot be blank.');
//         }
//
//         errors.map(err => this.renderError(err));
//         return errors.length > 0;
//     }
//
//     renderError(message) {
//         let errors = this.state.errors;
//         errors.push(message);
//         this.setState({
//             errors: errors
//         });
//     }
//
//     render() {
//         return (
//             <div className="form-box">
//                 <div className="form-box-inner">
//                     {this.state.errors.map(err => (<h4>{err}</h4>))}
//                     <div className="form-box-head">
//                         <h1 className="title">Create Admin</h1>
//                     </div>
//                     <div className="form-box-main">
//                         <Input
//                             type="text"
//                             label="Username"
//                             iconClassName="icon-user-secret"
//                             handleUserInput={this.handleChange}/>
//                         <Input
//                             type="password"
//                             label="Password"
//                             iconClassName="icon-lock"
//                             handleUserInput={this.handleChange}/>
//                         <Input
//                             type="password"
//                             label="Confirm Password"
//                             iconClassName="icon-lock"
//                             handleUserInput={this.handleChange}
//                             shouldCompare={true}
//                             compareValue={this.state.form.password}/>
//                     </div>
//                     <div onClick={this.submit} className="button button-formbox">
//                         <h3 className="text">Create</h3>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default Register;
