import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route} from "react-router-dom";
import Homepage from './pages/Home/HomePage';
import ContactPage from './pages/Contact/ContactPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Header/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
