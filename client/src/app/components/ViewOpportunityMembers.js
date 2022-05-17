import React from 'react';
import {styled} from '@mui/material/styles';
import MuiBox from '@mui/material/Box';
import MuiAvatar from '@mui/material/Avatar';
import MuiPaper from '@mui/material/Paper';
import OpportunityBanner from '../assets/examplecover.png';

const Paper = styled((props) => (
  <MuiPaper elevation={0} {...props} />
))(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5em 2em 1.5em 2em',
  height: 'auto',
  width: 'auto',
  background: 'white',
  boxShadow: '0px 4px 50px -15px rgba(0, 86, 166, 0.15)',
  border: '0.5px solid rgba(0, 0, 0, 0.15)',
  borderRadius: '10px',
}));

const Member = styled((props) => (
  <MuiBox {...props} />
))(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const Avatar = ({image}, props) => (
  <MuiAvatar sx={{height: '30px', width: '30px'}} src={image} {...props} />
);

/**
 * About tab for view opportunity
 * @return {JSX}
 */
export default function ViewOpportunityMembers() {
  const exampleMemberData = [
    {
      name: 'John Higgins',
      role: 'Owner',
      avatar: OpportunityBanner,
    },
    {
      name: 'Bob Duncan',
      role: 'Hackathon Panelist',
      avatar: OpportunityBanner,
    },
    {
      name: 'Jessica James',
      role: 'Hackathon Judge',
      avatar: OpportunityBanner,
    },
    {
      name: 'Janice Rodriguez',
      role: 'Hackathon Judge',
      avatar: OpportunityBanner,
    },
    {
      name: 'Samuel Andrews',
      role: 'Unassigned',
      avatar: OpportunityBanner,
    },
    {
      name: 'Nathan Smith',
      role: 'Unassigned',
      avatar: OpportunityBanner,
    },
  ];

  return (
    <Paper>
      <h4 className='text-dark' style={{paddingBottom: '1.5em'}}>
        Members
      </h4>
      <div className='flow-small'>
        {exampleMemberData.map((member, index) => (
          <Member key={`member-${index}`}>
            <Avatar image={member.avatar} />
            <div>
              <p className='text-bold text-blue'>{member.name}</p>
              <p>{member.role}</p>
            </div>
          </Member>
        ))}
      </div>
    </Paper>
  );
};
