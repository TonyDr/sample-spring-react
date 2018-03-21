import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Segment} from 'semantic-ui-react'

import MainLayout from '../MainLayout'
import UserList from "./UserList"
import {fetchUsers} from "../../actions/usersAction"

class UsersLayout extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const {dispatch} = this.props;
        dispatch(fetchUsers())
    }

    render() {
        const {userList} = this.props
        return (
            <MainLayout layoutContent={
                <Segment attached="top">
                    <div>Hello users</div>
                    <UserList userList={userList}/>
                </Segment>}/>
        )
    }

}

UsersLayout.propTypes = {
    userList: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {

    return {
        userList: state.users.userList,
        isFetching: state.users.fetching
    }
}

export default connect(mapStateToProps)(UsersLayout)