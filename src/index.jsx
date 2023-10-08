import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Home from './pages/Home/';
import Logement from './pages/Logement';
import Error from './pages/Error';
import APropos from './pages/APropos';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/css/styles.css';





ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement" >
          <Route path=":currentId" element={<Logement />} />
        </Route>
        <Route path="/APropos" element={<APropos/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

