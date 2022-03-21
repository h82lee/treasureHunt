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
      fontFamily: "Quicksand",
      h3:{
          fontFamily:"Creepster"
      }
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
    text:{
        width:"400px",
        margin:"auto"
    },
    grid:{
         background:"#E3E8E9"
    },   
    card:{
        marginBottom:"10px"
    },
    ending:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "50%",
        backgroundColor: 'white',
        boxShadow: 24,
        p: 6,
        padding:"20px",
        textAlign:"center"
    },
    popupModal:{
        border:0
    },
    popupBox:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "640px",
        backgroundColor: 'black',
        border: '2px solid #000',
        boxShadow: 24,
        padding:"50px",
        textAlign: "center",
        color:"white",
        outline:0
    },
    closeBtn:{
        position: "absolute",
        top: "16px",
        right: "16px"
    }
}))

export {useStyles,theme};
