import * as React from 'react';
// import {styled, useTheme} from '@mui/material/styles';
// import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import ThemedButton from '../components/ThemedButton';
import PersonIcon from '@mui/icons-material/Person';
import {
  DrawerHeader,
  AppBar,
} from './NavBarComponents';

const drawerWidth = 240;

/**
 * the drawer component
 * @return {*} Drawer Component
 */
export default function NavBarLoggedOut() {
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: 'white',
          borderBottom: '0.5px solid #D1D1D1',
          boxShadow: '0',
          ml: {sm: `${drawerWidth}px`},
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="secondary"
            style={{fontWeight: 600, fontStyle: 'italic'}}
          >
              Tassel
          </Typography>
          <Box sx={{flexGrow: 1}} />
          <Box sx={{display: {xs: 'none', md: 'flex'}}}>
            <ThemedButton
              startIcon={<PersonIcon />}
              color={'gray'}
              variant={'cancel'}
              type={'submit'}
            >
                Login
            </ThemedButton>
            <ThemedButton
              color={'yellow'}
              variant={'gradient'}
              type={'submit'}
              style={{marginLeft: '1rem'}}
            >
                Join Now
            </ThemedButton>
          </Box>
        </Toolbar>
      </AppBar>
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
