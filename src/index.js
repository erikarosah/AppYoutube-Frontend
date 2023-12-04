import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider }  from 'styled-components';
import GlobalStyle  from './styles/global';
import theme  from './styles/theme';
import { MenuContextProvider } from './context/openMenu';
import { Routes } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <MenuContextProvider>
        <Routes />
      </MenuContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
