import * as React from 'react';

// ______mui______

import { Box, Button, Typography, Modal, Stack, styled, TextField } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { FaSignature } from 'react-icons/fa';

import { useTheme } from '@emotion/react';

const EmailModalMain = styled('Stack')(({ theme }) => ({
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
const EmailSubHeader = styled('Stack')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export default function BioSecPhoneModal({ BioSecPhoneModalState, closeBlockSubModal }) {
    const [state, setState] = React.useState({
        nameTextState: ''
    })
    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const theme = useTheme();
    return (
        <div>
            <Modal
                open={BioSecPhoneModalState}
                onClose={() => closeBlockSubModal('BioSecPhoneModalState')}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <EmailModalMain>
                    <EmailSubHeader>
                        <Box sx={{ display: 'flex', alignItems: 'start', p: '0 12px' }}>
                            <KeyboardArrowLeftOutlinedIcon
                                fontSize="small"
                                sx={{
                                    background: theme.palette.background.neutral,
                                    color: 'primary.main',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                }}
                                onClick={() => closeBlockSubModal('BioSecPhoneModalState')}
                            />
                            <Typography ml={1} variant="h6" fontWeight="thin">
                                Add a phone collector form
                            </Typography>

                        </Box>

                        <CloseIcon onClick={() => closeBlockSubModal('BioSecPhoneModalState')} sx={{ cursor: 'pointer' }} />
                    </EmailSubHeader>
                    <Typography variant="body1" sx={{ mt: 2, color: 'text.disabled' }}>
                        Capture phone numbers with ease.

                    </Typography>

                    <Box component="form">

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <FaSignature fontSize="small" sx={{ transform: 'rotate(-45deg)', color: 'primary.main' }} />
                            <Typography variant="body2" ml={1}>
                                Name{' '}
                            </Typography>
                        </Box>
                        <TextField label="link" fullWidth type="text" size="small" name='nameTextState' value={state.nameTextState} onChange={handleChange} />
                        <Button variant="contained" sx={{ display: 'block', width: '100%', mt: 3 }}>
                            Submit
                        </Button>
                    </Box>
                </EmailModalMain>
            </Modal>
        </div>
    );
}
