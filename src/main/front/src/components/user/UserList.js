import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Table} from 'semantic-ui-react'

export default class UserList extends Component {
    render() {
        return (
            <Table celled basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.userList.map((user) =>
                        <Table.Row key={user.id}>
                            <Table.Cell>{user.name}</Table.Cell>
                            <Table.Cell>{user.description}</Table.Cell>
                            <Table.Cell/>
                        </Table.Row>)}
                </Table.Body>
            </Table>
        )
    }
}

UserList.propTypes = {
    userList: PropTypes.array.isRequired
};

