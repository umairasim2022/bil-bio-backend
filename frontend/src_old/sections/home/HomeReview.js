// mui
import styled from '@emotion/styled';
import { Box, Container, Stack, Typography, Paper, Grid } from '@mui/material';

// _____________- component styles _______
const Rootstyle = styled(Box)(({ theme }) => ({
  background:
    'linear-gradient(125deg, #ECFCFF 0%, #ECFCFF 40%, #B2FCFF calc(40% + 1px), #B2FCFF 60%, #5EDFFF calc(60% + 1px), #5EDFFF 72%, #3E64FF calc(72% + 1px), #3E64FF 100%)',
  backgroundSize: 'cover',
  padding: '70px 50px',
}));

const ReviewSection = styled(Paper)(({ theme }) => ({
  padding: '30px 70px',
  display: 'flex',
  flexDirection: 'column',
  alignItems:"center",
  justifyContent:"center",
  gap: '10px',
  elavation: '10',
  variant: 'outlined',
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(3),
    },
}));

const HomeReview = () => {
  return (
    <Rootstyle>
      <Container>
        <Grid container display=" flex" justifyContent="space-around" alignItems="center">
          <Grid item xs={12} md={3}>
            <ReviewSection variant="outlined" square elavation={10}>
              <Typography variant="h6" fontWeight="600" style={{ color: 'rgb(122, 122, 122)' }}>
                links
              </Typography>
              <Typography variant="h4">28123+</Typography>
            </ReviewSection>
          </Grid>
          <Grid item xs={12} md={3}>
            <ReviewSection variant="outlined" square elavation={10}>
              <Typography variant="h6" fontWeight="600" style={{ color: 'rgb(122, 122, 122)' }}>
                QrCodes
              </Typography>
              <Typography variant="h4">28+</Typography>
            </ReviewSection>
          </Grid>
          <Grid item xs={12} md={3}>
            <ReviewSection variant="outlined" square elavation={10}>
              <Typography variant="h6" fontWeight="600" style={{ color: 'rgb(122, 122, 122)' }}>
                pageview
              </Typography>
              <Typography variant="h4">23456+</Typography>
            </ReviewSection>
          </Grid>
        </Grid>
      </Container>
    </Rootstyle>
  );
};

export default HomeReview;
