const initState = {
    companyCars: [
        {id: '1', carName: 'Proton Saga', carSeater:'4', carTransmission:'Manual', carOtherFeatures:'Free half petrol tank'},
        {id: '2', carName: 'Honda City', carSeater:'4', carTransmission:'Auto', carOtherFeatures:'Eco-Car, petrol save'},
        {id: '3', carName: 'Perodua Kancil', carSeater:'4', carTransmission:'Manual', carOtherFeatures:'Small, but fast LOL'}
    ]
}

const companyCarReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_COMPANY_CAR':
            console.log('add new car success',action.companyCar);
            return state;
        case 'ADD_COMPANY_CAR_ERROR':
            console.log('add new car error', action.err);
            return state;
        default:
            return state;
    }
}

export default companyCarReducer