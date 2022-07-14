import React from 'react';
import { useMediaQuery, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route} from "react-router-dom";
import Homepage from './pages/Home/HomePage';
import ContactPage from './pages/Contact/ContactPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { LightTheme, DarkTheme } from './styles/theme'
import './App.css';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // @todo
  // Use reacts useReduce hook to create a global state variables which is controlled
  // in the "Header" component to target light/dark modes.
  const theme = createTheme(prefersDarkMode ? DarkTheme : LightTheme);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
