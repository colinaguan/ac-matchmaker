import React from 'react';
import Box from '@mui/material/Box';
import * as Opportunity from '../components/OpportunityComponents';

/**
 * View opportunity page
 * @return {JSX}
 */
export default function ViewOpportunity() {
  return (
    <Box
      className='flow-large'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)',
        paddingInline: '3em',
        background: '#F8F8FA',
      }}
    >
      <Opportunity.DetailsCard />
      <Opportunity.RolesCard />
    </Box>
  );
}
