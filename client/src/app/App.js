import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/App.css';

import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Browse from './pages/Browse';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <ToastContainer />
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/getstarted' component={GetStarted}/>
        <Route exact path='/myprofile' component={MyProfile}/>
        <Route exact path='/browse' component={Browse}/>
      </Switch>
    </div>
  );

}

export default App;