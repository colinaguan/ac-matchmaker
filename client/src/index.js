import React from 'react';
import ReactDOM from 'react-dom';
import './app/css/index.css';
import App from './app/App';
import { Auth0Provider } from "@auth0/auth0-react";
import history from "./app/utils/history";
import { getConfig } from "./config";
//import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-router-dom';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  );
};

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

/*render((
  <BrowserRouter>
      <App/>
  </BrowserRouter>
), document.getElementById('root'));
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
