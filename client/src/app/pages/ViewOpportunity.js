import React, {useState} from 'react';
import Box from '@mui/material/Box';
import CompressedTabBar from '../components/CompressedTabBar';
import PageHeader from '../components/PageHeader';
import ThemedButton from '../components/ThemedButton';
import OpportunityBanner from '../assets/examplecover.png';
import ViewOpportunityAbout from '../components/ViewOpportunityAbout';

/**
 * View opportunity page
 * @return {JSX}
 */
export default function ViewOpportunity() {
  const [tab, setTab] = useState(0);
  const tabs = [
    {name: 'About', component: <ViewOpportunityAbout />},
    {name: 'Members', component: <p>Hello World</p>},
    {name: 'Threads', component: <p>Hello World</p>},
  ];

  return (
    <Box className='ViewOpportunity'>
      <PageHeader
        title='2022 CruzHacks'
        subtitle='Hosted by:'
        host='John Higgins'
        avatar={OpportunityBanner}
        banner={OpportunityBanner}
        rightComponent={
          <ThemedButton variant='gradient' color='yellow' size='small'>
            Request to Join
          </ThemedButton>
        }
      />
      <CompressedTabBar data={tabs} tab={tab} setTab={setTab} />
    </Box>
  );
}
