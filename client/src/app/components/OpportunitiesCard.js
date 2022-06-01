import React, {useEffect, useState} from 'react';
import {styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

const IconStyling = {
  fontSize: '0.9rem',
};

const Card = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  display: 'flex',
  flexDirection: 'column',
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
      height: '25px',
      width: '25px',
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

const OutlinedIconButton = ({children}, props) => (
  <MuiBox
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '40px',
      width: '40px',
      padding: 0,
      background: 'transparent',
      border: '0.5px solid rgba(0, 0, 0, 0.15)',
      borderRadius: '5px',
    }}
    {...props}
  >
    {children}
  </MuiBox>
);

/**
 * @return {JSX}
 */
export default function OpportunitiesCard({opportunity}) {
  const [creator, setCreator] = useState('');

  const formatDate = (date) => {
    const dateOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const timeOptions = {
      hour: 'numeric',
      minute: '2-digit',
    };

    const convertDate = new Date(date).toLocaleDateString([], dateOptions);
    const convertTime = new Date(date).toLocaleTimeString([], timeOptions);

    return `${convertDate} at ${convertTime}`;
  };

  const calculateDuration = (date1, date2) => {
    const convertDate1 = new Date(date1);
    const convertDate2 = new Date(date2);

    const difference = Math.abs(convertDate1 - convertDate2);

    const differenceInMinutes = Math.floor(difference / (1000 * 60));
    const differenceInHours = Math.floor(difference / (1000 * 60 * 60));
    const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));

    const returnMinutes =
      differenceInMinutes && (!differenceInHours && !differenceInDays);
    const returnHours =
      differenceInHours && (differenceInMinutes && !differenceInDays);
    const returnDays =
      differenceInDays && (differenceInMinutes && differenceInHours);

    if (returnMinutes) return `${differenceInMinutes} Minutes`;
    if (returnHours) return `${differenceInHours} Hours`;
    if (returnDays) return `${differenceInDays} Days`;
    return 'Error calculating dates';
  };

  const getOpportunityCreator = () => {
    fetch(`/api/getProfileName/${opportunity.usersponsors.creator}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          setCreator(json);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving opportunity creators profile');
        });
  };

  useEffect(() => {
    getOpportunityCreator(opportunity);
  }, []);

  return (
    <>
      {opportunity && creator && (
        <Card className='clickable'>
          <div
            className='flex-space-between flex-align-center'
            style={{padding: '1.5em'}}
          >
            <MuiBox>
              <h4 className='text-dark ellipsis'>
                {opportunity.eventname}
              </h4>
              <div className='flex-flow-large flex-align-center'>
                <Avatar image={creator.profilepicture} />
                <p className='text-bold text-disabled'>
                  Hosted by:&nbsp;
                  <span className='text-blue'>
                    {`${creator.firstname} ${creator.lastname}`}
                  </span>
                </p>
              </div>
            </MuiBox>
            <OutlinedIconButton>
              <CloseRoundedIcon
                sx={{
                  height: '20px',
                  width: '20px',
                  stroke: 'var(--error-red-main)',
                  strokeWidth: '2px',
                }}
              />
            </OutlinedIconButton>
          </div>
          <Divider sx={{borderBottom: '0.5px solid rgba(0, 0, 0, 0.15)'}} />
          <div
            className='flex-horizontal flex-align-center'
            style={{padding: '1.5em'}}
          >
            <Banner image={opportunity.eventbanner} />
            <div className='flex-vertical'>
              <div
                className='flex-horizontal flex-flow-large flex-align-center'
                style={{paddingInline: '2em'}}
              >
                <EventNoteRoundedIcon sx={IconStyling} />
                <p className='text-bold ellipsis'>
                  {formatDate(opportunity.startdate)}
                </p>
                <ArrowForwardRoundedIcon sx={IconStyling} />
                <p className='text-bold ellipsis'>
                  {formatDate(opportunity.enddate)}
                </p>
              </div>
              <div
                className='flex-horizontal flex-flow-large flex-align-center'
                style={{paddingInline: '2em', marginTop: '0.25em'}}
              >
                <TimerOutlinedIcon sx={IconStyling} />
                <p className='text-bold ellipsis'>
                  {
                    calculateDuration(
                        opportunity.startdate, opportunity.enddate,
                    )
                  }
                </p>
              </div>
              {
                opportunity.locationtype && (
                  opportunity.locationtype === 'in-person' ||
                  opportunity.locationtype === 'hybrid'
                ) &&
                <div
                  className='
                    flex-horizontal
                    flex-flow-large
                    flex-align-center
                  '
                  style={{paddingInline: '2em', marginTop: '0.25em'}}
                >
                  <FmdGoodOutlinedIcon sx={IconStyling} />
                  <p className='text-bold'>
                    {`
                      ${opportunity.eventlocation.address}
                      ${opportunity.eventlocation.city},
                      ${opportunity.eventlocation.state}
                      ${opportunity.eventlocation.zip}
                    `}
                  </p>
                </div>
              }
              {
                opportunity.locationtype && (
                  opportunity.locationtype === 'remote' ||
                  opportunity.locationtype === 'hybrid'
                ) &&
                <div
                  className='
                    flex-horizontal
                    flex-flow-large
                    flex-align-center
                  '
                  style={{paddingInline: '2em', marginTop: '0.25em'}}
                >
                  <DevicesOutlinedIcon sx={IconStyling} />
                  <p className='text-bold'>
                    {opportunity.eventzoomlink}
                  </p>
                </div>
              }
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
