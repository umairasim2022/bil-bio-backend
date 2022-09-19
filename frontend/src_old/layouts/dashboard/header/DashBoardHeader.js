import * as React from 'react';
// router 
import { Outlet } from 'react-router-dom';
// mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';


import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListItemText from '@mui/material/ListItemText';
import CodeIcon from '@mui/icons-material/Code';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CardMembershipIcon from '@mui/icons-material/CardMembership'
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import Tag from '@mui/icons-material/Tag';
import AddLinkIcon from '@mui/icons-material/AddLink';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeIcon from '@mui/icons-material/QrCode';
import ConstructionIcon from '@mui/icons-material/Construction';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import ContrastIcon from '@mui/icons-material/Contrast';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import BuildIcon from '@mui/icons-material/Build';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import StorageIcon from '@mui/icons-material/Storage';




// component
import Logo from '../../../components/Logo';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const DashBoardHeader = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
    <AppBar position="static" >
      <Toolbar disableGutters sx={{ background: '#161A38' }}>
        <Container
          maxWidth="xl"
          component="Box"
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Box sx={{ flexGrow: 1 }} noWrap component="a" href="/">
            <Logo />
          </Box>

          <Box sx={{ flexGrow: { xs: 1, sm: 0 } }}>
            <Button variant="text" sx={{ mr: 3 }}>
              Dashboard
            </Button>
              <IconButton onClick={handleOpenUserMenu}             disableElevation
            disableRipple
>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <Typography>username</Typography>

                  <ArrowDropDownIcon />
              </IconButton>
                      <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            <MenuList>
            <MenuItem>
              <ListItemIcon>
                <FingerprintIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Admin</ListItemText>
              </MenuItem>
            <Divider/>
            
            <MenuItem>
              <ListItemIcon>
                <Tag fontSize="small" />
              </ListItemIcon>
              <ListItemText>Biolinks</ListItemText>
             
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AddLinkIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Shortened links</ListItemText>
            
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <InsertDriveFileIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>File links</ListItemText>
              
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <CreditCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Vcard links</ListItemText>
              
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <QrCodeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>QR codes</ListItemText>
              
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ConstructionIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Tools</ListItemText>
              
            </MenuItem>

            <Divider />

            <MenuItem>
              <ListItemIcon>
                <LanguageTwoToneIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Custom Domains</ListItemText>
            </MenuItem>
          </MenuList>
          <MenuItem>
              <ListItemIcon>
                <ContrastIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Pixels</ListItemText>
              
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <StorageIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Data</ListItemText>
              
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AccountTreeIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
             
            </MenuItem>

            <Divider/>
              
            <MenuItem>
            <ListItemIcon>
              <BuildIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </MenuItem>
        <MenuItem>
            <ListItemIcon>
              <CardMembershipIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Plan</ListItemText>
           
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
            <AttachMoneyIcon fontSize='small'/>
            </ListItemIcon>
            <ListItemText>Payments</ListItemText> 
              
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
            <CodeIcon/>
            </ListItemIcon>
            <ListItemText>API</ListItemText>
            
          </MenuItem>

          <Divider/>

          <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
          
        </MenuItem>
            </Menu>
      
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
    <Outlet/>

    </>

  );
};
export default DashBoardHeader;
