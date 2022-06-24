import React, { useState } from 'react';
import { Card, Grid, TextField, Button, CardHeader, Avatar } from '@mui/material';
import './profile-card.css';

function ProfileCard({passenger, onChangeInput}) {
    // console.log("ind", passenger.passenger);

    // TO ACTIVE OR DEACTIVE EDIT
    // const { formState, setFormState } = useState(false);

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
                title={`Passenger ID: ${passenger.id}`}
                subheader={`Email: ${passenger.email}`}
            />
            <form >
              <Grid container spacing={2} sx={{mb: 6}}>
                  <Grid item xs={12} sm={6}>
                      <TextField 
                        value={passenger.first_name} 
                        onChange={onChangeInput}
                        fullWidth 
                        id="first_name" 
                        label="First Name" 
                        variant="outlined" 
                        />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField 
                        value={passenger.last_name} 
                        onChange={onChangeInput}
                        fullWidth 
                        id="last_name" 
                        label="Last Name" 
                        variant="outlined" 
                        />

                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField 
                        value={passenger.phone} 
                        // value={passenger.number_masked ? passenger.phone : passenger.phone.slice(0, 4) + "********"} 
                        onChange={onChangeInput}
                        fullWidth 
                        id="phone" 
                        label="Phone" 
                        variant="outlined" 
                        />

                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                        value={passenger.gender} 
                        onChange={onChangeInput} 
                        fullWidth 
                        id="gender" 
                        label="Gender" 
                        variant="outlined" 
                        />

                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                        value={passenger.note }
                        id="notes"
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