import React from 'react';
import {Typography} from "@mui/material"



function Introduction(props) { 

  return (
  <div>
    <form>
      <h3>Hello G,<br></br> Welcome to your scavenger hunt!</h3>
      <p>Happy 31st birthday! Please use this app to guide you to your ultimate gift. I’ve hid envelops that contain password to your next hint throughout the house. I hope you can find all of them to get to your grand-finale prize! Good luck 🍀</p>
      <button className = "startButton" 
      onClick={props.handleStartClick}>Start</button>
    </form>
  </div>
);
}
export default Introduction