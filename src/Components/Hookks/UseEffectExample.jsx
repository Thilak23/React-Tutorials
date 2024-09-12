import React, { useState, useEffect } from 'react';

const UseEffectExample = () => {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('times');
      setSeconds((inc) => inc + 1);
    }, 1000);

    return () => clearInterval(interval);
  },[]);

  const reset = () => {
    setSeconds(0);
  }

  return (
    <div style={{marginTop : '50px'}}>
      <h1>Timer: {seconds}</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default UseEffectExample;
