import * as React from 'react';
import '../stylesheets/Landing.css';

// importing useAuth to test the socket connection
import useAuth from '../util/AuthContext';

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

  // A debug onClick functionality for socket.
  const {socket, userProfile} = useAuth();
  const printSocket = () =>{
    socket.emit('sendNotification', userProfile.userid);
  };

  return (
    <div className='Landing'>
      <div className='title'>
        <h1 className='ACmmTitle'>AC Match Maker</h1>
        <h2 className='secondaryTitle'>connect students with alumni</h2>
        <button
          className="LoginPage__submitButton"
          onClick={authTest}
          hidden={true}
        >
          Test Auth
        </button>
        <button
          className="LoginPage__submitButton"
          onClick={printSocket}
        >
          Test Socket.io
        </button>
      </div>
    </div>
  );
}
