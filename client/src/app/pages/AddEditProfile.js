import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MuiStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import '../stylesheets/AddEditProfile.css';

// TODO: repeated code, taken from signup
const PaperStyling = {
  display: 'flex',
  width: '800px',
  height: '600px',
  borderRadius: '10px',
  filter: 'drop-shadow(0px 15px 40px rgba(192, 225, 255, 0.1))',
  color: '#3C4047',
};

/**
 * profile step one
 * @param {*} param0 about
 * @return {*} component
 */
function ProfileStepOne({
  about,
  changeAbout,
  location,
  changeLocation,
  completed}) {
  return (
    <Stack spacing={1} style={{marginTop: '1rem'}}>
      <TextField
        id='about-input-field'
        label='Location'
        variant='standard'
        value={location}
        onChange={changeLocation}
        style={{width: '25%'}}
        disabled={completed}
      />
      <TextField
        id='about-input-field'
        label='About'
        multiline
        variant='standard'
        value={about}
        onChange={changeAbout}
        disabled={completed}
      />
    </Stack>
  );
}

/**
 * profile step two
 * @param {*} param0 about
 * @return {*} component
 */
function ProfileStepTwo({
  school,
  changeSchool,
  major,
  changeMajor,
  completed}) {
  return (
    <Stack spacing={1} style={{marginTop: '1rem'}}>
      <TextField
        id='about-input-field'
        label='School'
        variant='standard'
        value={school}
        onChange={changeSchool}
        style={{width: '25%'}}
        disabled={completed}
      />
      <TextField
        id='about-input-field'
        label='Major'
        multiline
        variant='standard'
        value={major}
        onChange={changeMajor}
        style={{width: '25%'}}
        disabled={completed}
      />
    </Stack>
  );
}

/**
 * profile step three
 * @param {*} param0 about
 * @return {*} component
 */
function ProfileStepThree({
  title,
  changeTitle,
  company,
  changeCompany,
  completed}) {
  return (
    <Stack spacing={1} style={{marginTop: '1rem'}}>
      <TextField
        id='about-input-field'
        label='Title'
        variant='standard'
        value={title}
        onChange={changeTitle}
        style={{width: '25%'}}
        disabled={completed}
      />
      <TextField
        id='about-input-field'
        label='Company'
        variant='standard'
        value={company}
        onChange={changeCompany}
        style={{width: '25%'}}
        disabled={completed}
      />
    </Stack>
  );
}

/**
 * profile step four
 * @param {*} param0 about
 * @return {*} component
 */
function ProfileStepFour({
  volunteerTitle,
  changeVolunteerTitle,
  organization,
  changeOrganization,
  completed}) {
  return (
    <Stack spacing={1} style={{marginTop: '1rem'}}>
      <TextField
        id='about-input-field'
        label='Title'
        variant='standard'
        value={volunteerTitle}
        onChange={changeVolunteerTitle}
        style={{width: '25%'}}
        disabled={completed}
      />
      <TextField
        id='about-input-field'
        label='Organization'
        variant='standard'
        value={organization}
        onChange={changeOrganization}
        style={{width: '25%'}}
        disabled={completed}
      />
    </Stack>
  );
}

// TODO: repeated code, taken from themed stepper
const Stepper = ({activeStep, nonLinear, children}, props) => (
  <MuiStepper
    {...props}
    nonLinear={nonLinear}
    activeStep={activeStep}
    sx={{
      'width': '100%',
      '.MuiStepLabel-labelContainer span': {
        fontFamily: 'Montserrat',
        fontSize: '0.8rem',
        fontWeight: '600',
        color: 'var(--text-dark)',
      },
      '.MuiStepIcon-text': {
        fontFamily: 'Montserrat',
        fontWeight: '700',
        fill: 'white',
      },
      '.MuiStepIcon-root.Mui-active': {
        color: 'var(--secondary-yellow-main)',
      },
      '.MuiStepIcon-root.Mui-completed': {
        color: 'var(--secondary-yellow-main)',
      },
    }}
  >
    {children}
  </MuiStepper>
);

