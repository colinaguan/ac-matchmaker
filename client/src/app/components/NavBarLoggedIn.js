import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useTheme} from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EventIcon from '@mui/icons-material/Event';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Notification from './Notification';
import ThemedButton from './ThemedButton';
import useAuth from '../util/AuthContext';
import * as Nav from './NavBarComponents';
import '../stylesheets/TestNavbar.css';

const LogoutStyling = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  borderTop: '0.5px solid #C0C4CB',
};

const BrandStyling = {
  // 20px = Button Side Padding
  // 8px = Button Width (32px) - Icon Width (24px)
  // 6px = Icon Width (24px) - Vector Width (18px)
  // 2px = Account for scale
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 'calc(20px - 8px + 6px - 2px)',
  width: '100%',
  cursor: 'pointer',
};

const ListButtonStyling = {
  minHeight: 48,
  px: 2.5,
};

const ListIconStyling = {
  minWidth: 0,
  ml: '4px',
};

const ListTextStyling = {
  '.MuiTypography-root': {
    'fontWeight': '600',
    'fontSize': '0.9rem',
  },
};

/**
 * @return {JSX} NavBar Component
 */
export default function NavBarLoggedIn() {
  const {userProfile, setUser, setLoggedIn, setUserProfile} = useAuth();
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  const pages = [
    ['Dashboard', '/dashboard', <GridViewRoundedIcon key='Dashboard' />],
    ['Opportunities', '/opportunities', <EventIcon key='Opportunities' />],
    ['Settings', '/settings', <SettingsIcon key='Settings' />],
  ];

  // Notifications -------------------------------------------------------------

  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [notificationCount, setNotificationCount] = useState(0);
  const showNotification = Boolean(notificationAnchorEl);

  const handleNotificationOpen = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const notificationId = 'notification-popover';
  const renderNotification = (
    <Notification
      props={{
        notificationAnchorEl: notificationAnchorEl,
        notificationId: notificationId,
        showNotification: showNotification,
        setNotificationAnchorEl: setNotificationAnchorEl,
        setNotificationCount: setNotificationCount,
      }}
    />
  );

  // Profile -------------------------------------------------------------------

  const handleError = (e) => {
    e.target.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  };

  const handleLogout = () => {
    fetch(`/api/expireUserSession`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(()=>{
      setUser(null);
      setLoggedIn(false);
      setUserProfile(null);
      navigate('/');
    });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleTabClick = (index) => {
    setTabIndex(index);
  };

  return (
    <>
      <Nav.AppBarLoggedIn
        position='fixed'
        open={open}
        sx={{
          boxShadow: '0',
          borderBottom: '0.5px solid #C0C4CB',
        }}
      >
        <Toolbar className='navbar-height'>
          <IconButton
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            color='inherit'
            sx={{marginRight: 5, ...(open && {display: 'none'})}}
          >
            <MenuIcon className='icon-gray-main' />
          </IconButton>
          <Box sx={{flexGrow: 1}} />
          <Box sx={{display: {xs: 'none', md: 'flex'}}}>
            <Tooltip title='Notifications'>
              <IconButton
                aria-label='show number of new notifications'
                aria-controls={notificationId}
                aria-haspopup='true'
                onClick = {handleNotificationOpen}
                size='large'
                sx={{height: '45px', marginTop: '8px'}}
              >
                <Badge badgeContent={notificationCount} color='error'>
                  <NotificationsRoundedIcon className='icon-gray-main' />
                </Badge>
              </IconButton>
            </Tooltip>
            {showNotification && renderNotification}
            <Link to='/myprofile'>
              <ThemedButton
                startIcon={
                  <Avatar
                    src={userProfile.profilepicture}
                    alt='Remy Sharp'
                    onError={handleError}
                    style={{marginRight: 5}}
                  />
                }
                color={'white'}
                variant={'themed'}
                style={{borderRadius: 30, padding: 10}}
              >
                {/* TODO: replace with userProfile's first name */}
                <Box className='text-xbold text-lineheight-16 text-dark'>
                  <p>First Name</p>
                </Box>
              </ThemedButton>
            </Link>
          </Box>
        </Toolbar>
      </Nav.AppBarLoggedIn>
      <Nav.Drawer variant='permanent' open={open}>
        <Nav.DrawerHeader>
          <Link to='/dashboard'>
            <Box onClick={() => handleTabClick(0)} sx={BrandStyling}>
              <StarRoundedIcon
                className='icon-yellow'
                sx={{mr: 3, transform: 'scale(1.5)'}}
              />
              <h3
                className='text-italic text-yellow'
                style={{display: 'block', opacity: open ? 1 : 0}}
              >
                Tassel
              </h3>
            </Box>
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ?
              <ChevronRightIcon className='icon-gray-main' /> :
              <ChevronLeftIcon className='icon-gray-main' />
            }
          </IconButton>
        </Nav.DrawerHeader>
        <List>
          {pages.map((arr, index) => {
            const [label, route, icon] = arr;
            return (
              <Link key={label} to={route}>
                <ListItemButton
                  onClick={() => handleTabClick(index)}
                  sx={ListButtonStyling}
                >
                  <ListItemIcon
                    sx={{
                      ...ListIconStyling,
                      mr: open ? 3 : 'auto',
                      color: index === tabIndex ? '#7E8694' : '#C0C4CB',
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      ...ListTextStyling,
                      '.MuiTypography-root': {
                        ...ListTextStyling['.MuiTypography-root'],
                        'color': index === tabIndex ? '#7E8694' : '#A4A9AF',
                      },
                      'opacity': open ? 1 : 0,
                    }}
                  >
                    {label}
                  </ListItemText>
                </ListItemButton>
              </Link>
            );
          })}
          <Box
            className='indicator'
            sx={{top: `calc(8px + ${tabIndex*48}px)`}}
          />
        </List>
        <Box sx={LogoutStyling}>
          <List>
            <ListItemButton onClick={handleLogout} sx={ListButtonStyling}>
              <ListItemIcon sx={{...ListIconStyling, mr: open ? 3 : 'auto'}}>
                <LogoutIcon className='icon-gray-main' />
              </ListItemIcon>
              <ListItemText sx={{...ListTextStyling, 'opacity': open ? 1 : 0}}>
                Logout
              </ListItemText>
            </ListItemButton>
          </List>
        </Box>
      </Nav.Drawer>
    </>
  );
}
