// import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Grid, Link, Divider, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import Logo from '../../components/Logo';
import SocialsButton from '../../components/SocialsButton';


// ----------------------------------------------------------------------


const LINKS = [
  {
    headline: 'Minimal',
    children: [
      { name: 'About us', href: PATH_PAGE.about },
      { name: 'Contact us', href: PATH_PAGE.contact },
      { name: 'FAQs', href: PATH_PAGE.faqs },
    ],
  },
  {
    headline: 'Legal',
    children: [
      { name: 'Terms and Condition', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    headline: 'Contact',
    children: [
      { name: 'support@minimals.cc', href: '#' },
      { name: 'Los Angeles, 359  Hidden Valley Road', href: '#' },
    ],
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

const Footer = styled(Grid)(({theme})=>({
  display:'flex',

  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));

const ResponsiveFooter = styled(Grid)(({theme})=>({
  display:'none',
  
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
}));

const UserLogo = styled(Grid)(({theme})=>({
    display:'none',
    [theme.breakpoints.up("sm")]:{
      display:'flex'
    }
}));

const UserLogo1 = styled(Grid)(({theme})=>({
  display:'flex',
  [theme.breakpoints.up("sm")]:{
    display:'none'
  }
}))

// ----------------------------------------------------------------------

export default function MainFooter() {
  return (
    <RootStyle>
      <Divider />

      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          <UserLogo item xs={12} md={3}  sx={{ mb: 3 }} >
            <Logo  sx={{ mx: { xs: 'left', md: 'inherit' } }} />
          </UserLogo>

          <UserLogo1 item xs={12} sx={{ mb: 3 }} ml={1}>
            <Logo  sx={{ mx: { xs: 'left' } }} />
          </UserLogo1>

          <Footer xs={12}>
            <Grid container xs={12}>
              <Grid item xs={12} ml={1}>
                <Typography align="left">Copyright © 2022 bil.bio</Typography>
              </Grid>
            </Grid> 
            </Footer>

            <ResponsiveFooter  md={12} sm={12} >
            <Grid container md={12} sm={12}>
              <Grid item md={12} sm={12} >
                <Typography align="left">Copyright © 2022 bil.bio</Typography>
              </Grid>
            </Grid> 
            </ResponsiveFooter>

          <Footer xs={12}>          
            <Grid container xs={12}>
              <Grid item xs={12} align='left' ml={1} sx ={{display:{ xs:'left', sm:'left' }}}>
                <Link>Terms of Service</Link>
              </Grid>
              </Grid>
            </Footer>

            <Footer xs={12}>
              <Grid container xs={12}>
              <Grid item xs={12} align="left" ml={1} sx ={{display:{ xs:'left', sm:'left' }}}>
                <Link>Who are we?</Link>
              </Grid>
              </Grid>
              </Footer>

              <Footer xs={12}>
              <Grid container xs={12}>
              <Grid item xs={12} textAlign='left' >
                <Stack direction="row" justifyContent="flex-start"  sx ={{display:{ xs:'left', sm:'left' }}}>
                  <SocialsButton/>
                </Stack>
                </Grid>
              </Grid>          

              {/* </Grid> */}
            {/* </Grid> */}
            </Footer>
               
            <ResponsiveFooter md={12} sm={12} >
            <Grid container md={12} sm={12}>
              <Grid item md={2} sm={3} textAlign="left" sx ={{display:{ xs:'left', sm:'left' }}}>
                <Link>Terms of Servicess</Link>
              </Grid>

              <Grid item md={2} sm={3} textAlign="left" sx ={{display:{ xs:'left', sm:'left' }}}>
                <Link>Who are we?</Link>
              </Grid>

              <Grid item md={8} sm={6}>
                <Stack direction="row" display='flex' justifyContent='end' sx ={{display:{ xs:'left', sm:'left' }}}>
                  <SocialsButton/>
                </Stack>
           
              </Grid>
              

            </Grid>

              </ResponsiveFooter>
            
          {/* </Grid> */}

          {/* <Grid item xs={12} md={7}>
            <Stack spacing={5} direction={{ xs: 'column', md: 'row' }} justifyContent="space-between">
              {LINKS.map((list) => (
                <Stack key={list.headline} spacing={2}>
                  <Typography component="p" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      to={link.href}
                      key={link.name}
                      color="inherit"
                      variant="body2"
                      component={RouterLink}
                      sx={{ display: 'block' }}
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid> */}
        </Grid>

        <Typography
          component="p"
          variant="body2"
          sx={{
            mt: 10,
            pb: 5,
            fontSize: 13,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          © 2022. All rights reserved
        </Typography>
      </Container>
    </RootStyle>
  );
}
