import { Container } from '@mui/material';
import SearchPanel from '../../components/SearchPanel/SearchPanel';
import PassengersTable from '../../components/PassengersTable/PassengersTable';

function Passengers () {
    return (
        <Container maxWidth="lg" sx={{p: 2}}>
            <SearchPanel />
            <PassengersTable/>
        </Container>
       
    )
}

export default Passengers;