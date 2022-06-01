import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MuiBox from '@mui/material/Box';
import MuiPaper from '@mui/material/Paper';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const Box = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  height: 'auto',
  width: '400px',
}));

const Paper = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  width: '400px',
  background: 'white',
  boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
  border: '0.5px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
}));

/**
 * Filters section for view opportunity
 * @return {JSX}
 */
export default function OpportunityFilters() {
  const [openLocation, setOpenLocation] = useState(false);
  const handleToggleLocation = () => {
    setOpenLocation(!openLocation);
  };

  return (
    <Box>
      <Paper>
        <div style={{padding: '2em 3em calc(1.5em - 0.5em) 3em'}}>
          <h4 className='text-dark'>
            Filters
          </h4>
          <p className='text-bold text-blue'>
            Select All
            <span className='text-gray'>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
            Clear All
          </p>
        </div>
        <div
          className='flex-vertical flow-small'
          style={{padding: '0 3em', paddingBottom: '2em'}}
        >
          <div className='flex-vertical flow-tiny'>
            <MuiBox
              className='flex-space-between flex-align-center clickable'
              onClick={handleToggleLocation}
              sx={{userSelect: 'none'}}
            >
              <h5>Location</h5>
              {openLocation ?
                <ExpandLessRoundedIcon /> :
                 <ExpandMoreRoundedIcon />
              }
            </MuiBox>
            <Collapse in={openLocation} timeout='auto' unmountOnExit>
              <FormGroup className='flex-vertical flex-flow-small'>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color='secondary'
                        size='small'
                        disableRipple
                        sx={{paddingBlock: '0'}}
                      />
                    }
                    label='Hello'
                    componentsProps={{
                      typography: {
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: 'var(--text-disabled)',
                      },
                    }}
                    sx={{userSelect: 'none'}}
                  />
                </div>
              </FormGroup>
            </Collapse>
          </div>
        </div>
      </Paper>
    </Box>
  );
};
