import React from 'react';
import {Route, Routes} from 'react-router-dom';
import useAuth from './util/AuthContext';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './stylesheets/App.css';
import NavBarLoggedIn from './components/NavBarLoggedIn';
import NavBarLoggedOut from './components/NavBarLoggedOut';
import Landing from './pages/Landing';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Browse from './pages/Browse';
import Opportunity from './pages/Opportunity';
import Profile from './components/Profile';
import Box from '@mui/material/Box';
import {DrawerHeader} from './components/NavBarComponents';


/**
 * returns basic routes and navbar of app
 * @return {HTML} App component
 */
export default function App() {
  const {loggedIn} = useAuth();
  return (
    <Box sx={{display: 'flex'}}>
      <ToastContainer />
      {loggedIn ? <NavBarLoggedIn/> : <NavBarLoggedOut/>}
      <Box component="main" sx={{flexGrow: 1, p: 3, padding: 0}}>
        <DrawerHeader />
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/getstarted' element={<GetStarted />}/>
          <Route path='/myprofile' element={<MyProfile />} />
          <Route path='/browse' element={<Browse />}/>
          <Route path='/opportunity/:opportunityid'
            element={<Opportunity/>}/>
          <Route path='/profile/:profileid' element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
}
