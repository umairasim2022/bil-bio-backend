import * as React from 'react';

// _____mui_____

import { Box, Button, Typography, Modal, Stack, styled, TextField, Select, InputLabel, MenuItem } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import HMobiledataIcon from '@mui/icons-material/HMobiledata';
import EmailIcon from '@mui/icons-material/Email';
import EuroSharpIcon from '@mui/icons-material/EuroSharp';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';

import { FaPaypal, FaSignature } from 'react-icons/fa';

import { useTheme } from '@emotion/react';
import { Email } from '@mui/icons-material';

const TikTokModalMain = styled('Stack')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: '85vh',
    overflowY:'scroll',
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

export default function BioSecPayPalModal({ BioSecPayPalModalState, closeBlockSubModal }) {
    const myHeadingList = [
        {
            label: 'Buy Now',
            value: 'Buy Now',
        },
        {
            label: 'Add To Cart',
            value: 'Add To Cart',
        },
        {
            label: 'Donation',
            value: 'Donation',
        },
    ];

    const [state, setState] = React.useState({
        heading: 'Buy Now',
        text: '',
        price: 0,
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
                open={BioSecPayPalModalState}
                onClose={() => closeBlockSubModal('BioSecPayPalModalState')}
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
                                onClick={() => closeBlockSubModal('BioSecPayPalModalState')}
                            />
                            <Typography ml={1} variant="h6" fontWeight="thin">
                                Add a PayPal payment button
                            </Typography>
                        </Box>
                        <CloseIcon onClick={() => closeBlockSubModal('BioSecPayPalModalState')} sx={{ cursor: 'pointer' }} />
                    </TiktokSubHeader>

                    <Box component="form">
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 5, mb: 1 }}>
                            <FaPaypal fontSize="small" fontWeight="bold" sx={{ color: 'primary.main', }} />
                            <Typography variant="body2" ml={1.5}>Type </Typography>
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
                                <MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>
                            ))}
                        </TextField>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <EmailIcon fontSize="small" sx={{ color: 'primary.main' }} />
                            <Typography variant="body2" ml={1}>
                                PayPal email{' '}
                            </Typography>
                        </Box>
                        <TextField

                            fullWidth
                            type="text"
                            size="small"
                            value={state.text}
                            onChange={handleChange}
                            name='text'
                        />


                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <HMobiledataIcon fontSize="medium" sx={{ color: 'primary.main' }} />
                            <Typography variant="body2" ml={1}>
                                Product Title{' '}
                            </Typography>
                        </Box>
                        <TextField

                            fullWidth
                            type="text"
                            size="small"
                            value={state.text}
                            onChange={handleChange}
                            name='text'
                        />

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <EuroSharpIcon fontSize="small" sx={{ color: 'primary.main' }} />
                            <Typography variant="body2" ml={1} placeholder="EUR">
                                Currency Code{' '}
                            </Typography>
                        </Box>
                        <TextField

                            fullWidth
                            type="text"
                            size="small"
                            value={state.text}
                            onChange={handleChange}
                            name='price'
                            placeholder='EUR'
                        />

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <AttachMoneyOutlinedIcon fontSize="small" sx={{ color: 'primary.main' }} />
                            <Typography variant="body2" ml={1} >
                                Price{' '}
                            </Typography>
                        </Box>
                        <TextField

                            fullWidth
                            type="number"
                            size="small"
                            value={state.text}
                            onChange={handleChange}
                            name='price'

                        />

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <FaSignature fontSize="small" sx={{ transform: 'rotate(-45deg)', color: 'primary.main' }} />
                            <Typography variant="body2" ml={1} >
                                Name{' '}
                            </Typography>
                        </Box>
                        <TextField

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
