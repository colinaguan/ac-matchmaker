import React, { Component, useEffect, useState } from 'react';

const Landing = () => {

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

  useEffect(() => {
    getUsers()
  },[users])

  return (
    
    <ul>
      {users && users.map(((item, index) => (
        <li>{item.userid}: {item.useremail} - {item.usertype}</li>
      )))}
    </ul>
  );
}
export default Landing;