import React, { useState, useContext, createContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Stack } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { toast } from 'react-toastify';
import '../css/Login.css';


const Login = () => {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const [accountLoginCredentials, setAccountLoginCredentials] = useState({
    useremail: "",
    userpassword: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountLoginCredentials({ ...accountLoginCredentials, [name]: value })
  }


  const handleEnter = (e) => {
    if (e.key === 'Enter')
    {
        login();
    }
}

  const toggleSignup = (e) => {
    
  }


  const login = () => {
    fetch(`/api/login`, {
      method: 'POST',
      body: JSON.stringify(accountLoginCredentials),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((json) => {
      toast.success('Login Success', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      setRedirect(true);
    })
    .catch((err) => {
      alert('Error logging in, please try again');
    });
  }

  return (
    <div className="LoginPage">
      <div className="LoginPage__body">
          <Stack className="LoginPage__inputBody">
              <div className="LoginPage__topText">Log In</div>
              <label className="LoginPage__label">
              Email
              <input className="LoginPage__input" name="useremail" value={accountLoginCredentials.useremail} onChange={handleChange} onKeyDown={handleEnter}/>
              </label>
              <label className="LoginPage__label">
              Password
              <input type="password" className="LoginPage__input" name="userpassword" value={accountLoginCredentials.userpassword} onChange={handleChange} onKeyDown={handleEnter}/>
              </label>
              <button className="LoginPage__submitButton" onClick={login} >Submit</button>
              <button className="LoginPage__submitButton">
                <Link className='link2' to="/">
                  <MenuItem>Back</MenuItem>
                </Link>
              </button>
              <button className="LoginPage__submitButton" onClick={toggleSignup} >Sign Up
              </button>
          </Stack>
      </div>
      {redirect && <Redirect push to="/browse" />}
    </div>
  );
  //loggedIn !== undefined && console.log(loggedIn);
}

export default Login;