import { IconButton } from "@mui/material";
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import React from "react";
import {useStyles} from "./styles";



function Popup(props){

    const classes = useStyles();

    return (props.trigger)?(
        <div className="popup">
        <div className="popup-inner">         
            <IconButton
            className="close-btn"
            size="small"
             color="primary"
             onClick={()=>props.setTrigger(false)}>
            <HighlightOffRoundedIcon 
            fontSize="large"
            />
            </IconButton>
            {props.children}
        </div>
        </div>
    ):"";
}

export default Popup