// bioLink page
import { m } from 'framer-motion';
// import { MdGroups } from 'react-icons/md';
import { FaUsers, FaCheckCircle } from 'react-icons/fa';

// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Button, Container, Typography, Stack } from '@mui/material';
import List from '@mui/material/List';
// import Listitem from '@mui/material/Listitem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import StarIcon from '@mui/icons-material/Star';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0, 5, 0),
}));

// const ContentStyle = styled('div')(({ theme }) => ({
//   width: '100%',
//   textAlign: 'center',
//   marginBottom: theme.spacing(5),
//   [theme.breakpoints.up('md')]: {
//     textAlign: 'left',
//     marginBottom: 0,
//   },
// }));

const ScreenStyle = styled(Box)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  borderRadius: 8,
  width: '100%',
  // backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
  [theme.breakpoints.up('sm')]: {
    paddingRight: 4,
    borderRadius: 12,
    marginTop: 5,
    marginBottom: theme.spacing(10),
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(1),
  },
  '& img': {
    borderRadius: 8,
    [theme.breakpoints.up('sm')]: {
      borderRadius: 12,
    },
  },
}));

// const COMMON = {
//   scaleX: 0.86,
//   skewY: 8,
//   skewX: 0,
//   scaleY: 1,
//   translateX: 0,
//   translateY: 0,
//   opacity: 0,
// };

// const variantScreenLeft = {
//   initial: COMMON,
//   animate: { ...COMMON, translateX: '-50%', translateY: 40, opacity: 1 },
// };

// const variantScreenCenter = {
//   initial: COMMON,
//   animate: { ...COMMON, opacity: 1 },
// };

// const variantScreenRight = {
//   initial: COMMON,
//   animate: { ...COMMON, translateX: '50%', translateY: -40, opacity: 1 },
// };

// ----------------------------------------------------------------------

export default function HomeBuiltInAnalytics() {
  const theme = useTheme();

  // const isLight = theme.palette.mode === 'light';

  // const isRTL = theme.direction === 'rtl';

  // const screenLeftAnimate = variantScreenLeft;

  // const screenCenterAnimate = variantScreenCenter;

  // const screenRightAnimate = variantScreenRight;

  return (
    <MotionViewport disableAnimatedMobile={false}>
      <RootStyle>
        <Container>
          <ScreenStyle>
            <Grid container>
              <Grid
                item
                xs={12}
                md={7}
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ order: { sx: 1, md: 2 } }}
              >
                <img src="./assets/bio-link.png" alt="shorted" />
              </Grid>
              <Grid item xs={12} md={5} paddingTop="45px" sx={{ paddingLeft: { xs: 1, md: 4 } }}>
                {/* <Typography>icons</Typography> */}
                <Stack direction="column" sx={{ xs: { gap: '7px', md: '14px' } }}>
                  <Box
                    sx={{
                      width: '55px',
                      height: '55px',
                      background: '#E6FFFA',
                      borderRadius: '50%',
                      padding: '0px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <FaUsers fontSize="2rem" style={{ color: '#38B2AC' }} />
                  </Box>
                  <Typography variant="h3" sx={{ marginY: { md: '15px', color: 'primary.main' } }}>
                    Built-in analytics
                  </Typography>
                  <Typography variant="body1">
                    Day by day analytics, referrers, countries, operating systems, languages and many more.{' '}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </ScreenStyle>
        </Container>
      </RootStyle>
    </MotionViewport>
  );
}
