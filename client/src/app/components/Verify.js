import * as React from 'react';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

/**
 * email verification page
 * @return {HTML} verification page
 */
export default function Verify() {
  const params = useParams();
  console.log(params);


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
        .catch((err) => {
          console.log(err);
          alert('Error verifying account');
        });
  }, [params]);

  return (
    <div className='Verify'>
      <div className='verificationResponse'>
        <h2 className='response'></h2>
      </div>
    </div>
  );
}
