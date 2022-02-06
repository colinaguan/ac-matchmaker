import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Landing.css';


const Landing = () => {
  const [users, setUsers] = useState(undefined);

  function getUsers() {
    fetch(`/api/users`)
    .then(response => {
      return response.text();
    })
    .then(data => {
      setUsers(JSON.parse(data));
    });
  }
 

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className='Landing'>
      <ul>
        {users && users.map(((item, index) => (
          <li>{item.userid}: {item.useremail} - {item.usertype}</li>
        )))}
      </ul>
    </div>
  );
}
export default Landing;