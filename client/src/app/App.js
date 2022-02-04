import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './css/App.css';

import Landing from './pages/Landing';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/login' component={Login}/>
          <Route expact path='/getstarted' component={GetStarted}/>
        </Switch>
      </div>
    );
  }
}

export default App;