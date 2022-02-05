import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

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

  /*useEffect(() => {
    const newAccountInfo = {
      useremail: "danieltest12@gmail.com",
      userpassword: "password",
      usertype: "Sponsor",
      userdata: { not: "null"}
    }

    fetch(`/api/userCreation`, {
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
    const accountLoginInfo = {
      useremail: "danieltest11@gmail.com",
      userpassword: "password"
    }

    fetch(`/api/login`, {
      method: 'POST',
      body: JSON.stringify(accountLoginInfo),
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

    })
    .catch((err) => {
      alert('Error logging in, please try again');
    });
  }, [])

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