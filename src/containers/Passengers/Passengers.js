import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import PassengersTable from '../../components/PassengersTable/PassengersTable';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

function Passengers (props) {

    useEffect(() => {
        props.onInitPassengers();
    }, []);
    
    return (
        <Container maxWidth="lg" sx={{p: 2}}>
            <SearchPanel />
            <PassengersTable passengersList={props.passengers}/>
        </Container>       
    )
}

const mapStateToProps = state => {
    return {
        passengers: state.passengers.passengers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitPassengers: () => dispatch(actions.initPassengers())
    }
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Passengers);