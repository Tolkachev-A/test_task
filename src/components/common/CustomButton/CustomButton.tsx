import React, { ReactElement } from 'react';

import { Button } from '@mui/material';

import './style/custom-button.scss';

type CustomButtonType = {
  title: string;
  width?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
};
export const CustomButton = ({
  title,
  type = 'button',
  width = '100',
  onClick,
  disabled,
}: CustomButtonType): ReactElement => {
  return (
    <Button
      style={{ width: `${width}px` }}
      type={type}
      className="btn"
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};
