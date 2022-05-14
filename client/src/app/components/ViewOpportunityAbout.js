import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Paper from '@mui/material/Paper';
import AccessTimeFilledRounded from
  '@mui/icons-material/AccessTimeFilledRounded';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import ThemedButton from './ThemedButton';
import '../stylesheets/OpportunityComponents.css';

const Page = styled((props) => (
  <Box {...props} />
))(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto',
  width: 'auto',
  padding: '3em',
  background: '#F8F8FA',
}));

/**
 * About tab for view opportunity
 * @return {JSX}
 */
export default function ViewOpportunityAbout() {
  return (
    <Page className='flow-large'>
      <DetailsCard />
      <RolesCard />
    </Page>
  );
};

/**
 * Opportunity details card
 * @return {JSX}
 */
function DetailsCard(/* {data} */) {
  // const creatorName = 'Bob Higgins';

  // const userProfile = {
  //   profileid: 0,
  // };

  // const opportunityCreator = {
  //   profileid: 0,
  //   profilepicture: 'image',
  // };

  // const data = {
  //   eventname: 'Marine Biology Seminar',
  //   eventbanner: 'image',
  //   organization: null,
  //   startdate: {
  //     date: 'Saturday, September 31',
  //     time: '12PM',
  //   },
  //   enddate: {
  //     date: 'Saturday, September 31',
  //     time: '4PM',
  //   },
  //   duration: '4 Hours',
  //   location: {
  //     address: 'Exhibition Rd, South Kensington, London SW7 2DD, UK',
  //     link: 'www.zoom.com/link',
  //   },
  // };

  return (
    <Paper
      className='flex-vertical flex-flow-large'
      elevation={0}
      sx={{
        padding: '2em',
        paddingBottom: '1.5em',
        height: 'auto',
        width: '100%',
        background: 'white',
        boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
        borderRadius: '10px',
      }}
    >
      <h4 className='text-dark' style={{marginBottom: '0.5em'}}>Details</h4>
      <Box className='flex-vertical flex-flow-large'>
        <div className='flex-horizontal flex-flow-large'>
          <PersonRoundedIcon />
          <div>
            <p className='text-tiny'>Hosted by</p>
            <p className='text-bold'>
              Name
            </p>
          </div>
        </div>
        <div className='flex-horizontal flex-flow-large'>
          <AccessTimeFilledRounded />
          <div className='width-300-pixels'>
            <p className='text-tiny'>Start</p>
            <p className='text-bold'>
              Saturday, September 31 at 12PM
            </p>
          </div>
          <div className='margin-left-32'>
            <p className='text-tiny'>End</p>
            <p className='text-bold'>
              Saturday, September 31 at 12PM
            </p>
          </div>
        </div>
        <div className='flex-horizontal flex-flow-large'>
          <TimerRoundedIcon />
          <div>
            <p className='text-tiny'>Duration</p>
            <p className='text-bold'>
              Length
            </p>
          </div>
        </div>
        <div className='flex-horizontal flex-flow-large'>
          <LocationOnRoundedIcon />
          <div className='width-300-pixels'>
            <p className='text-tiny'>Location</p>
            <p className='text-bold'>
              Exhibition Rd, South Kensington, London SW7 2DD, UK
            </p>
          </div>
          <div className='margin-left-32'>
            <p className='text-tiny'>Location</p>
            <p className='text-bold'>
              Link
            </p>
          </div>
        </div>
      </Box>
      <Divider sx={{marginBlock: '0.8em'}} />
      <p className='text-bold'>Description</p>
    </Paper>
  );
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  'paddingInline': '2em',
  'borderBlock': `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:last-child': {
    borderBottom: 0.,
    borderRadius: '0 0 10px 10px',
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}} />}
    {...props}
  />
))(() => ({
  'backgroundColor': 'white',
  'paddingInline': 0,
  'paddingBlock': '0.5em',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
  paddingInline: theme.spacing(0),
}));

/**
 * Opportunity roles card
 * @return {JSX}
 */
function RolesCard(/* {data} */) {
  const [expanded, setExpanded] = React.useState(null);

  const arrayOfRoles = [
    {
      name: 'Software Engineer Mentor',
      tags: 'Computer Science, Computer Engineering',
      slots: 2,
      responsibilites: 'This is a description',
      preferences: 'This is a list of preferences',
    },
    {
      name: 'Hackathon Judge',
      tags: 'Computer Science, Computer Engineering',
      slots: 4,
      responsibilites: 'This is a description',
      preferences: 'This is a list of preferences',
    },
    {
      name: 'Hackathon Panelist',
      tags: 'Computer Science, Computer Engineering',
      slots: 2,
      responsibilites: 'This is a description',
      preferences: 'This is a list of preferences',
    },
  ];

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Paper
      className='flex-vertical'
      elevation={0}
      sx={{
        height: 'auto',
        width: '100%',
        background: 'white',
        boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
        borderRadius: '10px',
      }}
    >
      <h4 className='text-dark' style={{padding: '2em 2em 1.5em 2em'}}>
        Roles
      </h4>
      <Box>
        {
          arrayOfRoles.map((role, index) => (
            <Accordion
              key={`panel${index}`}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary
                id={`panel${index}d-header`}
                aria-controls={`panel${index}d-content`}
                sx={{
                  '& .MuiAccordionSummary-content': {
                    justifyContent: 'space-between',
                    marginRight: '2em',
                  },
                }}
              >
                <Box className='flex-vertical flex-justify-center'>
                  <p className='text-bold text-blue'>
                    {`${role.name} (${role.slots})`}
                  </p>
                  <p className='text-tiny text-gray'>
                    {role.tags}
                  </p>
                </Box>
                <ThemedButton
                  variant='themed'
                  color='yellow'
                  size='small'
                >
                  Request Role
                </ThemedButton>
              </AccordionSummary>
              <AccordionDetails
                className='flex-vertical flex-flow-large flow-small'
              >
                <div className='flex-vertical'>
                  <p className='text-bold'>Responsibilites</p>
                  <p className='text-tiny text-gray'>{role.responsibilites}</p>
                </div>
                <div className='flex-vertical'>
                  <p className='text-bold'>
                    Preferred Qualifications
                  </p>
                  <p className='text-tiny text-gray'>{role.preferences}</p>
                </div>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </Box>
    </Paper>
  );
}
