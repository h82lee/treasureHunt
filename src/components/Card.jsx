import React, { useState } from 'react';
import { Typography, CardContent, CardActions, Box, Card, Input, Grid, Fab } from '@mui/material';
import useStyles from "./styles";

function Textbox(props) { 


  const classes = useStyles();

  const [writtenPassword, setWrittenPassword]= useState("")

  function handleChange(event){
    const {value} = event.target
    setWrittenPassword(value)
  }


  return (
  <div>
  <Grid container justifyContent="center" className={classes.grid}>
   <Box component ="form" className={classes.textbox}>
   <Card sx={{ width:500 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
        Hint #{props.hintNumber}
        </Typography>
        <Typography variant="inherit" align="center" gutterBottom>
        {props.hintDescription} 
        </Typography>
      </CardContent>
      <CardActions>
      <Grid container spacing ={4} justifyContent="center">
      <Grid item>
      <Input name="password"
        placeholder='password?'
        value={writtenPassword}
        onChange={handleChange}>
        </Input>
      </Grid>
      <Grid item>
      <Fab className="goButton" 
        onClick={(e)=>{
        e.preventDefault();
        props.handleGoClick(writtenPassword)
        }} size="small">
        Go
        </Fab>
      </Grid>
        </Grid>
      </CardActions>
      </Card>
    </Box>
    </Grid>
  </div>
  );
}
export default Textbox