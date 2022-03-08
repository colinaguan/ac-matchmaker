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

  const {socket} = useAuth();

  const printSocket = () =>{
    console.log(socket);
    socket.emit('ping');
  };


  return (
    <div className='Landing'>
      <div className='title'>
        <h1 className='ACmmTitle'>AC Match Maker</h1>
        <h2 className='secondaryTitle'>connect students with alumni</h2>
        <button
          className="LoginPage__submitButton"
          onClick={authTest}
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
