// Making Responsive Navbar

// router
import { useLocation, Link as RouterLink , Outlet } from 'react-router-dom';

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack, Container, styled } from '@mui/material';

// icons ,react
import { FaSignInAlt } from 'react-icons/fa';
import { BsPlusLg } from 'react-icons/bs';

// // routes
import { PATH_AUTH, PATH_PAGE } from '../../routes/paths';
import Logo from '../../components/Logo';

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // sidebar
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ my: 3, display: 'flex', justifyContent: 'center' }}>
        <Logo />
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="text" component={RouterLink} to={PATH_PAGE.about}>
            About
          </Button>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="text" component={RouterLink} to={PATH_PAGE.contact}>
            Contact
          </Button>
        </ListItem>
        <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            variant="contained"
            size="small"
            disableElevation
            component={RouterLink}
            to={PATH_AUTH.login}
            sx={{
              my: 3,
              boxShadow: 'none',
            }}
          >
            <FaSignInAlt />
            &nbsp; Sign in
          </Button>
        </ListItem>
        <listItem sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
          target='_self'
            variant="contained"
            disableElevation
            component={RouterLink}
            to={PATH_AUTH.register}
            size="small"
            sx={{
              my: 3,
              boxShadow: 'none',
            }}
          >
            <BsPlusLg />
            Sign up
          </Button>
        </listItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar sx={{ background: 'background.default' }}>
        <Toolbar component="Box" sx={{ background: '#161A38' }}>
          <Container component="Box" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              <Logo />
            </Box>
            <Stack sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button variant="text" component={RouterLink} to={PATH_PAGE.about}>
                About
              </Button>
              <Button variant="text" component={RouterLink} to={PATH_PAGE.contact}>
                Contact
              </Button>

              <Button
                variant="contained"
                size="small"
                rel="noopener"
                disableElevation
                component={RouterLink}
                to={PATH_AUTH.login}
                // href="https://material-ui.com/store/items/minimal-dashboard/"
                sx={{
                  boxShadow: 'none',
                }}
              >
                <FaSignInAlt />
                &nbsp; Sign in
              </Button>
              <Button
                size="small"
                variant="contained"
                rel="noopener"
                disableElevation
                component={RouterLink}
                to={PATH_AUTH.register}
                sx={{
                  marginLeft: 2,
                  boxShadow: 'none',
                }}
              >
                <BsPlusLg />
                Sign up
              </Button>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet/>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func
};

export default DrawerAppBar;
