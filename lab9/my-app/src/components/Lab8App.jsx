import React from 'react';
import GalleryCorrect from './GalleryCorrect';
import GalleryIncorrect from './GalleryIncorrect';
import Project2 from './Project2';

function Lab8App() {
  return (
    <div>
      <h1>Lab 8</h1>

      <section>
        <h2>Nieprawidłowa wersja galerii</h2>
        <GalleryIncorrect />
      </section>

      <hr />

      <section>
        <h2>Prawidłowa wersja galerii</h2>
        <GalleryCorrect />
      </section>

      <hr />

      <section>
        <h2>Komponent interaktywny</h2>
        <Project2 />
      </section>
    </div>
  );
}

export default Lab8App;
