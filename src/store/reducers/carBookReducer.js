const initState = {}

const carBookReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_BOOK_CAR' :
            console.log('add book car success', action.bookCar);
            return state;
        case 'ADD_BOOK_CAR_ERROR' :
            console.log('add book car error', action.err);
            return state;
        default:
            return state;
    }
}

export default carBookReducer