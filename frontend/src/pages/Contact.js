// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// import MainHeader from 'src/layouts/main/MainHeader';

// _mock
import { _mapContact } from '../_mock';
// components
import Page from '../components/Page';
import { ContactHero, ContactForm, ContactMap } from '../sections/contact';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <Page title="Contact us">
      <RootStyle>
        {/* <ContactHero /> */}
        {/* <MainHeader/> */}
        <Container sx={{ my: 10 }}>
              <ContactForm />
              <Grid container spacing={10}>

            <Grid item xs={12} md={6}>
              <ContactMap contacts={_mapContact} />
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
    </Page>
  );
}
