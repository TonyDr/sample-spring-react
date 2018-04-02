import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {Button, Form, Grid, Header,  Message, Segment} from 'semantic-ui-react'
import {authUser}  from './../actions/authAction'
import {push} from "react-router-redux";
import {restoreAuth} from "../actions/authAction";


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: '',
            isLoading: false
        };

        this.onChange = this.onChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    componentDidMount() {
        //dispatch(restoreAuth());
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onLogin() {
        const { username, password } = this.state;

        this.props.dispatch(authUser(username, password))

    }

    render() {
        const { username, password, isLoading } = this.state;
        return (<div className='login-form'>
                {/*
                 Heads up! The styles below are necessary for the correct render of this example.
                 You can do same with CSS, the main idea is that all the elements up to the `Grid`
                 below must have a height of 100%.
                 */}
                <style>{`
                      body > div,
                      body > div > div,
                      body > div > div > div.login-form {
                        height: 100%;
                      }
                    `}
                </style>
                <Grid
                    textAlign='center'
                    style={{height: '100%'}}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            {' '}Log-in to your account
                        </Header>
                        <Form size='large' onSubmit={this.onLogin}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon='user'
                                    iconPosition='left'
                                    name="username"
                                    value={username}
                                    placeholder='Login'
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    name="password"
                                    value={password}
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.onChange}
                                />

                                <Button color='teal' disabled={isLoading} fluid size='large'>Login</Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

LoginForm.propTypes = {
    isLoading: PropTypes.bool.isRequired
};


function mapStateToProps(state) {
    return {
        isLoading: state.authentication.isLoading,
        errorMessage: state.authentication.authError
    };
}

export default connect(mapStateToProps)(LoginForm)