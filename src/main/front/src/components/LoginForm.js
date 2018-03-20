import React from 'react';
import { authUserSuccess}  from './../actions/authAction'
import { push } from 'react-router-redux'
import {connect} from "react-redux";


class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.onLogin = this.onLogin.bind(this);

    }

    onLogin() {
        console.log('log pressed')
        this.props.dispatch(authUserSuccess("tony", "token"))
        this.props.dispatch(push("/"))
    }

    render() {
        return (<div>Login here
            <button onClick={this.onLogin}>Login</button></div>)
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
}

export default connect(mapStateToProps)(LoginForm)