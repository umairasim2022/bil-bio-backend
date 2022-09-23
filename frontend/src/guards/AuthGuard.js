import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// hooks
import { useSelector } from 'react-redux'
// pages
import Login from '../pages/auth/Login';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

export default function AuthGuard({ children }) {
  const userReg = localStorage.getItem('userReg')

  console.log('userauth', userReg)

  const { pathname } = useLocation();

  const [requestedLocation, setRequestedLocation] = useState(null);
  const { isLoading, isError, isSuccess, user } = useSelector(state => state.user)
  if (isLoading) {
    return <LoadingScreen/>
 }

  if (!(JSON.parse(localStorage.getItem('user')))) {
    return <Navigate to='/auth/login'/>;
  }

  // if (userReg) {
  
  //   return < />;
  // }
  

  if (requestedLocation && pathname !== requestedLocation) {
    alert('req location')
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
