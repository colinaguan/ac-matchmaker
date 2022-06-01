import React from 'react';
import {styled} from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import MuiBox from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import OpportunitiesCard from './OpportunitiesCard';
import OpportunitiesFilters from './OpportunitiesFilters';
import ThemedDropdown from './ThemedDropdown';

const Page = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  display: 'flex',
  gap: '1em',
  height: 'auto',
  width: 'auto',
  marginInline: '3em',
  marginBlock: '1em',
}));

/**
 * Creates list of opportunities
 * @param {Object} opportunities
 * @return {JSX}
 */
export default function OpportunitiesList({opportunities, tab}) {
  return (
    <Page>
      <MuiBox className='flow-small' sx={{flexGrow: 1}}>
        <div
          className='flex-horizontal flex-space-between'
          style={{width: '100%', marginBottom: '1em'}}
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
              'width': 'auto',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(0, 0, 0, 0.15)',
                },
              },
            }}
          />
          <ThemedDropdown menuItems={['Recommended', 'Alphabet', 'Major']} />
        </div>
        {opportunities.map((opportunity, index) => (
          <OpportunitiesCard
            key={`opportunity-${index}`}
            opportunity={opportunity}
          />
        ))}
      </MuiBox>
      <OpportunitiesFilters />
    </Page>
  );
}
