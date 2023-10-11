import React from 'react';
import { Container } from '@material-ui/core';
import {Navigate} from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import {Routes,Route} from 'react-router-dom';
import Auth from './components/Auth/Auth';



const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
 
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={!user ? <Auth /> : <Navigate to="/" />} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
};

export default App;
