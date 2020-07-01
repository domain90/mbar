import { combineReducers } from 'redux'
import basketReducer from './basketReducer'
import productReducer from './productReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authReducer'

export default combineReducers({
    basketState: basketReducer,
    productState: productReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer
})