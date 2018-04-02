import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Confirm} from 'semantic-ui-react'
import {deleteItem, fetchItems} from "../actions/itemsAction";

class ConfirmDialog extends Component {

    state = {open: false};

    show = () => this.setState({open: true});
    handleConfirm = () => {

        this.props.dispatch(deleteItem(this.props.itemId));
        this.props.dispatch(fetchItems());
        this.setState({open: false});
    };
    handleCancel = () => {
        this.setState({open: false});

    };

    render() {
        return (
            <div className='inline-block'>
                <Button color='green' onClick={this.show}>Delete</Button>
                <Confirm
                    open={this.state.open}
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                />
            </div>
        )
    }
}

ConfirmDialog.propTypes = {
    itemId: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
};


export default connect()(ConfirmDialog)