import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';


const columns = [
  { field: 'first_name', headerName: 'First Name', flex: 1},
  { field: 'last_name', headerName: 'Last Name', flex: 1},
  { field: 'email', headerName: 'Email', flex: 1},
  { field: 'phone', headerName: 'Phone', flex: 1},
  { field: 'balance', headerName: 'Balance($)', flex: 1},
  { field: 'ride_status', headerName: 'Ride Status', flex: 1},
  { field: 'banned', headerName: 'Banned', flex: 1},
  { field: 'createdAt', headerName: 'Registration Time', width: 150},
  { 
    headerName: 'Actions',
    field: 'actions',
    flex: 1,
    renderCell: ({id}) => (
        <strong>
          <Button
            component={Link}
            to={`/profile/${id}`}
            variant="contained"
            color="secondary"
            size="small"
          >
            Profile
          </Button>
        </strong>
      ),
  },
]; 

function PassengersTable(props) {

  return (
      <Card style={{ height: '700px', padding: '20px', marginTop: '20px' }}>
          <DataGrid rows={props.passengersList} columns={columns} />
      </Card>
  )
}

export default PassengersTable;