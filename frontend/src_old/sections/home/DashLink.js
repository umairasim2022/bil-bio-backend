// import React from 'react';
// import { alpha, useTheme, styled } from '@mui/material/styles';

// import { Box, Grid, Button, Container, Typography, Stack , MenuItem, Avatar , Menu , Divider , IconButton, Tooltip , PersonAdd, Settings, Logout} from '@mui/material';

// // // routes
// import { PATH_AUTH, PATH_PAGE } from '../../routes/paths';
// import Logo from '../../components/Logo';

// // components


// const RootStyle = styled('div')(({ theme }) => ({
//   padding: theme.spacing(10, 0),
// }));
// const DashLink = () => {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//       s
//   return (
//     <Container>
//       <RootStyle>
//         <Stack>
//           <Logo />
//         </Stack>
//         <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
//         <Typography sx={{ minWidth: 100 }}>Contact</Typography>
//         <Typography sx={{ minWidth: 100 }}>Profile</Typography>
//         <Tooltip title="Account settings">
//           <IconButton
//             onClick={handleClick}
//             size="small"
//             sx={{ ml: 2 }}
//             aria-controls={open ? 'account-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//           >
//             <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
//           </IconButton>
//         </Tooltip>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         PaperProps={{
//           elevation: 0,
//           sx: {
//             overflow: 'visible',
//             filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//             mt: 1.5,
//             '& .MuiAvatar-root': {
//               width: 32,
//               height: 32,
//               ml: -0.5,
//               mr: 1,
//             },
//             '&:before': {
//               content: '""',
//               display: 'block',
//               position: 'absolute',
//               top: 0,
//               right: 14,
//               width: 10,
//               height: 10,
//               bgcolor: 'background.paper',
//               transform: 'translateY(-50%) rotate(45deg)',
//               zIndex: 0,
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem>
//           <Avatar /> Profile
//         </MenuItem>
//         <MenuItem>
//           <Avatar /> My account
//         </MenuItem>
//         <Divider />
//         <MenuItem>
//           <ListItemIcon>
//             <PersonAdd fontSize="small" />
//           </ListItemIcon>
//           Add another account
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//           </ListItemIcon>
//           Logout
//         </MenuItem>
//       </Menu>
//       </RootStyle>
//     </Container>
//   );
// };

// export default DashLink;
