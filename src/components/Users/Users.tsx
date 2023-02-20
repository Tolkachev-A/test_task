import React, { ReactElement, useMemo } from 'react';

import './style/users.scss';

import { Grid, useMediaQuery, useTheme } from '@mui/material';

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
  const theme = useTheme();
  // eslint-disable-next-line no-magic-numbers
  let spacing = 3.625;
  // eslint-disable-next-line no-magic-numbers
  let mb = 6.25;

  if (useMediaQuery(theme.breakpoints.down('md'))) {
    // eslint-disable-next-line no-magic-numbers
    spacing = 2;
    // eslint-disable-next-line no-magic-numbers
    mb = 4.25;
  }

  return (
    <div id="user" className="users-container">
      <H1 title="Working with GET request" />
      <div className="users">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          spacing={spacing}
          mb={mb}
          mt={2.625}
        >
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
