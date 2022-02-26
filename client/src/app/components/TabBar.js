import React from 'react';
import {Tabs, Tab} from '@mui/material';
import Profile from './Profile';
import Opportunities from './Opportunities';
import Calendar from './Calendar';
/**
 * creates tab bar
 * @return {HTML} tab bar component
 */
export default function TabBar() {
  const [value, setValue]=React.useState(0);
  const handleTabs=(e, val)=>{
    // console.log(val);
    setValue(val);
  };
  return (
    <div>
      <div className='tab-container'>
        <Tabs
          value={value}
          onChange={handleTabs}
          indicatorColor='primary'
          sx={{
            '&& .Mui-selected': {
              color: '#000000',
            },
            '.MuiTabs-indicator': {
              height: '3.5px',
            },
          }}
          centered
        >
          <Tab
            sx={TabStyles}
            label='Profile'
            disableRipple
          />
          <Tab
            sx={TabStyles}
            label='Opportunities'
            disableRipple
          />
          <Tab
            sx={TabStyles}
            label='Calendar'
            disableRipple
          />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>{<Profile/>}</TabPanel>
      <TabPanel value={value} index={1}>{<Opportunities/>}</TabPanel>
      <TabPanel value={value} index={2}>{<Calendar/>}</TabPanel>
    </div>
  );
}
/**
 * renders component
 * @return {HTML} tab component
 * @param {object} props
 */
function TabPanel(props) {
  const {children, value, index}=props;
  return (
    <div>
      {value==index && children}
    </div>
  );
}
