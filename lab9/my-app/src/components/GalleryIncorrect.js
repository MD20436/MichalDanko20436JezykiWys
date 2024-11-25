import { sculptureList } from './data.js';

export default function GalleryIncorrect() {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  let sculpture = sculptureList[index % sculptureList.length];

  return (
    <div>
      <button onClick={handleClick}>Następny</button>
      <h3>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h3>
      <p>{sculpture.description}</p>
      <img src={`${process.env.PUBLIC_URL}${sculpture.url}`} alt={sculpture.alt} />
    </div>
  );
}
