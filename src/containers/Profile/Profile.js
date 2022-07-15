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
    setFormState({ ...props.passenger });
  }, [props.passenger]);

  const inputChangeHandler = (event) => {
    const { id, value } = event.target;
    setFormState({ ...formState, [id]: value });
  };

  const updatePassenger = () => {
    console.log("like update api calls", { id, formState });
    // props.onInintSinglePassenger();
    // navigate("/passengers");

  };

  return (
    <Container
      maxWidth="lg"
      sx={{ p: 2, display: "flex", justifyContent: "center" }}
    >
      <ProfileCard
        passenger={formState}
        onChangeInput={inputChangeHandler}
        updatePassenger={updatePassenger}
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
    onInintSinglePassenger: (id) => dispatch(actions.initSinglePassenger(id)),
    onInitPassengers: () => dispatch(actions.initPassengers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
