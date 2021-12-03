import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState('');
  useEffect(() => {
    (async () => {
      const response = await fetch('https://rslfilho-dia-28-1-back.herokuapp.com/');
      setText(response.data.text);
    })()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {
            text
          }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
