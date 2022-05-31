import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import CompressedTabBar from '../components/CompressedTabBar';
import OpportunityFilters from '../components/Filters';
import OpportunitiesList from '../components/OpportunitiesList';
import PageHeader from '../components/PageHeader';
import ThemedButton from '../components/ThemedButton';

const Page = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  margin: '2em 2em',
  display: 'flex',
  height: 'auto',
  width: 'auto',
  background: 'var(--background-primary)',
}));

/**
 * creates opportunities page
 * @return {HTML} opportunities page
 */
export default function Opportunities() {
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      name: 'Upcoming',
      component: <OpportunitiesList />,
    },
    {
      name: 'Created',
      component: <p>Hello</p>,
    },
    {
      name: 'Pending',
      component: <p>Hello</p>,
    },
    {
      name: 'Completed',
      component: <p>Hello</p>,
    },
    {
      name: 'Browse',
      component: <p>Hello</p>,
    },
  ];

  return (
    <Page>
      <MuiBox sx={{width: '70%', marginRight: '2em'}}>
        <PageHeader
          title='Opportunities'
          subtitle='View and join opportunities'
          tabs={<CompressedTabBar data={tabs} tab={tab} setTab={setTab} />}
          components={
            <ThemedButton variant='gradient' color='yellow' size='small'>
              Create New Opportunity!
            </ThemedButton>
          }
        />
        {tabs[tab].component}
      </MuiBox>
      <MuiBox sx={{width: '30%'}}>
        <OpportunityFilters />
      </MuiBox>
    </Page>
  );
}
