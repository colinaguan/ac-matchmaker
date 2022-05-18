import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import CompressedTabBar from '../components/CompressedTabBar';
import PageHeader from '../components/PageHeader';
import ThemedButton from '../components/ThemedButton';
import OpportunityBanner from '../assets/examplecover.png';
import ViewOpportunityAbout from '../components/ViewOpportunityAbout';
import ViewOpportunityForums from '../components/ViewOpportunityForums';
import ViewOpportunityMembers from '../components/ViewOpportunityMembers';

const Page = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  margin: '2em 8em 2em 8em',
  display: 'flex',
  height: 'auto',
  width: 'auto',
  background: 'var(--background-primary)',
}));

/**
 * View opportunity page
 * @return {JSX}
 */
export default function ViewOpportunity() {
  const [tab, setTab] = useState(0);
  const tabs = [
    {name: 'About', component: <ViewOpportunityAbout />},
    {name: 'Forums', component: <ViewOpportunityForums />},
  ];

  const viewOpportunityData = {
    startdate: 'Sep 31, 12:00PM',
    enddate: 'Sep 31, 4:00PM',
    duration: '4 Hours',
    location: 'Exhibition Rd, South Kensington, London SW7 2DD, UK',
    link: 'www.zoom.com',
  };

  return (
    <Page>
      <MuiBox sx={{width: '70%', marginRight: '2em'}}>
        <PageHeader
          title='2022 CruzHacks'
          subtitle='Hosted by:'
          host='John Higgins'
          avatar={OpportunityBanner}
          banner={OpportunityBanner}
          data={viewOpportunityData}
          rightComponent={
            <ThemedButton variant='gradient' color='yellow' size='small'>
              Request to Join
            </ThemedButton>
          }
          tabs={<CompressedTabBar data={tabs} tab={tab} setTab={setTab} />}
        />
        {tabs[tab].component}
      </MuiBox>
      <MuiBox sx={{width: '30%'}}>
        <ViewOpportunityMembers />
      </MuiBox>
    </Page>
  );
}
