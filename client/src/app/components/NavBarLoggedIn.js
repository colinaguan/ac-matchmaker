import * as React from 'react';
import {useTheme} from '@mui/material/styles';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  drawerWidth,
  DrawerHeader,
  Drawer,
  AppBar,
} from './NavBarComponents';

/**
 * the drawer component
 * @return {*} Drawer Component
 */
export default function NavBarLoggedIn() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const pages = [
    ['Dashboard', '/dashboard', <DashboardIcon key='Dashboard'/>],
    ['Opportunities', '/opportunities', <EventIcon key='Opportunities'/>],
    ['Settings', '/settings', <SettingsIcon key='Settings'/>],
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          background: 'white',
          borderBottom: '0.5px solid #D1D1D1',
          boxShadow: '0',
          ml: {sm: `${drawerWidth}px`},
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && {display: 'none'}),
            }}
          >
            <MenuIcon />
          </IconButton>
          {
            !open &&
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="secondary"
              style={{fontWeight: 600, fontStyle: 'italic'}}
            >
              Tassel
            </Typography>
          }
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="secondary"
            style={{
              fontWeight: 600,
              fontStyle: 'italic',
              position: 'absolute',
              left: 0,
              paddingLeft: '24px',
            }}
          >
            Tassel
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {
               theme.direction === 'rtl' ?
               <ChevronRightIcon /> : <ChevronLeftIcon />
            }
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {pages.map((arr, index) => {
            const [label, route, icon] = arr;
            return (
              <Link key={label} to={route}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={{opacity: open ? 1 : 0}}
                    style={{fontWeight: 600}}
                  />
                </ListItemButton>
              </Link>
            );
          })}
        </List>
        <div style={{position: 'absolute', bottom: 0, width: '100%'}}>
          <Divider/>
          <List>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{opacity: open ? 1 : 0}}
                style={{fontWeight: 600}}
              />
            </ListItemButton>
          </List>
        </div>
      </Drawer>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor puru
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus
          Convallis convallis tellus id interdum velit laoreet id donec ultrices
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis vi
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermen
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lob
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec
          sapien faucibus et molestie ac.
        </Typography>
      </Box>
    </Box>
  );
}
