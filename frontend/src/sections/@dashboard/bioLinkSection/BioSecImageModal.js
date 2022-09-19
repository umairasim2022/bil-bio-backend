import * as React from 'react';

// ______mui______

import { Box, Button, Typography, Modal, Stack, styled, TextField, MenuItem } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CloseIcon from '@mui/icons-material/Close';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import SmsIcon from '@mui/icons-material/Sms';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import LinkIcon from '@mui/icons-material/Link';
import { FaSignature } from 'react-icons/fa';
import { useTheme } from '@emotion/react';


// ________styled_____

const ImageModalMain = styled('Stack')(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    background: theme.palette.background.paper,
    boxShadow: 24,
    borderRadius: '5px',
    padding: '3rem',
}));
const ImageSubHeader = styled('Stack')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export default function BioSecImageModal({ bioSecImageModalState, closeBlockSubModal }) {
    const [state, setState] = React.useState({
        altText: '',
        urlState: '',

    });
    console.log('imge@state', state)

    //   handle the Filed In Image Modal
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
                open={bioSecImageModalState}
                onClose={() => closeBlockSubModal('bioSecImageModalState')}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ImageModalMain>
                    <ImageSubHeader>
                        <Box sx={{ display: 'flex', alignItems: 'start', p: '0 12px' }}>
                            <KeyboardArrowLeftOutlinedIcon
                                fontSize="small"
                                sx={{
                                    background: theme.palette.background.neutral,
                                    color: 'primary.main',
                                    borderRadius: '50%',
                                    cursor: 'pointer',
                                }}
                                onClick={() => closeBlockSubModal('bioSecImageModalState')}
                            />
                            <Typography ml={1} variant="h6" fontWeight="thin">
                                Add an Image
                            </Typography>
                        </Box>
                        <CloseIcon onClick={() => closeBlockSubModal('bioSecImageModalState')} sx={{ cursor: 'pointer' }} />
                    </ImageSubHeader>

                    <Box component="form">
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 5, mb: 1 }}>
                            <InsertPhotoIcon fontSize="small" sx={{ color: 'primary.main' }} />
                            <Typography variant="body2" ml={1}>
                                Image{' '}
                            </Typography>
                        </Box>
                        <Box>
                            <TextField type="file" fullWidth />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <SmsIcon fontSize="small" sx={{ color: 'primary.main' }} />
                            <Typography variant="body2" ml={1}>
                                 Image alt{' '}
                            </Typography>
                        </Box>
                        <Box>
                            <TextField
                                name="altText"
                                value={state.altText}
                                fullWidth
                                size="small"
                                onChange={handleChange}
                            />

                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, mb: 1 }}>
                            <LinkIcon fontSize="small" sx={{ color: 'primary.main', transform: 'rotate(-45deg)' }} />
                            <Typography variant="body2" ml={1}>
                                Desitination Url{' '}
                            </Typography>
                        </Box>
                        <Box>
                            <TextField name='urlState' value={state.urlState} fullWidth size="small" onChange={handleChange} />

                        </Box>

                        <Button variant="contained" sx={{ display: 'block', width: '100%', mt: 3 }}>
                            Submit
                        </Button>
                    </Box>
                </ImageModalMain>
            </Modal>
        </div>
    );
}
