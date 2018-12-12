export const addCompanyCar = (companyCar) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore=  getFirestore();
        const companyProfile = getState().firebase.profile;
        const companyID = getState().firebase.auth.uid;
        firestore.collection('companyCars').add({
            ...companyCar,
            companyName: companyProfile.companyName,
            companyID: companyID,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_COMPANY_CAR',companyCar});
        }).catch((err) => {
            dispatch({type: 'ADD_COMPANY_CAR_ERROR',err});
        })
        
    }
};