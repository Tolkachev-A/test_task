import React, { ReactElement, useEffect } from 'react';

import { Container } from '@mui/material';

import { Header } from 'components/Header';
import { SignUp } from 'components/SignUp';
import { SuccessfullyRegistered } from 'components/SuccessfullyRegistered';
import { Users } from 'components/Users';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setSignUpStatusLoading } from 'store/actions';
import { selectSingUpStatusLoading } from 'store/selectors';

import 'App.scss';

const DELAY = 3000;

export const Home = (): ReactElement => {
  const dispatch = useAppDispatch();

  const statusLoading = useAppSelector(selectSingUpStatusLoading);

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>;

    if (statusLoading === 'succeeded') {
      id = setTimeout(() => {
        dispatch(setSignUpStatusLoading('idle'));
      }, DELAY);

      return () => {
        if (id) clearInterval(id);
      };
    }
  }, [statusLoading]);

  return (
    <Container className="app">
      <Header />
      <Users />
      {statusLoading === 'succeeded' ? <SuccessfullyRegistered /> : <SignUp />}
    </Container>
  );
};