/**
 * stepper component
 * @return {*} stepper
 */
function ProfileStepper() {
  const steps = ['General', 'Education', 'Experience', 'Volunteering'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  // FUNCTIONS FOR STEPPER ------------------------------

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted() ?
        // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed)) :
        activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleCompleteStep = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleFinish = () => {
    setLoading(true);
  };

  // STATES AND FUNCTIONS FOR STEP CONTENT -------------------------------

  const [about, setAbout] = React.useState('');
  const changeAbout = (e) => {
    setAbout(e.target.value);
  };
  const [location, setLocation] = React.useState('');
  const changeLocation = (e) => {
    setLocation(e.target.value);
  };
  const [school, setSchool] = React.useState('');
  const changeSchool = (e) => {
    setSchool(e.target.value);
  };
  const [major, setMajor] = React.useState('');
  const changeMajor = (e) => {
    setMajor(e.target.value);
  };
  const [title, setTitle] = React.useState('');
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const [company, setCompany] = React.useState('');
  const changeCompany = (e) => {
    setCompany(e.target.value);
  };
  const [volunteerTitle, setVolunteerTitle] = React.useState('');
  const changeVolunteerTitle = (e) => {
    setVolunteerTitle(e.target.value);
  };
  const [organization, setOrganization] = React.useState('');
  const changeOrganization = (e) => {
    setOrganization(e.target.value);
  };

  const stepComponents = {
    0: <ProfileStepOne
      location={location}
      changeLocation={changeLocation}
      about={about}
      changeAbout={changeAbout}
      completed={completed[0] ? true : false}
    />,
    1: <ProfileStepTwo
      school={school}
      changeSchool={changeSchool}
      major={major}
      changeMajor={changeMajor}
      completed={completed[1] ? true : false}
    />,
    2: <ProfileStepThree
      title={title}
      changeTitle={changeTitle}
      company={company}
      changeCompany={changeCompany}
      completed={completed[2] ? true : false}
    />,
    3: <ProfileStepFour
      volunteerTitle={volunteerTitle}
      changeVolunteerTitle={changeVolunteerTitle}
      organization={organization}
      changeOrganization={changeOrganization}
      completed={completed[3] ? true : false}
    />,
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color='inherit' onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <Box
        style={{
          flexGrow: 1,
          padding: '1rem',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Typography variant='h6' style={{fontWeight: '800'}}>
              Step {activeStep + 1}: {steps[activeStep]}
        </Typography>
        {stepComponents[activeStep]}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          pt: 2,
          marginTop: 'auto'}}
      >
        <Button
          color='inherit'
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{mr: 1}}
        >
                Back
        </Button>
        <Box sx={{flex: '1 1 auto'}} />
        <Button onClick={handleNext} sx={{mr: 1}}>
                Next
        </Button>
        {activeStep !== steps.length &&
          (completed[activeStep] ?
            <Button
              disabled={true}
            >
                  Complete Step
            </Button> :
          (completedSteps() !== totalSteps() - 1 ?
            <Button onClick = {handleCompleteStep}>
              Complete Step
            </Button> :
            (!loading ?
              <Button onClick = {handleFinish}>
                Finish
              </Button> :
              <Button>
                <CircularProgress/>
              </Button>)
          ))}
      </Box>
    </Box>
  );
}

/**
 * the add edit profile component
 * @return {*} component
 */
export default function AddEditProfile() {
//   const [stepNumber, setStepNumber] = useState(0);
  return (
    <Box className='page'>
      <Paper className='card' elevation={0} sx={PaperStyling}>
        <Box className='profile-stepper-content' style={{padding: '3rem'}}>
          <ProfileStepper/>
        </Box>
      </Paper>
    </Box>
  );
}
