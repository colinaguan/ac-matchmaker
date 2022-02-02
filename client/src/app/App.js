import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from "reactstrap";

import Landing from './pages/Landing';
//import GetStarted from './pages/GetStarted';
//import Login from './pages/Login';
import ExternalApi from "./pages/ExternalApi";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Profile from "./pages/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

import './css/App.css';

import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();


const App = () => {

  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/profile' component={Profile}/>
            <Route expact path='/getstarted' component={ExternalApi}/>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;