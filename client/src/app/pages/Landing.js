import React, { Component, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Landing = () => {
  //const bcrypt = require('bcrypt');

  //const [hash, setHash] = useState(undefined);
  const [users, setUsers] = useState(undefined);

  function getUsers() {
    fetch(`http://localhost:3001/api/users`)
    .then(response => {
      return response.text();
    })
    .then(data => {
      setUsers(JSON.parse(data));
    });
  }

  /*useEffect(() => {
    
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash("generic", salt, function (err, hash) {
        console.log(hash); 
        setHash(hash);
      });
    });
      const newAccountInfo = {
        useremail: "danieltest5@gmail.com",
        userpassword: "test12" ,
        usertype: "Volunteer",
        userdata: { dan: "awesome"}
      }
  
      fetch(`http://localhost:3001/api/userCreation`, {
        method: 'POST',
        body: JSON.stringify(newAccountInfo),
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
        toast.success('Account Created', {
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
        alert('Error logging in, please try again');
      });
  }, [])
*/
  useEffect(() => {
    getUsers()
  }, [])


  return (
    
    <ul>
      {users && users.map(((item, index) => (
        <li>{item.userid}: {item.useremail} - {item.usertype}</li>
      )))}
    </ul>
  );
}
export default Landing;