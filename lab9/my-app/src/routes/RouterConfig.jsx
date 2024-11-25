import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Lab7App from '../components/Lab7App';
import Lab8App from '../components/Lab8App';
import AboutMe from '../components/AboutMe';
import Interests from '../components/Interests';
import FavoriteFilm from '../components/FavoriteFilm';
import ContactForm from '../components/ContactForm';

const RouterConfig = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">O mnie</Link></li>
          <li><Link to="/lab7">Lab 7</Link></li>
          <li><Link to="/lab8">Lab 8</Link></li>
          <li><Link to="/interests">Moje zainteresowania</Link></li>
          <li><Link to="/favorite-film">Ulubiony film</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/lab7" element={<Lab7App />} />
        <Route path="/lab8" element={<Lab8App />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/favorite-film" element={<FavoriteFilm />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
