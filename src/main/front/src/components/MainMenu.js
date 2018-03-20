import React, {Component} from 'react'
import {Link} from 'react-router';
import {Menu, Icon}  from 'semantic-ui-react'

export default class MainMenu extends Component {

    render() {

        return (
            <Menu compact icon='labeled' vertical>
                <Link to="/#">
                    <Menu.Item name='app'>
                        <Icon name='home'/>
                        Home
                    </Menu.Item>
                </Link>
                <Link to="/todo">
                    <Menu.Item name='todolist'>
                        <Icon name='tasks'/>
                        ToDo List
                    </Menu.Item>
                </Link>
                <Link to="/users">
                    <Menu.Item name='users'>
                        <Icon name='user'/>
                        Users
                    </Menu.Item>
                </Link>
            </Menu>
        )
    }
}