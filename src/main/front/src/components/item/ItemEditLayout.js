import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Segment} from 'semantic-ui-react'

import {saveItem} from "../../actions/itemsAction";

import MainLayout from '../MainLayout'
import ItemForm from "./ItemForm";

class ItemEditLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: null,
                name: '',
                description: ''
            }
        };
        this.onSaveItem = this.onSaveItem.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {

    }

    onChange(event) {
        const field = event.target.name;
        const item = this.state.item;
        item[field] = event.target.value;
        this.setState({item});
    }

    onSaveItem() {
        this.props.dispatch(saveItem(this.state.item));
    }

    render() {
        return (
            <MainLayout layoutContent={
                <Segment id='itemLayout' attached="top" color='green'>
                    <ItemForm item={this.state.item}
                              onSaveItem={this.onSaveItem}
                              onChange={this.onChange}
                              isLoading={this.props.isLoading}
                              errorMessage={this.props.saveError}/>
                </Segment>}/>
        )
    }

}

ItemEditLayout.propTypes = {

};

function mapStateToProps(state) {
    return {
        saveError : state.editItem.error,
        isLoading : state.editItem.processed,
        isSuccess : state.editItem.success
    }
}

export default connect(mapStateToProps)(ItemEditLayout)