import React, {useEffect, useState} from 'react';
import { Container } from '@mui/material';
import { connect } from 'react-redux';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import * as actions from '../../store/actions/index';
import { useParams } from 'react-router-dom';


function Profile (props) {
    const [formState, setFormState] = useState({
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        notes: "",
        phone: ""
    });

    const { id } = useParams();

    
    useEffect(() => {
        props.onInintSinglePassenger(id);
        // console.log("useEffect")
     }, []);

    useEffect(() => {
        setFormState({...props.passenger});
        console.log("props useEffect", formState)
    }, [props.passenger])

    const formData = {
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        notes: "",
        phone: ""
    };

    const inputChangeHandler = (event) => {
        formData[event.target.id] = event.target.value;
        setFormState(formData)
    }
    
    console.log("rerendered");

    return (
        <Container maxWidth="lg" sx={{p: 2, display: 'flex', justifyContent: 'center'}}>
            <ProfileCard passenger={formState} onChangeInput={inputChangeHandler} />
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        passenger: state.passengers.passenger
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInintSinglePassenger: id => dispatch(actions.initSinglePassenger(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);