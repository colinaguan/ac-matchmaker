import React from 'react';
import './app/css/index.css';
import App from './app/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

render((
  <BrowserRouter>
      <App/>
  </BrowserRouter>
), document.getElementById('root'));
