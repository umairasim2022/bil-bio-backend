import * as Yup from 'yup';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, Checkbox, Box, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import  {RHFUploadAvatar}  from '../../../components/hook-form/RHFUpload'
// ----------------------------------------------------------------------

export default function RegisterForm() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);
  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      console.log(file);
    }
  };
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    console.log('dataa@' , data)
    try {
      await register(data.email, data.password, data.firstName, data.lastName);
    } catch (error) {
      console.error('registererror' , error.message);
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

 
  const [password, setPassword] = useState('');
  const [tc, setTc] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const handleChange = (e) => { 
   // console.log(e.target.checked);
    setTc(e.target.checked); 
    
  }; 

    
    const Register = async (e) => {
        e.preventDefault();
        console.log(tc);
        try {
          await axios.post('/api/user/register', {
            name,
            email,
            password,
            tc
        });
        navigate('/dashboard');
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
        }
        }
    }

  return (
    <FormProvider methods={methods} onSubmit={Register} sx={{ padding: 10 }}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <RHFUploadAvatar name='profilePic' onChange={handleImageUpload} label="Upload Profile Picture"/>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
          {/* <RHFTextField name="lastName" label="Last name" /> */}
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <RHFTextField name="email" label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Stack>
        <RHFTextField
          name="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <ReCAPTCHA sitekey="Your client site key" /> */}

        <Stack direction="row" diplay="flex"  alignItems="flex-start">
          <Checkbox size="small" name="tc"  onChange={(e) => handleChange(e)}  />
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            I confirm that I have read and understood the Terms and Conditions and Privacy Policy of the site.
          </Typography>
        </Stack>
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{ boxShadow: 'none' }}
        >
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
