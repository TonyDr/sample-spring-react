import React, { Component } from 'react';
import { authUserSuccess}  from './../actions/authAction'
import { push } from 'react-router-redux'
import {connect} from "react-redux";


class LoginForm extends React.Component {


    onLogin() {
        console.log('log pressed')
        this.props.dispatch(authUserSuccess("tony", "token"))
        this.props.dispatch(push("/"))
    }

    render() {
        return (<div>Login here!!!
            <button onClick={this.onLogin.bind(this)}>Login</button></div>)
    }
}

function mapStateToProps(state) {
    console.info("login form" + state);
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
}

export default connect(mapStateToProps)(LoginForm)