import React, { ReactElement } from 'react';

import { Box } from '@mui/material';

import successImag from 'assets/svg/success-image.svg';
import { H1 } from 'components/common';

import './style/registered-container.scss';

export const SuccessfullyRegistered = (): ReactElement => {
  return (
    <Box className="registered-container">
      <H1 title="User successfully registered" />
      <img src={successImag} alt="success" />
    </Box>
  );
};
