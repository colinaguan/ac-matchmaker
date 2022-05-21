import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import CompressedTabBar from '../components/CompressedTabBar';
import PageHeader from '../components/PageHeader';
import ThemedButton from '../components/ThemedButton';
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

  useEffect(() => {
    getOpportunity();
  }, []);

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
  const [creator, setCreator] = useState(null);
  const [tab, setTab] = useState(0);

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

  useEffect(() => {
    getOpportunityCreator();
  }, []);

  const viewOpportunityData = {
    startdate: 'Sep 31, 12:00PM',
    enddate: 'Sep 31, 4:00PM',
    duration: '4 Hours',
    location: 'Exhibition Rd, South Kensington, London SW7 2DD, UK',
    link: 'www.zoom.com',
    description:
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
      Aliquam sem fringilla ut morbi tincidunt augue interdum velit.
      Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Orci
      dapibus ultrices in iaculis nunc sed. Interdum consectetur libero
      id faucibus nisl tincidunt. Ultrices eros in cursus turpis massa.
      Mauris vitae ultricies leo integer malesuada nunc. Eros in cursus
      turpis massa tincidunt dui. Rhoncus dolor purus non enim praesent
      elementum facilisis. Mauris pellentesque pulvinar pellentesque
      habitant morbi tristique senectus et netus. In fermentum posuere
      urna nec tincidunt praesent. Enim sed faucibus turpis in eu mi
      bibendum neque egestas. At auctor urna nunc id cursus metus aliquam.`,
    roles: [
      {
        name: 'Software Engineer Mentor',
        tags: [
          'Computer Engineering',
          'Computer Science',
        ],
        slots: 2,
        responsibilities: 'This is a description',
        preferences: [
          'Understanding of C/C++',
          'Understanding of Python',
          'Data structures and algorithms',
        ],
      },
      {
        name: 'Software Engineer Mentor',
        tags: [
          'Computer Engineering',
          'Computer Science',
        ],
        slots: 2,
        responsibilities: 'This is a description',
        preferences: [
          'Understanding of C/C++',
          'Understanding of Python',
          'Data structures and algorithms',
        ],
      },
      {
        name: 'Software Engineer Mentor',
        tags: [
          'Computer Engineering',
          'Computer Science',
        ],
        slots: 2,
        responsibilities: 'This is a description',
        preferences: [
          'Understanding of C/C++',
          'Understanding of Python',
          'Data structures and algorithms',
        ],
      },
    ],
  };

  const tabs = [
    {
      name: 'About',
      component:
        <ViewOpportunityAbout
          description={opportunity?.description}
          roles={viewOpportunityData.roles}
        />,
    },
    {name: 'Forums', component: <ViewOpportunityForums />},
  ];

  return (
    <Page>
      <MuiBox sx={{width: '70%', marginRight: '2em'}}>
        {
          opportunity &&
          <PageHeader
            title={opportunity?.eventname}
            subtitle='Hosted by:'
            host={`${creator?.firstname} ${creator?.lastname}`}
            avatar={creator?.profilepicture}
            banner={opportunity?.eventbanner}
            data={opportunity}
            rightComponent={
              <ThemedButton variant='gradient' color='yellow' size='small'>
                Request to Join
              </ThemedButton>
            }
            tabs={<CompressedTabBar data={tabs} tab={tab} setTab={setTab} />}
          />
        }
        {tabs[tab].component}
      </MuiBox>
      <MuiBox sx={{width: '30%'}}>
        <ViewOpportunityMembers />
      </MuiBox>
    </Page>
  );
}
