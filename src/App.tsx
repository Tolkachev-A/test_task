import React, { ReactElement } from 'react';

import 'App.scss';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Patch } from 'enums';
import { NotFound, Registered, Home } from 'pages';

const App = (): ReactElement => {
  return (
    <Container className="App">
      <Routes>
        <Route path={Patch.HOME} element={<Home />} />
        <Route path={Patch.SUCCESSFULLY_REGISTERED} element={<Registered />} />
        <Route path={Patch.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
