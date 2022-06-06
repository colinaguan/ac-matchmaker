import * as React from 'react';
import {styled} from '@mui/material';
import MuiPaper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const Card = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5em',
  padding: '2em',
  height: 'auto',
  width: '60%',
  background: 'white',
  boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
  border: '0.5px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
}));

ProfileCardComponent.defaultProps = {
  isUser: false,
};

/**
 * modularized profile card component
 * @param {*} title header on card
 * @param {*} isUser true (my profile page) : false (view profile page)
 * @param {*} headerButtonType add : edit
 * @param {*} headerButtonModal modal to be opened by button
 * @param {*} content content to be displayed
 * @return {*} profile card component
 */
export default function ProfileCardComponent({
  title,
  isUser,
  headerButtonType,
  headerButtonModal,
  content,
}) {
  return (
    <Card>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h4 className='text-dark'>{title}</h4>
        {
          isUser &&
          <IconButton style={{height: '24px', width: '24px'}}>
            {
              headerButtonType === 'add' ?
              <AddRoundedIcon sx={{color: 'var(--text-dark)'}} /> :
              <EditRoundedIcon sx={{color: 'var(--text-dark)'}} />
            }
          </IconButton>
        }
      </div>
    </Card>
  );
}
