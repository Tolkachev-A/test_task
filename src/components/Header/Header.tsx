import React, { ReactElement } from 'react';

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
