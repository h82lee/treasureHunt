import React from 'react';
import useStyles from "./styles";
import { AppBar, Toolbar, Typography } from '@mui/material';



function Header(){

    const classes = useStyles();

    return <AppBar  color="primary" style={{ background: "#BBD5D2" }}>
        <Toolbar >
        <Typography variant="h4" className={classes.headerTitle}>Guanhua's Birthday Scavenger Hunt</Typography>
        </Toolbar>
    </AppBar> 
}

export default Header