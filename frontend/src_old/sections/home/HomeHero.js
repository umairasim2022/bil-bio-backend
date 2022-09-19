import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, Grid } from '@mui/material';
// routes
// import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import TextIconLabel from '../../components/TextIconLabel';
import { MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  background:
    'linear-gradient(125.95deg, #C700BF 10.95%, #7DA900 100%), linear-gradient(341.1deg, #00C2FF 7.52%, #4E00B1 77.98%), linear-gradient(222.34deg, #A90000 12.99%, #00FFE0 87.21%), linear-gradient(130.22deg, #8FA600 18.02%, #5A31FF 100%)',
  backgroundBledeMode: 'screen, color-dodge, color-dodge, normal',
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    paddingTop: '6rem',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  height: '100%',
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
    paddingTop: '16rem',
    paddingLeft: '2rem',
  },
  [theme.breakpoints.down('md')]: {
    margin: 'unset',
    textAlign: 'justify',
    width: '100%',
    paddingTop: '10rem',
    paddingLeft: '1rem',
    paddingBottom: '20px',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// const HeroImgStyle = styled(m.img)(({ theme }) => ({
//   top: 0,
//   right: 0,
//   bottom: 0,
//   zIndex: 8,
//   width: '100%',
//   margin: 'auto',
//   position: 'absolute',
//   [theme.breakpoints.up('lg')]: {
//     right: '8%',
//     width: 'auto',
//     height: '48vh',
//   },
// }));

// ----------------------------------------------------------------------

export default function HomeHero() {
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle alt="overlay" src="/assets/overlay.svg" variants={varFade().in} />

        {/* <HeroImgStyle
          alt="hero"
          src="https://minimal-assets-api-dev.vercel.app/assets/images/home/hero.png"
          variants={varFade().inUp}
        /> */}

        <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <ContentStyle sx={{ md: { paddingX: 10 }, paddingTop: 50, paddingBottom: 25 }}>
            <m.div variants={varFade().inRight}>
              <Typography variant="h1" sx={{ color: 'common.white' }}>
                Do everything <br />
                with one <br />
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  &nbsp;platform.
                </Typography>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography sx={{ color: 'common.white' }}>
                Shorten URLs, create bio link pages, custom QR codes, vcard links, file links & more.
              </Typography>
            </m.div>

            {/* <Stack spacing={2.5} alignItems="center" direction={{ xs: 'column', md: 'row' }}>
              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  icon={
                    <Image
                      alt="sketch icon"
                      src="https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_sketch_small.svg"
                      sx={{ width: 20, height: 20, mr: 1 }}
                    />
                  }
                  value={
                    <Link
                      href="https://www.sketch.com/s/76388a4d-d6e5-4b7f-8770-e5446bfa1268"
                      target="_blank"
                      rel="noopener"
                      color="common.white"
                      sx={{ typography: 'body2' }}
                    >
                      Preview Sketch
                    </Link>
                  }
                />
              </m.div>

              <m.div variants={varFade().inRight}>
                <TextIconLabel
                  icon={
                    <Image
                      alt="sketch icon"
                      src="https://minimal-assets-api-dev.vercel.app/assets/images/home/ic_figma_small.svg"
                      sx={{ width: 20, height: 20, mr: 1 }}
                    />
                  }
                  value={
                    <Link
                      href="https://www.figma.com/file/sI9fbKHIqlikUtfYCPb9lj/%5BPreview%5D-Minimal-Web.03.07.22?node-id=0%3A10803"
                      target="_blank"
                      rel="noopener"
                      color="common.white"
                      sx={{ typography: 'body2' }}
                    >
                      Preview Figma
                    </Link>
                  }
                />
              </m.div>
            </Stack> */}

            <m.div variants={varFade().inUp}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to='/dashboard'
                
                sx={{
                  boxShadow: 'none',
                  textAlign: 'center',
                  padding:'20px 40px' , 
                  fontSize:'18px',
                  display: { sm: 'inline', xs: 'block', width: '100%' },
                }}
                // startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
              >
                Get Started
              </Button>
            </m.div>
          </ContentStyle>
          <Stack
            sx={{
              display: { md: 'block', xs: 'none' },
              zIndex: 12121,
              width: '50%',
              height: 600,
              paddingTop: '2rem',
            }}
          >
            <m.div variants={varFade().inRight}>
              <img
                sx={{ zIndex: 1222  , width:'100%' , height:'90%'}}
                src="https://66biolinks.com/demo/themes/altum/assets/images/hero.png"
                alt="hero"
                
              />
            </m.div>
          </Stack>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
