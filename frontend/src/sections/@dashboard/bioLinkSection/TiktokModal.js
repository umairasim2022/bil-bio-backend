import * as React from 'react';

// ______mui______

import { Box, Button, Typography, Modal, Stack, styled, TextField } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { useTheme } from '@emotion/react';
import { mt } from 'date-fns/locale';


const TikTokModalMain = styled('Stack')(({ theme }) => ({
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  background: theme.palette.background.paper ,
  boxShadow: 24,
  borderRadius: '5px',
  padding:'3rem',

}));
const TiktokSubHeader = styled('Stack')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export default function TikTok({ tiktokModalState, closeBlockSubModal }) {
  const theme = useTheme();
  return (
    <div>
      <Modal
        open={tiktokModalState}
        onClose={() => closeBlockSubModal('tiktokModalState')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TikTokModalMain >
          <TiktokSubHeader>
            <Box sx={{ display: 'flex', alignItems: 'start' }}>
              <KeyboardArrowLeftOutlinedIcon
                fontSize="small"
                sx={{ background: theme.palette.background.neutral, color: 'primary.main', borderRadius: '50%' , cursor:'pointer' }}
                onClick={() => closeBlockSubModal('tiktokModalState')}
              />
              <Typography ml={1}>Add a TikTok video</Typography>
            </Box>
            <CloseIcon onClick={() => closeBlockSubModal('tiktokModalState')} sx ={{ cursor:'pointer'}} />
          </TiktokSubHeader>
          <Typography variant="body1" sx={{ mt: 2, color: 'text.disabled' }}>
            Paste in your TikTok Video URL and we will show it as a video on your profile.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginY: '1rem' }}>
            <LinkIcon fontSize="small" sx={{ transform: 'rotate(-45deg)', color: 'primary.main' }} />
            <Typography variant="body2" ml={1}>
              TikTok Video URL
            </Typography>
          </Box>
          <Box component="form">
            <TextField label="link" fullWidth type="text" size="small" />
            <Button variant="contained" sx={{ display: 'block', width: '100%', mt: 3 }}>
              Submit
            </Button>
          </Box>
        </TikTokModalMain>
      </Modal>
    </div>
  );
}
