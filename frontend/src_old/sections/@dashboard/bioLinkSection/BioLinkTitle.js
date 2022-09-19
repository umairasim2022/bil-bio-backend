import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// components
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  Stack,
  styled,
  Avatar,
  alpha,
  MenuItem,
  Divider,
  Switch,
  Link,
  Menu,
  Fade,
  IconButton,
} from '@mui/material';
import { useTheme } from '@emotion/react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Iconify from '../../../components/Iconify';

const RootStyle = styled('div')(({ theme }) => ({
  // spacing from top bottom left right to the title container
  padding: theme.spacing(5, 30),
  width: '100%',
  //   background: theme.palette.background.paper,
  // [theme.breakpoints.down('md')]: {
  //   padding: theme.spacing(15, 5),
  // },
}));

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    mr: 4,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#41aaa5' : '#41aaa5',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

const BioLinkTitle = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        marginTop:'1.8rem',
        '.css-17ceore-MuiSvgIcon-root': {
          fontSize: '.8rem',
        },
      }}
    >
      <Grid item  xs={12} display="flex"  justifyContent="flex-start" alignItems="center" gap='10px'>
        <Link to="dashboard" underline="hover" component={RouterLink}>
          Link
        </Link>
        <ArrowForwardIosIcon />
        <Typography variant="body2">Biolink settings</Typography>
      </Grid>
      <Grid  item  xs={12} display='flex' justifyContent='space-between' alignItems='start' mt={3} >
        <Typography variant='body1'>randomtext</Typography>
        <Stack direction='row'  display='flex' justifyContent='space-between' alignItems='center'>
        <AntSwitch defaultChecked sx={{ mr:3, border:'gray solid 1px', borderColor:'#41aaa5', borderRadius:'0.5rem'}}  inputProps={{ 'aria-label': 'ant design' }}  />
        <FileCopyIcon sx={{ color:'#6e6e6e', fontSize:'.875em' }}/>
            <MoreVertIcon sx={{ ml:3, color:'#6e6e6e' }} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default BioLinkTitle;
