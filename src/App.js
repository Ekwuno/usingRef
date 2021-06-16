import React, { useRef, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const timerID = useRef(0);
  const [count, setcount] = useState(0);

  const startHandler = () => {
    if (timerID.current) {
      return;
    }
    timerID.current = setInterval(() => setcount((c) => c + 1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerID.current);
    timerID.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerID.current);
  }, []);
  return (
    <div className="App">
      <h1>Timer: {count}s</h1>
      <button onClick={startHandler}> Start</button>
      <button onClick={stopHandler}> Stop</button>
      <h2>Edit to see some magic happen!</h2>
    </div>
  );
}
