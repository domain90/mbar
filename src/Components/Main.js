import React from 'react'
import ItemList from './ItemList'
import Checkboxes from './Checkboxes'
import {connect}  from 'react-redux'
import { addBasket } from '../actions/addBasket'

const Main = () => {
    return (
        <div className="ui container">
            <h3>Main</h3>
            <div className="ui grid">
                <div className="four wide computer column">
                    <Checkboxes />
                </div>
                <div className="twelve wide computer column">
                    <ItemList />
                </div>
            </div>
        </div>
    )
}

export default connect(null, {addBasket})(Main)
