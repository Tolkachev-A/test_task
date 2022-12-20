import React, { ReactElement } from 'react';

import { Button } from '@mui/material';

import './style/custom-button.scss';

type CustomButtonType = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
};
export const CustomButton = ({
  title,
  type = 'button',
}: CustomButtonType): ReactElement => {
  return (
    <Button type={type} className="btn" variant="contained" color="primary">
      {title}
    </Button>
  );
};
