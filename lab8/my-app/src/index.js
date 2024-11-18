import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Project2 from './Project2';

// Renderowanie Projektu 1
const root1 = ReactDOM.createRoot(document.getElementById('react-gallery'));
root1.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Renderowanie Projektu 2
const root2 = ReactDOM.createRoot(document.getElementById('react-project2'));
root2.render(
  <React.StrictMode>
    <Project2 />
  </React.StrictMode>
);
