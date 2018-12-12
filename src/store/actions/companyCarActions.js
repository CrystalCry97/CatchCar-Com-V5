export const addCompanyCar = (companyCar) => {
    return(dispatch, getState) => {
        // make async call to database
        dispatch({type: 'ADD_COMPANY_CAR',companyCar: companyCar})
    }
};