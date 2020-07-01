import { ADD_PRODUCT, ADD_PRODUCT_ERR } from './types'
import { firestore, storage } from '../config/firebaseConfig'


export const addProduct = (product) => {
    return (dispatch, getState, { getFireStore }) => {
        const db = firestore;
        const uploadTask = storage.ref(`images/${product.image.name}`).put(product.image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(product.image.name)
                    .getDownloadURL()
                    .then(url => {
                        let updatedProduct = {
                            ...product,
                            image: url
                        }
                        db.collection('products').add({
                            ...updatedProduct,
                        }).then(() => {
                            dispatch({
                                type: ADD_PRODUCT,
                                updatedProduct
                            })
                        }).catch((err) => {
                            dispatch({ type: ADD_PRODUCT_ERR, err })
                        })  
                    })
            }
        )

    }
}