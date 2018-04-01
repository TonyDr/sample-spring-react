import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button, Form, Input, Message} from 'semantic-ui-react'
import {Link} from "react-router";


class ItemForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Form onSubmit={this.props.onSaveItem}>
                <Form.Field inline>
                    <label className='field-label'>Item name</label>
                    <Input placeholder='Item name'
                           value={this.props.item.name}
                           name='name' onChange={this.props.onChange}/>
                </Form.Field>
                <Form.Field inline>
                    <label className='field-label'>Description</label>
                    <Input placeholder='Description'
                           value={this.props.item.description}
                           name='description' onChange={this.props.onChange}/>
                </Form.Field>
                <Message error visible={this.props.errorMessage.length > 0}>{this.props.errorMessage}</Message>
                <Button type='submit' color='green'>Submit</Button>
                <Link to='items'><Button type='submit' color='grey'>Cancel</Button></Link>
            </Form>
        )
    }

}

ItemForm.propTypes = {
    item: PropTypes.object.isRequired,
    errorMessage: PropTypes.string.isRequired,
    onSaveItem: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default ItemForm