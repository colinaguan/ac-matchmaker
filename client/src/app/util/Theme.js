import {createTheme} from '@mui/material/styles';
import blue from '@mui/material/colors/blue';
import red from '@mui/material/colors/red';
import orange from '@mui/material/colors/orange';
import yellow from '@mui/material/colors/yellow';
import green from '@mui/material/colors/green';
import lightBlue from '@mui/material/colors/lightBlue';
import grey from '@mui/material/colors/grey';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[400],
    },
    secondary: {
      light: yellow[600],
      main: yellow[700],
      dark: yellow[800],
      contrastText: grey[50],
    },
    error: {
      light: red[400],
      main: red[500],
      dark: red[600],
      contrastText: grey[50],
    },
    success: {
      light: green[400],
      main: green[500],
      dark: green[600],
      contrastText: grey[50],
    },
    warning: {
      light: orange[400],
      main: orange[500],
      dark: orange[600],
      contrastText: grey[50],
    },
    info: {
      main: lightBlue[500],
    },
    text: {
      primary: grey[600],
      secondary: grey[500],
      disabled: grey[400],
    },
  },
});

export default theme;
