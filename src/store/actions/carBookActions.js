export const carBooking = (bookCar) => {
    return(dispatch, getState, {getFirebase, getFirestore }) => {
        const firestore=  getFirestore();
        firestore.collection('carBooked').add({
            ...bookCar
        }).then(() => {
            dispatch({type: 'ADD_BOOK_CAR', bookCar});
        }).catch((err) => {
            dispatch({type: 'ADD_BOOK_CAR_ERROR', err});
        })
        }
       
};