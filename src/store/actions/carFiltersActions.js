
//SET_PICKUP_LOCATION_FILTER
export const setPickupLocationFilter= (pickupLocation) => {
    return (dispatch, getState) =>{
        dispatch({type: 'SET_PICKUP_LOCATION_FILTER',pickupLocation});
    }
    
};