import React, { ReactElement } from 'react';

import { Alert } from '@mui/lab';
import { Snackbar } from '@mui/material';

import { useAppDispatch } from 'hooks';
import { setError } from 'store/actions';

type ErrorMessageType = {
  title: string;
};
export const ErrorMessage = ({ title }: ErrorMessageType): ReactElement => {
  const dispatch = useAppDispatch();

  const handleClose = (): void => {
    dispatch(setError(null));
  };

  return (
    <Snackbar
      autoHideDuration={5000}
      onClose={handleClose}
      open
      sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
    >
      <Alert sx={{ minWidth: '200px' }} severity="error">
        {title}
      </Alert>
    </Snackbar>
  );
};
