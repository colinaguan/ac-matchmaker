import React from 'react';
import {styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ThemedDropdown from './ThemedDropdown';

const IconStyling = {
  fontSize: '0.9rem',
};

const Card = styled((props) => (
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

const Avatar = ({image}, props) => (
  <MuiAvatar
    {...props}
    src={image}
    sx={{
      height: '30px',
      width: '30px',
      border: '0.5px solid rgba(0, 0, 0, 0.15)',
    }}
  />
);

const Banner = ({image}, props) => {
  return (
    <MuiBox sx={{height: '90px', width: '90px'}} {...props}>
      <img
        src={image}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          border: '0.5px solid rgba(0, 0, 0, 0.15)',
          borderRadius: '10px',
        }}
      />
    </MuiBox>
  );
};

/**
 * Creates list of opportunities
 * @return {JSX}
 */
export default function OpportunitiesList() {
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
      <Card className='clickable'>
        <div style={{padding: '1.5em 2em 1.5em 2em'}}>
          <h4 className='text-dark ellipsis'>
            Opportunity Name
          </h4>
          <div className='flex-flow-large flex-align-center'>
            <Avatar />
            <p>
              Hosted by:&nbsp;
              <span className='text-bold text-blue'>Host Name</span>
            </p>
          </div>
        </div>
        <Divider sx={{borderBottom: '0.5px solid rgba(0, 0, 0, 0.15)'}} />
        <div
          className='flex-horizontal flex-align-center'
          style={{padding: '1.5em 2em 1.5em 2em'}}
        >
          <Banner />
          <div className='flex-vertical'>
            <div
              className='flex-horizontal flex-flow-large flex-align-center'
              style={{paddingInline: '2em'}}
            >
              <EventNoteRoundedIcon sx={IconStyling} />
              <p className='text-bold ellipsis'>
                  date
              </p>
              <ArrowForwardRoundedIcon sx={IconStyling} />
              <p className='text-bold ellipsis'>
                  date
              </p>
            </div>
            <div
              className='flex-horizontal flex-flow-large flex-align-center'
              style={{paddingInline: '2em', marginTop: '0.25em'}}
            >
              <TimerOutlinedIcon sx={IconStyling} />
              <p className='text-bold ellipsis'>
                  date
              </p>
            </div>
            <div
              className='flex-horizontal flex-flow-large flex-align-center'
              style={{paddingInline: '2em', marginTop: '0.25em'}}
            >
              <FmdGoodOutlinedIcon sx={IconStyling} />
              <p className='text-bold ellipsis'>
                  date
              </p>
            </div>
            <div
              className='flex-horizontal flex-flow-large flex-align-center'
              style={{paddingInline: '2em', marginTop: '0.25em'}}
            >
              <DevicesOutlinedIcon sx={IconStyling} />
              <p className='text-bold ellipsis'>
                  date
              </p>
            </div>
          </div>
        </div>
      </Card>
    </MuiBox>
  );
}
