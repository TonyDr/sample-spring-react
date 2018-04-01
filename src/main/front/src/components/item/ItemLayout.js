import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Header, Segment} from 'semantic-ui-react'

import MainLayout from '../MainLayout'
import ItemList from "./ItemList";
import {Link} from "react-router";

class ItemLayout extends Component {

    constructor(props) {
        super(props);
        this.clickCreate.bind(this);
    }

    componentDidMount() {

    }

    clickCreate() {

    }

    render() {
        const {itemList} = this.props;
        return (
            <MainLayout layoutContent={
                <Segment id='itemLayout' attached="top" color='green'>
                    <Header as='h5'>Item list</Header>
                    <Link to="items/edit"><Button color='green'>Create</Button></Link>
                    <ItemList itemList={itemList}/>
                </Segment>}/>
        )
    }

}

ItemLayout.propTypes = {
    itemList: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        itemList: state.items.itemList,
        isFetching: state.items.fetching
    }
}

export default connect(mapStateToProps)(ItemLayout)