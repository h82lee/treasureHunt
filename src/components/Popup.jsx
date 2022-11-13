import React, { useState, useEffect } from "react";
import { IconButton, Typography, Box, Modal } from "@mui/material";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { useStyles } from "./styles";

function Popup(props) {
  const classes = useStyles();

  return (
    <Modal
      open={props.visible}
      onClose={props.closeOnClick}
      className={classes.popupModal}
    >
      <Box className={classes.popupBox}>
        <div className={classes.closeBtn}>
          <IconButton
            size="small"
            color="primary"
            onClick={() => props.setVisible(false)}
          >
            <HighlightOffRoundedIcon fontSize="large" />
          </IconButton>
        </div>
        <Typography variant="h3" gutterBottom align="center">
          Let the game begin 🤡
        </Typography>
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/04/saw-10.png"
          alt="saw-img"
          width="500"
          height="250"
        />
      </Box>
    </Modal>
  );
}

export default Popup;
