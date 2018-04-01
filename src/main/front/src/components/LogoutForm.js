import React, {Component} from 'react';
import {logoutUser} from './../actions/authAction'
import { push } from 'react-router-redux'
import {connect} from "react-redux";

class LogoutForm extends React.Component {

    componentWillMount() {
        console.log("logout");
        this.props.dispatch(logoutUser());
        this.props.dispatch(push("/login"))
    }

    render() {
        return (<div>Logout action</div>)
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.authentication.isAuthenticated,
    };
}

export default connect(mapStateToProps)(LogoutForm);

