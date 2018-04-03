import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Table} from 'semantic-ui-react'
import {Link} from "react-router";
import DeleteDialog from "../DeleteDialog";

export default class ItemList extends Component {
    render() {
        return (
            <Table celled basic >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Item name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.itemList.map((item) =>
                        <Table.Row key={item.id}>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.description}</Table.Cell>
                            <Table.Cell>
                                <div className='inline-block'>
                                    <Link to={'items/edit/' + item.id}>
                                        <Button color='green'>Edit</Button>
                                    </Link>
                                </div>
                                <DeleteDialog itemId={item.id}/>

                            </Table.Cell>
                        </Table.Row>)}
                </Table.Body>
            </Table>
        )
    }
}

ItemList.propTypes = {
    itemList: PropTypes.array.isRequired,
};