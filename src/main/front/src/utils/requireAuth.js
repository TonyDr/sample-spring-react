import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'


export default function(ComposedComponent) {
    class Authenticate extends React.Component {

        componentWillMount() {
            console.log("mount")
            if (!this.props.isAuthenticated) {
                console.log("push login")
                this.props.dispatch(push('/login'))
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.isAuthenticated) {
                this.props.dispatch(push('/'))
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            );
        }
    }

    function mapStateToProps(state) {
        console.info("requireAuth" + state);
        return {
            isAuthenticated: state.auth.isAuthenticated,
        };
    }

    return connect(mapStateToProps)(Authenticate);

}


