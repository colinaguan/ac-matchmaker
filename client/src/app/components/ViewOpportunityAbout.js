import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiPaper from '@mui/material/Paper';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ThemedButton from './ThemedButton';

const Details = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1em',
  padding: '1.5em 2em 1.5em 2em',
  height: 'auto',
  width: 'auto',
  background: 'white',
  boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
  border: '0.5px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
}));

const Roles = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1em',
  height: 'auto',
  width: '100%',
  background: 'white',
  boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
  border: '0.5px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
}));

/**
 * About tab for view opportunity
 * @return {JSX}
 */
export default function ViewOpportunityAbout() {
  return (
    <>
      <DetailsCard />
      <RolesCard />
    </>
  );
};

/**
 * Opportunity details card
 * @return {JSX}
 */
function DetailsCard() {
  return (
    <Details>
      <h4 className='text-dark' style={{paddingBottom: '1.5em'}}>
        Details
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
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
        bibendum neque egestas. At auctor urna nunc id cursus metus aliquam.
      </p>
    </Details>
  );
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
  'paddingInline': '2em',
  'borderBlock': `0.5px solid ${theme.palette.divider}`,
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
function RolesCard() {
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
    <Roles>
      <h4 className='text-dark' style={{padding: '1.5em 2em 1.5em 2em'}}>
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
                  <p className='text-xsmall text-gray'>
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
                  <p className='text-xsmall text-gray'>
                    {role.responsibilites}
                  </p>
                </div>
                <div className='flex-vertical'>
                  <p className='text-bold'>
                    Preferred Qualifications
                  </p>
                  <p className='text-xsmall text-gray'>{role.preferences}</p>
                </div>
              </AccordionDetails>
            </Accordion>
          ))
        }
      </Box>
    </Roles>
  );
}
