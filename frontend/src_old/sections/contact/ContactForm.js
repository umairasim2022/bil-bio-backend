import { m } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

// @mui
import { Button, Typography, TextField, Stack, Grid, Card, Box } from '@mui/material';
// components
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

export default function ContactForm() {
  return (
    <Grid container justifyContent="space-between" sx={{ marginTop: '-60px' }}>
      <Grid item xs={12}>
        <Card sx={{ marginBottom: '2rem', padding: '2rem' }}>
          <Typography textAlign="center" variant="h2">
            Contact Us
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <m.div variants={varFade().inUp}>
          <Typography variant="h5" sx={{ paddingBottom: '20px' , textAlign:"center" }}>
            Feel free to contact us
          </Typography>
          <Stack
            direction="row"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
            }}
          >
            <Box
              style={{
                width: '118px',
                height: '50px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                color: '#000',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
              }}
            >
              <FaMapMarkerAlt />
            </Box>

            <Box sx={{ paddingTop: 5 }}>
              <Typography variant="h6" sx={{ color: '#eb34e8' }}>
                Adress
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum ratione placeat sint distinctio
                quidem
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction="row"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
            }}
          >
            <Box
              style={{
                width: '118px',
                height: '50px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                color: '#000',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
              }}
            >
              <FaPhoneAlt />
            </Box>

            <Box sx={{ paddingTop: 5 }}>
              <Typography variant="h6" sx={{ color: '#eb34e8' }}>
                Phone
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum ratione placeat sint distinctio
                quidem
              </Typography>
            </Box>
          </Stack>
          <Stack
            direction="row"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              style={{
                width: '118px',
                height: '50px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                color: '#000',
                fontSize: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '15px',
              }}
            >
              <FiMail />
            </Box>

            <Box sx={{ paddingTop: 5 }}>
              <Typography variant="h6" sx={{ color: '#eb34e8' }}>
                Email
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum ratione placeat sint distinctio
                quidem
              </Typography>
            </Box>
          </Stack>
        </m.div>
      </Grid>
      <Grid item md={7}>
        <Card sx={{ padding: '3rem' }}>
          <Typography variant="h6" sx={{paddingY:"10px"}}>Send Message</Typography>
          <m.div variants={varFade().inUp}>
            <TextField fullWidth label="Name" />
          </m.div>

          <m.div variants={varFade().inUp}>
            <TextField fullWidth label="Email" sx={{ marginTop: '20px' }} />
          </m.div>

          <m.div variants={varFade().inUp}>
            <TextField fullWidth label="Subject" sx={{ marginTop: '20px' }} />
          </m.div>

          <m.div variants={varFade().inUp}>
            <TextField fullWidth label="Enter your message here." multiline rows={4} sx={{ marginTop: '20px' }} />
          </m.div>
          <m.div variants={varFade().inUp}>
            <Button size="large" variant="contained" sx={{ marginTop: '20px' }}>
              Submit Now
            </Button>
          </m.div>
        </Card>
      </Grid>
    </Grid>
  );
}
