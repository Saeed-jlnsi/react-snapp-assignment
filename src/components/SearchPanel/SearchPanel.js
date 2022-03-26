import Accordion from '@mui/material/Accordion';
import {AccordionSummary, AccordionDetails, Typography, Grid,
TextField, Switch, FormGroup, FormControlLabel, Button  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function SearchPanel() {
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" component="div">Search & Filter Passenger</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form >
            <Grid container spacing={2} sx={{mb: 6}}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="outlined-basic1" label="Search by first name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="outlined-basic2" label="Search by last name" variant="outlined" />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth id="outlined-basic3" label="Search by email" variant="outlined" />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Filter Banned Passengers" />
                    </FormGroup>
                </Grid>
            </Grid>
            <Grid container>
                <Button variant="contained" sx={{mr: 2}}>Search Passenger</Button>
                <Button variant="contained" color="secondary">Reset Search</Button>
            </Grid>
          </form>
        </AccordionDetails>
      </Accordion>
    )
}

export default SearchPanel;