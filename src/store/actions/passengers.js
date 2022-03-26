import api from '../../services/config/axios';
import * as actionTypes from './actionTypes';


export const setPassengers = (passengers) => ({
    type: actionTypes.SET_PASSENGERS,
    passengers: passengers
})

export const initPassengers = () => {
    return dispatch => {
        api.get('/passenger/')
            .then(response => {
                console.log("zzz", response.data.items)
                dispatch(setPassengers(response.data.items))
            })

    }
}