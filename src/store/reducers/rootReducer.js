import companyAuthReducer from './companyAuthReducer'
import companyCarReducer from './companyCarReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    companyAuth: companyAuthReducer,
    companyCar: companyCarReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer