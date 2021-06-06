import '../styles/globals.css'
import yellow from '@material-ui/core/colors/yellow';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow[600],
    },
  }
});

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
     <Component {...pageProps} />
  </ThemeProvider>
  
}

export default MyApp
