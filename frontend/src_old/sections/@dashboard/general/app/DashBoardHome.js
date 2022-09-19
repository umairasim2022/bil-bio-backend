import React from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
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
import { padding } from '@mui/system';



const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  width:"100%"
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

export default function DashBoardHome () {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <RootStyle>
    <Container>
      <Grid
        container
        sm={12}
        xs={12}
        md={12}
        display="flex"
        justifyContent="space-between"
        flewWrap="wrap"
        alignItems="start"
        sx={{ width: '100%', gap: '10px' }}
      >
        <Grid item sx={{ border: '2px solid grey', padding: 3, borderRadius: '4', width: '32%' }}>
          <Stack direction="row" sx={{ display: 'flex' }}>
            <Box padding={2} sx={{borderRadius:'6px',  display:"flex" ,justifyContent:"end" ,alignItems:"center" ,  background: '#143036' }}>
              <TagIcon style={{ color: '#4dd1c4', fontSize:'1.8rem' }} />
            </Box>
            <Box ml={2}>
              <Typography>18</Typography>
              <Typography>Total Biolinks</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item sx={{ border: '2px solid grey', padding: 3, borderRadius: '4', width: '32%' }}>
          <Stack direction="row" sx={{ display: 'flex' }}>
            <Box padding={2} sx={{borderRadius:'6px', background: '#143036' }}>
              <LinkIcon style={{ color: '#4dd1c4', fontSize:'1.8rem' }} />
            </Box>
            <Box ml={2}>
              <Typography>18</Typography>
              <Typography>Total Links</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item sx={{ border: '2px solid grey', padding: 3, borderRadius: '4', width: '32%' }}>
          <Stack direction="row" sx={{ display: 'flex' }}>
            <Box padding={2} sx={{borderRadius:'6px', display:"flex" ,justifyContent:"end" ,alignItems:"center" , background: '#143036' }}>
              <InsertDriveFileIcon style={{ color: '#4dd1c4', fontSize:'1.8rem' }} />
            </Box>
            <Box ml={2}>
              <Typography>18</Typography>
              <Typography>Total File links</Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Grid
        container
        sm={12}
        xs={12}
        md={12}
        display="flex"
        justifyContent="space-between"
        flewWrap="wrap"
        alignItems="start"
        sx={{ width: '100%', marginTop: '20px' }}
      >
        <Grid item sx={{ border: '2px solid grey', padding: 3, borderRadius: '4', width: '32%' }}>
          <Stack direction="row" sx={{ display: 'flex' }}>
            <Box padding={2} sx={{borderRadius:'6px',  background: '#143036' }}>
              <CreditCardIcon style={{ color: '#4dd1c4', fontSize:'1.8rem' }} />
            </Box>
            <Box ml={2}>
              <Typography>18</Typography>
              <Typography>Total Vcard links</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item sx={{ border: '2px solid grey', padding: 3, borderRadius: '4', width: '32%' }}>
          <Stack direction="row" sx={{ display: 'flex' }}>
            <Box padding={2} sx={{borderRadius:'6px', background: '#143036' }}>
              <QrCodeIcon style={{ color: '#4dd1c4', fontSize:'1.8rem' }} />
            </Box>
            <Box ml={2}>
              <Typography>18</Typography>
              <Typography>Total QR codes</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item sx={{ border: '2px solid grey', padding: 3, borderRadius: '4', width: '32%' }}>
          <Stack direction="row" sx={{ display: 'flex' }}>
            <Box padding={2} sx={{borderRadius:'6px', background: '#143036' }}>
              <LanguageIcon style={{ color: '#4dd1c4', fontSize:'1.8rem' }} />
            </Box>
            <Box ml={2}>
              <Typography>18</Typography>
              <Typography>Total Domains</Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>

    <Container>
      <Box sx={{ border: '2px solid grey' }} mt={6}>
        <Grid ml={3}>
          <img src="download.png" alt="chart" />
        </Grid>
      </Box>
    </Container>

    <Container>
      <Grid container mt={7}>
        <Grid item md={6}>
          <Typography variant="h5">Links</Typography>
        </Grid>
        <Grid item md={6} justifyContent="end">
          <Stack direction="row" display="flex" justifyContent="end" alignItems="center">
            <Grid pr={3}>
              {/* <Button v>
             
              </Button> */}
              <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
      >
           <AddCircleIcon />
                &nbsp; Create Link
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Biolink Page</MenuItem>
        <MenuItem onClick={handleClose}>Shortened Url</MenuItem>
        <MenuItem onClick={handleClose}>File Link</MenuItem>
        <MenuItem onClick={handleClose}>VCard Link</MenuItem>

      </Menu>
            </Grid>
            <Grid pr={3}>
              <FileDownloadIcon />
            </Grid>
            <Grid>
              <FilterAltIcon />
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Container>

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
                <Link to="www.google.com" ml={1} sx={{ color:'#6e6e6e', textDecoration:'none' }}>
                 www.google.com
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
                <Link to="www.google.com" ml={1} sx={{ color:'#6e6e6e', textDecoration:'none' }}>
                 www.google.com
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
                <Link to="www.google.com" ml={1} sx={{ color:'#6e6e6e', textDecoration:'none' }}>
                 www.google.com
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
                <Link to="www.google.com" ml={1} sx={{ color:'#6e6e6e', textDecoration:'none' }}>
                 www.google.com
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
};

