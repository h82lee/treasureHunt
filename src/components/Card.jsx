import React, { useState } from "react";
import {
  Typography,
  CardContent,
  CardActions,
  Box,
  Card,
  Input,
  Grid,
  Fab,
  TextField,
} from "@mui/material";
import { useStyles } from "./styles";

function Textbox(props) {
  const classes = useStyles();

  const [writtenPassword, setWrittenPassword] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    const lowerCasedValue = value.toLowerCase();
    setWrittenPassword(lowerCasedValue);
  }

  return (
    <div>
      <Grid container justifyContent="center" className={classes.grid}>
        <Box component="form" className={classes.textbox}>
          <Card sx={{ width: 500 }}>
            <CardContent>
              <div className={classes.text}>
                <Typography variant="h5" gutterBottom align="center">
                  Hint #{props.hintNumber}
                </Typography>
                <Typography variant="inherit" align="center" gutterBottom>
                  {props.hintDescription}
                </Typography>
              </div>
            </CardContent>
            <CardActions className={classes.card}>
              <Grid container spacing={4} justifyContent="center">
                <Grid item>
                  <Input
                    name="password"
                    placeholder="password?"
                    value={writtenPassword}
                    onChange={handleChange}
                  ></Input>
                </Grid>
                <Grid item>
                  <Fab
                    onClick={(e) => {
                      e.preventDefault();
                      props.handleGoClick(writtenPassword);
                    }}
                    size="small"
                    color="primary"
                  >
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
export default Textbox;
