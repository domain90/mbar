import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import logo from '../images/cover.jpg'
import { Input, Menu, Label, Icon, Item } from 'semantic-ui-react'

import './Navbar.css';
import { getBasket } from '../actions/getAction';
import { signOut } from '../actions/authActions';

const Navbar = (props) => {
    console.log(props)

    const links = props.auth.uid ? 
        <Menu.Item
            as={Link}
            name='logout'
            onClick={props.signOut}
        />
        :
        <Menu.Item
            as={Link}
            name='login'
            to='login'
        />

    return (
        <div className="ui container">
            <Menu secondary>
                <Item.Image as= { Link } to="/" src={logo} alt="mbar_logo" size="tiny">
                    {/* <img className="brand" src={logo} alt="mbar_logo"/> */}
                </Item.Image>
                <Menu.Item 
                    name='menu'
                />
                <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                {!props.profile ? null : <p>Hello {props.profile.firstName}</p>}
                <Menu.Item
                    as="a"
                >
                    <Icon name="shopping basket"/>Canasta
                    <Label color="red" floating>{props.basketProps.basketNumbers}</Label>
                </Menu.Item>
                { props.auth.isLoaded && links }
                <Menu.Item 
                    as={ Link } 
                    name='add' 
                    to='add' 
                />
                <Menu.Item 
                    as={ Link } 
                    name='Sign Up' 
                    to='signup' 
                />
                </Menu.Menu>
            </Menu>
            
        </div>
    )
}

const mapStatetoProps = state => {
    console.log(state)
    return {
        basketProps: state.basketState,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Navbar)