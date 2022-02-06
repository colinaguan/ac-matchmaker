
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';

import { Link } from 'react-router-dom';

import logo from '../assets/ucsc.svg';
import '../css/NavBar.css';

const NavBar = ({loggedIn, setLoggedIn}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfileOpen = () => {
    // TODO
    handleMenuClose();
  }

  const handleLogOut = () => {
    // TODO
    setLoggedIn(false);
    handleMenuClose();
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // MENU FOR PROFILE
  const menuId = 'profile-menu';
  const renderMenu = (
    <Menu
      className = "profile_menu"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    {!loggedIn && 
        <div>
            <Link className='link' to="/login">
                <MenuItem>Log In</MenuItem>
            </Link>
            <Link className='link' to="/signup">
                <MenuItem>Sign up</MenuItem>
            </Link>
        </div>
    }
    {loggedIn && 
        <div>
            <Link className='link' to="/myprofile">
                <MenuItem onClick={handleProfileOpen}>My Profile</MenuItem>
            </Link>
            {/* TODO: probably don't want to immediately redirect to landing page */}
            <Link className='link' to="/">
                <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
            </Link>
        </div>
    }

    </Menu>
  );

  // MOBILE MENU
  const mobileMenuId = 'navbar-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link className='link' to="/browse">
        <MenuItem>
          <IconButton size="large" color="inherit">
            <PersonSearchIcon />
          </IconButton>
          <p>Browse</p>
        </MenuItem>
      </Link>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new messages"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ChatBubbleIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="profile-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // FULL NAVBAR
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
        <Link className='link' to="/">
           <img className='logo' src={logo} alt="ucsc_logo"></img> 
        </Link>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* browse button */}
            <Link className='link' to="/browse">
              <Tooltip className="link-displace" title="Browse">
                <IconButton size="large" color="inherit">
                  <PersonSearchIcon />
                </IconButton>
              </Tooltip>
            </Link>
            {/* messages button */}
            <Tooltip title="Messages">
              <IconButton
                size="large"
                aria-label="show 17 new messages"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <ChatBubbleIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            {/* notification button */}
            <Tooltip title="Notifications">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            {/* account icon */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt="Remy Sharp"/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default NavBar