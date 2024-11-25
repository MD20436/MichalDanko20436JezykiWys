import React, { useState, useReducer, useEffect, createContext, useContext, useRef } from 'react';
import Message from './Message'; 

const ThemeContext = createContext();

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Licznik: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Zwiększ licznik</button>
    </div>
  );
}

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Koszyk: {state.count} przedmiotów</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Dodaj</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Usuń</button>
    </div>
  );
}

function TitleUpdater() {
  const [text, setText] = useState('');

  useEffect(() => {
    document.title = `Wpisano: ${text}`;
  }, [text]);

  return (
    <div>
      <input
        type="text"
        placeholder="Wpisz coś..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

function ThemeDisplay() {
  const theme = useContext(ThemeContext);
  return <p>Aktualny temat: {theme}</p>;
}

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" placeholder="Kliknij przycisk, aby ustawić focus" />
      <button onClick={onButtonClick}>Ustaw focus</button>
    </div>
  );
}

function Lab7App() {
  return (
    <ThemeContext.Provider value="ciemny">
      <section id="projekt1">
        <div className="container">
          <div className="jumbotron">
            <h1>Lab 7</h1>
            <Message text="Witaj w aplikacji Lab 7!" />
            <h2>Przykłady użycia hooków w React</h2>
            <Counter />
            <Cart />
            <TitleUpdater />
            <ThemeDisplay />
            <TextInputWithFocusButton />
          </div>
        </div>
      </section>
    </ThemeContext.Provider>
  );
}

export default Lab7App;
