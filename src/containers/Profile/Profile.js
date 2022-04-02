import React, {useEffect} from 'react';
import { Container } from '@mui/material';
import { connect } from 'react-redux';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import * as actions from '../../store/actions/index';
import { useParams } from 'react-router-dom';

function Profile (props) {
    const { id } = useParams();
    useEffect(() => {
        props.onInintSinglePassenger(id);
    }, []);
    return (
        <Container maxWidth="lg" sx={{p: 2, display: 'flex', justifyContent: 'center'}}>
            <ProfileCard passenger={props.passenger} />
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