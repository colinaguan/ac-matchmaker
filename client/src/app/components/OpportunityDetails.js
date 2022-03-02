import * as React from 'react';
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';

/**
 * OpportunityPage component
 * @return {html} Opportunity Details page
 */
export default function OpportunityDetails({data}) {
  console.log(data);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12} lg={12} xl={12}
          sx={{display: 'flex',
            justifyContent: 'center'}}>
          <Paper
            className='opportunity-details-page'
            elevation={3}
            sx={{
              display: 'flex',
              marginBottom: '3rem',
              marginTop: '3rem',
              justifyContent: 'center',
              width: '60vw',
              height: 'auto',
              boxShadow: '0px 0px 50px -14px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
            }}
          >
            <h1>Opportunity Page id: {data[0].eventid}</h1>
          </Paper>
        </Grid>
      </Grid>
    </div>);
}
