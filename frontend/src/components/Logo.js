import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;
  // src\assets\logo.png

  // OR
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box style={{ width: 100, height: 60, display: "flex", alignItems: "center"}}>
      <img src="/assets/logo.png" alt="logo" sx={{ width: '100%', height: '100%' }} />
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>

        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            id="path12"
            style={{
              fill: '#cf0e2d',
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: 'none',
              writingMode: 'horizontal-tb',
            }}
            d="m 0.5,0.5 h 1364.999 v 418 H 0.5 Z"
          />
          <path
            id="path14"
            style={{
              fill: '#cf0e2d',
              fillOpacity: 1,
              fillRule: 'nonzero',
              stroke: 'none',
              writingMode: 'horizontal-tb',
            }}
            d="M 0,0 H 1366 V 419 H 0 Z M 1,418 H 1365 V 1 H 1 Z"
          />
          <g id="g16">
            <g clipPath="url(#clipPath22)" id="g18">
              <text
                id="text26"
                style={{
                  fontVariant: 'normal',
                  fontWeight: 600,
                  fontStretch: 'normal',
                  fontSize: 450.6690979,
                  fontFamily: 'Poppins-SemiBold',
                  inkscapeFontSpecification: 'Poppins-SemiBold',
                  writingMode: 'horizontal-tb',
                  fill: '#ffffff',
                  fillOpacity: 1,
                  fillRule: 'nonzero',
                  stroke: 'none',
                }}
                transform="matrix(0.97269859,0,0,-1,2.5137,36.2471)"
              >
                <tspan id="tspan24" y="0" x="0 305.55365 430.83966 556.12567 673.29962 978.85327 1104.1393">
                  bil bio
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg> */}
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
