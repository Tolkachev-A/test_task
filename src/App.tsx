import React, { ReactElement, useEffect } from 'react';

import 'App.scss';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Preloader } from 'components/common';
import { Patch } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Home, NotFound, Registered } from 'pages';
import { selectCount, selectIsInitializedApp, selectPage } from 'store/selectors';
import { getUsers } from 'store/thunks';
import { getUsersPositions } from 'store/thunks/signUpThinks';

const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  const isInitializedApp = useAppSelector(selectIsInitializedApp);
  const page = useAppSelector(selectPage);
  const count = useAppSelector(selectCount);

  useEffect(() => {
    dispatch(getUsersPositions());
    dispatch(getUsers({ page, count }));
  }, []);
  // eslint-disable-next-line no-debugger
  debugger;
  if (!isInitializedApp) {
    return <Preloader />;
  }

  return (
    <Container className="app">
      <Routes>
        <Route path={Patch.HOME} element={<Home />} />
        <Route path={Patch.SUCCESSFULLY_REGISTERED} element={<Registered />} />
        <Route path={Patch.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
