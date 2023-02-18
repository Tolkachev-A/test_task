import React from 'react';

import 'index.scss';
import { createTheme, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { store } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const theme = createTheme({
  palette: {
    primary: { main: '#F4E041' },
    secondary: { main: '#00BDD3' },
    success: { main: '#D0CFCF' },
  },
});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
);

reportWebVitals();
