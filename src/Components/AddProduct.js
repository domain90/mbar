import React from 'react';
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { addProduct } from '../actions/addProduct'

const options = [
  { key: 'p', text: 'Postres', value: 'postres' },
  { key: 'sw', text: 'Sandwich', value: 'sandwich' },
  { key: 's', text: 'Sushi', value: 'sushi' },
]

class AddProduct extends React.Component {
  state = {
      image: null,
      title: '',
      description1: '',
      description2: '',
      category: '',
      price: 0
    }

  handleChange = (e) => this.setState({
      [e.target.id]: e.target.value
  })

  handleSelect = (e, {value}) => {
      this.setState({ caterory: value })
  }

  handleImage = (e) => {
    this.setState({ image: e.target.files[0] })
  }

  handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)

      this.props.addProduct(this.state)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
        <label>Title</label>
        <input onChange={this.handleChange} type='text' id="title" placeholder='Title' />
        </Form.Field>
        <Form.Field>
        <label>Image</label>
        <input onChange={this.handleImage} type='file' id="image" placeholder='Imagen' />
        </Form.Field>
        <Form.Field>
        <label>Description 1</label>
        <input onChange={this.handleChange} type='text' id="description1" placeholder='Description 1' />
        </Form.Field>
        <Form.Field>
        <label>Description 2</label>
        <input onChange={this.handleChange} type='text' id="description2" placeholder='Description 2' />
        </Form.Field>
        <Form.Select
        fluid
        onChange={this.handleSelect}
        id="category"
        label='Category'
        options={options}
        placeholder='Category'
        />
        <Form.Field>
        <label>Price</label>
        <input onChange={this.handleChange} type='number' id="price" placeholder='0' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product) => dispatch(addProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(AddProduct)