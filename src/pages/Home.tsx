import React, { ReactElement } from 'react';

import { Header } from 'components/Header';
import { SignUp } from 'components/SignUp';
import { Users } from 'components/Users';

export const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <Users />
      <SignUp />
    </>
  );
};
