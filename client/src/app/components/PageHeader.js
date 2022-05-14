import * as React from 'react';
import {styled} from '@mui/material/styles';
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

const Banner = styled(({image}, props) => (
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
))(() => ({}));

const Details = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBlock: '1.5em',
  paddingInline: '3em',
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
  image,
  rightComponent,
}) {
  return (
    <Paper>
      {image && <Banner image={image} />}
      <Details>
        <div>
          <h2 className='text-dark'>{title}</h2>
          <p className='text-bold'>{subtitle}</p>
        </div>
        {rightComponent}
      </Details>
    </Paper>
  );
}
