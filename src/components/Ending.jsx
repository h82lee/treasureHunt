import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import { useStyles } from "./styles";

function Ending(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal open={props.trigger} onClose={props.close}>
        <Box className={classes.ending} component="form">
          <Typography variant="h2" gutterBottom>
            Congratulations!
          </Typography>
          <img
            src="https://media.istockphoto.com/photos/birthday-cake-decorated-with-colorful-sprinkles-and-ten-candles-picture-id1136810581?k=20&m=1136810581&s=612x612&w=0&h=Jj80oUK2CtY9nwYYRfJXB31ydjhOo5igRolQn-lV8M0="
            alt="bday-img"
            heigh="50%"
            width="50%"
          />
          <Typography sx={{ mt: 2 }} variant="h6">
            Congratulations! You've completed your treasure hunt! Please pack a
            pair of clean underwear and your swimsuit for our relaxing getaway
            on March 27th!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Ending;
