import React, { ReactElement } from 'react';

import { Link } from 'react-scroll';

import logo from 'assets/img/Logo.webp';
import { CustomButton } from 'components/common';

import './style/nav.scss';

export const Nav = (): ReactElement => {
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="logo">
          <img width={104} height={26} src={logo} alt="logo" />
        </div>
        <div className="btn-block">
          <Link to="user" smooth duration={500}>
            <CustomButton title="Users" />
          </Link>
          <Link to="sign-up" smooth duration={500}>
            <CustomButton title="Sign up" />
          </Link>
        </div>
      </div>
    </div>
  );
};
