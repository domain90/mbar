import React from 'react'
import { connect } from 'react-redux'
import { signIn } from '../actions/authActions'
import { Button, Form } from 'semantic-ui-react'
// import { firebaseConnect } from 'react-redux-firebase';

class SignIn extends React.Component {
    state = {
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
        this.props.signIn(this.state)
    }

    render() {
        const { authError } = this.props

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                <label>Email</label>
                <input type='email' id="email" onChange={this.handleChange} placeholder='Email' />
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input type='password' id="password" onChange={this.handleChange} placeholder='Password' />
                </Form.Field>
                { authError ? <p>{authError}</p> : null}
                <Button type='submit'>Sign In</Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)