import React from 'react';
import './app/stylesheets/index.css';
import App from './app/App';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import theme from './app/util/Theme';
import {ThemeProvider} from '@mui/material/styles';

render((
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
), document.getElementById('root'));
