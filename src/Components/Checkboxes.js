import React from 'react'
import { Checkbox, Form } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { addBasket } from '../actions/addAction'

class CheckboxFilter extends React.Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
  
    render() {
      console.log(this.state)
      return (
        <Form>
          <Form.Field>
            Categoria: <b>{this.state.value}</b>
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Todos'
              name='checkboxRadioGroup'
              value='Todos'
              checked={this.state.value === 'Todos'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Sushi'
              name='checkboxRadioGroup'
              value='Sushi'
              checked={this.state.value === 'Sushi'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Hamburguesas'
              name='checkboxRadioGroup'
              value='Hamburguesas'
              checked={this.state.value === 'Hamburguesas'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Sandwiches'
              name='checkboxRadioGroup'
              value='Sandwiches'
              checked={this.state.value === 'Sandwiches'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Postres'
              name='checkboxRadioGroup'
              value='Postres'
              checked={this.state.value === 'Postres'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      )
    }
  }

export default connect(null, {addBasket})(CheckboxFilter)