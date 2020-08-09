import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
