import React, {Component} from 'react'
import {Link} from 'react-router';
import {Menu, Icon}  from 'semantic-ui-react'

export default class MainMenu extends Component {

    render() {

        return (
            <Menu compact icon='labeled' vertical color='green'>
                <Link to="/">
                    <Menu.Item name='app'>
                        <Icon name='home'/>
                        Home
                    </Menu.Item>
                </Link>
                <Link to="items">
                    <Menu.Item name='itemlist'>
                        <Icon name='tasks'/>
                        Item list
                    </Menu.Item>
                </Link>
                <Link to="users">
                    <Menu.Item name='users'>
                        <Icon name='user'/>
                        Users
                    </Menu.Item>
                </Link>

                <Link to="logout">
                    <Menu.Item name='logout'>
                        <Icon name='sign out'/>
                        Logout
                    </Menu.Item>
                </Link>
            </Menu>
        )
    }
}