import * as React from 'react';
import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {Button} from '@mui/material';
import '../stylesheets/Verify.css';
/**
 * email verification page
 * @return {HTML} verification page
 */
export default function Verify() {
  const params = useParams();
  console.log(params);

  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch(`/verify/${params.token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res;
        })
        .then((json) => {
          setResponse('User Profile Sucessfully Activated');
        })
        .catch((err) => {
          console.log(err);
          alert('Error verifying account');
        });
  }, [params]);

  return (
    <div className='Verify'>
      <div className='verificationResponse'>
        <h2 className='response'>{response}</h2>
        <p>You can now login to your account and start building your profile</p>
        <Button sx={{border: '1px solid black', width: '100px',
          display: 'flex', marginX: 'auto'}}>
          <Link className='link' to="/login"
            state={{signUp: false}}
          >
              Log In
          </Link>
        </Button>
      </div>
    </div>
  );
}
