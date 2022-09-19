import React , {useEffect} from 'react';
// @mui
import { styled } from '@mui/material/styles';
import {
  Button,
  Box,
  Link,
  Container,
  Typography,
  Stack,
  Grid,
  TextField,
  Paper,
  InputLabel,
  FormControl,
} from '@mui/material';

const ContentStyle = styled(Paper)({
  height: '50vh',
  overflowY: 'scroll',
  padding: '3rem',
  paddingTop: '1rem',



});

const formStyle ={
    display: 'flex',
    rowGap: '20px',
    flexDirection: 'column',
}
const FilterPopup = ({setState , closeModal}) => {



  
  return (
    <ContentStyle  id='someElementID' >
      <FormControl sx={formStyle}>
        <Typography variant="h5">Filter</Typography>
        {/* <InputLabel id="demo-search">Search</InputLabel> */}
        <TextField   fullWidth type="search" size="small"  label='search'/>
        <TextField  id="outlined-required" fullWidth size="small" select label='search by'/>
        <TextField  id="outlined-required" fullWidth size="small" select  label='status' />
        <TextField  id="outlined-required" fullWidth size="small" select  label='Project' />
        <TextField  id="outlined-required" fullWidth size="small" select  label='Type' />
        <TextField  id="outlined-required" fullWidth size="small" select  label='Order Type' />
        <TextField  id="outlined-required" fullWidth size="small" select  label='Result per page' />
        <Box >
            <Button variant='contained' size='small' sx ={{display:'block' ,  width:'100%' , boxShadow:'none'}}>Submit</Button>
        </Box>





      </FormControl>
    </ContentStyle>
  );
};

export default FilterPopup;
