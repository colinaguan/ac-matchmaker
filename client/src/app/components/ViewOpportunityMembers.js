import React, {useState, useEffect} from 'react';
import {styled} from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import MuiAvatar from '@mui/material/Avatar';
import MuiPaper from '@mui/material/Paper';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const Paper = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  width: 'auto',
  background: 'white',
  boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
  border: '0.5px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
}));

const Member = styled((props) => (
  <MuiBox className='member' {...props} />
))(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '0.5em 2em 0.5em 2em',
  userSelect: 'none',
}));

const Avatar = ({image}, props) => (
  <MuiAvatar sx={{height: '30px', width: '30px'}} src={image} {...props} />
);

/**
 * Members section for view opportunity
 * @return {JSX}
 */
export default function ViewOpportunityMembers({isCreator, owner, members}) {
  const [profiles, setProfiles] = useState([]);

  const getProfile = (profileid, role) => {
    fetch(`/api/getProfileByProfileId/${profileid}`)
        .then((res) => {
          if (!res.ok) {
            throw res;
          }
          return res.json();
        })
        .then((json) => {
          console.log(json);
          json.role = role;
          setProfiles((prevProfiles) => [...prevProfiles, json]);
        })
        .catch((err) => {
          console.log(err);
          alert('Error retrieving profile, please try again');
        });
  };

  useEffect(() => {
    Object.keys(members).forEach(function(role) {
      members[role].map((profileid) => {
        getProfile(profileid, role);
      });
    });
  }, []);

  return (
    <Paper>
      <h4
        className='text-dark'
        style={{padding: '1.5em 2em calc(1.5em - 0.5em) 2em'}}
      >
        {isCreator ? 'Your Members' : 'Members'}
      </h4>
      <div style={{paddingBottom: 'calc(1.5em - 0.5em)'}}>
        <Member className='hover-highlight clickable'>
          <Avatar image={owner.avatar} />
          <div>
            <div className='flex-align-center'>
              <p className='text-bold text-blue'>
                {owner.name}
              </p>
              <StarRoundedIcon
                sx={{
                  margin: '0 0 2px 5px',
                  fontSize: '1rem',
                  color: 'var(--secondary-yellow-main)',
                }}
              />
            </div>
            <p>Owner</p>
          </div>
        </Member>
        {profiles && profiles.map((profile, index) => (
          <Member
            className='hover-highlight clickable'
            key={`member-${index}`}
          >
            <Avatar image={profile.profilepicture} />
            <div>
              <div className='flex-align-center'>
                <p className='text-bold text-blue'>
                  {`${profile.firstname} ${profile.lastname}`}
                </p>
              </div>
              <p>{profile.role}</p>
            </div>
          </Member>
        ))}
      </div>
    </Paper>
  );
};
