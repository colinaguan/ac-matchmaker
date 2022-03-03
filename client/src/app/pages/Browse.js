import * as React from 'react';
import '../stylesheets/Browse.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FilterBrowseDrawer from '../components/FilterBrowseDrawer';
import BrowseTabs from '../components/BrowseTabs';

// import useAuth from '../util/AuthContext';

/**
 * returns Browsing page
 * @return {HTML} Browse component
 */
export default function Browse() {
  // states for tab view
  const oppInd = 0;
  const peopleInd = 1;
  const [value, setValue] = React.useState(0);

  // states for opportunity filters
  const [locationFilter, setLocationFilter] = React.useState([]);
  const [oppTypeFilter, setOppTypeFilter] = React.useState([]);
  const [orgTypeFilter, setOrgTypeFilter] = React.useState([]);

  return (
    <div className='Browse'>
      <Box sx={{display: 'flex'}}>
        <FilterBrowseDrawer
          filterType={value == oppInd ? 'Opportunities': 'People'}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          oppTypeFilter={oppTypeFilter}
          setOppTypeFilter={setOppTypeFilter}
          orgTypeFilter={orgTypeFilter}
          setOrgTypeFilter={setOrgTypeFilter}
        />
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <BrowseTabs
            value={value}
            setValue={setValue}
            oppInd={oppInd}
            peopleInd={peopleInd}
          />
          <Typography paragraph>
            {locationFilter}
          </Typography>
          <Typography paragraph>
            {oppTypeFilter}
          </Typography>
          <Typography paragraph>
            {orgTypeFilter}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
