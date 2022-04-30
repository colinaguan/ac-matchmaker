import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import useAuth from './util/AuthContext';
import Landing from './pages/Landing';
import MyProfile from './pages/MyProfile';
import Opportunities from './pages/Opportunities';
import Dashboard from './pages/Dashboard';
import Opportunity from './pages/Opportunity';
import Profile from './components/Profile';
import 'react-toastify/dist/ReactToastify.css';
import './stylesheets/App.css';

import TestSignup from './pages/TestSignup';
import TestLogin from './pages/TestLogin';
import TestVerify from './components/TestVerify';
import TestNavbarLoggedIn from './components/TestNavbarLoggedIn';
import TestNavbarLoggedOut from './components/TestNavbarLoggedOut';

import Browse from './pages/Browse';
import Settings from './pages/Settings';
import Box from '@mui/material/Box';

/**
 * returns basic routes and navbar of app
 * @return {HTML} App component
 */
export default function App() {
  const {userProfile} = useAuth();
  console.log(userProfile);
  return (
    <Box sx={{display: 'flex'}}>
      <ToastContainer />
      {userProfile !== null ? <TestNavbarLoggedIn /> : <TestNavbarLoggedOut/>}
      <Box component='main' sx={{flexGrow: 1, marginTop: '70px'}}>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/myprofile' element={<MyProfile />} />
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/opportunities' element={<Opportunities/>}/>
          <Route path='/opportunity/:opportunityid' element={<Opportunity/>}/>
          <Route path='/profile/:profileid' element={<Profile />} />
          <Route path='/browse' element={<Browse />}/>
          <Route path='/settings' element={<Settings />}/>

          <Route path='/signup' element={<TestSignup />} />
          <Route path='/login' element={<TestLogin />} />
          <Route path='/verify/:token' element={<TestVerify />} />
        </Routes>
      </Box>
    </Box>
  );
}
