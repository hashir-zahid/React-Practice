import React, { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const changeCount = useRef(0);
  const startTimeRef = useRef(null);

  const [text, setText] = useState('');
  const [typingTime, setTypingTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (text.length > 0) {
      if (!startTimeRef.current) {
        startTimeRef.current = Date.now();
      }

      interval = setInterval(() => {
        const seconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
        setTypingTime(seconds);
      }, 1000);
    } 
    else {
      clearInterval(interval);
      setTypingTime(0);
      startTimeRef.current = null;
    }

    return () => clearInterval(interval);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
    changeCount.current += 1;
  };

  return (
    <div className="app-container">
      <h1>TypoMeter</h1>

      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        className="inp"
      />

      <p><strong>Characters typed:</strong> {text.length}</p>
      <p><strong>Typing time:</strong> {typingTime} second(s)</p>
      <p><strong>Input changed:</strong> {changeCount.current} time(s)</p>
    </div>
  );
}

export default App;
