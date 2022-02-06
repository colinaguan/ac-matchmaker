import React from 'react';
import { toast } from 'react-toastify';
import '../css/GetStarted.css';

const GetStarted = () => {

  const newAccountCredentials = {
    useremail: "danieltest12@gmail.com",
    userpassword: "password",
    usertype: ""
  }

  const createAccount = () => {
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
    .catch((err) => {
      alert('Error creating account, please try again');
    });
  }

  return (
  <div className='GetStarted'>
    <h1>Get Started</h1>
  </div>
  )
}
export default GetStarted;