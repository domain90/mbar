import { GET_PRODUCT_BASKET } from './types'

export const getBasket = () => {
    return (dispatch) => {
        console.log("Getting to Basket");
        dispatch({
            type: GET_PRODUCT_BASKET
        })
    }
}