import React from 'react'
import { compose } from 'redux'
import { Card, Icon, Image } from 'semantic-ui-react'
import LoaderSpinner from './LoaderSpinner'
import { firestoreConnect } from 'react-redux-firebase'
import { addBasket } from '../actions/addBasket';

// import products from '../products.json'

import { connect } from 'react-redux'

class ItemList extends React.Component {

    renderItems = product => {
        return (
            <div key={product.id} className="ui column">
                <Card>
                    <Image src={product.image} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{product.title}</Card.Header>
                    <Card.Meta>{`Categoria: ${product.category}`}</Card.Meta>
                    <Card.Description>
                        {product.description1}<br />
                        {product.description2}
                    </Card.Description>
                    <Card.Description>
                        {`Precio: ${product.price} Gs.`}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a onClick={() => this.props.addBasket(product)} href="javascript:void(0);">
                        <Icon name='plus circle' />
                        Agregar
                    </a>
                    </Card.Content>
                </Card>
            </div>
        )
    }

    render() {
        
        const { products } = this.props

        if (!products) { 
            return <LoaderSpinner />; 
        }
        
        return(
            <div className="ui three column doubling stackable grid">
                {products.map(product => {
                    return this.renderItems(product)
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.firestore.ordered.products
    }
}

export default compose(
    connect(mapStateToProps, { addBasket }),
    firestoreConnect([
        { collection: 'products' }
    ])
)(ItemList)