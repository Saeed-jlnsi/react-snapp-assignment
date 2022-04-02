import React, { useState } from 'react';
import { Card, Grid, TextField, Button, CardHeader, Avatar } from '@mui/material';
import './profile-card.css';

function ProfileCard(props) {
    const { formState, setFormState } = useState(false);
    return (
        <Card style={{ padding: '20px' }} sx={{ width: 700 }}>
            <CardHeader
                avatar={
                <Avatar sx={{ width: 70, height: 70 }} aria-label="recipe">
                    <img
                        className='profile-card-img'
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John"
                    ></img>
                </Avatar>
                }
                title={`Passenger ID: ${props.passenger.id}`}
                subheader={`Email: ${props.passenger.email}`}
            />
            <form >
              <Grid container spacing={2} sx={{mb: 6}}>
                  <Grid item xs={12} sm={6}>
                      <TextField 
                        value={props.passenger.first_name} 
                        onChange={() => {}}
                        disabled={formState}
                        fullWidth 
                        id="outlined-basic1" 
                        label="First Name" 
                        variant="outlined" 
                        />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField 
                        value={props.passenger.last_name} 
                        onChange={() => {}}
                        disabled={formState}
                        fullWidth 
                        id="outlined-basic2" 
                        label="Last Name" 
                        variant="outlined" 
                        />

                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField 
                        value={props.passenger.phone} 
                        onChange={() => {}}
                        disabled={formState}
                        fullWidth 
                        id="outlined-basic3" 
                        label="Phone" 
                        variant="outlined" 
                        />

                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                        value={props.passenger.gender} 
                        onChange={() => {}} 
                        disabled={formState}
                        fullWidth 
                        id="outlined-basic3" 
                        label="Gender" 
                        variant="outlined" 
                        />

                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField 
                        value={props.passenger.number_masked} 
                        onChange={() => {}} 
                        disabled={formState}
                        fullWidth 
                        id="outlined-basic3" 
                        label="Number Masked" 
                        variant="outlined" 
                        />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                        disabled={formState}
                        id="outlined-multiline-static"
                        label="Notes"
                        fullWidth
                        multiline
                        rows={4}
                        defaultValue="Write something here..."
                    />
                  </Grid>
              </Grid>
              <Grid container>
                  <Button variant="contained" sx={{mr: 2}}>Edit Passenger</Button>
                  <Button variant="contained" color="secondary">Delete Passenger</Button>
              </Grid>
            </form>
        </Card>
    )
}

export default ProfileCard;