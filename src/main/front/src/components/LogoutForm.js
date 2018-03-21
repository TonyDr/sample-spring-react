import React, {Component} from 'react';
import {logoutUser} from './../actions/authAction'
import { push } from 'react-router-redux'
import {connect} from "react-redux";

class LoginForm extends React.Component {

    componentWillMount() {
        console.log("logout")
        this.props.dispatch(logoutUser())
        this.props.dispatch(push("/login"))
    }

    render() {
        return (<div>Logout action</div>)
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
}

export default connect(mapStateToProps)(LoginForm);
