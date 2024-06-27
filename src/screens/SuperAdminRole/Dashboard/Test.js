import { Helmet } from 'react-helmet-async';
import { Stack, styled, CardMedia, Typography } from '@mui/material';

// ----------------------------------------------------------------------

const StyledBox = styled(Typography)(({ theme, color = 'info' }) => ({
  color: 'transparent',
  marginTop: 8,
  marginBottom: 24,
  lineHeight: 1,
  fontWeight: 900,
  letterSpacing: 1,
  textAlign: 'center',
  fontSize: '6rem',
  fontFamily: 'Barlow, sans-serif',
  background:
    'linear-gradient(300deg, rgb(0, 167, 111) 0%, rgb(255, 171, 0) 25%, rgb(0, 167, 111) 50%, rgb(255, 171, 0) 75%, rgb(0, 167, 111) 100%) 0% 0% / 400% text',
  padding: 0,
  animation: 'ripple 40s infinite ease',
  '@keyframes ripple': {
    '0%': {
      backgroundPosition: '10% center',
    },
    '25%': {
      backgroundPosition: '100% center',
    },
    '50%': {
      backgroundPosition: '190% center',
    },
    '75%': {
      backgroundPosition: '100% center',
    },
    '100%': {
      backgroundPosition: '10% center',
    },
  },
}));

const CardBox = styled(CardMedia)(({ theme }) => ({
  width: 300,
  height: 1200,
  position: 'absolute',
  animation: 'trans 40s infinite normal',
  '@keyframes trans': {
    '0%': {
      transform: 'translateY(0%) translateZ(0px)',
    },
    '50%': {
      transform: 'translateY(80%) translateZ(0px)',
    },
    '100%': {
      transform: 'translateY(0%) translateZ(0px)',
    },
  },
}));
const CardBox2 = styled(CardMedia)(({ theme }) => ({
  width: 300,
  height: 1200,
  position: 'absolute',
  animation: 'trans2 40s infinite normal',
  '@keyframes trans2': {
    '0%': {
      transform: 'translateY(-100%) translateZ(0px)',
    },
    '50%': {
      transform: 'translateY(-20%) translateZ(0px)',
    },
    '100%': {
      transform: 'translateY(-100%) translateZ(0px)',
    },
  },
}));

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>
      <StyledBox>Dordent</StyledBox>
      <Stack width="30%" position="relative">
        <Stack height="150%" position="absolute">
          <CardBox alt="01" image="/assets/images/light01.webp" />
          <CardBox2 alt="02" image="/assets/images/light01.webp" />
        </Stack>
      </Stack>
    </>
  );
}
