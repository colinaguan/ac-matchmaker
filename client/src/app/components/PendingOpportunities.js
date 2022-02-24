import * as React from 'react';
import Paper from '@mui/material/Paper';
import '../stylesheets/Opportunities.css';
import {List} from '@mui/material';
import OpportunityListItem from './OpportunityListItem';

/**
 * creates Profile
 * @return {HTML} Profile component
 */
export default function PendingOpportunities({data}) {
  return (
    <Paper
      className='pending-opportunities'
      elevation={3}
      sx={{
        marginBottom: '3rem',
        width: '50vw',
        minHeight: '500px',
        height: 'auto',
        maxHeight: '1000px',
        boxShadow: '0px 0px 50px -14px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
      }}
    >
      <h2 className='opportunity__tab-title'>Pending Opportunities</h2>
      <hr></hr>
      {data != null && <List sx={{
        width: '48vw',
        margin: 'Auto',
        height: 'auto',
        maxHeight: '800px',
        overflow: 'auto'}} >
        {data && data.map((opportunity, index) => (
          <OpportunityListItem data={opportunity} key={index} />
        ))}

      </List>}
      {(!data || data.length == 0) && <h2 className='no_results_message'>
        No Pending Opportunities found
      </h2>}
    </Paper>
  );
}