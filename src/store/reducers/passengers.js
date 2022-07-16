import * as actionTypes from "../actions/actionTypes";

const initialState = {
    passengers: [],
    passenger: {
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        notes: "",
        phone: ""
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PASSENGERS:
            return {
                ...state,
                passengers: action.passengers
            };
        case actionTypes.SET_SINGLE_PASSENGER:
            return {
                ...state,
                passenger: action.passenger
            };               
        default:
            return state;
    }
}

export default reducer;