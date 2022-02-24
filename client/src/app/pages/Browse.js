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

  // states for tab view
  const oppInd = 0;
  const peopleInd = 1;
  const [value, setValue] = React.useState(0);

  // states for opportunity filters
  const [oppLocation, setOppLocation] = React.useState([]);
  const [oppType, setOppType] = React.useState([]);
  const [oppField, setOppField] = React.useState([]);

  return (
    <div className='Browse'>
      <Box sx={{display: 'flex'}}>
        {
          value == oppInd ?
          <FilterOpportunityDrawer
            setOppLocation={setOppLocation}
            setOppType={setOppType}
            setOppField={setOppField}
          /> :
          <FilterPeopleDrawer />
        }
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <BrowseTabs
            value={value}
            setValue={setValue}
            oppInd={oppInd}
            peopleInd={peopleInd}
            oppLocation={oppLocation}
            oppType={oppType}
            oppField={oppField}
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
