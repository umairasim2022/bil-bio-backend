// react 
import { Outlet } from 'react-router-dom';

// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button, Box } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// _mock_
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from '../../_mock';
// components
import Page from '../../components/Page';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
  DashBoardHome

} from '../../sections/@dashboard/general/app';
import { Dashboardhero , LinkMainTitle, TotalLinksList } from '../../sections/@dashboard';
// assets
import { SeoIllustration } from '../../assets';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();

  const theme = useTheme();

  const { themeStretch } = useSettings();

  return (
    <Box >
    <Dashboardhero/>
    <LinkMainTitle/>
    <TotalLinksList/>
    <Outlet/>
    </Box>
  );
}
