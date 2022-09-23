// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
  HomeQrCode,
  HomeBuiltInAnalytics,
  HomeReview,
  HomeCategory,
} from '../sections/home';
import MainFooter from '../layouts/main/MainFooter'

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Home">
      <HomeHero />

      <ContentStyle>
        <HomeHugePackElements />

        <HomeDarkMode />

        {/* <HomeColorPresets /> */}
        <HomeQrCode />
        <HomeBuiltInAnalytics />
        <HomeReview />

        {/* <HomeCleanInterfaces /> */}
        <HomeCategory />

        <HomePricingPlans />
        <MainFooter/>

        {/* <HomeLookingFor /> */}

        {/* <HomeAdvertisement /> */}
      </ContentStyle>
    </Page>
  );
}
