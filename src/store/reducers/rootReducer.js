import authReducer from './authReducer'
import companyCarReducer from './companyCarReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    companyCar: companyCarReducer
});

export default rootReducer