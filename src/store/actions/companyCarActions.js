export const addCompanyCar = (companyCar) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore=  getFirestore();
        const companyProfile = getState().firebase.profile;
        const companyID = getState().firebase.auth.uid;
        firestore.collection('companyCars').add({
            //...companyCar,
            carName: companyCar.carName,
            carSeater: companyCar.carSeater,
            carTransmission: companyCar.carTransmission,
            carOtherFeatures: companyCar.carOtherFeatures,
            carPricePerDay: companyCar.carPricePerDay,
            carImageURL: companyCar.carImageURL,
            companyName: companyProfile.companyName,
            companyEmail: companyCar.companyEmail,
            companyID: companyID,
            locationArea: companyProfile.headquartersLocation,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'ADD_COMPANY_CAR',companyCar});
        }).catch((err) => {
            dispatch({type: 'ADD_COMPANY_CAR_ERROR',err});
        })
        
    }
};