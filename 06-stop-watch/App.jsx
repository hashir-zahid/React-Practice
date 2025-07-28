import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const interval = useRef(null);

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } 
    else {
      clearInterval(interval.current);
    }

    return () => clearInterval(interval.current);
    
  }, [isRunning]);

  const format = (num) => (num < 10 ? '0' + num : num);

  const formatTime = () => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${format(hrs)}:${format(mins)}:${format(secs)}`;
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="box">
      <h1>{formatTime()}</h1>
      <button className='start' onClick={() => setIsRunning(true)}>Start</button>
      <button className='stop' onClick={() => setIsRunning(false)}>Stop</button>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
