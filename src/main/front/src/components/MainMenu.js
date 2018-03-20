import React, {Component} from 'react'
import { Menu, Icon}  from 'semantic-ui-react'

export default class MainMenu extends Component {

    render() {

        return (
            <Menu compact icon='labeled' vertical>
                <Menu.Item name='todolist' >
                    <Icon name='gamepad' />
                    ToDo List
                </Menu.Item>

                <Menu.Item name='users' >
                    <Icon name='user' />
                    Users
                </Menu.Item>
            </Menu>
        )
    }
}