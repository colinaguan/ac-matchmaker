import * as React from 'react';
import {useContext} from 'react';
import '../stylesheets/Landing.css';
import {AuthContext} from '../util/AuthContext';


/**
 * creates landing page
 * @return {HTML} Landing page
 */
export default function Landing() {
  const context = useContext(AuthContext);
  console.log(context);

  const authTest = () =>{
    fetch(`/api/dummy`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
      </div>
    </div>
  );
}
