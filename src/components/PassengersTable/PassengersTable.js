import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'first_name', headerName: 'First Name', flex: 1},
  { field: 'last_name', headerName: 'Last Name', flex: 1},
  { field: 'email', headerName: 'Email', flex: 1},
  { field: 'phone', headerName: 'Phone', flex: 1},
  { field: 'balance', headerName: 'Balance($)', flex: 1},
  { field: 'ride_status', headerName: 'Ride Status', flex: 1},
  { field: 'banned', headerName: 'Banned', flex: 1},
  { field: 'createdAt', headerName: 'Registration Time', flex: 1},
  { 
    headerName: 'Actions',
    field: 'actions',
    flex: 1,
    renderCell: () => (
        <strong>
          <Button
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
        <div style={{ height: '700px' }}>
            <DataGrid rows={props.passengersList} columns={columns} />
        </div>
    )
}

export default PassengersTable;