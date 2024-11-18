import React from 'react';
import GalleryCorrect from './GalleryCorrect';
import GalleryIncorrect from './GalleryIncorrect';


export default function App() {
  return (
    <div>
      <h2>Nieprawidłowa wersja galerii</h2>
      <GalleryIncorrect />
      <hr />
      <h2>Prawidłowa wersja galerii</h2>
      <GalleryCorrect />
    </div>
  );
}
