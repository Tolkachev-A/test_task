import React, { ReactElement } from 'react';

import './style/header.scss';
import { Banner } from 'components/Banner';
import { Nav } from 'components/Nav';

export const Header = (): ReactElement => {
  return (
    <header>
      <Nav />
      <Banner />
    </header>
  );
};
