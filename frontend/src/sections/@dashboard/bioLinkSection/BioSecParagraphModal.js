import * as React from 'react';

// ______mui______

import { Box, Button, Typography, Modal, Stack, styled, TextField, TextareaAutosize } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';




import {  FaSignature } from 'react-icons/fa';

import { useTheme } from '@emotion/react';

const PargraphModalMain = styled('Stack')(({ theme }) => ({
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
const ParagraphSubHeader = styled('Stack')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export default function BioSecParagraphModal({ BioSecParagraphModalState, closeBlockSubModal }) {
  const theme = useTheme();
  return (
    <div>
      <Modal
        open={BioSecParagraphModalState}
        onClose={() => closeBlockSubModal('BioSecParagraphModalState')}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <PargraphModalMain>
          <ParagraphSubHeader>
            <Box sx={{ display: 'flex', alignItems: 'start',  p:'0 12px' }}>
              <KeyboardArrowLeftOutlinedIcon
                fontSize="small"
                sx={{
                  background: theme.palette.background.neutral,
                  color: 'primary.main',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                onClick={() => closeBlockSubModal('BioSecParagraphModalState')}
              />
              <Typography ml={1} variant="h6" fontWeight="thin">
                Add a Paragraph
              </Typography>
            </Box>
            <CloseIcon onClick={() => closeBlockSubModal('BioSecParagraphModalState')} sx={{ cursor: 'pointer' }} />
          </ParagraphSubHeader>

          <Box component="form">
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 5, mb: 1 }}>
              <FormatTextdirectionRToLIcon fontSize="small" sx={{  color: 'primary.main' }} />
              <Typography variant="body2" ml={1}>
                Text{' '}
              </Typography>
            </Box>
            <Box>
            <TextareaAutosize      rows={10}
                     fullWidth sx ={{width:'300px' , display:'block'}} />
            </Box>
           
            <Button variant="contained" sx={{ display: 'block', width: '100%', mt: 3 }}>
              Submit
            </Button>
          </Box>
        </PargraphModalMain>
      </Modal>
    </div>
  );
}
