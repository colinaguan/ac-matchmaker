import * as React from 'react';
import '../stylesheets/Browse.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BrowseFilterDrawer from '../components/BrowseFilterDrawer';
import TabBar from '../components/TabBar';
import BrowseOpportunities from '../components/BrowseOpportunities';
import BrowsePeople from '../components/BrowsePeople';

// import useAuth from '../util/AuthContext';

/**
 * returns Browsing page
 * @return {HTML} Browse component
 */
export default function Browse() {
  // states for tab view
  const oppInd = 0;
  const [tab, setTab] = React.useState(oppInd);

  // states for opportunity filters
  const [locationFilter, setLocationFilter] = React.useState([]);
  const [oppTypeFilter, setOppTypeFilter] = React.useState([]);
  const [orgTypeFilter, setOrgTypeFilter] = React.useState([]);

  // tab data
  const data = [
    {
      name: 'Opportunities',
      component: <BrowseOpportunities
        locationFilter={locationFilter}
        oppTypeFilter={oppTypeFilter}
        orgTypeFilter={orgTypeFilter}
      />,
    },
    {
      name: 'People',
      component: <BrowsePeople
        locationFilter={locationFilter}
        oppTypeFilter={oppTypeFilter}
        orgTypeFilter={orgTypeFilter}
      />,
    },
  ];

  // reset filters when switching tabs
  React.useEffect(() => {
    setLocationFilter([]);
    setOppTypeFilter([]);
    setOrgTypeFilter([]);
  }, [tab]);

  return (
    <div className='Browse'>
      <Box sx={{display: 'flex'}}>
        <BrowseFilterDrawer
          filterType={tab == oppInd ? 'Opportunities': 'People'}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          oppTypeFilter={oppTypeFilter}
          setOppTypeFilter={setOppTypeFilter}
          orgTypeFilter={orgTypeFilter}
          setOrgTypeFilter={setOrgTypeFilter}
        />
        <Box component="main" sx={{flexGrow: 1, p: 3}}>
          <TabBar
            data={data}
            tab={tab}
            setTab={setTab}
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
