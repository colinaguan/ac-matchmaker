import * as React from 'react';
import '../stylesheets/Landing.css';

import {askForPermissioToReceiveNotifications} from '../../push-notification';

// import useAuth from '../util/AuthContext';
/**
 * creates landing page
 * @return {HTML} Landing page
 */
export default function Landing() {
  const authTest = () => {
    fetch(`/api/dummy`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  askForPermissioToReceiveNotifications();

  return (
    <div className='Landing'>
      <div className='title'>
        <h1 className='ACmmTitle' id='landingTitle'>AC Match Maker</h1>
        <h2 className='secondaryTitle'>connect students with alumni</h2>
        <button
          className="LoginPage__submitButton"
          onClick={authTest}
          hidden={true}
        >
          Test Auth
        </button>
      </div>
    </div>
  );
}
