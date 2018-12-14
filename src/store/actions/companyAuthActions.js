// company sign in action
export const companySignIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        // Firebase Sign In
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({ type: 'COMPANY_LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({ type: 'COMPANY_LOGIN_ERROR',err});
        });
        
    }
}

// company sign out action
export const companySignOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase= getFirebase();
        //Firebase Sign Out
        firebase.auth().signOut().then(()=> {
            dispatch({type: 'COMPANY_SIGNOUT_SUCCESS'});
        });
    }
}

// company sign up action
export const companySignUp = (newCompany) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newCompany.email,
            newCompany.password
        ).then((resp) => {
            return firestore.collection('companies').doc(resp.user.uid).set({
                companyName: newCompany.companyName,
                headquartersLocation: newCompany.headquartersLocation,
                telephoneNumber: newCompany.telephoneNumber,
                businessLicenseNo: newCompany.businessLicenseNo
            })
        }).then(() => {
            dispatch({ type: 'COMPANY_SIGNUP_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'COMPANY_SIGNUP_ERROR',err})
        })
    }
}