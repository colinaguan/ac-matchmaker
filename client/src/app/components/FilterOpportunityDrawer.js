import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import MailIcon from '@mui/icons-material/Mail';

import LocationOnIcon from '@mui/icons-material/LocationOn';

import '../stylesheets/FilterDrawer.css';

/**
 * returns drawer with filters for opportunities
 * @param {*} props stores set functions
 * @return {HTML} filter drawer component
 */
export default function FilterOpportunityDrawer(props) {
  // const {
  //   setOppLocation,
  //   setOppType,
  //   setOppField,
  // } = this.props;

  // const oppLocations = ['In-Person', 'Remote'];
  // const oppTypes = ['Speaker', 'Mentor'];
  // const oppFields = ['Art', 'Computer Science', 'Game Design'];

  const drawerWidth = 240;

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]:
              {width: drawerWidth, boxSizing: 'border-box'},
      }}
    >
      <Toolbar className='toolbar'/>
      <Box sx={{overflow: 'auto'}}>
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                Filters for Opportunities
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Location" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{pl: 4}}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
