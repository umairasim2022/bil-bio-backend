//  react 
import { useEffect } from 'react';
import { toast } from 'react-toastify'

import { Link as RouterLink } from 'react-router-dom';
// redux 
import { useSelector } from 'react-redux'
// @mui
import { styled } from '@mui/material/styles';
import { Button, Container, Typography, Box } from '@mui/material';
// layouts
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
// sections
import { ResetPasswordForm } from '../../sections/auth/reset-password';



// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ResetPassword() {
  const { isError, isSuccess, isLoading, user, errorMsg } = useSelector(state => state?.user)
  console.log('resetmsg', isSuccess)

  const { status, message } = useSelector(state => state?.user?.user)
  console.log('resetmsg', status)
  const responseOk = (isSuccess === true && status === 'success')

  useEffect(() => {
    if (isError) {
      toast.error(errorMsg)
    }
    // handlink response 
    if (responseOk) {
      toast.success(message, {
        toastId: 'success2',
      })
    }

    // handling failed status 
    if (isSuccess) {
      if (status === 'failed') {
        toast.error(message, {
          toastId: 'success2',
        })
      }
    }

  }, [isError, isSuccess, status])

  return (
    <Page title="Reset Password" >
      <LogoOnlyLayout />
      <Container>
        <ContentStyle sx={{ textAlign: 'center' }}>
          <Typography variant="h3" paragraph>
            {/* Forgot your password? */}
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 5 }}>
            Please enter the email address associated with your account and We will email you a link to reset your
            password.
          </Typography>

          <ResetPasswordForm />

          <Button fullWidth size="large" component={RouterLink} to={PATH_AUTH.login} sx={{ mt: 1 }}>
            Back
          </Button>
        </ContentStyle>
      </Container>
    </Page>
  );
}
