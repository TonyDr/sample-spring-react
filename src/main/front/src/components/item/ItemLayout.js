import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Button, Dimmer, Header, Loader, Segment} from 'semantic-ui-react'

import MainLayout from '../MainLayout'
import ItemList from "./ItemList";
import {Link} from "react-router";
import {fetchItems} from "../../actions/itemsAction";

class ItemLayout extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchItems())
    }

    componentWillMount() {

    }

    componentWillUpdate(nextProps) {
        if (this.props.deleting && nextProps.deleting !== this.props.deleting) {
            this.props.dispatch(fetchItems());
        }
    }

    render() {
        const {itemList} = this.props;
        return (
            <MainLayout layoutContent={
                <Segment id='itemLayout' attached="top" color='green'>
                    <Header as='h5'>Item list</Header>
                    <Link to="items/edit"><Button color='green'>Create</Button></Link>
                    <ItemList itemList={itemList}/>
                    <Dimmer active={this.props.isFetching} inverted>
                        <Loader inverted content={'Loading'}/>
                    </Dimmer>
                </Segment>}/>
        )
    }

}

ItemLayout.propTypes = {
    itemList: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isFetched: PropTypes.bool.isRequired,
    deleting: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        itemList: state.items.itemList,
        isFetching: state.items.fetching,
        isFetched: state.items.fetched,
        deleting: state.items.deleting
    }
}

export default connect(mapStateToProps)(ItemLayout)