import React, { ReactElement, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Preloader } from 'components/common';
import { ErrorMessage } from 'components/common/ErrorMessage';
import { Patch } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Home, NotFound } from 'pages';
import {
  selectCount,
  selectError,
  selectIsInitializedApp,
  selectPage,
} from 'store/selectors';
import { getInitializedApp } from 'store/thunks';

const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  const isInitializedApp = useAppSelector(selectIsInitializedApp);
  const page = useAppSelector(selectPage);
  const count = useAppSelector(selectCount);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(getInitializedApp({ page, count }));
  }, []);

  if (isInitializedApp === null) {
    return <Preloader />;
  }
  if (!isInitializedApp && error) {
    return <ErrorMessage title={error} />;
  }

  return (
    <>
      <Routes>
        <Route path={Patch.HOME} element={<Home />} />
        <Route path={Patch.NOT_FOUND} element={<NotFound />} />
      </Routes>
      {error && <ErrorMessage title={error} />}
    </>
  );
};

export default App;
