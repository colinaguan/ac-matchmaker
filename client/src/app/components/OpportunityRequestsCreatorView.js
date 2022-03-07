import * as React from 'react';
import {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import '../stylesheets/OpportunityRequests.css';

/**
 * OpportunityRequestsCreatorView
 * Displays the opportunity creator view for an opportunitues request page
 * @return {html} opportunity requests creator view
 */
export default function OpportunityRequestsCreatorView({data}) {
  const [pendingRequestsSent, setPendingRequestsSent] = useState();
  const [pendingRequestsReceived, setPendingRequestsReceived] = useState();

  const getPendingRequestsSent = () => {
    fetch(`/api/getPendingRequestsSent/${data.eventid}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          console.log(json);
          setPendingRequestsSent(json);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  const getPendingRequestsRecieved = () => {
    fetch(`/api/getPendingRequestsReceived/${data.eventid}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          console.log(json);
          setPendingRequestsReceived(json);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  useEffect(() => {
    getPendingRequestsSent();
    getPendingRequestsRecieved();
  }, []);

  return (
    <>
      <Paper
        className='opportunity-requests'
        elevation={3}
        sx={{
          display: 'flex',
          marginBottom: '3rem',
          marginTop: '3rem',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '60vw',
          marginX: 'auto',
          height: 'auto',
          boxShadow: '0px 0px 50px -14px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      >
        <div className='request-header'>
            Pending Requests Received
        </div>
        {pendingRequestsReceived &&
        pendingRequestsReceived.map((request, index) => (
          <Card key={index}>{request.requestid}</Card>
        ))}

        {(!pendingRequestsReceived || pendingRequestsReceived.length == 0) &&
        <h5 className='no_results_message'>
          No Requests found
        </h5>}
      </Paper>
      <Paper
        className='opportunity-requests'
        elevation={3}
        sx={{
          display: 'flex',
          marginBottom: '3rem',
          marginTop: '3rem',
          flexDirection: 'column',
          justifyContent: 'center',
          marginX: 'auto',
          width: '60vw',
          height: 'auto',
          boxShadow: '0px 0px 50px -14px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      >
        <div className='request-header'>
            Pending Requests Sent By You
        </div>
        {pendingRequestsSent &&
        pendingRequestsSent.map((request, index) => (
          <Card key={index}>{request.requestid}</Card>
        ))}

        {(!pendingRequestsSent || pendingRequestsSent.length == 0) &&
        <h5 className='no_results_message'>
          No Requests found
        </h5>}
      </Paper>
    </>
  );
}
