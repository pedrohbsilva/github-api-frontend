import React from 'react';
import AppProvider from './hooks';
import Routes from './routes/routes';
import GlobalStyle from './styles/global';
import dotenv from 'dotenv'

const App: React.FC = () => {
  dotenv.config()
  return (
    <AppProvider>
      <GlobalStyle />
      <Routes />
    </AppProvider>
  );
}

export default App;