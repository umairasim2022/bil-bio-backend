// @mui
import { styled } from '@mui/material/styles';
import { Divider , Container, Card , Typography} from '@mui/material';
// components
import Page from '../components/Page';
import { AboutHero, AboutWhat, AboutTeam, AboutVision, AboutTestimonials } from '../sections/about';
import HomeHugePackElements from '../sections/home/HomeHugePackElements';
import HomeShort from '../sections/home/HomeShorted'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <Page title="About us">
      <RootStyle>
        <Container>
          <Card mt={6}>
            <Typography variant="h2" align="center" p={3}>
              About Us
            </Typography>
          </Card>
        </Container>
        <HomeHugePackElements />
         <HomeShort />
      </RootStyle>
    </Page>
  );
}
