
import * as Yup from 'yup';
import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify'

// redux 
import { useSelector, useDispatch } from 'react-redux'



import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH } from '../../../routes/paths';
// hooks

import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import { loginUser, resetUser } from '../../../redux/slices/auth/authSlice'
import LoadingScreen from '../../../components/LoadingScreen';



// ----------------------------------------------------------------------

export default function LoginForm() {

  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { login } = useAuth();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const submitHandler = (data) => {
    const userData = {
      email: data.email,
      password: data.password
    }
    dispatch(loginUser(userData))
    reset();
  };

  // handle Api response and status on the basis of status
  const { isError, isSuccess, isLoading, user } = useSelector(state => state?.user)
  const myuserrr = useSelector(state => state?.user)

  console.log('userrrrr', myuserrr)

  // status from api  
  const { status, message } = useSelector(state => state?.user?.user)
  console.log('login_status', status)
  const userReg = localStorage.getItem('userReg')


  useEffect(() => {
    if (isError) {
      alert('loginerror')
      toast.error(message)
      navigate('/auth/login')

    }

    if (isSuccess) {
      if (status === 'success') {
        if (JSON.parse(localStorage.getItem('user'))) {
          toast.success(message, {
            toastId: 'success1',
          })
          navigate('/dashboard')
        }

      }
    }
    if (isSuccess || !user) {
      if (status === 'failed') {
        toast.error(message, {
          toastId: 'error1',

        })   // message is api response  with either api response status is failed
        navigate('/auth/login')

      }
    }
    console.log('myvalues#', isError, isSuccess)
    dispatch(resetUser())
    console.log('myvalues#', isError, isSuccess)
  }, [isError, isSuccess, status, navigate])

  if (isLoading) {
    return <LoadingScreen />
  }


  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(submitHandler)}  >
      <Stack spacing={3}>
        {/* {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>} */}

        <RHFTextField name="email" label="Email address" />
        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me" />
        <Link component={RouterLink} variant="subtitle2" to={PATH_AUTH.resetPassword}>
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type={"submit"} variant="contained" loading={isSubmitting} sx={{ boxShadow: "none" }}>
        Login
      </LoadingButton>
    </FormProvider>
  );
}
