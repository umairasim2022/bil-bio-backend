import * as React from 'react';

// ______mui______

import { Box, Button, Typography, Modal, Stack, styled, TextField, MenuItem } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import { useTheme } from '@emotion/react';

// ________style________
const EmailModalMain = styled('Stack')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: '85vh',
    overflow: 'scroll',
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
const sizeArray = [
    {
        label: 'small',
        value: 'small',

    },
    {
        label: 'medium',
        value: 'medium',
    },
    {
        label: 'large',
        value: 'large',
    },
    {
        label: 'extra large',
        value: 'extra large',
    },

]
export default function BioSecSocialsModal({ BioSecSocialsModalState, closeBlockSubModal }) {
    const [state, setState] = React.useState({
        colorState: '',
        sizeState: '',
        emailState: '',
        phoneState: ''


    })
    console.log('sizestate', state.colorState)
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
                open={BioSecSocialsModalState}
                onClose={() => closeBlockSubModal('BioSecSocialsModalState')}
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
                                onClick={() => closeBlockSubModal('BioSecSocialsModalState')}
                            />
                            <Typography ml={1} variant="h6" fontWeight="thin">
                                Add social links
                            </Typography>

                        </Box>

                        <CloseIcon onClick={() => closeBlockSubModal('BioSecSocialsModalState')} sx={{ cursor: 'pointer' }} />
                    </EmailSubHeader>


                    <Box component="form">
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            {/* brush color  */}
                            <BrushIcon fontSize="small" sx={{ color: 'primary.main' }} />
                            <Typography variant="body2" ml={1}>
                                Color{' '}
                            </Typography>
                        </Box>
                        <TextField fullWidth type="color" size="small" name='colorState' value={state.colorState} onChange={handleChange} />


                        {/* image size  */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <FullscreenIcon fontSize="small" sx={{ color: 'primary.main' }} />
                            <Typography variant="body2" ml={1}>
                                Size{' '}
                            </Typography>
                        </Box>
                        <TextField fullWidth select size="small" name='sizeState' value={state.sizeState} onChange={handleChange}>
                            {sizeArray.map((item) => (
                                <MenuItem value={item.value}>{item.label}</MenuItem>
                            ))}
                        </TextField>

                        {/* email  */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <EmailIcon fontSize="small" sx={{ color: 'primary.main' }} />
                            <Typography variant="body2" ml={1}>
                                email{' '}
                            </Typography>
                        </Box>
                        <TextField fullWidth type='email' label='email' size="small" placeholder='email@defaul.com' name='emailState' value={state.emailState} onChange={handleChange} />
                        {/* tele */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <PhoneIcon fontSize="small" sx={{ color: 'primary.main' }} />
                            <Typography variant="body2" ml={1}>
                                Telephone{' '}
                            </Typography>
                        </Box>
                        <TextField fullWidth type='phone' label='Telephone' size="small" placeholder='+0000000' name='phoneState' value={state.phoneState} onChange={handleChange} />

                        {/* telegram */}
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <PhoneIcon fontSize="small" sx={{ color: 'primary.main' }} />
                            <Typography variant="body2" ml={1}>
                                Telegram{' '}
                            </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',
                        }}>
                            <Box sx={{
                                background: 'rgb(255 255 255 / 12%)', padding: '5px', width: '80%',

                            }}>
                                https://t.me/
                            </Box>
                            <TextField fullWidth type='text' label='telegram' size="small" placeholder='telegram' name='phoneState' value={state.phoneState} onChange={handleChange} />
                        </Box>
                        <Button variant="contained" sx={{ display: 'block', width: '100%', mt: 3 }}>
                            Submit
                        </Button>
                    </Box>
                </EmailModalMain>
            </Modal>
        </div>
    );
}
