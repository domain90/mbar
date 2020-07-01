import { ADD_PRODUCT_BASKET } from './types'

export const addBasket = () => {
    return (dispatch, {getFireBase, getFireStore}) => {
        console.log("Adding to Basket");
        dispatch({
            type: ADD_PRODUCT_BASKET
        })
    }
}