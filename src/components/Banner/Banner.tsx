import React, { ReactElement } from 'react';

import './style/banner.scss';
import { Link } from 'react-scroll';

import { CustomButton, H1 } from 'components/common';

export const Banner = (): ReactElement => {
  return (
    <div className="banner-container">
      <div className="banner-container__fon ">
        <div className="banner-text">
          <H1 title="Test assignment for front-end developer" />
          <p>
            What defines a good front-end developer is one that has skilled knowledge of
            HTML, CSS, JS with a vast understanding of User design thinking as
            they&apos;ll be building web interfaces with accessibility in mind. They
            should also be excited to learn, as the world of Front-End Development keeps
            evolving.
          </p>
          <Link to="sign-up" smooth duration={500}>
            <CustomButton title="Sign up" />
          </Link>
        </div>
      </div>
    </div>
  );
};
