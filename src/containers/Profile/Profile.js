import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { connect } from "react-redux";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import * as actions from "../../store/actions/index";
import { useParams,useNavigate  } from "react-router-dom";

function Profile(props) {

  let navigate = useNavigate();

  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    notes: "",
    phone: "",
  });

  const { id } = useParams();

  useEffect(() => {
    props.onInintSinglePassenger(id);
  }, []);

  useEffect(() => {
    const {first_name ,last_name ,email ,gender, notes, phone} = props.passenger;
    setFormState({first_name, last_name, email, gender, notes, phone});
  }, [props.passenger]);

  const inputChangeHandler = (event) => {
      const { id, value } = event.target;
      // setFormState({ ...formState, [id]: value });
      setFormState(prevState => {
        return {...prevState, [id]: value}
    })
   
  }
  
  const editPassenger = () => {
    props.onUpateSinglePassenger(id, formState);

  };

  const deletePassenger = () => {
    props.onDeleteSinglePassenger(id)
      .then(response => {
        alert("User is Successfully deleted");
        navigate("/passengers");
      });
  }

  return (
    <Container
      maxWidth="lg"
      sx={{ p: 2, display: "flex", justifyContent: "center" }}
    >
      <ProfileCard
        passenger={formState}
        onChangeInput={inputChangeHandler}
        updatePassenger={editPassenger}
        onDeletePassenger={deletePassenger}
      />
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    passenger: state.passengers.passenger,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInintSinglePassenger: (id, passengerData) => dispatch(actions.initSinglePassenger(id, passengerData)),
    onInitPassengers: () => dispatch(actions.initPassengers()),
    onUpateSinglePassenger: (id, passengerData) => dispatch(actions.updateSinglePassenger(id, passengerData)),
    onDeleteSinglePassenger: (id) => dispatch(actions.deleteSinglePassenger(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
