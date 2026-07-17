import { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (isRunning === false) {
      return;
    }

    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [isRunning]);

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h1>タイマー</h1>
      <p>{count}秒</p>
      <button onClick={stopTimer}>ストップ</button>
    </div>
  );
};

export default Timer;