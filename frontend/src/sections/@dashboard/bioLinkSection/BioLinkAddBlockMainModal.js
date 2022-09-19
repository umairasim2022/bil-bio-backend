import * as React from 'react';
import { useState } from 'react';

// mui
// components
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  Stack,
  styled,
  Avatar,
  alpha,
  MenuItem,
  Divider,
  Switch,
  Link,
  Menu,
  Fade,
  IconButton,
  Tooltip,
  Backdrop,
  Modal,
  FormControl,
  TextField,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import CloudIcon from '@mui/icons-material/Cloud';
import WifiIcon from '@mui/icons-material/Wifi';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HMobiledataIcon from '@mui/icons-material/HMobiledata';
import { useTheme } from '@emotion/react';
import { FaVimeo, FaTiktok, FaPaypal, FaPhone, FaSignature } from 'react-icons/fa';
import AddlinkModal from './AddlinkModal';

// ______react component _____

import TiktokModal from './TiktokModal';
import BioSecLinkModal from './BioSecLinkModal';
import BioLinkHeadingModal from './BioLinkHeadingModal';
import BioSecParagraphModal from './BioSecParagraphModal';
import BioSecAvatarModal from './BioSecAvatarModal';
import BioSecImageModal from './BioSecImageModal';
import BioSecEmailCollectorModal from './BioSecEmailCollectorModal';
import BioSecSoundCloudModal from './BioSecSoundCloudModal';
import BioSecSpotifySongModal from './BioSecSpotifySongModal';
import BioSecYouTubeModal from './BioSecondYoutubeModal';
import BioSecTwitchModal from './BioSecTwitchModal';
import BioSecVimeoModal from './BioSecVimeo Modal';
import BioSecPhoneModal from './BioSecPhoneModal';
import BioSecSocialsModal from './BioSecSocialsModal';
import BioSecPayPalModal from './BioSecPayPalModal';




//  styled
const ModalMainContent = styled('Stack')(({ theme }) => ({
  position: 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  boderRadius: '.3rem',
  p: 4,

  //   background: theme.palette.background.paper,
  // [theme.breakpoints.down('md')]: {
  //   padding: theme.spacing(15, 5),
  // },
}));

const ModalHeader = styled('Stack')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
// const ModalButtonSection = styled('Stack')(({ theme }) => ({
//   background:'red',
// }));

const ModalContainer = styled('Stack')(({ theme }) => ({
  marginTop: '10px',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  background: theme.palette.background.neutral,
  '&:hover': {
    background: theme.palette.background.default,
  },
  padding: '10px ',
}));

//  _________styless_______

const modalMian = {
  overflowY: 'scroll',
  height: '70vh',
  paddingRight: '4px',
};

const style = {
  position: 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%, -10%)',
  width: 450,
  height: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  // boderRadius:'30px',
  p: 4,
};

const ModalText = {
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '10px',
};

