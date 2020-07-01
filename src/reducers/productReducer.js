import { ADD_PRODUCT, ADD_PRODUCT_ERR } from "../actions/types"

const initialState = {
    product: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT: 
            console.log('Product Added', action.product)
            return state
        case ADD_PRODUCT_ERR:
            console.log('Product Failed', action.err)
            return state
        default:
            return state
    }
}