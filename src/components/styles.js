import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
        main:"#94B49F",
        contrastText: "#fff" 
    },
    secondary:{
        main:"#789395"
    }
  }, 
  typography:{
      fontFamily:"Quicksand",
      fontWeightLight:400,
      fontWeightRegular:500,
      fontWeightMedium:600,
      fontWeightBold:700
  }
});

const useStyles = makeStyles(()=>({
    headerTitle:{
        flexGrow:1,
        textAlign:"center",
        color:"white"
    },
    introduction:{
        margin: "120px auto 30px",
        display:"flex"
    },
    button:{
        position:"relative",
        right:0,
    },
    textbox:{
        margin: "30px"
    },
    grid:{
    background:"#E3E8E9"
    },
    ending:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        padding:"20px"
    }
}))

export {useStyles,theme};