const BioLinkAddBlockMainModal = ({ bioLinkAddBlockMainModalState, closeModal }) => {
  const theme = useTheme();

  const [state, setState] = useState({
    tiktokModalState: false,
    linkModalState: false,
    bioLinkHeadingModalState: false,
    BioSecParagraphModalState: false,
    BioSecAvatarModalState: false,
    bioSecImageModalState: false,
    bioSecEmailCollectorModalState: false,
    BioSecSoundCloudModalState: false,
    BioSecSpotifySongModalState: false,
    BioSecYouTubeModalState: false,
    BioSecTwitchModalState: false,
    BioSecVimeoModalState: false,
    BioSecPhoneModalState: false,
    BioSecSocialsModalState: false,
    BioSecPayPalModalState: false,


  });

  const openModal = (data) => {
    closeModal(bioLinkAddBlockMainModalState);
    setState({
      [data]: true,
    });
  };
  const closeBlockSubModal = data => {
    setState({
      [data]: false,
    })
  }
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={bioLinkAddBlockMainModalState}
        onClose={() => closeModal(bioLinkAddBlockMainModalState)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={bioLinkAddBlockMainModalState}>
          {/* top */}

          <ModalMainContent sx={style}>
            <ModalHeader>
              <Typography variant="h6">Add a new Block</Typography>
              <CloseRoundedIcon onClick={() => closeModal(bioLinkAddBlockMainModalState)} />
            </ModalHeader>
            <Box marginY={2}>
              <TextField fullWidth type="search" size="small" label="search" />
            </Box>

            {/* list */}

            <Stack sx={modalMian}>
              <ModalContainer>
                <Typography sx={ModalText} onClick={() => openModal('linkModalState')}>
                  <LinkIcon sx={{ transform: 'rotate(-45deg)' }} /> Link
                </Typography>
              </ModalContainer>
              <ModalContainer onClick={() => openModal('bioLinkHeadingModalState')}>
                <Typography sx={ModalText}>
                  <HMobiledataIcon fontSize='large' /> Heading
                </Typography>
              </ModalContainer>
              <ModalContainer>
                <Typography sx={ModalText} onClick={() => openModal('BioSecParagraphModalState')}>
                  <FormatTextdirectionRToLIcon /> Paragraph
                </Typography>
              </ModalContainer>
              <ModalContainer>
                <Typography sx={ModalText} onClick={() => openModal('BioSecAvatarModalState')}>
                  <PersonIcon /> Avatar
                </Typography>
              </ModalContainer>
              <ModalContainer onClick={() => openModal('bioSecImageModalState')}>
                <Typography sx={ModalText}>
                  <InsertPhotoIcon /> Image
                </Typography>
              </ModalContainer>
              <ModalContainer onClick={() => openModal('BioSecSocialsModalState')}>
                <Typography sx={ModalText}>
                  <GroupsIcon /> Socials
                </Typography>
              </ModalContainer>
              <ModalContainer onClick={() => openModal('bioSecEmailCollectorModalState')}>
                <Typography sx={ModalText}>
                  <GroupsIcon /> Email Collector
                </Typography>
              </ModalContainer>
              <ModalContainer onClick={() => openModal('BioSecSoundCloudModalState')}>
                <Typography sx={ModalText}>
                  <CloudIcon />
                  Sound Cloud
                </Typography>
              </ModalContainer>
              <ModalContainer onClick={() => openModal('BioSecSpotifySongModalState')}>
                <Typography sx={ModalText}>
                  <WifiIcon />
                  Spotify
                </Typography>
              </ModalContainer>
              <ModalContainer onClick={() => openModal('BioSecYouTubeModalState')}>
                <Typography sx={ModalText}>
                  <YouTubeIcon />
                  YouTube
                </Typography>
              </ModalContainer>
              <ModalContainer>
                <Typography sx={ModalText} onClick={() => openModal('BioSecTwitchModalState')}>
                  <WifiIcon />
                  Twitch
                </Typography>
              </ModalContainer>
              <ModalContainer onClick={() => openModal('BioSecVimeoModalState')}>
                <Typography sx={ModalText}>
                  <FaVimeo />
                  Vimeo
                </Typography>
              </ModalContainer>
              <ModalContainer onClick={() => openModal('tiktokModalState')}>
                <Typography sx={ModalText}>
                  <FaTiktok />
                  TikTok
                </Typography>
              </ModalContainer>
              <ModalContainer onClick={() => openModal('BioSecPayPalModalState')}>
                <Typography sx={ModalText}>
                  <FaPaypal />
                  PayPal
                </Typography>
              </ModalContainer>
              <ModalContainer onClick={() => openModal('BioSecPhoneModalState')}>
                <Typography sx={ModalText}>
                  <FaPhone />
                  Phone Collector
                </Typography>
              </ModalContainer>
            </Stack>
          </ModalMainContent>
        </Fade>
      </Modal>
      <TiktokModal tiktokModalState={state.tiktokModalState} closeBlockSubModal={closeBlockSubModal} />

      <BioSecLinkModal linkModalState={state.linkModalState} closeBlockSubModal={closeBlockSubModal} />

      <BioLinkHeadingModal bioLinkHeadingModalState={state.bioLinkHeadingModalState} closeBlockSubModal={closeBlockSubModal} />

      <BioSecParagraphModal BioSecParagraphModalState={state.BioSecParagraphModalState} closeBlockSubModal={closeBlockSubModal} />

      <BioSecAvatarModal BioSecAvatarModalState={state.BioSecAvatarModalState} closeBlockSubModal={closeBlockSubModal} />

      <BioSecImageModal bioSecImageModalState={state.bioSecImageModalState} closeBlockSubModal={closeBlockSubModal} />

      <BioSecEmailCollectorModal bioSecEmailCollectorModalState={state.bioSecEmailCollectorModalState} closeBlockSubModal={closeBlockSubModal} />
      <BioSecSoundCloudModal BioSecSoundCloudModalState={state.BioSecSoundCloudModalState} closeBlockSubModal={closeBlockSubModal} />
      <BioSecSpotifySongModal BioSecSpotifySongModalState={state.BioSecSpotifySongModalState} closeBlockSubModal={closeBlockSubModal} />
      <BioSecYouTubeModal BioSecYouTubeModalState={state.BioSecYouTubeModalState} closeBlockSubModal={closeBlockSubModal} />
      <BioSecTwitchModal BioSecTwitchModalState={state.BioSecTwitchModalState} closeBlockSubModal={closeBlockSubModal} />
      <BioSecVimeoModal BioSecVimeoModalState={state.BioSecVimeoModalState} closeBlockSubModal={closeBlockSubModal} />
      <BioSecPhoneModal BioSecPhoneModalState={state.BioSecPhoneModalState} closeBlockSubModal={closeBlockSubModal} />
      <BioSecSocialsModal BioSecSocialsModalState={state.BioSecSocialsModalState} closeBlockSubModal={closeBlockSubModal} />
      <BioSecPayPalModal BioSecPayPalModalState={state.BioSecPayPalModalState} closeBlockSubModal={closeBlockSubModal} />
















      <AddlinkModal />
    </>
  );
};

export default BioLinkAddBlockMainModal;
