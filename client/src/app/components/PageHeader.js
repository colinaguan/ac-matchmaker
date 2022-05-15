import * as React from 'react';
import {styled} from '@mui/material/styles';
import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';

const Paper = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  height: 'auto',
  width: '100%',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: 0,
}));

const Avatar = ({image}, props) => (
  <MuiAvatar sx={{height: '50px', width: '50px'}} src={image} {...props} />
);

const Banner = ({image}, props) => (
  <MuiBox sx={{height: '30vh', width: '100%'}} {...props}>
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

const Details = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBlock: '1.5em',
  height: '25%',
  width: '100%',
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
  title,
  subtitle,
  host,
  avatar,
  banner,
  rightComponent,
}) {
  return (
    <Paper>
      {banner && <Banner image={banner} />}
      <Details>
        <div
          className='flex-horizontal flex-align-center flex-flow-large'
          style={{paddingLeft: '3em'}}
        >
          {avatar && <Avatar image={avatar} />}
          <div>
            <h2 className='text-dark'>{title}</h2>
            <p className='text-bold'>
              {`${subtitle}`}
              &nbsp;&nbsp;
              {host && <span className='text-blue'>{host}</span>}
            </p>
          </div>
        </div>
        <div style={{paddingRight: '3em'}}>
          {rightComponent}
        </div>
      </Details>
    </Paper>
  );
}
