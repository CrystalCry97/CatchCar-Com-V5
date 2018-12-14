//Filters Reducer
const filtersReducerDefaultState = {
    pickupLocation: ''
};

const carFiltersReducer= (state= filtersReducerDefaultState,action) =>{
    switch(action.type){
        case 'SET_PICKUP_LOCATION_FILTER':
            console.log("set location");
            return {
                ...state,
                pickupLocation: action.pickupLocation
            };
        default:
            return state;
    }
};

export default carFiltersReducer;