import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
