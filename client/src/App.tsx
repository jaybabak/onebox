import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Home/HomePage';
import ContactPage from './pages/Contact/ContactPage';
import { Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
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
