import React from 'react';
import {styled} from '@mui/material/styles';
// import MuiBox from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';

const Paper = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  width: 'calc(30% - 8em + 21px)',
  background: 'white',
  boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
  border: '0.5px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
}));

/**
 * Filters section for view opportunity
 * @return {JSX}
 */
export default function ViewOpportunityFilters() {
  return (
    <Paper>
      <h4
        className='text-dark'
        style={{padding: '1.5em 2em calc(1.5em - 0.5em) 2em'}}
      >
        Filters
      </h4>
    </Paper>
  );
};
