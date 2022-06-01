import React from 'react';
import {useNavigate} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

const IconStyling = {
  fontSize: '0.9rem',
};

const Header = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  height: 'auto',
  width: 'auto',
}));

const Avatar = ({image}, props) => (
  <MuiAvatar sx={{height: '50px', width: '50px'}} src={image} {...props} />
);

const Banner = ({image, back}, props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(back);
  };

  return (
    <MuiBox sx={{height: '30vh', width: '100%'}} {...props}>
      {
        back &&
        <IconButton
          onClick={handleNavigate}
          sx={{
            'position': 'absolute',
            'margin': '1em',
            'height': '50px',
            'width': '50px',
            'background': 'white',
            'border': '0.5px solid rgba(0, 0, 0, 0.15)',
            '&:hover': {
              background: 'var(--tertiary-gray-bright)',
            },
          }}
        >
          <ArrowBackRoundedIcon sx={{color: 'var(--text-dark)'}} />
        </IconButton>
      }
      <img
        src={image}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </MuiBox>
  );
};

const Details = ({border, children}, props) => (
  <MuiBox
    sx={{
      display: 'flex',
      // flexDirection: 'column',
      justifyContent: 'space-between',
      paddingBlock: '2em',
      height: '25%',
      width: '100%',
      borderBottom: border ? '0.5px solid rgba(0, 0, 0, 0.12)' : 0,
    }}
    {...props}
  >
    {children}
  </MuiBox>
);

const SubDetails = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 3em',
  height: 'auto',
  width: 'auto',
}));

const Data = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  paddingBlock: '1.5em',
  height: 'auto',
  width: '100%',
  borderBottom: '0.5px solid rgba(0, 0, 0, 0.12)',
}));

/**
 * Modular component, page header
 * @param {String} title Main title for page header
 * @param {String} subtitle Subtitles underneath title
 * @param {Image} image Optional image for the banner
 * @param {Object} rightComponent Optional components to the right
 * @return {JSX} Page header
 */
export default function PageHeader({
  isCreator,
  title,
  subtitle,
  host,
  avatar,
  banner,
  backUrl,
  data,
  components,
  tabs,
  tabNumber,
}) {
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

    return {date: convertDate, time: convertTime};
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

  return (
    <Header>
      {banner && <Banner image={banner} back={backUrl} />}
      <Details border={data}>
        <div
          className='flex-horizontal flex-align-center flex-flow-large'
          style={{paddingInline: '3em'}}
        >
          {avatar && <Avatar image={avatar} />}
          <div className='flex-vertical flex-flow-small text-lineheight-24'>
            <h2 className='text-bold text-dark'>
              {title}
            </h2>
            <p className='text-bold'>
              {`${subtitle}`}
              &nbsp;&nbsp;
              <span className='text-blue'>{host}</span>
            </p>
          </div>
        </div>
        {
          components && !isCreator &&
          <SubDetails>
            {components}
          </SubDetails>
        }
      </Details>
      {!data && <Divider />}
      {data && tabNumber === 0 && (
        <Data>
          <div
            className='flex-horizontal flex-flow-large flex-align-center'
            style={{paddingInline: '3em'}}
          >
            <EventNoteRoundedIcon sx={IconStyling} />
            <p className='text-bold'>
              {
                `
                  ${formatDate(data?.startdate).date}
                  ${formatDate(data?.starttime).time}
                `
              }
            </p>
            <ArrowForwardRoundedIcon sx={IconStyling} />
            <p className='text-bold'>
              {
                data.enddate ?
                `
                  ${formatDate(data?.enddate).date}
                  ${formatDate(data?.endtime).time}
                ` :
                `
                  ${formatDate(data?.startdate).date}
                  ${formatDate(data?.starttime).time}
                `
              }
            </p>
          </div>
          <div
            className='flex-horizontal flex-flow-large flex-align-center'
            style={{paddingInline: '3em', marginTop: '0.25em'}}
          >
            <TimerOutlinedIcon sx={IconStyling} />
            <p className='text-bold'>
              {calculateDuration(data?.startdate, data?.enddate)}
            </p>
          </div>
          {data.locationtype && (
            data.locationtype === 'in-person' ||
            data.locationtype === 'hybrid'
          ) &&
            <div
              className='flex-horizontal flex-flow-large flex-align-center'
              style={{paddingInline: '3em', marginTop: '0.25em'}}
            >
              <FmdGoodOutlinedIcon sx={IconStyling} />
              <p className='text-bold'>
                {`${data.eventlocation.address} ${data.eventlocation.city}, `}
                {`${data.eventlocation.state} ${data.eventlocation.zip}`}
              </p>
            </div>
          }
          {data.locationtype && (
            data.locationtype === 'remote' ||
            data.locationtype === 'hybrid'
          ) &&
            <div
              className='flex-horizontal flex-flow-large flex-align-center'
              style={{paddingInline: '3em', marginTop: '0.25em'}}
            >
              <DevicesOutlinedIcon sx={IconStyling} />
              <p className='text-bold'>
                {data.eventzoomlink}
              </p>
            </div>
          }
        </Data>
      )}
      {tabs && tabs}
    </Header>
  );
}
