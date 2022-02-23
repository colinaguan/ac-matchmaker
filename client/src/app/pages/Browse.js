import * as React from 'react';
import '../stylesheets/Browse.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FilterOpportunityDrawer from '../components/FilterOpportunityDrawer';

// import useAuth from '../util/AuthContext';

/**
 * returns Browsing page
 * @return {HTML} Browse component
 */
export default function Browse() {
  // testing context
  // const auth = useAuth();

  return (
    <div className='Browse'>
      <Box sx={{display: 'flex'}}>
        <FilterOpportunityDrawer />
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet,
          </Typography>
          <Typography paragraph>
            Testing paragraph 2
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
