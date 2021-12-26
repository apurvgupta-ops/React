import React, { useState, useEffect } from "react";

const Hook = () => {
  const [count, setCount] = useState(0);
  const timer = () => {
    // setCount((ps) => ps + 1);
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(timer, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div>count-{count}</div>;
};

export default Hook;
