import * as actionTypes from "../actions/actionTypes";

const initialState = {
    passengers: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PASSENGERS:
            return {
                ...state,
                passengers: action.passengers
            };
        default:
            return state;
    }
}

export default reducer;