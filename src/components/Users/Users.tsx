import React, { ReactElement, useMemo } from 'react';

import './style/users.scss';

import { Grid } from '@mui/material';

import { CustomButton, H1, User } from 'components/common';
import { useAppDispatch, useAppSelector } from 'hooks';
import {
  selectNextUrl,
  selectPage,
  selectUsers,
  selectUserStatusLoading,
} from 'store/selectors';
import { getNextUser } from 'store/thunks';

export const Users = (): ReactElement => {
  const dispatch = useAppDispatch();

  const users = useAppSelector(selectUsers);
  const page = useAppSelector(selectPage);
  const nextUrl = useAppSelector(selectNextUrl);
  const statusLoading = useAppSelector(selectUserStatusLoading);

  const usersList = useMemo(
    () =>
      users.map(user => (
        <User
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          photo={user.photo}
          position={user.position}
        />
      )),
    [users],
  );

  const isDisabled = statusLoading === 'loading' || nextUrl === null;

  const handelShowMoreClick = (): void => {
    dispatch(getNextUser(page + 1));
  };

  return (
    <div id="user" className="users-container">
      <H1 title="Working with GET request" />
      <div className="users">
        {/* eslint-disable-next-line no-magic-numbers */}
        <Grid container spacing={3.625} my={6.25} justifyContent="space-between">
          {usersList}
        </Grid>
      </div>
      <CustomButton
        disabled={isDisabled}
        onClick={handelShowMoreClick}
        width="120"
        title="Show more"
      />
    </div>
  );
};
