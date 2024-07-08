import React from 'react';
import { Logo } from 'components';
import { Stack } from '@mui/material';

const Splash = () => {
  return (
    <Stack height="100vh" justifyContent="center" alignItems="center">
      <Logo width={200} height={200} />
    </Stack>
  );
};

export default Splash;
