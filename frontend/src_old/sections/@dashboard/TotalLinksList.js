import React from 'react';
import TagIcon from '@mui/icons-material/Tag';
import LinkIcon from '@mui/icons-material/Link';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LanguageIcon from '@mui/icons-material/Language';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
} from '@mui/material';

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 10),
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(15, 5),
  },
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
function TotalLinksList() {

  return (
    <RootStyle>
         <Container>
      <Box mt={4} sx={{ border: '1px solid grey', padding: 4, background:'#131416' }}>
        <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems='center' width='50%'>
          <Box sx={{ background: '#383eb2',display:'flex', alignItems:'center', justifyContent:'center', padding:'4px'}} borderRadius="50%">
            <TagIcon sx={{ fontSize:'1.6rem'}} />
          </Box>

          <Box ml={3}>
            <Typography>King</Typography>
            <Stack direction="row" >
              <Box>
                <LinkIcon/>
              </Box>
              <Box>
                <Link to="https://www.google.com" ml={1} sx={{ color:'#6e6e6e', textDecoration:'none' }}>
                 https://www.google.com
                </Link>
              </Box>
            </Stack>
          </Box>
          </Stack>
         
          <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ width:'50%' }}>
          <Box  sx={{ background: '#4c5967', borderRadius:'10%' }}>
              <Stack direction="row" justifyContent='center' pl='4px' pr='4px' >
                <InsertChartIcon sx={{paddingRight:'6px', color:'#f0f2f4' }}/>
                <Typography sx={{ color:'#f0f2f4' }}>1</Typography>
              </Stack>
              </Box>
              
          <Stack direction="row" alignItems='center' >
            <CalendarMonthIcon sx={{ color:'#6e6e6e', fontSize:'.875em' }}/>
           
              <Typography sx={{ color:'#6e6e6e', fontSize:'80%' }} ml={1}>25th August,2022</Typography>
         
          </Stack>
          <Stack direction="row" alignItems='center'>
            <AntSwitch defaultChecked sx={{ mr:3, border:'gray solid 1px', borderColor:'#41aaa5', borderRadius:'0.5rem'}}  inputProps={{ 'aria-label': 'ant design' }}  />
            <FileCopyIcon sx={{ color:'#6e6e6e', fontSize:'.875em' }}/>
            <MoreVertIcon sx={{ ml:3, color:'#6e6e6e' }} />
          </Stack>
        </Stack>
        </Stack>
      </Box>

      <Box mt={4} sx={{ border: '1px solid grey', padding: 4, background:'#131416' }}>
        <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems='center' width='50%'>
          <Box sx={{ background: '#383eb2',display:'flex', alignItems:'center', justifyContent:'center', padding:'4px'}} borderRadius="50%">
            <TagIcon sx={{ fontSize:'1.6rem'}} />
          </Box>

          <Box ml={3}>
            <Typography>King</Typography>
            <Stack direction="row" >
              <Box>
                <LinkIcon/>
              </Box>
              <Box>
                <Link to="https://www.google.com" ml={1} sx={{ color:'#6e6e6e', textDecoration:'none' }}>
                 https://www.google.com
                </Link>
              </Box>
            </Stack>
          </Box>
          </Stack>
         
          <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ width:'50%' }}>
          <Box  sx={{ background: '#4c5967', borderRadius:'10%' }}>
              <Stack direction="row" justifyContent='center' pl='4px' pr='4px' >
                <InsertChartIcon sx={{paddingRight:'6px', color:'#f0f2f4' }}/>
                <Typography sx={{ color:'#f0f2f4' }}>1</Typography>
              </Stack>
              </Box>
              
          <Stack direction="row" alignItems='center' >
            <CalendarMonthIcon sx={{ color:'#6e6e6e', fontSize:'.875em' }}/>
           
              <Typography sx={{ color:'#6e6e6e', fontSize:'80%' }} ml={1}>25th August,2022</Typography>
         
          </Stack>
          <Stack direction="row" alignItems='center'>
            <AntSwitch defaultChecked sx={{ mr:3, border:'gray solid 1px', borderColor:'#41aaa5', borderRadius:'0.5rem'}}  inputProps={{ 'aria-label': 'ant design' }}  />
            <FileCopyIcon sx={{ color:'#6e6e6e', fontSize:'.875em' }}/>
            <MoreVertIcon sx={{ ml:3, color:'#6e6e6e' }} />
          </Stack>
        </Stack>
        </Stack>
      </Box>

      <Box mt={4} sx={{ border: '1px solid grey', padding: 4, background:'#131416' }}>
        <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems='center' width='50%'>
          <Box sx={{ background: '#383eb2',display:'flex', alignItems:'center', justifyContent:'center', padding:'4px'}} borderRadius="50%">
            <TagIcon sx={{ fontSize:'1.6rem'}} />
          </Box>

          <Box ml={3}>
            <Typography>King</Typography>
            <Stack direction="row" >
              <Box>
                <LinkIcon/>
              </Box>
              <Box>
                <Link to="https://www.google.com" ml={1} sx={{ color:'#6e6e6e', textDecoration:'none' }}>
                 https://www.google.com
                </Link>
              </Box>
            </Stack>
          </Box>
          </Stack>
         
          <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ width:'50%' }}>
          <Box  sx={{ background: '#4c5967', borderRadius:'10%' }}>
              <Stack direction="row" justifyContent='center' pl='4px' pr='4px' >
                <InsertChartIcon sx={{paddingRight:'6px', color:'#f0f2f4' }}/>
                <Typography sx={{ color:'#f0f2f4' }}>1</Typography>
              </Stack>
              </Box>
              
          <Stack direction="row" alignItems='center' >
            <CalendarMonthIcon sx={{ color:'#6e6e6e', fontSize:'.875em' }}/>
           
              <Typography sx={{ color:'#6e6e6e', fontSize:'80%' }} ml={1}>25th August,2022</Typography>
         
          </Stack>
          <Stack direction="row" alignItems='center'>
            <AntSwitch defaultChecked sx={{ mr:3, border:'gray solid 1px', borderColor:'#41aaa5', borderRadius:'0.5rem'}}  inputProps={{ 'aria-label': 'ant design' }}  />
            <FileCopyIcon sx={{ color:'#6e6e6e', fontSize:'.875em' }}/>
            <MoreVertIcon sx={{ ml:3, color:'#6e6e6e' }} />
          </Stack>
        </Stack>
        </Stack>
      </Box>

      <Box mt={4} sx={{ border: '1px solid grey', padding: 4, background:'#131416' }}>
        <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems='center' width='50%'>
          <Box sx={{ background: '#383eb2',display:'flex', alignItems:'center', justifyContent:'center', padding:'4px'}} borderRadius="50%">
            <TagIcon sx={{ fontSize:'1.6rem'}} />
          </Box>

          <Box ml={3}>
            <Typography>King</Typography>
            <Stack direction="row" >
              <Box>
                <LinkIcon/>
              </Box>
              <Box>
                <Link to="https://www.google.com" ml={1} sx={{ color:'#6e6e6e', textDecoration:'none' }}>
                 https://www.google.com
                </Link>
              </Box>
            </Stack>
          </Box>
          </Stack>
         
          <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ width:'50%' }}>
          <Box  sx={{ background: '#4c5967', borderRadius:'10%' }}>
              <Stack direction="row" justifyContent='center' pl='4px' pr='4px' >
                <InsertChartIcon sx={{paddingRight:'6px', color:'#f0f2f4' }}/>
                <Typography sx={{ color:'#f0f2f4' }}>1</Typography>
              </Stack>
              </Box>
              
          <Stack direction="row" alignItems='center' >
            <CalendarMonthIcon sx={{ color:'#6e6e6e', fontSize:'.875em' }}/>
           
              <Typography sx={{ color:'#6e6e6e', fontSize:'80%' }} ml={1}>25th August,2022</Typography>
         
          </Stack>
          <Stack direction="row" alignItems='center'>
            <AntSwitch defaultChecked sx={{ mr:3, border:'gray solid 1px', borderColor:'#41aaa5', borderRadius:'0.5rem'}}  inputProps={{ 'aria-label': 'ant design' }}  />
            <FileCopyIcon sx={{ color:'#6e6e6e', fontSize:'.875em' }}/>
            <MoreVertIcon sx={{ ml:3, color:'#6e6e6e' }} />
          </Stack>
        </Stack>
        </Stack>
      </Box>
    </Container>
    </RootStyle>
  );
}

export default TotalLinksList;
