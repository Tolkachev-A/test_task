import { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import './style/not-found.scss';
import { Patch } from 'enums';

export const NotFound = (): ReactElement => {
  return (
    <div className="main-box-container">
      <div className="main-box">
        <div className="err">4</div>
        <div className="far">
          <i className="far fa-question-circle fa-spin" />
        </div>
        <div className="err2">4</div>
      </div>

      <div className="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in
        the first place?
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Let's go <NavLink to={Patch.HOME}>home</NavLink> and try from there.
        </p>
      </div>
    </div>
  );
};
