import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BrowseOpportunities from './BrowseOpportunities';
import BrowsePeople from './BrowsePeople';

/**
 * creates tab bar for browse page
 * (toggles in between opportunities and people)
 * @param {*} props stores value and setValue
 * @return {HTML} tab component
 */
export default function BrowseTabs(props) {
  const {value, setValue, oppInd, peopleInd} = props;
  const handleTabs=(e, val)=>{
    // console.log(val);
    setValue(val);
  };
  return (
    <div>
      <Tabs
        value={value}
        onChange={handleTabs}
        textColor="secondary"
        indicatorColor="secondary"
        centered
      >
        <Tab value={oppInd} label="Opportunities"/>
        <Tab value={peopleInd} label="People"/>
      </Tabs>
      <TabPanel value={value} index={oppInd}>{<BrowseOpportunities/>}</TabPanel>
      <TabPanel value={value} index={peopleInd}>{<BrowsePeople/>}</TabPanel>
    </div>
  );
  /**
   * renders component
   * @param {*} props
   * @return {HTML} tab component
   */
  function TabPanel(props) {
    const {children, value, index}=props;
    return (
      <div>
        {value==index && children}
      </div>
    );
  }
}
