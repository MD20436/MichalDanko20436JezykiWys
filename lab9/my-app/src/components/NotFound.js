import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Strona nie znaleziona</h1>
      <p>Przepraszamy, ale strona, której szukasz, nie istnieje.</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue' }}>
        Wróć na stronę główną
      </Link>
    </div>
  );
};

export default NotFound;
