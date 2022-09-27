
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, Typography, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import { useSelector, useDispatch } from 'react-redux'
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import { registerUser, resetUser } from '../../../redux/slices/auth/authSlice'
import LoadingScreen from '../../../components/LoadingScreen';


// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { register } = useAuth();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required(' name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    name: '',
    email: '',
    password: '',
    tc: false
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
    console.log('@datatareg', data)
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      tc: data.tc

    }
    // try {
    await dispatch(registerUser(userData))
    // } catch (error) {
    //   console.error(error);
    //   reset();
    //   if (isMountedRef.current) {
    //     setError('afterSubmit', { ...error, message: error.message });
    //   }
    // }
  };
  // / handleError , success and routing for register page 

  const { isLoading, isError, isSuccess , user } = useSelector(state => state.user)
  console.log('iserror', isError, isSuccess)

  const { status, message } = useSelector(state => state?.user?.user)
  console.log('regstatus', status)



  // handling status of the register user  on the basis of api status
  useEffect(() => {
    // when req rejected ,  here error is true , status is always  neither failed nor success  but undefined 
    if (isError) {
        toast.error(message)
        navigate('/auth/register')

    }
    // when reg fullfilled  , it maybe status success or failed  , 
    // like status is success for user newly registered and status failed  for incomplete failed or already registere user
    if (isSuccess || user ) {
      if (status === 'success')
      {
        toast.success(message, {
          toastId: 'success1',
          
        })   // message is api response  with either api response failed or success 
         navigate('/dashboard')
        
      }
    }
      if (isSuccess) {
        if (status === 'failed')
        toast.error(message, {
          toastId: 'error1',
          
        })   // message is api response  with either api response failed or success
        navigate('/auth/register')

    }
    
      console.log('myvalues#', isError, isSuccess)
      dispatch(resetUser())

  }, [isError, isSuccess, status])
  
  // _________________loader a scrolbar moving________________
  if (isLoading) {
    return <LoadingScreen />
  }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="name" label="name" />
        </Stack>
        <RHFTextField name="email" label="Email address" />
        <RHFTextField
          name="password"
          label="Password"
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

        <Stack direction="row" diplay="flex" alignItems="flex-start">
          <RHFCheckbox name='tc' />

          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
            I confirm that I have read and understood the Terms and Conditions and Privacy Policy of the site.
          </Typography>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
