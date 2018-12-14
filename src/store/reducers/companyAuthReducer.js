const initState = {
    companyAuthError: null
}

const companyAuthReducer = (state = initState, action) => {
    switch(action.type){
        case 'COMPANY_LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                companyAuthError: 'Login Failed'
            }
        case 'COMPANY_LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                companyAuthError: null
            }
        case 'COMPANY_SIGNOUT_SUCCESS':
            console.log('signout success');
            return {
                ...state,
                companyAuthError: null
            }
        case 'COMPANY_SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                companyAuthError: action.err.message
            }
        default:
            return state;
    }
}

export default companyAuthReducer