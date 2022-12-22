import React, { ReactElement } from 'react';

import { Box, CircularProgress } from '@mui/material';

import './style/preloader.scss';

export const Preloader = (): ReactElement => {
  return (
    <Box className="preloader-container">
      <CircularProgress color="secondary" />
    </Box>
  );
};
