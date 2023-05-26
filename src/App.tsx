import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import MenuBar from './layout/MenuBar/MenuBar';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import { createMuiTheme, ThemeProvider } from '@mui/material/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: '"Roboto", "Noto Sans KR", sans-serif',

    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>

      <Router>
        <Header />
        <MenuBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

          <Footer />
      </Router>
      </ThemeProvider>
  );
}

export default App;
