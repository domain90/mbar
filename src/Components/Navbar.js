import React from 'react'
import logo from '../images/cover.jpg'
import { Input, Menu, MenuMenu } from 'semantic-ui-react'

const Navbar = () => {
    return (
        <div className="ui container">
            <Menu secondary>
                <Menu.Item>
                    <img src={logo} />
                </Menu.Item>
                <Menu.Item 
                    name='menu'
                />
                <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item
                    name='login'
                />
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Navbar