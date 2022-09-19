import * as React from 'react';
import { m } from 'framer-motion';
import { NavLink } from 'react-router-dom';


// ________________mui__________
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


// ________________mui icon__________
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AnchorIcon from '@mui/icons-material/Anchor';

// ________components
import { varFade, MotionViewport } from '../../components/animate';

//   _______________style______________
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  p: 4,
};


export default function BioLinkModal({ bioModal,  closeModal}) {
  return (
    <Modal
      open={bioModal}
      onClose={()=>closeModal(bioModal)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack sx={style}>
        <Box sx={{ position: 'relative' }}>
          <Typography id="modal-modal-title" variant="h6" component="h3" disbaleGutter>
            Create biolink Page
          </Typography>
          <IconButton fontSize="small" sx={{ position: 'absolute', top: '-5px', right: '0px' }} onClick={()=>closeModal('bioModal')}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
        <Box sx={{ color: 'text.disabled', display: 'flex', alignItems: 'start', marginTop: '25px' }}>
          <AnchorIcon  fontSize='small'/>
          <Typography variant="span" component="p" ml={1} fontWeight="500">
            Biolink URL
          </Typography>
        </Box>
        <Stack direction="row" fontWeight="300" width="100%" sx={{ display: 'flex', marginTop: '10px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgb(255 255 255 / 12%)',
              width: '80%',
              padding: '5px',
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: '300', fontSize: '.8rem' }}>
              https://66biolinks.com/demo/
            </Typography>
          </Box>
          <TextField placeholder="your-custom-alias"  size="small" fullWidth fontSize=".8rem" />
        </Stack>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: '300', fontSize: '.8rem', color: 'text.disabled', paddingLeft: '5px', marginTop: '10px' }}
        >
          Leave empty for a random generated one.
        </Typography>

        <Box>
          <Button variant="contained" sx={{ display: 'block', width: '100%', margin: '30px auto', size: 'large' , boxShadow:'none' }} component={NavLink} to='/dashboard/links'>
            Create biolink page
          </Button>
        </Box>
      </Stack>
    </Modal>
  );
}
