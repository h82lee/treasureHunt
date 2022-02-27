import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles'

// const theme = createTheme({
//   palette: {
//     primary: {
//         main:"#BBD5D2"
//     },
//     secondary:{
//         main:"#FBDFA0"
//     }
//   }
// });

const useStyles = makeStyles(()=>({
    headerTitle:{
        flexGrow:1,
        textAlign:"center"
    },
    introduction:{
        margin: "120px auto 30px",
        display:"flex",
        backgroundColor:"secondary",
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
    }
}))

export default useStyles;
