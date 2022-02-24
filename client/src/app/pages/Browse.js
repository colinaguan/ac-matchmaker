import * as React from 'react';
import '../stylesheets/Browse.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FilterOpportunityDrawer from '../components/FilterOpportunityDrawer';
import FilterPeopleDrawer from '../components/FilterPeopleDrawer';
import BrowseTabs from '../components/BrowseTabs';

// import useAuth from '../util/AuthContext';

/**
 * returns Browsing page
 * @return {HTML} Browse component
 */
export default function Browse() {
  // testing context
  // const auth = useAuth();

  const oppInd = 0;
  const peopleInd = 1;
  const [value, setValue] = React.useState(0);

  return (
    <div className='Browse'>
      <Box sx={{display: 'flex'}}>
        {value == oppInd && <FilterOpportunityDrawer />}
        {value == peopleInd && <FilterPeopleDrawer />}
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <BrowseTabs
            value={value}
            setValue={setValue}
            oppInd={oppInd}
            peopleInd={peopleInd}
          />
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
