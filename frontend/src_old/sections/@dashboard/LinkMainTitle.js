import React, { useEffect } from 'react';

// icons
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CircleIcon from '@mui/icons-material/Circle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
//  mui
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
} from '@mui/material';

// modals
import BioLinkModal from './BioLinkModal';
import LinkModal from './LinkModal';
import ShortenedModal from './ShortenedModal';
import VCardLinkModal from './VCardLinkModal';
import FilterPopup from './FilterPopup';

//  ________________styles_________________

const styleBox = {
  position: 'relative',
  zIndex: '10000',
};
const style = {
  position: 'absolute',
  top: '20px',
  right: '-50px',
  width: 300,
  // willChange: 'transform , opacity',
};

const RootStyle = styled('div')(({ theme }) => ({
 
  padding: theme.spacing(0, 10),
  width: '100%',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(15, 5),
  },
}));

const LinkMainTitle = () => {
  // opening list in create button link
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl2(null);
  };

  // ______export link section _________

  const [state, setState] = React.useState({
    bioLinkModalState: false,
    linkModalState: false,
    cardModalState: false,
    shortenedModalState: false,
    // LinksFilterModalState: false,
  });

  const [linksFilterModalState, setLinksFilterModalState] = React.useState(false);

  const openModal = (data) => {
    setState({
      [data]: true,
    });
  };

  const closeModal = (data) => {
    setState({
      [data]: false,
    });
  };
  const closeModalFilter = (data) => {
    setLinksFilterModalState(false);
  };
  useEffect(() => {
    const mainModalContainer = document.getElementById('modalContainerID');
    document.addEventListener('click', (event) => {
      event.preventDefault();
      const isModalClicked = mainModalContainer.contains(event.target);
      if (!isModalClicked) {
        closeModalFilter('linksFilterModalState');
      }
    });
  }, []);

  return (
    <RootStyle>
      <Container>
        <Grid container  
        sx ={{ alignItems:'center'}}
>
          <Grid item xs={12} md={8}>
            <Typography variant="h5">Links</Typography>
          </Grid>
          <Grid item md={4}>
            <Stack direction="row" spacing={2} display="flex" justifyContent="end" alignItems="center">
              <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="contained"
                sx={{boxShadow:'none'}}
              >
                <AddCircleIcon />
                &nbsp; Create Link
              </Button>
              <Menu
                sx={{
                  '& .MuiSvgIcon-root': {
                    m: '0 6px',
                    fontSize: 'medium',
                  },
                }}
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem
                  onClick={(e) => {
                    handleClose();
                    openModal('bioLinkModalState');
                  }}
                >
                  {' '}
                  <CircleIcon sx={{ color: 'blue' }} /> Biolink Page
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    openModal('shortenedModalState');
                  }}
                >
                  {' '}
                  <CircleIcon sx={{ color: '#41aaa5' }} /> Shortened Url
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    openModal('linkModalState');
                  }}
                >
                  {' '}
                  <CircleIcon sx={{ color: 'grey' }} /> File Link
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    openModal('cardModalState');
                  }}
                >
                  {' '}
                  <CircleIcon sx={{ color: 'yellow' }} /> VCard Link
                </MenuItem>
              </Menu>

              <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={(e) => setAnchorEl2(e.currentTarget)}
              >
                <FileDownloadIcon />{' '}
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={() => setAnchorEl2(null)}
              >
                <MenuItem onClick={handleClose}>
                  {' '}
                  <InsertDriveFileIcon  /> Export to CSV
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  {' '}
                  <InsertDriveFileIcon /> Export to JSON
                </MenuItem>
              </Menu>

              <Box
                id="modalContainerID"
                sx={styleBox}
                onClick={() => {
                  setLinksFilterModalState(true);
                }}
              >
                <IconButton>
                  <FilterAltIcon />
                </IconButton>
                <Box sx={style}>
                  {linksFilterModalState ? (
                    <FilterPopup
                      LinksFilterModalState={state.LinksFilterModalState}
                      setState={setState}
                      closeModal={closeModal}
                    />
                  ) : (
                    ''
                  )}
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <LinkModal closeModal={closeModal} linkModal={state.linkModalState} />
      <ShortenedModal closeModal={closeModal} ShortenedModal={state.shortenedModalState} />
      <BioLinkModal bioModal={state.bioLinkModalState} closeModal={closeModal} />
      <VCardLinkModal closeModal={closeModal} cardModal={state.cardModalState} />
    </RootStyle>
  );
};

export default LinkMainTitle;
