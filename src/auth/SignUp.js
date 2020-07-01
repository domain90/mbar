import React from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { signUp } from '../actions/authActions'

class SignUp extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                <label>First Name</label>
                <input onChange={this.handleChange} type='text' id="firstName" placeholder='First Name' />
                <label>Last Name</label>
                <input onChange={this.handleChange} type='text' id="lastName" placeholder='Last Name' />
                <label>Phone Number</label>
                <input onChange={this.handleChange} type='number' id="phoneNumber" placeholder='Phone Number' />
                <label>Email</label>
                <input onChange={this.handleChange} type='email' id="email" placeholder='Email' />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input onChange={this.handleChange} type='password' id="password" placeholder='Password' />
                </Form.Field>
                <Button type='submit'>Sign Up</Button>
            </Form>
        )
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)