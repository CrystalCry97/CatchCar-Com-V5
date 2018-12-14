import companyAuthReducer from './companyAuthReducer'
import companyCarReducer from './companyCarReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import carFiltersReducer from './carFiltersReducer'
import carBookReducer from './carBookReducer';

const rootReducer = combineReducers({
    carFilters: carFiltersReducer,
    companyAuth: companyAuthReducer,
    companyCar: companyCarReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    bookCar: carBookReducer
});

export default rootReducer