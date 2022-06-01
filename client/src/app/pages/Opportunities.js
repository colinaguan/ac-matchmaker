import React, {useEffect, useState} from 'react';
import {styled} from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CompressedTabBar from '../components/CompressedTabBar';
import OpportunitiesList from '../components/OpportunitiesList';
import PageHeader from '../components/PageHeader';
import useAuth from '../util/AuthContext';

const Page = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  width: 'auto',
  background: 'var(--background-primary)',
}));

const AddButton = (props) => (
  <MuiBox
    className='
      flex-horizontal
      flex-flow-xlarge
      flex-align-center
      text-lineheight-16
      clickable
    '
  >
    <h5
      className='text-small text-yellow'
      style={{
        margin: 0,
        width: '100px',
        textAlign: 'right',
      }}
    >
      Create New Opportunity
    </h5>
    <MuiBox
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '40px',
        width: '40px',
        padding: 0,
        background: 'var(--secondary-yellow-main)',
        borderRadius: '5px',
      }}
      {...props}
    >
      <AddRoundedIcon
        sx={{
          height: '20px',
          width: '20px',
          stroke: 'white',
          strokeWidth: '2px',
        }}
      />
    </MuiBox>
  </MuiBox>
);

/**
 * Passes fetched data to opportunities list component
 * @return {JSX}
 */
export default function FetchWrapper() {
  const {userProfile} = useAuth();
  const [joinedOpportunities, setJoinedOpportunities] = useState([]);
  const [createdOpportunities, setCreatedOpportunities] = useState([]);
  const [pastOpportunities, setPastOpportunities] = useState([]);
  const [pendingOpportunities, setPendingOpportunities] = useState([]);

  const getJoinedOpportunities = () => {
    fetch(`/api/getJoinedOpportunities/${userProfile.profileid}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          setJoinedOpportunities(json);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving joined opportunities');
        });
  };

  const getCreatedOpportunities = () => {
    fetch(`/api/getCreatedOpportunities/${userProfile.profileid}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          setCreatedOpportunities(json);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving created opportunities');
        });
  };

  const getPastOpportunities = () => {
    fetch(`/api/getPastOpportunities/${userProfile.profileid}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          setPastOpportunities(json);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving past opportunities');
        });
  };

  const getPendingOpportunities = () => {
    fetch(`/api/getPendingOpportunities/${userProfile.profileid}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          setPendingOpportunities(json);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving past opportunities');
        });
  };

  useEffect(() => {
    getJoinedOpportunities();
    getCreatedOpportunities();
    getPastOpportunities();
    getPendingOpportunities();
  }, []);

  return (
    <>
      {
        joinedOpportunities &&
        createdOpportunities &&
        pastOpportunities &&
        pendingOpportunities &&
          <Opportunities
            joinedOpportunities={joinedOpportunities}
            createdOpportunities={createdOpportunities}
            pastOpportunities={pastOpportunities}
            pendingOpportunities={pendingOpportunities}
          />
      }
    </>
  );
}

/**
 * creates opportunities page
 * @return {HTML} opportunities page
 */
function Opportunities({
  joinedOpportunities,
  createdOpportunities,
  pastOpportunities,
  pendingOpportunities,
}) {
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      name: 'Upcoming',
      component:
        <OpportunitiesList
          key='joined'
          opportunities={joinedOpportunities}
          tab={tab}
        />,
    },
    {
      name: 'Created',
      component:
        <OpportunitiesList
          key='created'
          opportunities={createdOpportunities}
          tab={tab}
        />,
    },
    {
      name: 'Pending',
      component:
        <OpportunitiesList
          key='pending'
          opportunities={pendingOpportunities}
          tab={tab}
        />,
    },
    {
      name: 'Completed',
      component:
        <OpportunitiesList
          key='completed'
          opportunities={pastOpportunities}
        />,
    },
    {
      name: 'Browse',
      component: <OpportunitiesList />,
    },
  ];

  return (
    <Page>
      <PageHeader
        title='Opportunities'
        subtitle='View and join opportunities'
        tabs={<CompressedTabBar data={tabs} tab={tab} setTab={setTab} />}
        components={<AddButton />}
      />
      {tabs[tab].component}
    </Page>
  );
}
