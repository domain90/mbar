import { ADD_PRODUCT_BASKET, GET_PRODUCT_BASKET } from "../actions/types"

const initialState = {
    basketNumbers: 0,
    products: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET: 
            console.log(state)
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                products: [...state.products, action.payload]
            }
        case GET_PRODUCT_BASKET:
            return {
                ...state
            }
        default:
            return state
    }
}