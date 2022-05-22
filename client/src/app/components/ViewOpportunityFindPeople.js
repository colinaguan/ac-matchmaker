import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MuiPaper from '@mui/material/Paper';

const Item = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  height: 'auto',
  padding: '1em',
  background: 'white',
  boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
  border: '0.5px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
}));

/**
 * Find people tab for view opportunity
 * @return {JSX}
 */
export default function ViewOpportunityFindPeople() {
  return (
    <Box sx={{flexGrow: 1, marginTop: '1em'}}>
      <Grid
        container
        spacing={2}
        columns={{xs: 1, sm: 8, md: 8, lg: 12, xl: 12}}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <div>Banner</div>
              <div>Avatar</div>
              <div>Name</div>
              <div>Major</div>
              <div>Button</div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
