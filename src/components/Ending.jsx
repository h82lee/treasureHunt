import React from "react";
import {Box, Typography, Modal} from '@mui/material';
import {useStyles} from "./styles";



function Ending(props) {

    const classes = useStyles();


    return (
        <div>
      <Modal
        open={props.trigger}
        onClose={props.close}
      >
        <Box className={classes.ending}>
          <Typography  variant="h6">
            Congratulations! 
          </Typography>
          <Typography  sx={{ mt: 2 }}>
            You've finished your own scavenger hunt Huntingdale addition! Please pack pair of clean underwear and your swimsuit for our relaxing getaway on March 27th!
          </Typography>
        </Box>
      </Modal>
    </div>
    )
}

export default Ending