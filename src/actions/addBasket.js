import { ADD_PRODUCT_BASKET } from './types'

export const addBasket = (product) => ({
    type: ADD_PRODUCT_BASKET,
    payload: product
})