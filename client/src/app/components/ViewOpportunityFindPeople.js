import React, {useState, useEffect} from 'react';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ThemedButton from './ThemedButton';
import ThemedDropdown from './ThemedDropdown';
import ExampleCover from '../assets/examplecover.png';
import useAuth from '../util/AuthContext';

const Item = styled((props) => <MuiPaper elevation={0} {...props} />)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto',
  background: 'white',
  boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
  border: '0.5px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
  textAlign: 'center',
}));

const Banner = ({image}, props) => {
  return (
    <MuiBox
      {...props}
      sx={{
        height: '5em',
        width: '100%',
      }}
    >
      <img
        src={image}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          borderRadius: '10px 10px 0 0',
        }}
      />
    </MuiBox>
  );
};

const Avatar = ({image}, props) => (
  <MuiAvatar
    {...props}
    src={image}
    sx={{
      position: 'absolute',
      marginTop: '1.75em',
      height: '80px',
      width: '80px',
      border: '4px solid white',
      outline: '4px solid var(--primary-blue-main)',
    }}
  />
);

/**
 * Find people tab for view opportunity
 * @return {JSX}
 */
export default function ViewOpportunityFindPeople() {
  const {userProfile} = useAuth();
  const [profiles, setProfiles] = useState([]);

  const getPeople = () => {
    fetch(`/api/getActiveProfiles`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          console.log(json);
          setProfiles(json);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving active profiles');
        });
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <MuiBox sx={{flexGrow: 1, marginTop: '1em'}}>
      <div
        className='flex-horizontal flex-space-between'
        style={{marginBottom: '1em'}}
      >
        <TextField
          placeholder='Search'
          size='small'
          InputProps={{
            style: {
              fontSize: '0.9rem',
              backgroundColor: 'white',
              borderRadius: '10px',
            },
            startAdornment: (
              <InputAdornment position='start'>
                <SearchRoundedIcon color='tertiary' />
              </InputAdornment>
            ),
          }}
          sx={{
            'width': '400px',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.15)',
              },
            },
          }}
        />
        <ThemedDropdown menuItems={['Recommended', 'Alphabet', 'Major']} />
      </div>
      <Grid
        container
        spacing={2}
        columns={{xs: 4, sm: 8, md: 8, lg: 12, xl: 12}}
      >
        {profiles &&
          profiles.filter((p) =>
            p.profileid !== userProfile.profileid).map((profile, index) => (
            <Grid
              key={`profile-${index}`}
              item
              xs={2}
              sm={4}
              md={4}
              zeroMinWidth
            >
              <Item>
                <Banner image={ExampleCover} />
                <Avatar image={profile.profilepicture} />
                <div style={{padding: '3.75em 1em 1em 1em'}}>
                  <div style={{marginBottom: '1em'}}>
                    <h4 className='text-bold text-dark'>
                      {`${profile.firstname} ${profile.lastname}`}
                    </h4>
                    <p>{profile.major}</p>
                  </div>
                  <ThemedButton color='yellow' variant='round' size='small'>
                    Send Invite
                  </ThemedButton>
                </div>
              </Item>
            </Grid>
          ))}
      </Grid>
    </MuiBox>
  );
}
