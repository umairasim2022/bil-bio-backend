import * as React from 'react';

// ______mui______

import { Box, Button, Typography, Modal, Stack, styled, TextField, Select, InputLabel, MenuItem } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import HMobiledataIcon from '@mui/icons-material/HMobiledata';

import { FaSignature } from 'react-icons/fa';

import { useTheme } from '@emotion/react';

const TikTokModalMain = styled('Stack')(({ theme }) => ({
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  background: theme.palette.background.paper,
  boxShadow: 24,
  borderRadius: '5px',
  padding: '3rem',
}));
const TiktokSubHeader = styled('Stack')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export default function BioLinkHeadingModal({ bioLinkHeadingModalState, closeBlockSubModal }) {
  const myHeadingList = [
    {
      label: 'H1',
      value: 'H1',
    },
    {
      label: 'H2',
      value: 'H2',
    },
    {
      label: 'H3',
      value: 'H3',
    },
    {
      label: 'H4',
      value: 'H4',
    },
    {
      label: 'H5',
      value: 'H5',
    },
    {
      label: 'H6',
      value: 'H6',
    },
  ];
  const [state, setState] = React.useState({
    heading: 'H1',
    text: ''
  });
  console.log('stateeee', state)
  // handling heading Select
  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // handling heading Select
  const handleText = (event) => {
    setState((prevState) => ({
      ...prevState,
      text: event.target.value,
    }));
  };
  const theme = useTheme();
  return (
    <div>
      <Modal
        open={bioLinkHeadingModalState}
        onClose={() => closeBlockSubModal('bioLinkHeadingModalState')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TikTokModalMain>
          <TiktokSubHeader>
            <Box sx={{ display: 'flex', alignItems: 'start', p: '0 12px' }}>
              <KeyboardArrowLeftOutlinedIcon
                fontSize="small"
                sx={{
                  background: theme.palette.background.neutral,
                  color: 'primary.main',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                onClick={() => closeBlockSubModal('bioLinkHeadingModalState')}
              />
              <Typography ml={1} variant="h6" fontWeight="thin">
                Add a Heading
              </Typography>
            </Box>
            <CloseIcon onClick={() => closeBlockSubModal('bioLinkHeadingModalState')} sx={{ cursor: 'pointer' }} />
          </TiktokSubHeader>

          <Box component="form">
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 5, mb: 1 }}>
              <HMobiledataIcon fontSize="large" fontWeight="bold" sx={{ color: 'primary.main' }} />
              <Typography variant="body2">Type </Typography>
            </Box>
            <TextField
              label="Heading"
              fullWidth
              size="small"
              onChange={handleChange}
              value={state.heading}
              select
              name='heading'
            // SelectProps={{
            //   renderValue: (value) => value,
            // }}
            >
              {myHeadingList.map((item) => (
                <MenuItem value={item.value}>{item.label}</MenuItem>
              ))}
            </TextField>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
              <FaSignature fontSize="small" sx={{ transform: 'rotate(-45deg)', color: 'primary.main' }} />
              <Typography variant="body2" ml={1}>
                Name{' '}
              </Typography>
            </Box>
            <TextField
              label="text"
              fullWidth
              type="text"
              size="small"
              value={state.text}
              onChange={handleChange}
              name='text'
            />
            <Button variant="contained" sx={{ display: 'block', width: '100%', mt: 3 }}>
              Submit
            </Button>
          </Box>
        </TikTokModalMain>
      </Modal>
    </div>
  );
}
