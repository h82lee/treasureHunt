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
    appBar:{
        left:"0"
    }
}))

export default useStyles;
