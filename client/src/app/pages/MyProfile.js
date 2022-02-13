import * as React from 'react';
import {useContext} from 'react';
import '../stylesheets/MyProfile.css';
import {AuthContext} from '../util/AuthContext';

/**
 * creates the profile page
 * @return {HTML} my profile page
 */
export default function MyProfile() {
  const context = useContext(AuthContext);
  return (
    <div className='MyProfile'>
      <h1>My Profile</h1>
      <h1>{context.user.useremail}</h1>
      <h1>{context.user.usertype}</h1>
      <h1>{context.user.userid}</h1>
    </div>
  );
}
