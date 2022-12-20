import React, { ReactElement } from 'react';

import logo from 'assets/svg/logo.svg';
import { CustomButton } from 'components/common/CustomButton';

import './style/nav.scss';

export const Nav = (): ReactElement => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>TESTTASK</span>
        </div>
        <div className="btn-block">
          <CustomButton title="Users" />
          <CustomButton title="Sign up" />
        </div>
      </div>
    </div>
  );
};
