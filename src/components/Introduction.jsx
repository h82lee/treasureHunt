import React from 'react';
import {Typography, Button, CardContent, CardActions, Box, Card, Grid, Container} from "@mui/material"
import {useStyles} from "./styles";



function Introduction(props) { 

  const classes = useStyles();

  return (
   
  <div>
   <Grid container justifyContent="center" className={classes.grid}>
 <Box component ="form" className={classes.introduction}>
    <Card sx={{ width:500,}}>
      <CardContent>
        <Typography variant="h4" align="center">
        Hello G,
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
        Welcome to your scavenger hunt!
        </Typography>
        <Typography variant="body1" align ="center" gutterBottom>
        Happy 31st birthday! Please use this app to guide you to your ultimate gift. I’ve hid envelops that contain password to your next hint throughout the house. I hope you can find all of them to get to your grand-finale prize! Good luck 🍀
        </Typography>
      </CardContent>
      <CardActions>
      <Button className = {classes.button}
      onClick={props.handleStartClick}
      fullWidth
      variant="contained"
      color="primary">
      Start
      </Button>
      </CardActions>
    </Card>
  </Box>
  </Grid>
  </div>
);
}
export default Introduction