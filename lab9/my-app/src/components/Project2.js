import React, { useState } from 'react';

export default function Project2() {
  const [message, setMessage] = useState('');
  const [style, setStyle] = useState({ backgroundColor: 'white', color: 'black' });
  const [image, setImage] = useState('');
  const [data, setData] = useState(null);

  // 1. handleClick
  const handleClick = () => {
    setMessage('Przycisk kliknięty!');
  };

  // 2. handleMouseOver
  const handleMouseOver = () => {
    setMessage('Najechałeś myszką!');
  };

  // 3. showImage
  const showImage = () => {
    setImage(`${process.env.PUBLIC_URL}/img/Obrazek.jpg`);
  };

  // 4. loadDataFromJson
  const loadDataFromJson = () => {
    const jsonData = { name: 'React', version: '18.2.0', features: ['Hooks', 'JSX'] };
    setData(jsonData);
  };

  // 5. uploadFile
  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMessage(`Załadowano plik: ${file.name}`);
    }
  };

  // 6. changeStyle
  const changeStyle = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: prevStyle.backgroundColor === 'white' ? 'lightblue' : 'white',
      color: prevStyle.color === 'black' ? 'darkblue' : 'black',
    }));
  };

  return (
    <div style={style}>
      <h2>Komponent interaktywny</h2>

      <button onClick={handleClick}>Kliknij mnie</button>
      <button onMouseOver={handleMouseOver}>Najedź myszką</button>
      <button onClick={showImage}>Pokaż obrazek</button>
      <button onClick={loadDataFromJson}>Załaduj dane JSON</button>
      <input type="file" onChange={uploadFile} />
      <button onClick={changeStyle}>Zmień styl</button>

      <div>
        <h3>Wiadomość: {message}</h3>
        {image && <img src={image} alt="Obrazek" />}
        {data && (
          <div>
            <h4>Dane JSON:</h4>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
