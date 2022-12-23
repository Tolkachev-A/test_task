import React, { ReactElement, useEffect } from 'react';

import 'App.scss';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Preloader } from 'components/common';
import { Patch } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Home, NotFound, Registered } from 'pages';
import { selectCount, selectIsInitializedApp, selectPage } from 'store/selectors';
import { getInitializedApp } from 'store/thunks';

const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  const isInitializedApp = useAppSelector(selectIsInitializedApp);
  const page = useAppSelector(selectPage);
  const count = useAppSelector(selectCount);

  useEffect(() => {
    dispatch(getInitializedApp({ page, count }));
  }, []);

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
