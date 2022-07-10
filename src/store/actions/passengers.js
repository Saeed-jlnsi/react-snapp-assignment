import api from "../../services/config/axios";
import * as actionTypes from "./actionTypes";

export const setPassengers = (passengers) => ({
  type: actionTypes.SET_PASSENGERS,
  passengers: passengers,
});

export const initPassengers = () => {
  return (dispatch) => {
    api.get("/passenger/").then((response) => {
      dispatch(setPassengers(response.data.items));
    });
  };
};

export const setSinglePassenger = (passenger) => ({
  type: actionTypes.SET_SINGLE_PASSENGER,
  passenger: passenger,
});

export const initSinglePassenger = (id) => {
  return (dispatch) => {
    if (id) {
      api.get("/passenger/" + id).then((response) => {
        dispatch(setSinglePassenger(response.data));
      });
    } else {
      dispatch(
        setSinglePassenger({
          first_name: "",
          last_name: "",
          email: "",
          gender: "",
          notes: "",
          phone: "",
        })
      );
    }
  };
};
