import React, { ReactElement } from 'react';

import { H1 } from 'components/common/H1';
import { User } from 'components/common/User';

export const Users = (): ReactElement => {
  return (
    <div>
      <H1 title="Working with GET request" />
      <User />
    </div>
  );
};
