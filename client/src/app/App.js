import React from 'react';
// import {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './stylesheets/App.css';

import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import GetStarted from './pages/GetStarted';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Browse from './pages/Browse';

import {AuthProvider} from './util/AuthContext';

/**
 * Socket.io-client is used for converting react into real time application
 */
// import {io} from 'socket.io-client';

/**
 * returns basic routes and navbar of app
 * @return {HTML} App component
 */
export default function App() {
  /**
  * Some code to connect to the Socket.io server
  * SOCKET.IO INFORMATION ------
  * socket.id - Used to differentiate connections
  */
  /*
  useEffect(() => {
    // Seems to be connecting to the proxy from package.json
    const socket = io();
    console.log(socket);

    // Debug global emit
    socket.on('firstEvent', (msg) =>{
      console.log(msg);
    });
  }, []);
  */
  return (
    <AuthProvider>
      <ToastContainer />
      <NavBar/>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/getstarted' element={<GetStarted />}/>
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/browse' element={<Browse />}/>
      </Routes>
    </AuthProvider>
  );
}
