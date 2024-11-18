import React, { useState } from 'react';
import { sculptureList } from './data.js';

export default function GalleryCorrect() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
  }

  let sculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handleClick}>Następny</button>
      <h3>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h3>
      <p>{sculpture.description}</p>
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}
