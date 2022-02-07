import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import '../css/GetStarted.css';

const GetStarted = () => {
  /* used to test the user creation
  

  useEffect (() => {
    
    const newAccountCredentials = {
      useremail: "danieltest27@gmail.com",
      userpassword: "password",
      usertype: "Volunteer"
    }
    fetch(`/api/userCreation`, {
      method: 'POST',
      body: JSON.stringify(newAccountCredentials),
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
      toast.success('Account created', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

    })
  }, [])
  
  */

  return (
  <div className='GetStarted'>
    <h1>Get Started</h1>
  </div>
  )
}
export default GetStarted;