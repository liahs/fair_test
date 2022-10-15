import { createTheme ,responsiveFontSizes} from '@mui/material/styles';


let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#004A25',
      // main:"#FF8E53",
      contrastText: '#ffffff',
      mainGradient: `linear-gradient(136deg,#004A25 20%, #000000 100%)`,
      cardGradient: `linear-gradient(360deg,#fde3a2 5%,#fde3a2 100% )`,
      font: "serif",
      shade1: "#fde3a2",
      shade2: "#fddc8b"
    },
    secondary: {
      main: '#FDF21A',
    },
    button:{
      main:"#FDF21A",
      focus:"#b1a912"
    },
    general_black: {
      main: "#000"
    },
    info:{
      main:"#0008"
    },
    text: {
      primary: '#1D1D1D',
      secondary: '#000000',
      white: "#fff",
      yellow:"#FDF21A"
    },
    headear_background: {
      main: "#FFFFFF"
    }
  },
  typography: {
    "fontFamily": `Poppins, sans-serif`,
    header:{
        color:"white",
        fontWeight:"bold"
    },
    subHeader:{
        color:"white",
    },
    inputHeader:{
        color:"white",
        fontSize:"12px"
    }
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme