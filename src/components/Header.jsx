import React from "react";
import { useStyles } from "./styles";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  const classes = useStyles();

  return (
    <AppBar style={{ background: "#94B49F" }} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4" className={classes.headerTitle}>
          G's Birthday Scavenger Hunt
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
