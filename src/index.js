import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';

import { ThemeProvider }  from 'styled-components';
import GlobalStyle  from './styles/global';
import theme  from './styles/theme';
import { MenuContextProvider } from './context/openMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
