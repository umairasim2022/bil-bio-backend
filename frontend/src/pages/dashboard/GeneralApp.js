// react 
import { Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button, Box } from '@mui/material';
// hooks
import axios from "axios";
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// _mock_
import { _appFeatured, _appAuthors, _appInstalled, _appRelated, _appInvoices } from '../../_mock';
// components
import Page from '../../components/Page';
// sections

import { Dashboardhero, LinkMainTitle, TotalLinksList } from '../../sections/@dashboard';
// assets
import { SeoIllustration } from '../../assets';

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  // const logout = async () => {
  //   try {
  //     const response = await axios.get('/api/user/dashboard');
  //     console.log('dashresp', response )
  //     console.log(response.data.error);
  //     if (response.data.error) {
  //       navigate('/');
  //     }
  //     //  else {
  //     //   navigate('/dashboard');
  //     // }
  //   } catch (error) {
  //     if (error.response) {
  //       console.log('hsadjasdj');
  //     }
  //   }

  // }
  // useEffect(() => {
  //   logout()

  // }, []);
  const { themeStretch } = useSettings();

  return (
    <Box >
      <Dashboardhero />
      <LinkMainTitle />
      <TotalLinksList />
      <Outlet />
    </Box>
  );
}
