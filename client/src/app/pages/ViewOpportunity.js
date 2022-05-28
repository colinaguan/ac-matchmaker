import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import CompressedTabBar from '../components/CompressedTabBar';
import PageHeader from '../components/PageHeader';
import ThemedButton from '../components/ThemedButton';
import ViewOpportunityAbout from '../components/ViewOpportunityAbout';
import ViewOpportunityFindPeople from '../components/ViewOpportunityFindPeople';
import ViewOpportunityForums from '../components/ViewOpportunityForums';
import ViewOpportunityMembers from '../components/ViewOpportunityMembers';
import ViewOpportunityRequests from '../components/ViewOpportunityRequests';
import useAuth from '../util/AuthContext';

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
 * Passes fetched data to view opportunity page
 * @return {JSX}
 */
export default function FetchWrapper() {
  const params = useParams();
  const [fetchedData, setFetchedData] = useState(null);

  const getOpportunity = () => {
    fetch(`/api/getOpportunity/${params.opportunityid}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          console.log(json);
          setFetchedData(json);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving selected opportunity');
        });
  };

  // const getOpportunityRoles = () => {
  //   fetch(`/api/getRoles/${params.opportunityid}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw res;
  //         }
  //         return res.json();
  //       })
  //       .then((json) => {
  //         console.log(json);
  //         setFetchedData((prevData) => ({
  //           ...prevData,
  //           opportunityroles: json,
  //         }));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         alert('Error retrieving opportunity roles');
  //       });
  // };

  useEffect(() => {
    getOpportunity();
    // getOpportunityRoles();
  }, []);

  // console.log(fetchedData && fetchedData);

  return (
    <>
      {fetchedData && <ViewOpportunity opportunity={fetchedData} />}
    </>
  );
}

/**
 * View opportunity page
 * @return {JSX}
 */
function ViewOpportunity({opportunity}) {
  const {userProfile} = useAuth();
  const [creator, setCreator] = useState(null);
  const [tab, setTab] = useState(0);
  const [oppRoles, setOppRoles] = useState(null);

  const isCreator = userProfile?.profileid === opportunity.usersponsors.creator;

  const getOpportunityCreator = () => {
    fetch(`/api/getProfileName/${opportunity.usersponsors.creator}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          console.log(json);
          setCreator(json);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving opportunity creators profile');
        });
  };

  const getOpportunityRoles = () => {
    fetch(`/api/getRoles/${opportunity.eventid}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          console.log(json);
          setOppRoles(json);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving opportunity roles');
        });
  };

  useEffect(() => {
    getOpportunityCreator();
    getOpportunityRoles();
  }, []);

  console.log(oppRoles && oppRoles);

  const tabs = [
    {
      name: 'About',
      component:
        <ViewOpportunityAbout
          isCreator={isCreator && isCreator}
          description={opportunity?.description}
          roles={opportunity?.roles}
        />,
    },
    {
      name: 'Forums',
      component: <ViewOpportunityForums />,
    },
    isCreator &&
    {
      name: 'Requests',
      component: <ViewOpportunityRequests />,
    },
    isCreator &&
    {
      name: 'Find People',
      component: <ViewOpportunityFindPeople />,
    },
  ];

  return (
    <Page>
      {
        opportunity && creator &&
        <>
          <MuiBox sx={{width: '70%', marginRight: '2em'}}>
            <PageHeader
              isCreator={isCreator}
              title={opportunity?.eventname}
              subtitle='Hosted by:'
              host={`${creator?.firstname} ${creator?.lastname}`}
              avatar={creator?.profilepicture}
              banner={opportunity?.eventbanner}
              backUrl={'/myprofile'}
              data={opportunity}
              components={
                <ThemedButton variant='gradient' color='yellow' size='small'>
                  Request to Join
                </ThemedButton>
              }
              tabs={<CompressedTabBar data={tabs} tab={tab} setTab={setTab} />}
              tabNumber={tab}
            />
            {tabs[tab].component}
          </MuiBox>
          <MuiBox sx={{width: '30%'}}>
            <ViewOpportunityMembers
              isCreator={isCreator}
              owner={{
                name: `${creator?.firstname} ${creator?.lastname}`,
                avatar: creator?.profilepicture,
              }}
              members={opportunity?.assignedroles}
            />
          </MuiBox>
        </>
      }
    </Page>
  );
}
