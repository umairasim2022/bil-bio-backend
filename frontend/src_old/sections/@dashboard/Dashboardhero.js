import React from 'react';
// @mui

import { styled } from '@mui/material/styles';
import { Button, Box, Link, Container, Typography, Stack, Grid, Paper, Card } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';
import LinkIcon from '@mui/icons-material/Link';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LanguageTwoToneIcon from '@mui/icons-material/LanguageTwoTone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// ---------------------------------------------
const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(15, 0),
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(15, 5),
  },
}));

const data = [
  {
    linkType: 'biolink',
    count: 6,
    icon: <TagIcon />,
    title: 'Total Biolinks',
  },
  {
    linkType: 'link',
    count: 5,
    icon: <LinkIcon />,
    title: 'Total links',
  },
  {
    linkType: 'file',
    count: 4,
    icon: <InsertDriveFileIcon />,
    title: 'Total Files',
  },
  {
    linkType: 'Vcard',
    count: 10,
    icon: <CreditCardIcon />,
    title: 'Total Vcard Link',
  },
  {
    linkType: 'qr',
    count: 20,
    icon: <QrCodeIcon />,
    title: 'Total Qrcodes',
  },
  {
    linkType: 'domain',
    count: 10,
    icon: <LanguageTwoToneIcon />,
    title: 'Total Domains',
  },
];

function Dashboardhero() {
  const [linkData, setLinkData] = React.useState(data);
  return (
    <RootStyle>

      <Container>
      <Box >
        <Grid container gap='30px' sx={{ display: 'flex',  justifyContent:'space-between' , alignItems: 'center' }}>
          {linkData.map((data) => {
            return (
              <Grid item xs={12} sm={12} md={3.7} component={Card} style={{border:'1px solid  rgb(122, 122, 122 , .3)'  , borderRadius:'.25rem'}}>
                <Stack direction="row" gap="15px" padding="1.5rem 3rem 1.5rem 1rem">
                  <Box
                    sx={{
                      background: '#d1fff6',
                      height: '50px',
                      width: '50px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius:'4px'
                    }}
                  >
                    <Box sx={{ color: '#38B2AC' , paddingTop:'3px' }}>{data.icon}</Box>
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{fontWeight:'500'}}>{data.count}</Typography>
                    <Typography variant="subtitle2" style={{ color: 'rgb(122, 122, 122)' }}>
                      {data.title}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      </Container>
      
    </RootStyle>
  );
}

export default Dashboardhero;
